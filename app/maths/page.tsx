'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

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
      title: 'Entrance Exam Preparation (11+)',
      items: [
        'Time-pressured problem-solving practice',
        'Non-verbal reasoning and pattern work',
        'Speed and accuracy development',
        'Exam technique and confidence building',
        'Bespoke programmes for selective schools',
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-amber-500 text-white min-h-screen flex items-center overflow-hidden">
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold border border-white/30">
              🧮 Expert Maths Tutoring in North West London
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span>Maths Tutoring</span>
                <span className="block text-amber-200">
                  That Adds Up to Results
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl leading-relaxed mb-8">
                I'm a patient and empathetic teacher who helps children build genuine confidence, fill gaps in their learning, and discover that Maths can actually make sense. By breaking skills into small, manageable steps and creating a calm, supportive environment, I help children transform from anxious to assured mathematicians.
              </p>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/rosalind_teaching6.jpeg"
                  alt="Rosalind teaching maths to a student"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#approach"
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Discover My Approach
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:07908845498"
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-blue-700 transition-all border-2 border-white"
            >
              📞 Call for a Free Consultation
            </motion.a>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How I Build <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Confidence</span>
            </h2>
            <p className="text-xl text-gray-600">Moving from anxiety to understanding and self-belief</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">My Approach to Building Confidence</h3>
              <ul className="space-y-4">
                {[
                  'Identifying gaps in understanding and building from there',
                  'Teaching strategies that make Maths easier and less intimidating',
                  'Providing guided practice with immediate, positive feedback',
                  'Showing children how to check their own work and learn from mistakes',
                  'Celebrating progress—not just correct answers, but effort and improvement',
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
              <img
                src="/rosalind_teaching7.jpeg"
                alt="Building confidence through interactive maths learning"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What I <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Teach</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive Maths support across all year groups and ability levels</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🔢',
                title: 'Foundation Maths (EYFS & KS1)',
                items: [
                  'Number recognition and understanding (0–20, then beyond)',
                  'Subitising (recognising groups of objects instantly)',
                  'Counting, cardinality and one-to-one correspondence',
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
                  'Entry Level Maths (1, 2, 3) and Functional Skills',
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                      className="flex gap-2 text-gray-700"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How I <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Work</span>
            </h2>
            <p className="text-xl text-gray-600">Step-by-step guidance that produces real results, fast</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📐',
                title: 'Concrete to Abstract',
                desc: 'Starting with real objects, moving through visual representations, then arriving at symbols—so concepts stick.'
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
                  whileHover={{ scale: 1.2, rotate: 360 }}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience & <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Results</span>
            </h2>
            <p className="text-xl text-gray-600">What my pupils and their families have to say</p>
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
              <img
                src="/rosalind_portrait1.jpg"
                alt="Child achieving success in maths"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Is Your Child Ready for a Maths Breakthrough?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's chat about your child's needs and create a personalised plan that brings genuine understanding, confidence, and real progress.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:07908845498"
                className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
              >
                <span>📞</span>
                Call 07908 845 498
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact-form"
                className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-blue-700 transition-all border-2 border-white"
              >
                Get a Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-blue-600 via-blue-500 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

