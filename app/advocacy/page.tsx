'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export default function AdvocacyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section - Powerful & Inspiring */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white pt-56 pb-12 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-8xl opacity-10"
          >
            ✊
          </motion.div>
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 right-10 text-8xl opacity-10"
          >
            💪
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 -right-32 w-96 h-96 bg-white/5 rounded-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-emerald-100 font-semibold mb-8 border border-white/30"
              >
                🛡️ Parent Advocacy & Children's Rights
              </motion.div>

              {/* Main Headline */}
              <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl sm:text-7xl font-bold mb-8 leading-tight"
            >
              Your Child's <br />
              <span className="text-emerald-100">Voice Matters</span>
            </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-emerald-100 mb-12 leading-relaxed max-w-2xl"
              >
                You don't have to navigate the complex world of special needs alone. I'm here to empower you, guide you, and help you fight for your child's rights and the support they deserve.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#support"
                  className="bg-white text-emerald-600 px-10 py-5 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                >
                  Explore Support
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:07908845498"
                  className="bg-emerald-400 text-white px-10 py-5 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                >
                  📞 Speak to Rosalind
                </motion.a>
              </motion.div>

              {/* Trust Message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-emerald-100 italic text-lg"
              >
                "I've been where you are. As a parent of 4 children with SEN, I understand the journey. You're doing brilliantly."
              </motion.p>
            </div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-96 lg:h-full lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1752652016199-a9ca574e08cb?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Parent and child supporting each other"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Gradient overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why You're Here - Problem Statement */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Does This Sound <span className="text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text">Familiar?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '😰', text: "You're fighting to get your child's needs recognised" },
              { icon: '🗂️', text: 'The EHCP process feels impossibly complex' },
              { icon: '⚔️', text: "You've had requests for assessment refused" },
              { icon: '📚', text: "You're unsure what accommodations your child needs" },
              { icon: '💔', text: 'You feel lonely and unsupported in this journey' },
              { icon: '🔦', text: 'You need someone who truly understands your reality' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex gap-4 p-6 bg-white rounded-xl border-2 border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
              >
                <span className="text-5xl flex-shrink-0">{item.icon}</span>
                <p className="text-gray-700 font-semibold text-lg my-auto">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Offer - Core Services */}
      <section id="support" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How I Can <span className="text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text">Support You</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive advocacy support informed by both lived experience and professional expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'EHCP Navigation',
                icon: '📋',
                points: ['Understanding the process', 'Building strong applications', 'Challenging refusals', 'Managing your EHCP'],
                color: 'emerald'
              },
              {
                title: 'Tribunal Support',
                icon: '⚖️',
                points: ['Explaining appeals process', 'Building evidence & cases', 'Representation guidance', 'Emotional support'],
                color: 'teal'
              },
              {
                title: 'School Advocacy',
                icon: '🏫',
                points: ['Communicating with SENCOs', 'Requesting accommodations', 'Understanding reports', 'Planning transitions'],
                color: 'cyan'
              },
              {
                title: 'Understanding SEN',
                icon: '🧠',
                points: ['Diagnosis explanations', 'Support strategies', 'Specialist resources', 'Intervention advice'],
                color: 'emerald'
              },
              {
                title: 'Parent Listening',
                icon: '💙',
                points: ['Non-judgmental support', 'Shared experiences', 'Practical advice', 'Resource connections'],
                color: 'teal'
              },
              {
                title: 'Rights & Resources',
                icon: '🛡️',
                points: ['Legal knowledge sharing', 'Organisation signposting', 'Funding information', 'Support networks'],
                color: 'cyan'
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`bg-gradient-to-br from-${service.color}-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-${service.color}-600 group`}
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6 inline-block"
                >
                  {service.icon}
                </motion.div>
                <h3 className={`text-2xl font-bold text-${service.color}-700 mb-6`}>{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-center gap-3 text-gray-700">
                      <span className={`text-${service.color}-600 font-bold`}>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me - Credentials Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Trust <span className="text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text">Rosalind?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Lived Experience',
                desc: 'Parent of 4 SEN children. I\'ve fought for EHCPs, navigated tribunals, and managed complex needs. I understand your reality.',
                subtext: '25+ years of personal advocacy'
              },
              {
                icon: '🎓',
                title: 'Professional Expertise',
                desc: 'BA (Hons) in Professional Practice in Special Needs Education. 25 years in the field combining personal experience with professional knowledge.',
                subtext: 'Trained & qualified specialist'
              },
              {
                icon: '🤝',
                title: 'Genuine Care',
                desc: 'I\'m not here to judge or pity. I\'m here to empower you, listen to you, and help you advocate effectively for your child.',
                subtext: 'Your voice matters most'
              }
            ].map((credential, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-emerald-600"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6 inline-block"
                >
                  {credential.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{credential.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{credential.desc}</p>
                <p className="text-emerald-600 font-semibold text-sm">{credential.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Legal Note */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 border-l-4 border-amber-600 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">⚖️</span>
              Important Legal Note
            </h3>
            <p className="text-gray-800 mb-6 leading-relaxed text-lg">
              While I offer guidance, advice, and emotional support based on my experience and knowledge, <strong>I am not a lawyer</strong>. For complex legal matters, particularly around tribunal representation or legal advice, I recommend seeking specialist legal support from organisations like:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-amber-900 mb-2">IPSEA</h4>
                <p className="text-gray-700 text-sm">Independent Parental Special Education Advice - offers free or low-cost specialist advice</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-amber-900 mb-2">ACE</h4>
                <p className="text-gray-700 text-sm">Alliance for Inclusive Education - provides support and legal information</p>
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-sm italic">I can work alongside these services to provide emotional support and practical guidance.</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
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
            <h2 className="text-5xl font-bold mb-6">Let's Empower Your Child</h2>
            <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
              You don't have to fight this battle alone. Whether you need guidance, support, or just someone who understands, I'm here for you. Let's work together to ensure your child gets the rights and support they deserve.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:07908845498"
                className="bg-white text-emerald-600 px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-2"
              >
                <span>📞</span>
                Call 07908 845 498
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-emerald-400 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:bg-emerald-500 transition-all"
              >
                Schedule Consultation
              </motion.a>
            </div>
            <p className="text-emerald-100 italic mt-8">
              "Your child deserves to be heard, valued, and supported. Let's make sure they get exactly that."
            </p>
          </motion.div>
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
