'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import StructuredData from '@/components/StructuredData';

export default function MathsPage() {
  const teachingAreas = [
    {
      icon: '🔢',
      title: 'Foundation Maths (EYFS & KS1)',
      items: [
        'Number recognition and understanding (0–20, then beyond)',
        'Subitising and counting skills',
        'Addition and subtraction through practical activities',
        'Shape and space exploration',
        'Building positive attitudes to Maths',
      ]
    },
    {
      icon: '➕',
      title: 'Core Concepts (KS2)',
      items: [
        'Secure place value and mental strategies',
        'Addition, subtraction, multiplication and division',
        'Fractions, decimals and percentages',
        'Reasoning and problem-solving skills',
        'Building independence and mathematical thinking',
      ]
    },
    {
      icon: '🧮',
      title: 'Dyscalculia & Maths Anxiety Support',
      items: [
        'Multi-sensory maths interventions',
        'Concrete-to-abstract progression',
        'Number line and visual strategies',
        'Reducing anxiety and building confidence',
        'Tailored approaches for neurodivergent learners',
      ]
    },
    {
      icon: '🎯',
      title: 'Problem-Solving & Reasoning',
      items: [
        'Developing logical thinking',
        'Breaking down complex problems',
        'Mathematical vocabulary and explanation',
        'Pattern recognition and generalisation',
        'Building resilience in mathematical challenge',
      ]
    },
    {
      icon: '📚',
      title: 'Entrance, SATs & Functional Skills',
      items: [
        'Time-pressured problem-solving practice for 11+',
        'Non-verbal reasoning and pattern work',
        'SATs arithmetic and reasoning practice',
        'Entry level and Functional Skills exam preparation',
        'Entrance success at Haberdashers\', Channing, Queenswood and UCS',
        'Support for home-educated children',
      ]
    },
    {
      icon: '✨',
      title: 'SATs Booster (KS2)',
      items: [
        'Targeted arithmetic and reasoning practice',
        'Test-taking strategies and techniques',
        'Gap-filling in key concepts',
        'Building confidence for the big day',
        'Progress tracking and celebration',
      ]
    }
  ];

  const successPoints = [
    {
      icon: '📊',
      title: 'Concrete-to-Abstract Progression',
      desc: 'I start with physical objects, progress through visual models, and move to abstract thinking at each child\'s own pace.',
    },
    {
      icon: '🤝',
      title: 'Patient & Empathetic Teaching',
      desc: 'Many children feel anxious about Maths. I create a calm, judgment-free space where mistakes are seen as stepping stones to understanding.',
    },
    {
      icon: '🧠',
      title: 'Multi-Sensory Approaches',
      desc: 'Engaging different senses helps concepts stick. We use manipulatives, visual aids, and interactive activities to build secure understanding.',
    },
    {
      icon: '⭐',
      title: 'Personalised Learning',
      desc: 'Every child thinks differently about Maths. I adapt my teaching to suit their learning style, pace, and interests.',
    },
    {
      icon: '💪',
      title: 'Building Growth Mindset',
      desc: 'I help children see that Maths ability isn\'t fixed. With practice, support, and positive strategies, anyone can succeed.',
    },
    {
      icon: '✅',
      title: 'Regular Progress Reviews',
      desc: 'I track progress carefully and adjust my approach based on what\'s working, ensuring genuine understanding not just answer-getting.',
    }
  ];

  return (
    <main className="bg-white">
      <StructuredData type="maths" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-amber-500 text-white pt-12 md:pt-20 pb-16 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-32 left-20 text-9xl"
          >
            ∑
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-32 right-20 text-9xl"
          >
            ∫
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold mb-6 border border-white/30">
                🧮 Maths Tuition - Key Stages 1-3
              </div>

              <h1 className="hero-title text-white mb-6">
                <span className="text-amber-200">Maths Tutoring</span>
                <br />
                That Makes Sense
              </h1>

              {/* Mobile Text */}
              <p className="md:hidden hero-lead text-blue-100 max-w-2xl mb-6">
                Expert one-to-one maths tuition KS1-3. Building confidence, mastering concepts, and excelling in SATs, entrance exams, and Functional Skills. Proven entrance exam success.
              </p>

              {/* Desktop Text */}
              <p className="hidden md:block hero-lead text-blue-100 max-w-2xl mb-6">
                Expert one-to-one maths tuition following the national curriculum for primary and secondary education. I help children build confidence, master concepts, and excel in SATs, entrance exams, and Functional Skills. Entrance exam successes include Haberdashers', Channing, Queenswood, UCS, and many more.
              </p>

              {/* Support Types - Visual Pills */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-blue-100 mb-3">Specialist support for:</p>
                <div className="flex flex-wrap gap-3">
                  {['Dyscalculia', 'Maths Anxiety', 'Home-Educated', 'Exam Prep'].map((tag, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="bg-amber-400/20 border border-amber-300/50 text-white px-4 py-2 rounded-full text-sm font-semibold"
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
                  className="bg-amber-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-xl hover:bg-amber-600 transition-all"
                >
                  Call Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
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
                  src="/rosalind_teaching5.webp"
                  alt="Rosalind teaching maths to a student"
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Building Confidence Section */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gray-900 mb-4">
              How I Build <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Confidence</span>
            </h2>
            <p className="section-lead text-gray-600">Moving from anxiety to understanding and self-belief</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title text-gray-900 mb-8">My Approach to Building Confidence</h2>
              <ul className="space-y-4">
                {[
                  'Identifying gaps in understanding and building upon strengths',
                  'Teaching strategies that make Maths easier and less intimidating',
                  'Providing guided practice with immediate, positive feedback',
                  'Showing children how to check their own work and learn from mistakes',
                  'Celebrating success by positive affirmations for effort and improvement',
                  'Creating a calm space where questions are encouraged and anxiety has no place'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-3 items-start text-gray-700"
                  >
                    <span className="text-blue-600 font-bold text-lg mt-1">✓</span>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/rosalind_teaching2.webp"
                alt="Building confidence through interactive maths learning"
                width={700}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gray-900 mb-4">
              What I <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Teach</span>
            </h2>
            <p className="section-lead text-gray-600">Comprehensive Maths support across all year groups and ability levels</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🔢',
                title: 'Foundation Maths (EYFS & KS1)',
                items: [
                  'Number recognition and understanding (0–20, then beyond)',
                  'Recognising groups of objects instantly',
                  'Counting and one-to-one correspondence',
                  'Introduction to addition and subtraction using concrete objects',
                  'Shapes, patterns and spatial reasoning',
                ]
              },
              {
                icon: '➕',
                title: 'Core Concepts (KS2 & KS3)',
                items: [
                  'All operations: addition, subtraction, multiplication, division',
                  'Understanding place value and number bonds',
                  'Fractions, decimals and percentages made clear',
                  'Ratio and proportion with real-world context',
                  'Early algebra and shape/space work',
                ]
              },
              {
                icon: '🧩',
                title: 'Dyscalculia Support',
                items: [
                  'Multi-sensory approaches (touch, visualise, move)',
                  'Concrete manipulatives and visual representations',
                  'Number sense development from the ground up',
                  'Overcoming number anxiety and maths blocks',
                  'Proven intervention programmes tailored to each child',
                ]
              },
              {
                icon: '💭',
                title: 'Problem-Solving & Reasoning',
                items: [
                  'Applying maths to real-world problems',
                  'Word problems broken into manageable steps',
                  'Reasoning and justification skills',
                  'Building mathematical thinking and logic',
                  'Preparing for reasoning questions in SATs and exams',
                ]
              },
              {
                icon: '🎯',
                title: '7+ & 11+ Entrance Exams',
                items: [
                  'Timed reasoning and problem-solving practice',
                  'Non-verbal reasoning with systematic strategies',
                  'Building speed and accuracy without sacrificing understanding',
                  'Test technique and exam confidence',
                  'Tailored support for your child\'s learning style',
                ]
              },
              {
                icon: '📊',
                title: 'SATs & Secondary Prep',
                items: [
                  'KS2 booster classes for arithmetic, reasoning and problem-solving',
                  'Entry Level Maths (1, 2, 3) and Functional Skills (1, 2 ,3) (KS4)',
                  'Secondary transition support',
                  'Building foundations for GCSE success',
                  'Managing exam anxiety and building resilience',
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-blue-600"
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
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gray-900 mb-4">
              How I <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Work</span>
            </h2>
            <p className="section-lead text-gray-600">Step-by-step guidance that produces real results, fast</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📐',
                title: 'Concrete to Abstract',
                desc: 'Starting with real objects, moving through visual representations, then arriving at symbols, so concepts are retained in pupils\' long-term memory.'
              },
              {
                icon: '🎮',
                title: 'Interactive & Engaging',
                desc: 'Lessons include games, activities, and manipulatives that make learning memorable and genuinely enjoyable.'
              },
              {
                icon: '📊',
                title: 'Structured Progress',
                desc: 'Children see real progress in just a few sessions through carefully planned, step-by-step guidance tailored to their pace.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6 inline-block"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Achievements */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gray-900 mb-4">
              Experience & <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Results</span>
            </h2>
            <p className="section-lead text-gray-600">What my pupils and their families have to say</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
            >
              <Image
                src="/rosalind_teaching3.webp"
                alt="Child achieving success in maths"
                width={700}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Parents Choose My Support</h3>
              <ul className="space-y-6">
                {[
                  {
                    icon: '🧩',
                    title: 'Specialist Interventions',
                    desc: 'I\'ve developed successful Maths intervention schemes for SEN pupils that really work, helping children make rapid progress.'
                  },
                  {
                    icon: '📚',
                    title: 'Curriculum Expertise',
                    desc: 'I\'ve created my own primary and secondary curriculum achieving excellent results with children at every level.'
                  },
                  {
                    icon: '💪',
                    title: 'Rapid Confidence Building',
                    desc: 'Many children regain confidence and improve their skills quickly—sometimes within just a few weeks of starting tuition.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
   

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
            <h2 className="section-title text-white mb-6">Ready for a Maths Breakthrough?</h2>
            <p className="section-lead text-white/90 mb-10 leading-relaxed">
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

