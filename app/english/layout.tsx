import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'English Tutor in Edgware, Barnet & Finchley',
  description:
    'One-to-one English tutoring for KS1-3 in Edgware, Barnet, Finchley, Hampstead, Mill Hill and nearby Hertfordshire areas, including reading, writing, phonics, grammar, SATs and entrance exam preparation with specialist SEN support.',
  alternates: {
    canonical: '/english',
  },
  openGraph: {
    title: "English Tutor in Edgware, Barnet & Finchley | Rosalind's Tuition",
    description:
      'Expert English tutoring with tailored support for dyslexia, SEN, EAL and exam preparation across Edgware, Barnet, Finchley, Hertfordshire and nearby North West London areas.',
    url: 'https://rosalindstuition.com/english',
    images: ['/rosalind_teaching2.webp'],
  },
  twitter: {
    title: "English Tutor in Edgware, Barnet & Finchley | Rosalind's Tuition",
    description:
      'Personalised English tutoring for confidence, progress and exam success across North West London and Hertfordshire.',
    images: ['/rosalind_teaching2.webp'],
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
