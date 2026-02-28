'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import StructuredData from '@/components/StructuredData';

export default function EnglishPage() {
  return (
    <main className="bg-white">
      <StructuredData type="english" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-blue-900 to-emerald-800 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-block bg-emerald-100/20 backdrop-blur px-6 py-3 rounded-full text-emerald-100 font-semibold mb-6">
                📚 English Tuition - Key Stages 1-3
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-emerald-200">English Tutoring</span>
                <br />
                That Builds Confidence
              </h1>

              {/* Mobile Text */}
              <p className="md:hidden text-base text-emerald-100 max-w-2xl leading-relaxed mb-6">
                Expert one-to-one English tuition KS1-3. Reading, writing, phonics, and exam prep. Specialist support for dyslexia, SEN, and EAL learners. Proven entrance exam success.
              </p>

              {/* Desktop Text */}
              <p className="hidden md:block text-lg text-emerald-100 max-w-2xl leading-relaxed mb-6">
                Expert one-to-one English tuition following the national curriculum for primary and secondary education. I help children master reading, writing, phonics, grammar, and exam skills in a safe, supportive environment. My entrance exam successes include Haberdashers', Channing, Queenswood, UCS, and many more.
              </p>

              {/* Support Types - Visual Pills */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-emerald-200 mb-3">Specialist support for:</p>
                <div className="flex flex-wrap gap-3">
                  {['SEN & Dyslexia', 'EAL Learners', 'Gifted & Talented', 'Home-Educated'].map((tag, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="bg-emerald-500/20 border border-emerald-400/50 text-emerald-100 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:07908845498"
                  className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-xl hover:bg-emerald-600 transition-all"
                >
                  Call Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Free Consultation
                </motion.a>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/rosalind_teaching2.webp"
                  alt="Rosalind teaching English to a student"
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-emerald-600">30+</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">KS 1-3</div>
              <div className="text-sm text-gray-600">Key Stages Taught</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">⭐⭐⭐⭐⭐</div>
              <div className="text-sm text-gray-600">Parent Testimonials</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why My Approach Works */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why My <span className="text-transparent bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text">Approach Works</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Personalised Learning',
                description: 'Every child learns differently. I adapt methods, pace, and materials to suit your child\'s unique learning style and needs after assessment.',
                descShort: 'Methods adapted to your child\'s learning style.',
                color: 'emerald'
              },
              {
                icon: '🤝',
                title: 'Patient & Empathetic',
                description: 'With 30 years\' experience supporting diverse learners including SEN, EAL, Gifted & Talented pupils, I understand the frustration and anxiety. I create a safe space for learning.',
                descShort: 'Safe, supportive environment for all learners.',
                color: 'blue'
              },
              {
                icon: '✨',
                title: 'Multi-Sensory Techniques',
                description: 'Especially effective for dyslexia and SEN, multi-sensory methods engage different learning pathways and boost retention.',
                descShort: 'Proven techniques that boost retention.',
                color: 'amber'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6 inline-block"
                >
                  {item.icon}
                </motion.div>
                <h3 className={`text-2xl font-bold text-${item.color}-600 mb-4`}>{item.title}</h3>
                <p className="md:hidden text-gray-700 leading-relaxed text-sm">{item.descShort}</p>
                <p className="hidden md:block text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Teach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I <span className="text-transparent bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text">Teach</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Comprehensive English support tailored to your child's needs and level</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '📖',
                title: 'Reading Support',
                items: [
                  'Phonics and early reading skills using recognised methods',
                  'Decoding and fluency development',
                  'Comprehension, vocabulary and inference',
                  'Prediction and critical thinking skills',
                  'Support for dyslexia and auditory processing difficulties',
                ]
              },
              {
                icon: '✍️',
                title: 'Creative Writing & Language Skills',
                items: [
                  'Sentence structure and grammar in context',
                  'Language techniques and writing styles',
                  'Story planning, brainstorming and idea development',
                  'Creating engaging plots and coherent narratives',
                  'Building independent, confident writing',
                ]
              },
              {
                icon: '✏️',
                title: 'Handwriting & Motor Skills',
                items: [
                  'Clear, legible and confident letter formation',
                  'Appropriate pencil grip and posture',
                  'Fluency and independence in writing',
                  'Support for dyspraxia and fine motor difficulties',
                  'Building positive attitudes to written work',
                ]
              },
              {
                icon: '🔤',
                title: 'Spelling, Grammar & Punctuation',
                items: [
                  'Spelling patterns and rules taught through interventions',
                  'Proven interventions that build confidence and independence',
                  'Grammar and punctuation taught in meaningful contexts',
                  'Transfering learned skills to writing and comprehension',
                  'Particularly effective for children with dyslexia and SEN',
                ]
              },
              {
                icon: '🎯',
                title: 'SATs & Exam Preparation',
                items: [
                  'Targeted comprehension skills development',
                  'Creative writing under timed conditions',
                  'Verbal reasoning practice and strategies',
                  'Exam preparation techniques and confidence building',
                  'Strong 7+ and 11+ outcomes including Haberdashers\', Channing, Queenswood and UCS',
                  'Tailored to your child\'s learning style and pace',
                  'Entry Level English (1, 2, 3) and Functional Skills (1, 2 ,3) (KS4)',
                ]
              },
              {
                icon: '⭐',
                title: 'Specialist SEN Support',
                items: [
                  'Dyslexia-friendly approaches and multi-sensory techniques',
                  'Support for speech/language and auditory processing difficulties',
                  'Adapted teaching methods for different learning needs',
                  'Individualised programmes for dyslexia, autism, ADHD and more',
                  'Building both skills and genuine self-belief',
                  'And other SEN difficulties',
                ]
              }
            ].map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-emerald-600"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {area.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                      className={`flex gap-2 text-gray-700 text-sm md:text-base ${itemIdx >= 3 ? 'hidden md:flex' : ''}`}
                    >
                      <span className="text-emerald-600 font-bold flex-shrink-0">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section id="how-i-work" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How I <span className="text-transparent bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text">Work</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">My approach ensures every child makes genuine progress</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Individual Assessment',
                desc: 'I take time to understand each child\'s unique abilities, learning style, and challenges. This helps plan individualised differentiated lessons.',
                descShort: 'Understand your child\'s abilities and needs.'
              },
              {
                icon: '📋',
                title: 'Personalised Planning',
                desc: 'Each programme is tailored to your child\'s specific needs, interests, and pace of learning.',
                descShort: 'Programmes tailored to your child.'
              },
              {
                icon: '🌟',
                title: 'Engaging Methods',
                desc: 'Lessons combine step-by-step guidance with stimulating, interactive activities that make learning genuinely enjoyable.',
                descShort: 'Interactive activities that make learning fun.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6 inline-block"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="md:hidden text-gray-700 leading-relaxed text-sm">{item.descShort}</p>
                <p className="hidden md:block text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results,<span className="text-transparent bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text"> Real Progress</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">What parents and children say about their tutoring experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: 'Dyslexia Support',
                desc: 'I have developed guided reading and creative writing programmes specifically for children with dyslexia, helping them progress consistently.',
                descShort: 'Dyslexia-friendly reading & writing programmes.'
              },
              {
                icon: '⭐',
                title: 'Anxious to Confident',
                desc: 'Many pupils have progressed from reluctant, anxious readers to confident, independent learners with some becoming reading mentors to others.',
                descShort: 'Anxious readers become confident learners.'
              },
              {
                icon: '💪',
                title: 'Parent Testimonials',
                desc: 'Parents consistently report significant improvements in both skills and confidence, with children now enjoying reading and writing independently.',
                descShort: 'Improved skills and lasting confidence.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-emerald-600"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="md:hidden text-gray-700 leading-relaxed text-sm">{item.descShort}</p>
                <p className="hidden md:block text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="text-4xl font-bold mb-6">Ready for an English Breakthrough?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Let's chat about your child's needs and create a personalised plan that brings genuine understanding, confidence, and real progress.
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
