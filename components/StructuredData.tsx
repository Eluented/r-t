'use client';

import Script from 'next/script';

interface StructuredDataProps {
  type?: 'home' | 'english' | 'maths' | 'about' | 'contact' | 'advocacy';
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
      'Edgware',
      'Burnt Oak',
      'Finchley',
      'Fortis Green',
      'Hampstead Garden Suburb',
      'Church End',
      'Highgate',
      'Hampstead',
      'Muswell Hill',
      'Friern Barnet',
      'Southgate',
      'Woodside Park',
      'Totteridge and Whetstone',
      'Oakwood',
      'Cockfosters',
      'Oakleigh Park',
      'Hendon and Brent Cross',
      'Stanmore',
      'Mill Hill',
      'Highwood Hill',
      'Colindale',
      'Kingsbury',
      'Queensbury',
      'Belmont',
      'Golders Green',
      'Hadley Wood',
      'Wembley',
      'Harrow on the Hill',
      'Harrow Weald',
      'Pinner',
      'Hatch End',
      'Arkley',
      'Watford',
      'Borehamwood & Elstree',
      'Radlett and Shenley',
      'Oxhey',
      'Carpenders Park',
      'Bushey & Bushey Heath',
      'Caldecott Hill',
      'Finchley & Muswell Hill',
      'Barnet & Hampstead',
      'Mill Hill & West Hendon',
    ],
    telephone: '+44 7908 845498',
    email: 'rosalindreindorp@sky.com',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: "Rosalind's Tuition",
    inLanguage: 'en-GB',
    publisher: {
      '@id': `${baseUrl}/#localbusiness`,
    },
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
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.6195,
      longitude: -0.2763,
    },
    url: baseUrl,
    telephone: '+44 7908 845498',
    email: 'rosalindreindorp@sky.com',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Private Tutoring',
    provider: {
      '@id': `${baseUrl}/#localbusiness`,
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
    worksFor: {
      '@id': `${baseUrl}/#localbusiness`,
    },
  };

  const pageNames: Record<NonNullable<StructuredDataProps['type']>, string> = {
    home: 'Home',
    english: 'English Tuition',
    maths: 'Maths Tuition',
    about: 'About',
    contact: 'Contact',
    advocacy: 'Advocacy',
  };

  const contactFaqSchema = type === 'contact' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How quickly will you respond?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I aim to respond to all inquiries within 24 hours, usually much sooner during business hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the first consultation free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes! The initial consultation is completely free with no obligation, so we can discuss your child's needs.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer online tutoring?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I offer both in-person tutoring in North West London and online sessions via video call.',
        },
      },
      {
        '@type': 'Question',
        name: 'What age groups do you teach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I teach children across Key Stages 1-3, covering primary and secondary education (ages 5-16).',
        },
      },
    ],
  } : null;

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
        name: pageNames[type],
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
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
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
      {contactFaqSchema && (
        <Script
          id="contact-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactFaqSchema),
          }}
        />
      )}
    </>
  );
}
