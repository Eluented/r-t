import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parent Advocacy Support',
  description:
    'Parent advocacy support for EHCPs, SEND tribunal preparation, school communication and SEN rights guidance across North West London and online.',
  alternates: {
    canonical: '/advocacy',
  },
  openGraph: {
    title: "Parent Advocacy Support | Rosalind's Tuition",
    description:
      'Support for EHCP navigation, tribunal preparation and confident advocacy for your child’s educational needs.',
    url: 'https://rosalindstuition.com/advocacy',
    images: ['/rosalind_teaching4.webp'],
  },
  twitter: {
    title: "Parent Advocacy Support | Rosalind's Tuition",
    description:
      'Specialist SEN advocacy support to help families navigate EHCPs and SEND processes.',
    images: ['/rosalind_teaching4.webp'],
  },
};

export default function AdvocacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
