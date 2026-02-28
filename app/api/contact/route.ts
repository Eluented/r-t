import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export const runtime = 'nodejs';

type RateLimitEntry = {
  count: number;
  firstRequestAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const TO_EMAIL = 'eluented@gmail.com';

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

function buildEmailHtml(payload: {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  subjects: 'maths' | 'english' | 'both';
  message: string;
  submittedAt: string;
}) {
  const safe = {
    parentName: escapeHtml(payload.parentName),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone),
    childAge: escapeHtml(payload.childAge),
    subjects: escapeHtml(subjectLabel(payload.subjects)),
    message: escapeHtml(payload.message || 'No additional message provided.'),
    submittedAt: escapeHtml(payload.submittedAt)
  };

  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>New Tutoring Enquiry</title>
  </head>
  <body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#111827;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
            <tr>
              <td style="background:linear-gradient(90deg,#059669 0%,#2563eb 100%);padding:28px 24px;">
                <h1 style="margin:0;font-size:24px;line-height:1.3;color:#ffffff;font-weight:700;">New Enquiry Received</h1>
                <p style="margin:8px 0 0;color:#d1fae5;font-size:14px;">Rosalind's Tuition Contact Form</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#374151;">
                  A parent or guardian has submitted a new enquiry. Details are below.
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                  <tr>
                    <td style="padding:12px 14px;font-size:13px;font-weight:700;color:#065f46;width:36%;border-bottom:1px solid #e5e7eb;">Parent/Guardian</td>
                    <td style="padding:12px 14px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">${safe.parentName}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 14px;font-size:13px;font-weight:700;color:#065f46;width:36%;border-bottom:1px solid #e5e7eb;">Email</td>
                    <td style="padding:12px 14px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">${safe.email}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 14px;font-size:13px;font-weight:700;color:#065f46;width:36%;border-bottom:1px solid #e5e7eb;">Phone</td>
                    <td style="padding:12px 14px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">${safe.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 14px;font-size:13px;font-weight:700;color:#065f46;width:36%;border-bottom:1px solid #e5e7eb;">Child Age/Year</td>
                    <td style="padding:12px 14px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">${safe.childAge}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 14px;font-size:13px;font-weight:700;color:#065f46;width:36%;">Subjects</td>
                    <td style="padding:12px 14px;font-size:14px;color:#111827;">${safe.subjects}</td>
                  </tr>
                </table>

                <div style="margin-top:18px;padding:16px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;">
                  <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#166534;">Message / Concerns</p>
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#1f2937;white-space:pre-wrap;">${safe.message}</p>
                </div>

                <p style="margin:18px 0 0;font-size:12px;color:#6b7280;">Submitted: ${safe.submittedAt}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
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

    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP environment variables are not fully configured.');
      return NextResponse.json(
        { error: 'Email service is currently unavailable. Please call directly.' },
        { status: 503 }
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT);
    if (!Number.isInteger(smtpPort) || smtpPort <= 0) {
      console.error('SMTP_PORT must be a valid positive integer.');
      return NextResponse.json(
        { error: 'Email service is currently unavailable. Please call directly.' },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const submittedAt = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const html = buildEmailHtml({ ...cleaned, submittedAt });
    const text = buildTextBody({ ...cleaned, submittedAt });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `Rosalind Tuition <${process.env.SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: cleaned.email,
      subject: `New Tutoring Enquiry: ${cleaned.parentName}`,
      text,
      html
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json(
      { error: 'Unable to send your enquiry right now. Please try again later.' },
      { status: 500 }
    );
  }
}
