'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Parent',
    role: 'Year 6 Student',
    content: 'Patient, supportive and explains things clearly. We\'ve seen great progress in both confidence and understanding. Would happily recommend her.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Parent',
    role: 'Year 2 Student',
    content: 'I was blown away! You have been so kind and my daughter really enjoys your sessions, which means everything for us.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Parent',
    role: 'Year 5 Student',
    content: 'Thank you for all the help and progress. We\'re so grateful for the difference you\'ve made.',
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const current = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from families we\'ve helped
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative h-80 sm:h-96 bg-white rounded-2xl shadow-2xl overflow-hidden"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute inset-0 flex items-center justify-center p-8"
            >
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-3xl text-yellow-400"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg sm:text-2xl text-gray-800 mb-4 sm:mb-8 italic font-light line-clamp-4 sm:line-clamp-none"
                >
                  "{current.content}"
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{current.name}</p>
                  <p className="text-sm sm:text-base text-gray-600">{current.role}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-emerald-600 to-blue-700 text-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
          >
            ←
          </motion.button>

          <motion.button
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-emerald-600 to-blue-700 text-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
          >
            →
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-emerald-600 to-blue-700 w-8'
                  : 'bg-gray-300 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Counter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-6 text-sm"
        >
          {currentIndex + 1} of {testimonials.length}
        </motion.p>
      </div>
    </div>
  );
}
