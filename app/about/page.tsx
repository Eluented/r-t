'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import StructuredData from '@/components/StructuredData';

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Animated counter
  const [years, setYears] = useState(0);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    if (countersStarted) {
      const yearsInterval = setInterval(() => {
        setYears(prev => {
          if (prev >= 25) {
            clearInterval(yearsInterval);
            return 25;
          }
          return prev + 1;
        });
      }, 40);

      const childrenInterval = setInterval(() => {
        setChildren(prev => {
          if (prev >= 4) {
            clearInterval(childrenInterval);
            return 4;
          }
          return prev + 1;
        });
      }, 200);

      return () => {
        clearInterval(yearsInterval);
        clearInterval(childrenInterval);
      };
    }
  }, [countersStarted]);

  const timeline = [
    { year: '1999', title: 'The Beginning', desc: 'Started my journey in education, driven by passion for helping children learn', icon: '🌱' },
    { year: '2005', title: 'Expanding Expertise', desc: 'Developed specialist skills in SEN, EAL, and supporting diverse learners across key stages', icon: '👨‍👩‍👧‍👦' },
    { year: '2010', title: 'Specialized Training', desc: 'Earned BA (Hons) in Professional Practice in Special Needs Education', icon: '🎓' },
    { year: '2024', title: 'Full Circle', desc: 'Founded London Maths, English & Science Tutoring - combining 30 years of expertise', icon: '⭐' }
  ];

  const philosophyCards = [
    { title: 'Every Child Can Succeed', icon: '🌟', color: 'from-emerald-500 to-teal-500' },
    { title: 'Understanding Before Speed', icon: '🧠', color: 'from-blue-500 to-cyan-500' },
    { title: 'Individualized Teaching', icon: '🎯', color: 'from-purple-500 to-pink-500' },
    { title: 'Step-by-Step Guidance', icon: '📊', color: 'from-amber-500 to-orange-500' },
    { title: 'Making Learning Fun', icon: '🎨', color: 'from-rose-500 to-red-500' },
    { title: 'Building Confidence', icon: '💪', color: 'from-indigo-500 to-blue-500' }
  ];

  return (
    <main className="bg-white overflow-hidden" ref={containerRef}>
      <StructuredData type="about" />
      {/* Hero Section - Diagonal Split Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content with Stagger Animation */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-semibold">
                  ✨ The Story Behind the Teacher
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">Meet</span>{' '}
                <span className="text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text">
                  Rosalind
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Where 30 years of educational expertise meets a deep understanding of diverse learners. This is more than a job—it's a calling.
              </motion.p>

              {/* Animated Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onViewportEnter={() => setCountersStarted(true)}
                className="grid grid-cols-2 gap-6 mb-8"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <motion.div
                    key={years}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text mb-2"
                  >
                    {years}+
                  </motion.div>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <motion.div
                    key={children}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2"
                  >
                    {children}
                  </motion.div>
                  <p className="text-gray-400 text-sm">Key Stages Taught</p>
                </div>
              </motion.div>

              <motion.a
                href="#journey"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl"
              >
                Discover My Journey
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Right - Image Grid with Parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative h-[600px]"
            >
              {/* Main large image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="absolute top-0 left-0 w-3/4 h-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1767452985026-978ef46d335c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Teaching moment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
              </motion.div>



              {/* Floating badge - bottom right */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-0 right-8 bg-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text mb-1">
                  BA (Hons)
                </div>
                <p className="text-sm text-gray-600 font-semibold">SEN Education</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Interactive Timeline Section */}
      <section id="journey" className="py-32 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              The <span className="text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">From educator to parent to specialist—every step shaped who I am today</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-300 via-blue-300 to-purple-300" />

            <div className="space-y-24">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  onMouseEnter={() => setActiveTimeline(idx)}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                    className={`w-5/12 bg-white rounded-2xl p-8 shadow-xl border-2 ${
                      activeTimeline === idx ? 'border-emerald-500' : 'border-gray-100'
                    } transition-all`}
                  >
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <div className="text-sm font-bold text-emerald-600 mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>

                  {/* Center dot */}
                  <motion.div
                    animate={{
                      scale: activeTimeline === idx ? 1.3 : 1,
                      boxShadow: activeTimeline === idx ? '0 0 30px rgba(5, 150, 105, 0.5)' : '0 0 0px rgba(5, 150, 105, 0)'
                    }}
                    className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10"
                  />

                  {/* Empty space on other side */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bento Box Grid - Philosophy */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              My <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-400">The principles that guide every lesson I teach</p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${
                  idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } bg-gradient-to-br ${card.color} rounded-3xl p-8 relative overflow-hidden group cursor-pointer`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '40px 40px'
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className={`text-6xl mb-4 ${idx === 0 ? 'text-8xl mb-8' : ''}`}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className={`font-bold text-white ${idx === 0 ? 'text-4xl mb-4' : 'text-2xl'}`}>
                    {card.title}
                  </h3>
                  {idx === 0 && (
                    <p className="text-white/90 text-lg leading-relaxed mt-4">
                      I believe passionately that every child, regardless of their learning profile, can succeed. Struggling doesn't mean lacking ability—it often means the teaching approach hasn't matched the learning style yet.
                    </p>
                  )}
                </div>

                {/* Hover gradient overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  className="absolute inset-0 bg-white"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story - Split Reveal */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image with reveal animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-3xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1767452985026-978ef46d335c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Rosalind teaching"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
              
              {/* Floating quote card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
              >
                <p className="text-gray-900 font-semibold italic mb-2">
                  "Every child I teach carries a piece of my own children's journey. I see their struggles, celebrate their victories, and fight for their success."
                </p>
                <p className="text-emerald-600 font-bold">— Rosalind</p>
              </motion.div>
            </motion.div>

            {/* Right - Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h2
                className="text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Two Worlds, <span className="text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">One Mission</span>
              </motion.h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <strong className="text-emerald-600">As an educator,</strong> I've spent 25 years witnessing transformation. The child who couldn't read suddenly discovering their favorite book. The anxious mathematician building genuine confidence with numbers.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <strong className="text-blue-600">Through relationships,</strong> I've developed deep understanding of the challenges families face. From EHCPs to supporting home-educated children, from EAL learners to gifted and talented pupils—my expertise spans the full spectrum of educational needs.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-lg font-semibold text-purple-600"
                >
                  This breadth of experience—from SEN to gifted pupils, EAL to home education—is what makes me different. I understand every child's unique learning journey.
                </motion.p>
              </div>

              {/* Key traits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                {[
                  { icon: '🎓', label: 'Qualified Educator' },
                  { icon: '👨‍👩‍👧‍👦', label: 'SEN Parent' },
                  { icon: '💙', label: 'Empathetic' },
                  { icon: '🌟', label: 'Passionate' }
                ].map((trait, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-4 text-center border-2 border-emerald-200"
                  >
                    <div className="text-3xl mb-2">{trait.icon}</div>
                    <p className="text-sm font-semibold text-gray-900">{trait.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Gradient */}
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
              Whether you're navigating SEN, preparing for exams, or filling learning gaps—I'm here to help. Let's have a conversation about your child's needs.
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
