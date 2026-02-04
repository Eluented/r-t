'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export default function MathsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section - Interactive Problem-Solving Theme */}
      <section className="relative bg-gradient-to-b from-blue-50 via-white to-amber-50 pt-20 pb-12 overflow-hidden">
        {/* Animated math symbols in background */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-20 -left-20 text-9xl"
          >
            ∑
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-20 -right-20 text-9xl"
          >
            ∫
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-block bg-gradient-to-r from-blue-100 to-amber-100 px-6 py-3 rounded-full text-blue-700 font-semibold">
              🧮 Expert Maths Tutoring in North West London
            </div>
          </motion.div>

          {/* Title with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span>From Maths Anxiety</span>
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">
                to Mathematical Confidence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialist Maths tutoring for children with dyscalculia, learning gaps, and those who've lost confidence. We focus on understanding, not just answers.
            </p>
          </motion.div>

          {/* Interactive Problem-Solving Journey */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1577720643272-265f434b3c8c?w=800&h=800&fit=crop&auto=format"
                  alt="Teacher helping child with math"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating stat badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border-2 border-blue-600"
              >
                <div className="text-4xl font-bold text-blue-600">95%</div>
                <p className="text-sm text-gray-600 font-semibold">Confidence Boost</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border-2 border-amber-600"
              >
                <div className="text-4xl font-bold text-amber-600">100%</div>
                <p className="text-sm text-gray-600 font-semibold">Personalised</p>
              </motion.div>
            </motion.div>

            {/* Right: Journey Steps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Child's Maths Journey</h2>

              {[
                { step: '01', title: 'Identify the Problem', desc: 'Where are the gaps? What\'s causing the confusion?', icon: '🔍' },
                { step: '02', title: 'Build Concrete Understanding', desc: 'Real objects, visual aids, and tangible manipulatives', icon: '🧩' },
                { step: '03', title: 'Progress Gradually', desc: 'From concrete → pictorial → abstract at their pace', icon: '📈' },
                { step: '04', title: 'Master with Confidence', desc: 'Practice, celebration, and real progress they can feel', icon: '⭐' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-amber-50 border-2 border-blue-200 hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-amber-600 text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <span>{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-4"
              >
                <a
                  href="tel:07908845498"
                  className="inline-block bg-gradient-to-r from-blue-600 to-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto text-center"
                >
                  📞 Start Your Child's Journey
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Areas - Unique Grid Layout */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Focus On</span>
            </h2>
            <p className="text-xl text-gray-600">Every area tailored to your child's individual needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎮', title: 'Games & Fun', desc: 'Making Maths engaging and interactive', color: 'blue' },
              { icon: '🧠', title: 'Core Concepts', desc: 'Building strong foundations', color: 'amber' },
              { icon: '💡', title: 'Problem Solving', desc: 'Reasoning and application skills', color: 'blue' },
              { icon: '🚀', title: 'Confidence', desc: 'Overcoming Maths anxiety', color: 'amber' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -12, scale: 1.05 }}
                className={`bg-gradient-to-br from-${item.color}-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-${item.color}-600 group`}
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6 inline-block"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes - Card-Based with Detailed Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialist <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Programmes</span>
            </h2>
            <p className="text-xl text-gray-600">Tailored to every learning need and ability</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Dyscalculia Support',
                desc: 'Specialist strategies for number processing difficulties using multi-sensory approaches, manipulatives, and concrete experiences.',
                ideal: 'Children with dyscalculia, number processing difficulties',
                icon: '🧩'
              },
              {
                title: 'Core Concepts (KS1-3)',
                desc: 'From understanding what numbers mean, through addition, subtraction, multiplication, division, to fractions and decimals.',
                ideal: 'Building foundations, closing learning gaps',
                icon: '🔢'
              },
              {
                title: 'Maths Games & Intervention',
                desc: 'Multi-sensory, game-based learning that makes Maths engaging while building essential number skills and confidence.',
                ideal: 'Building engagement, KS1/KS2 foundations',
                icon: '🎮'
              },
              {
                title: 'Problem Solving & Reasoning',
                desc: 'Develop strategic thinking, logical reasoning, and the ability to apply Maths to real-world situations.',
                ideal: 'Building critical thinking, KS2+ students',
                icon: '💭'
              },
              {
                title: 'SATs Preparation (KS2)',
                desc: 'Targeted booster sessions for arithmetic, reasoning, and problem-solving with confidence building and exam strategies.',
                ideal: 'Year 5-6 students, exam anxiety reduction',
                icon: '🎯'
              },
              {
                title: 'Entrance Exam Prep (4+, 7+, 11+)',
                desc: 'Non-verbal reasoning, timed Maths problems, and strategic test-taking approaches for selective schools.',
                ideal: 'Gifted pupils, selective school preparation',
                icon: '🏆'
              }
            ].map((programme, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-blue-600 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-5xl mb-4 inline-block"
                >
                  {programme.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{programme.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{programme.desc}</p>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Ideal for:</p>
                  <p className="text-sm text-gray-600">{programme.ideal}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why My Approach Works - Comparison */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why My Approach <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text">Really Works</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📐',
                title: 'Concrete to Abstract',
                points: ['Real objects first', 'Visual representations', 'Then symbolic notation', 'Builds lasting understanding']
              },
              {
                icon: '🧠',
                title: 'Multi-Sensory Learning',
                points: ['See it, touch it, move it', 'Engage different pathways', 'Games and activities', 'Far better retention']
              },
              {
                icon: '💪',
                title: 'Confidence First',
                points: ['Celebrate every win', 'No pressure environment', 'Build self-belief', 'Academic success follows']
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6 inline-block"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, pidx) => (
                    <motion.li
                      key={pidx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + pidx * 0.05 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Is Your Child Ready for a Maths Breakthrough?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's chat about your child's needs and create a personalised plan that brings confidence and genuine understanding back to Maths.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:07908845498"
                className="bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-2"
              >
                <span>📞</span>
                Call 07908 845 498
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-amber-600 text-white px-10 py-5 rounded-lg font-bold text-xl shadow-2xl hover:bg-amber-700 transition-all"
              >
                Book Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
