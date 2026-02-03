'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Testimonials from '@/components/Testimonials';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

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

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50 text-gray-900 pt-16 pb-20 overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
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
                Every Child Can Succeed
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-700 mb-4 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Discover personalised one-to-one tutoring in Maths and English. With 25 years of experience and lived experience as a parent of 4 children with SEN, Rosalind bridges learning gaps and builds confidence.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div 
                className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600">25+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-700">SEN</p>
                  <p className="text-sm text-gray-600">Specialist</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">4</p>
                  <p className="text-sm text-gray-600">Lived Experience</p>
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
                    href="#contact"
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
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96 md:h-full md:min-h-[600px]">
                {/* Image */}
                <img 
                  src="https://images.unsplash.com/photo-1767452985026-978ef46d335c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Rosalind - Professional SEN Tutor"
                  className="w-full h-full object-cover"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gray-200"
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
            <p className="text-lg font-semibold mb-4 bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text text-transparent">✨ Why Choose Rosalind?</p>
            <h2 className="text-4xl font-bold text-gray-900">Expert Support That Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎓', title: '25 Years Experience', desc: 'Dedicated educator with proven track record' },
              { icon: '💙', title: 'SEN Specialist', desc: 'BA (Hons) in Special Needs Education' },
              { icon: '👨‍👩‍👧‍👦', title: 'Parent Experience', desc: 'Mother of 4 children with SEN' },
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-xl text-gray-600">Specialist tutoring tailored to your child's needs</p>
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
                title: 'SEN & Learning Support',
                desc: 'Specialised support for children with dyslexia, dyscalculia, autism, ADHD, auditory processing difficulties, SEMH, and speech/language delays.',
                links: [{ href: '/english', text: 'Explore English Support' }, { href: '/maths', text: 'Explore Maths Support' }],
                color: 'from-emerald-600 to-emerald-400',
                borderColor: 'border-emerald-600',
              },
              {
                icon: '📚',
                title: 'SATs & Entrance Exams',
                desc: 'Booster SATs programme for KS2. Preparation for 4+, 7+, and 11+ entrance exams. Build confidence and achieve your goals.',
                links: [{ href: '/english', text: 'English Preparation' }, { href: '/maths', text: 'Maths Preparation' }],
                color: 'from-blue-700 to-blue-400',
                borderColor: 'border-blue-700',
              },
              {
                icon: '🌉',
                title: 'Bridging Learning Gaps',
                desc: 'If your child is falling behind, struggling with anxiety about school, or needs a confidence boost, I provide targeted support.',
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
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.desc}</p>
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
            className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Sets Me Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: '📖',
                  title: 'Professional Background',
                  items: [
                    '25 years in education',
                    'BA (Hons) in Professional Practice in Special Needs Education',
                    'Specialised training in SEN interventions and support strategies',
                    'Patient, empathetic, and energetic teaching style',
                  ],
                },
                {
                  icon: '❤️',
                  title: 'Personal Experience',
                  items: [
                    'Parent of 4 children with special needs',
                    'Lived experience with EHCPs (Educational Health Care Plans)',
                    'Understanding of the parent\'s perspective and journey',
                    'Commitment to making a real difference',
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
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text mb-4">
                    {section.icon} {section.title}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {section.items.map((item, itemIdx) => (
                      <motion.li
                        key={itemIdx}
                        className="flex gap-3 items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + itemIdx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-green-500 font-bold mt-1">✓</span>
                        <span>{item}</span>
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

      {/* Target Audience & Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Who I Work With',
                intro: 'I specialise in supporting children aged 3–14 (Reception to KS3) across North West London:',
                items: [
                  'Children with special needs diagnoses (dyslexia, dyscalculia, autism, ADHD, etc.)',
                  'Children with learning gaps or falling behind',
                  'Reluctant readers and anxious learners',
                  'Gifted & talented pupils preparing for entrance exams',
                  'Parents seeking EHCP advice and support',
                ],
                icon: '👥',
              },
              {
                title: 'How I Work',
                intro: 'Every child is unique, so every tutoring programme is tailored to fit their individual needs:',
                items: [
                  'One-to-one personalised tuition in a calm, supportive environment',
                  'Differentiated programmes adapted to your child\'s learning style',
                  'Step-by-step guidance at the pace that suits your child',
                  'Making learning fun with engaging, interactive techniques',
                  'Building confidence and a positive attitude to learning',
                ],
                icon: '🎯',
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-4xl">{section.icon}</span>
                  {section.title}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {section.intro}
                </p>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      className="flex gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + itemIdx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-emerald-600 font-bold">→</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-br from-emerald-600 via-blue-700 to-amber-600 text-white py-20 relative overflow-hidden">
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-100 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Contact me today for a free, no-obligation consultation. Let's work together to bridge the gaps in your child's learning.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:07908845498"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Call 07908 845 498
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg block transition"
              >
                Use Contact Form Below
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
