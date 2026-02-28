'use client';

import Script from 'next/script';

interface StructuredDataProps {
  type?: 'home' | 'english' | 'maths' | 'about' | 'contact';
}

export default function StructuredData({ type = 'home' }: StructuredDataProps) {
  const baseUrl = 'https://rosalindtuition.com'; // Update with actual domain

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: "Rosalind's Tuition",
    description: '30+ years of experience in Maths & English tuition. Specialist support for SEN, dyslexia, dyscalculia, and EAL learners.',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Edgware',
      addressRegion: 'London',
      addressCountry: 'GB',
    },
    areaServed: [
      'North West London',
      'Edgware',
      'Barnet',
      'Finchley',
      'Hertfordshire',
      'Watford',
      'St Albans',
    ],
    telephone: '+44-20-8381-1792',
    email: 'rosalind_tutor@hotmail.co.uk',
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: "Rosalind's Tuition",
    image: `${baseUrl}/rosalind_portrait1.webp`,
    description: 'Professional one-to-one Maths and English tuition in North West London with 30+ years of experience.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Edgware',
      addressLocality: 'London',
      postalCode: 'HA8',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.6195,
      longitude: -0.2763,
    },
    url: baseUrl,
    telephone: '+44-20-8381-1792',
    email: 'rosalind_tutor@hotmail.co.uk',
    priceRange: '££',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Edgware' },
      { '@type': 'City', name: 'Barnet' },
      { '@type': 'City', name: 'Finchley' },
      { '@type': 'City', name: 'Watford' },
      { '@type': 'City', name: 'St Albans' },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Private Tutoring',
    provider: {
      '@id': `${baseUrl}/#localbusiness`,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 51.6195,
        longitude: -0.2763,
      },
      geoRadius: '15000', // 15km radius
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tutoring Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maths Tutoring',
            description: 'One-to-one maths tuition for Key Stages 1-3, including SEN support and exam preparation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'English Tutoring',
            description: 'One-to-one English tuition covering phonics, grammar, creative writing, and exam skills',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEN Support',
            description: 'Specialist support for dyslexia, dyscalculia, autism, and other learning differences',
          },
        },
      ],
    },
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rosalind',
    jobTitle: 'Private Tutor',
    description: '30+ years of experience in Maths & English tuition with specialist SEN expertise',
    knowsAbout: [
      'Mathematics Education',
      'English Language Teaching',
      'Special Educational Needs',
      'Dyslexia Support',
      'Dyscalculia Support',
      'EAL Teaching',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of London',
    },
  };

  const breadcrumbSchema = type !== 'home' ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: type.charAt(0).toUpperCase() + type.slice(1),
        item: `${baseUrl}/${type}`,
      },
    ],
  } : null;

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      {breadcrumbSchema && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}
    </>
  );
}
