import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact a Tutor in Edgware, Barnet & Finchley',
  description:
    "Book a free consultation for Maths, English, SEN and exam tutoring in Edgware, Barnet, Finchley, Mill Hill, Hampstead, Watford, Radlett and surrounding North West London and Hertfordshire areas.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact a Tutor in Edgware, Barnet & Finchley | Rosalind's Tuition",
    description:
      'Get in touch to discuss your child’s learning needs and arrange personalised tutoring support across North West London, Hertfordshire and online.',
    url: 'https://rosalindstuition.com/contact',
    images: ['/rosalind_portrait1.webp'],
  },
  twitter: {
    title: "Contact a Tutor in Edgware, Barnet & Finchley | Rosalind's Tuition",
    description:
      'Start with a free consultation to plan the right tutoring support for your child in North West London, Hertfordshire or online.',
    images: ['/rosalind_portrait1.webp'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
