import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maths Tutor in Edgware, Barnet & Finchley',
  description:
    'Specialist one-to-one Maths tutoring for KS1-3 in Edgware, Barnet, Finchley, Mill Hill, Stanmore, Watford and nearby Hertfordshire areas, including dyscalculia support, maths anxiety support, SATs and entrance exam preparation.',
  alternates: {
    canonical: '/maths',
  },
  openGraph: {
    title: "Maths Tutor in Edgware, Barnet & Finchley | Rosalind's Tuition",
    description:
      'Personalised Maths tutoring that builds confidence, understanding and measurable progress for children across Edgware, Barnet, Finchley, Hertfordshire and nearby North West London areas.',
    url: 'https://rosalindstuition.com/maths',
    images: ['/rosalind_teaching5.webp'],
  },
  twitter: {
    title: "Maths Tutor in Edgware, Barnet & Finchley | Rosalind's Tuition",
    description:
      'Expert Maths support for confidence, concept mastery and exam preparation across North West London and Hertfordshire.',
    images: ['/rosalind_teaching5.webp'],
  },
};

export default function MathsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
