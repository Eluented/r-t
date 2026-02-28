import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'English Tuition in North West London',
  description:
    'One-to-one English tutoring for KS1-3, including reading, writing, phonics, grammar, SATs and entrance exam preparation with specialist SEN support.',
  alternates: {
    canonical: '/english',
  },
  openGraph: {
    title: "English Tuition | Rosalind's Tuition",
    description:
      'Expert English tutoring with tailored support for dyslexia, SEN, EAL and exam preparation across North West London and online.',
    url: 'https://rosalindstuition.com/english',
    images: ['/rosalind_teaching2.webp'],
  },
  twitter: {
    title: "English Tuition | Rosalind's Tuition",
    description:
      'Personalised English tutoring for confidence, progress and exam success.',
    images: ['/rosalind_teaching2.webp'],
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
