'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Parent',
      role: 'Year 6 Student',
      text: 'Patient, supportive and explains things clearly. We\'ve seen great progress in both confidence and understanding. Would happily recommend her.',
      rating: 5,
    },
    {
      name: 'Parent',
      role: 'Year 2 Student',
      text: 'I was blown away! You have been so kind and my daughter really enjoys your sessions, which means everything for us.',
      rating: 5,
    },
    {
      name: 'Parent',
      role: 'Year 5 Student',
      text: 'Thank you for all the help and progress. We\'re so grateful for the difference you\'ve made.',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Parents Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from families who've worked with Rosalind to support their child's learning journey.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-blue-700/0 group-hover:from-emerald-600/10 group-hover:to-blue-700/10 transition-all duration-500" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="text-2xl text-yellow-400"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <motion.p 
                  className="text-gray-700 mb-6 italic text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-emerald-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-4"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to start your child's learning journey?
          </motion.h3>
          <motion.p 
            className="text-emerald-100 mb-6 text-lg"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Contact me for a free, no-obligation consultation.
          </motion.p>
          <motion.a
            href="tel:07908845498"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
          >
            📞 07908 845 498
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
