import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEN Advocacy in North West London & Hertfordshire',
  description:
    'Parent advocacy support for EHCPs, SEND tribunal preparation, school communication and SEN rights guidance for families in Edgware, Barnet, Finchley, Harrow, Watford and surrounding North West London and Hertfordshire areas.',
  alternates: {
    canonical: '/advocacy',
  },
  openGraph: {
    title: "SEN Advocacy in North West London & Hertfordshire | Rosalind's Tuition",
    description:
      'Support for EHCP navigation, tribunal preparation and confident advocacy for your child’s educational needs across North West London, Hertfordshire and online.',
    url: 'https://rosalindstuition.com/advocacy',
    images: ['/rosalind_teaching4.webp'],
  },
  twitter: {
    title: "SEN Advocacy in North West London & Hertfordshire | Rosalind's Tuition",
    description:
      'Specialist SEN advocacy support to help families navigate EHCPs and SEND processes across North West London and Hertfordshire.',
    images: ['/rosalind_teaching4.webp'],
  },
};

export default function AdvocacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
