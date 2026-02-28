import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Rosalind',
  description:
    "Book a free consultation for Maths, English, SEN and exam tutoring. Serving North West London, Hertfordshire and online students across the UK and internationally.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact Rosalind's Tuition",
    description:
      'Get in touch to discuss your child’s learning needs and arrange personalised tutoring support.',
    url: 'https://rosalindstuition.com/contact',
    images: ['/rosalind_portrait1.webp'],
  },
  twitter: {
    title: "Contact Rosalind's Tuition",
    description:
      'Start with a free consultation to plan the right tutoring support for your child.',
    images: ['/rosalind_portrait1.webp'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
