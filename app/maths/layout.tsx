import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maths Tuition in North West London',
  description:
    'Specialist one-to-one Maths tutoring for KS1-3, SATs, entrance exams and Functional Skills, including dyscalculia and maths anxiety support.',
  alternates: {
    canonical: '/maths',
  },
  openGraph: {
    title: "Maths Tuition | Rosalind's Tuition",
    description:
      'Personalised Maths tuition that builds confidence, understanding and measurable progress for children across North West London and online.',
    url: 'https://rosalindstuition.com/maths',
    images: ['/rosalind_teaching5.webp'],
  },
  twitter: {
    title: "Maths Tuition | Rosalind's Tuition",
    description:
      'Expert Maths support for confidence, concept mastery and exam preparation.',
    images: ['/rosalind_teaching5.webp'],
  },
};

export default function MathsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
