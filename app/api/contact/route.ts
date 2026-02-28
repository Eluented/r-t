import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';

type RateLimitEntry = {
  count: number;
  firstRequestAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL?.trim() || 'onurbelek11@gmail.com';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const contactSchema = z.object({
  parentName: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(30)
    .regex(/^[+()\-\s\d]+$/),
  childAge: z.string().trim().min(2).max(40),
  subjects: z.enum(['maths', 'english', 'both']),
  message: z.string().trim().max(2000).optional().default(''),
  website: z.string().trim().max(0).optional().default('')
});

function cleanText(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim();
}

function subjectLabel(value: 'maths' | 'english' | 'both') {
  if (value === 'maths') return 'Maths Only';
  if (value === 'english') return 'English Only';
  return 'Both Maths & English';
}

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry) {
    rateLimitStore.set(key, { count: 1, firstRequestAt: now });
    return false;
  }

  if (now - entry.firstRequestAt > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(key, { count: 1, firstRequestAt: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  rateLimitStore.set(key, entry);
  return false;
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  const ip = forwardedFor.split(',')[0]?.trim() || 'unknown';
  return `${ip}:${userAgent}`;
}

function buildTextBody(payload: {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  subjects: 'maths' | 'english' | 'both';
  message: string;
  submittedAt: string;
}) {
  return [
    'New Rosalind\'s Tuition enquiry',
    '',
    `Parent/Guardian: ${payload.parentName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Child Age/Year: ${payload.childAge}`,
    `Subjects: ${subjectLabel(payload.subjects)}`,
    `Submitted: ${payload.submittedAt}`,
    '',
    'Message:',
    payload.message || 'No additional message provided.'
  ].join('\n');
}

export async function POST(request: Request) {
  try {
    const clientKey = getClientKey(request);

    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again shortly.' },
        { status: 429 }
      );
    }

    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 });
    }

    const rawBody = await request.json();
    const parsed = contactSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Please check your form fields.' }, { status: 400 });
    }

    const cleaned = {
      parentName: cleanText(parsed.data.parentName),
      email: cleanText(parsed.data.email).toLowerCase(),
      phone: cleanText(parsed.data.phone),
      childAge: cleanText(parsed.data.childAge),
      subjects: parsed.data.subjects,
      message: cleanText(parsed.data.message),
      website: parsed.data.website
    };

    if (cleaned.website) {
      return NextResponse.json({ success: true });
    }

    if (!process.env.WEB3FORMS_ACCESS_KEY) {
      console.error('WEB3FORMS_ACCESS_KEY is missing.');
      return NextResponse.json(
        { error: 'Email service is currently unavailable. Please call directly.' },
        { status: 503 }
      );
    }

    const submittedAt = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const text = buildTextBody({ ...cleaned, submittedAt });

    const web3FormsPayload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      from_name: "Rosalind's Tuition",
      subject: `New Tutoring Enquiry: ${cleaned.parentName}`,
      email: cleaned.email,
      message: text,
      replyto: cleaned.email,
      botcheck: '',
      to: TO_EMAIL,
      recipient: TO_EMAIL
    };

    const web3Response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(web3FormsPayload),
    });

    const web3Result = await web3Response.json().catch(() => null) as { success?: boolean; message?: string } | null;

    if (!web3Response.ok || !web3Result?.success) {
      console.error('Web3Forms submission failed:', web3Result);
      return NextResponse.json(
        { error: 'Unable to send your enquiry right now. Please try again later.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json(
      { error: 'Unable to send your enquiry right now. Please try again later.' },
      { status: 500 }
    );
  }
}
