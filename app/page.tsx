'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Testimonials from '@/components/Testimonials';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    {
      src: '/rosalind_teaching8cropped.webp',
      title: 'One-to-One Tutoring',
      desc: 'Personalized learning sessions tailored to each child\'s needs'
    },
    {
      src: '/rosalind_teaching7.webp',
      title: 'Interactive Learning',
      desc: 'Engaging methods that make learning fun and memorable'
    },
    {
      src: '/rosalind_teaching4crop.webp',
      title: 'Building Confidence',
      desc: 'Creating a supportive environment for academic growth'
    },
    {
      src: '/rosalind_teaching5.webp',
      title: 'Expert Guidance',
      desc: '25+ years of experience supporting children\'s learning'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white">
      <StructuredData type="home" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50 text-gray-900 pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden">
        {/* Decorative gradient orb */}
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200 via-blue-200 to-amber-200 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-8 md:py-10">
            {/* Left side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-block"
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
                  🎓 Expert SEN & Exam Tutoring
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-emerald-600 via-blue-700 to-amber-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Bridging Learning Gaps and Building Success
              </motion.h1>

              {/* Mobile Text */}
              <motion.p
                className="text-lg md:hidden text-gray-700 mb-4 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hello, I’m Rosalind. I offer personalised one-to-one tuition in Edgware for KS1–KS3 across Maths, English, Primary Science, History, Geography, and Cookery. With 30+ years of experience, I help children build confidence, close learning gaps, and prepare for entrance exams.
              </motion.p>

              {/* Desktop Text */}
              <motion.p
                className="hidden md:block text-xl text-gray-700 mb-4 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hello, I’m Rosalind, with over 30 years of teaching experience. Based in Edgware, North West London, I provide personalised one-to-one tuition for KS1–KS3 in Maths, English, Primary Science, History, Geography, and Cookery, aligned with the National Curriculum. My lessons are tailored to each child’s learning style to build confidence, close gaps, strengthen core skills, and prepare for entrance exams. I’m proud that pupils I have supported secured places at leading independent schools, including Haberdashers’ Boys’, University College School, Channing, and Queenswood.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600">30+</p>
                  <p className="text-sm text-gray-600">Years Teaching</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-700">
                    <span className="md:hidden">BA</span>
                    <span className="hidden md:inline">BA (Hons)</span>
                  </p>
                  <p className="text-sm text-gray-600">SEN Qualified</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">KS 1-3</p>
                  <p className="text-sm text-gray-600">Key Stages</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.a
                  href="tel:07908845498"
                  className="bg-gradient-to-r from-emerald-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl text-center"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(5, 150, 105, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Call Now
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition text-center block"
                  >
                    Free Consultation
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96 md:h-full md:min-h-[520px]">
                {/* Image */}
                <Image
                  src="/rosalind_portrait1.webp"
                  alt="Rosalind - Professional SEN Tutor in North West London"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Info Card Overlay */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Rosalind Reindorp</h3>
                  <p className="text-sm text-gray-700 mb-3">BA (Hons) Special Needs Education</p>
                  <div className="flex gap-2">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">SEN Specialist</span>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Exam Prep</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Features Below Hero */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-12 pt-10 md:pt-12 border-t border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              {
                icon: '🎯',
                title: 'Personalised Learning',
                desc: 'Tailored to your child\'s unique learning style and pace'
              },
              {
                icon: '💪',
                title: 'Confidence Building',
                desc: 'More than academics—we rebuild self-belief'
              },
              {
                icon: '📈',
                title: 'Proven Results',
                desc: 'Measurable progress across Maths and English'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tutoring in Action</h2>
            <p className="text-lg md:text-xl text-gray-600">Real learning moments that inspire growth and confidence</p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Image */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-96 md:h-[500px]"
            >
              <Image
                src={carouselImages[currentSlide].src}
                alt={carouselImages[currentSlide].title}
                width={900}
                height={500}
                className="w-full h-full object-cover"
                priority={currentSlide === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Text Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
              >
                <h3 className="text-3xl font-bold mb-2">{carouselImages[currentSlide].title}</h3>
                <p className="text-lg text-gray-100">{carouselImages[currentSlide].desc}</p>
              </motion.div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                className="bg-gradient-to-r from-emerald-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition"
              >
                ← Previous
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-3">
                {carouselImages.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    whileHover={{ scale: 1.2 }}
                    className={`rounded-full transition ${idx === currentSlide
                      ? 'bg-gradient-to-r from-emerald-600 to-blue-700 w-3 h-3'
                      : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                className="bg-gradient-to-r from-emerald-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition"
              >
                Next →
              </motion.button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-6 text-gray-600 font-semibold">
              {currentSlide + 1} / {carouselImages.length}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-lg md:text-lg font-semibold mb-4 bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text text-transparent">✨ Why Choose Rosalind?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Expert Support That Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎓', title: '30 Years Experience', desc: 'Dedicated educator with proven track record' },
              { icon: '💙', title: 'SEN Specialist', desc: 'BA (Hons) in Special Needs Education' },
              { icon: '🌍', title: 'Diverse Learners', desc: 'Supporting SEN, EAL, Gifted & Talented pupils' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <p className="font-bold text-gray-900 mb-2">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-lg md:text-xl text-gray-600">Specialist tutoring tailored to your child's needs</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: '🌟',
                title: 'Maths, English & Primary Science',
                desc: 'Core subjects KS1-3 with specialist support for dyslexia, dyscalculia, autism, ADHD and other learning needs.',
                descFull: 'Core subject tutoring following the national curriculum for Key Stage 1-3, plus Primary Science (KS1/KS2). Specialist support for dyslexia, dyscalculia, autism, ADHD, and other learning needs.',
                links: [{ href: '/english', text: 'English Tutoring' }, { href: '/maths', text: 'Maths Tutoring' }],
                color: 'from-emerald-600 to-emerald-400',
                borderColor: 'border-emerald-600',
              },
              {
                icon: '📚',
                title: 'SATs, Entrance, Revision & Homework Support',
                desc: 'SATs, entrance exams, revision skills and homework support, plus Functional Skills.',
                descFull: 'Preparation for SATs, 4+, 7+, 11+ entrance exams, study and revision skills, structured homework support, and Entry Level/Functional Skills exams. Recent entrance success includes Haberdashers\', Channing, Queenswood and UCS.',
                links: [{ href: '/english', text: 'English Exams' }, { href: '/maths', text: 'Maths Exams' }],
                color: 'from-blue-700 to-blue-400',
                borderColor: 'border-blue-700',
              },
              {
                icon: '🌉',
                title: 'EAL, Gifted and Talented & Home-Educated',
                desc: 'EAL, Gifted & Talented pupils. Plus History, Geography & Cookery.',
                descFull: 'Support for English as an Additional Language (EAL), Gifted and Talented pupils, and home-educated children. I also teach History, Geography, and Cookery.',
                links: [{ href: '/about', text: 'Learn More About My Approach' }],
                color: 'from-amber-600 to-amber-400',
                borderColor: 'border-amber-600',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition border-t-4 ${service.borderColor} group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="md:hidden text-gray-700 mb-6 text-sm">{service.desc}</p>
                <p className="hidden md:block text-gray-700 mb-6">{service.descFull || service.desc}</p>
                <div className="space-y-2">
                  {service.links.map((link, linkIdx) => (
                    <motion.div
                      key={linkIdx}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href={link.href} className={`bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg rounded-lg px-4 py-2 inline-block transition`}>
                        {link.text} →
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Qualifications & Experience */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">What Sets Me Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: '📖',
                  title: 'Professional Background',
                  items: [
                    'BA (Hons) in Professional Practice in Special Needs Education',
                    'GCSE Mathematics and GCSE English qualifications',
                    'CACHE Level 3 Children and Young People\'s Workforce',
                    'Level 2 Certificates in Autism, Dyslexia & Phonics, Safeguarding',
                    'Enhanced DBS checked with references available',
                    '30 years in education and specialist SEN support',
                  ],
                },
                {
                  icon: '❤️',
                  title: 'Personal Experience',
                  items: [
                    'Experience with EHCPs (Educational Health Care Plans)',
                    'In-depth understanding of parent concerns and education pathways',
                    'Commitment to making a real difference',
                    'SEN Tribunal successes',
                  ],
                },
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg md:text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text mb-4">
                    {section.icon} {section.title}
                  </h3>
                  <ul className="space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base">
                    {section.items.map((item, itemIdx) => (
                      <motion.li
                        key={itemIdx}
                        className={`flex gap-3 items-start ${itemIdx >= 3 ? 'hidden md:flex' : ''}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + itemIdx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-green-500 font-bold mt-1 flex-shrink-0">✓</span>
                        <span className="text-sm md:text-base">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Who I Work With & How I Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Who I Work With */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Who I Work With</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">I specialise in supporting children from Reception through to secondary education, particularly those with:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🧩', title: 'Dyslexia & Dyspraxia', desc: 'Multi-sensory approaches tailored to learning differences' },
                { icon: '🔢', title: 'Dyscalculia', desc: 'Concrete-to-abstract progression for Maths confidence' },
                { icon: '🧠', title: 'Autism & ADHD', desc: 'Structured, personalised learning strategies' },
                { icon: '🎧', title: 'Auditory Processing', desc: 'Language delays and communication support' },
                { icon: '💪', title: 'Anxiety & Confidence', desc: 'Building self-belief and reducing learning anxiety' },
                { icon: '📚', title: 'Learning Gaps', desc: 'Targeted SEN interventions and bridging support' },
                { icon: '⭐', title: 'Gifted & Talented', desc: 'Stretching their knowledge and challenging higher achievers' },
                { icon: '🏠', title: 'Home-Educated', desc: 'Flexible programmes for independent learners' },
                { icon: '🌍', title: 'EAL Learners', desc: 'English as an Additional Language support' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How I Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Approach</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Every child is unique, so every tutoring programme is personalised and tailored to their needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '1', title: 'Assessment', desc: 'Each child\'s abilities and learning style' },
                { number: '2', title: 'Personalise', desc: 'Tailored programme based on needs' },
                { number: '3', title: 'Deliver', desc: 'Interactive sessions with clear progress' },
                { number: '4', title: 'Celebrate', desc: 'Track wins and build confidence' },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-2xl absolute -top-4 -left-4 shadow-lg">
                    {step.number}
                  </div>
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-8 pt-12 text-center hover:shadow-lg transition-all">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What This Means for Your Child</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: '✓', title: 'One-to-one lessons', desc: 'In your home or online (international students welcome)' },
                  { icon: '✓', title: 'Structured yet flexible', desc: 'Rapid progress with adaptable pacing' },
                  { icon: '✓', title: 'Exam preparation', desc: '4+, 7+, 11+, SATs, Functional Skills' },
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex gap-3 items-start">
                      <span className="text-emerald-600 font-bold text-2xl mt-1">{benefit.icon}</span>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">{benefit.title}</p>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wherever You Are</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Flexible tutoring options to fit your family's needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Face-to-Face',
                subtitle: 'North West London',
                desc: 'Personalised tuition in your home across Edgware, Finchley, Barnet, Hampstead and surrounding areas',
                color: 'from-emerald-600 to-emerald-400'
              },
              {
                icon: '💻',
                title: 'Online',
                subtitle: 'UK-Wide',
                desc: 'Live video tutoring available throughout the UK and internationally for families who prefer remote learning',
                color: 'from-blue-600 to-blue-400'
              },
              {
                icon: '🌍',
                title: 'International',
                subtitle: 'Worldwide Welcome',
                desc: 'Online sessions for families across the globe, with flexible scheduling across time zones',
                color: 'from-amber-600 to-amber-400'
              }
            ].map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg p-8 border-t-4 hover:shadow-xl transition-all"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} text-white mb-6`}>
                  <span className="text-3xl">{option.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{option.title}</h3>
                <p className="text-sm font-semibold text-gray-500 mb-3">{option.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{option.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-sm">
              For a detailed list of postcodes I cover for face-to-face tuition,{' '}
              <span className="text-emerald-600 font-semibold cursor-pointer hover:underline">
                <Link href="/contact">contact me</Link>
              </span>
              {' '}for more information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Let's Start Your Child's Journey</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Whether you're navigating SEN, preparing for exams, or filling learning gaps. I'm here to help. Let's have a conversation about your child's needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="tel:07908845498"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-10 py-5 rounded-xl font-bold text-xl shadow-2xl inline-flex items-center gap-2"
              >
                <span>📞</span>
                Call Now
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:bg-emerald-400 transition"
              >
                Contact Form
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
