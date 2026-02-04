'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export default function EnglishPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="bg-white">
      {/* Hero Section - Unique Layout */}
      <section className="relative bg-white pt-24 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Badge and Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-emerald-100 to-blue-100 px-6 py-3 rounded-full text-emerald-700 font-semibold mb-6">
              📚 Expert English Tutoring in North West London
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Help Your Child
              <span className="block text-transparent bg-gradient-to-r from-emerald-600 via-blue-600 to-amber-600 bg-clip-text">
                Fall in Love with Reading
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialist English tutoring for children with dyslexia, reading difficulties, and those who simply need a confidence boost
            </p>
          </motion.div>

          {/* Image with overlapping content cards */}
          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop&auto=format"
                alt="Child reading with teacher"
                className="w-full h-[500px] object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Quote overlay on image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <p className="text-white text-2xl font-medium italic mb-3">
                  "Every child can discover the joy of reading with the right support and patience."
                </p>
                <p className="text-emerald-300 font-semibold text-lg">— Rosalind Reindorp, BA (Hons) SEN Specialist</p>
              </motion.div>
            </motion.div>

            {/* Floating feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                { icon: '🎯', title: 'Dyslexia Support', desc: 'Multisensory techniques that work', color: 'emerald' },
                { icon: '📖', title: 'Guided Reading', desc: 'Building confidence & fluency', color: 'blue' },
                { icon: '✍️', title: 'Creative Writing', desc: 'Unlocking imagination on paper', color: 'amber' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`bg-white rounded-2xl p-6 shadow-lg border-t-4 border-${feature.color}-600 hover:shadow-2xl transition-all`}
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className={`text-lg font-bold text-${feature.color}-600 mb-2`}>{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Buttons Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#programmes"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              View All Programmes
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:07908845498"
              className="bg-white text-gray-900 px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-emerald-600"
            >
              📞 07908 845 498
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-gray-200"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">25+</div>
              <div className="text-sm text-gray-600">Years Teaching</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Personalised Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">SEN</div>
              <div className="text-sm text-gray-600">Qualified Specialist</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">⭐⭐⭐⭐⭐</div>
              <div className="text-sm text-gray-600">Parent Testimonials</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Areas of Support */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Areas of <span className="text-transparent bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text">Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive English tutoring tailored to your child's unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📖', title: 'Guided Reading', desc: 'Helping reluctant readers discover the joy of books', color: 'emerald' },
              { icon: '📝', title: 'Writing & Composition', desc: 'From sentence structure to creative storytelling', color: 'blue' },
              { icon: '🔤', title: 'Phonics & Decoding', desc: 'Specialist support for dyslexia and reading difficulties', color: 'amber' },
              { icon: '✍️', title: 'Grammar & Punctuation', desc: 'Making mechanics clear and memorable', color: 'emerald' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-t-4 border-${item.color}-600 group`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Programmes */}
      <section id="programmes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programmes & <span className="text-transparent bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text">Specialisms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every programme is differentiated and individualised, working at your child's pace
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Guided Reading for Struggling Readers',
                description: 'For children who find reading difficult, whether due to dyslexia or other challenges, I provide structured, patient guidance. Using multisensory techniques and carefully selected texts, we build phonemic awareness, decoding skills, and most importantly, confidence.',
                ideal: 'Dyslexia, reluctant readers, children with auditory processing difficulties, those needing phonics intervention',
                color: 'emerald',
                icon: '📚'
              },
              {
                title: 'Comprehension & Understanding',
                description: 'Reading is only half the battle. I help children understand, analyse, and engage with texts at deeper levels. From answering comprehension questions to discussing themes and characters, we build critical thinking skills.',
                ideal: 'KS2 and KS3 students, SATs preparation, building analytical thinking',
                color: 'blue',
                icon: '🧠'
              },
              {
                title: 'Creative Writing & Composition',
                description: 'Many children have wonderful ideas but struggle to express them on paper. I use scaffolding, story maps, and structured planning to help your child write confidently while celebrating creativity.',
                ideal: 'Children who lack writing confidence, those with spelling/motor difficulties, creative learners',
                color: 'amber',
                icon: '✨'
              },
              {
                title: 'Spelling, Grammar & Punctuation',
                description: 'Rather than dull repetition, I teach spelling patterns, grammar rules, and punctuation through engaging activities and real-world contexts. Multi-sensory approaches work particularly well for children with dyslexia and ADHD.',
                ideal: 'Dyslexia support, building foundations, KS2/KS3 consolidation',
                color: 'emerald',
                icon: '✅'
              },
              {
                title: 'SATs Preparation (KS2)',
                description: 'The KS2 English SATs can be daunting. I provide targeted support to help your child tackle reading comprehension, spelling, punctuation, and grammar questions with confidence. We work at your child\'s pace, building skills and reducing anxiety.',
                ideal: 'Year 5 and 6 students, booster programmes, children with exam anxiety',
                color: 'blue',
                icon: '🎯'
              },
              {
                title: 'Entrance Exam Preparation (4+, 7+, 11+)',
                description: 'Preparing your child for selective school entrance exams? I help with reading comprehension, writing under timed conditions, vocabulary building, and test-taking strategies with a supportive approach.',
                ideal: 'Gifted & talented pupils, selective school preparation, ages 4–11',
                color: 'amber',
                icon: '🏆'
              }
            ].map((programme, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br from-white to-${programme.color}-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-${programme.color}-600 group`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{programme.icon}</div>
                <h3 className={`text-2xl font-bold text-${programme.color}-600 mb-4`}>{programme.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{programme.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Ideal for:</p>
                  <p className="text-sm text-gray-600 italic">{programme.ideal}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why My <span className="text-transparent bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text">Approach Works</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Personalised Learning',
                description: 'Every child learns differently. I adapt methods, pace, and materials to suit your child\'s unique learning style and needs.',
                color: 'emerald'
              },
              {
                icon: '🤝',
                title: 'Patient & Empathetic',
                description: 'With 25 years\' experience and personal experience as a parent of children with SEN, I understand frustration and anxiety. I create a safe space for learning.',
                color: 'blue'
              },
              {
                icon: '✨',
                title: 'Multi-Sensory Techniques',
                description: 'Especially effective for dyslexia and SEN, multi-sensory methods engage different learning pathways and boost retention.',
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
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6 inline-block"
                >
                  {item.icon}
                </motion.div>
                <h3 className={`text-2xl font-bold text-${item.color}-600 mb-4`}>{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
