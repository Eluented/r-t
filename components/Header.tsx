'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/english', label: 'English' },
    { href: '/maths', label: 'Maths' },
    { href: '/advocacy', label: 'Advocacy' },
    { href: '/about', label: 'About Me' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white shadow-lg backdrop-blur-md bg-opacity-95"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with hover animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <motion.div 
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-700 text-white rounded-lg font-bold text-lg"
                whileHover={{ rotate: 10 }}
              >
                📚
              </motion.div>
              <span className="hidden sm:inline text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text text-transparent">
                London Maths & English
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <Link 
                  href={item.href} 
                  className="text-gray-700 font-medium relative group"
                >
                  {item.label}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-700"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Call to Action Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.a
              href="tel:07908845498"
              className="hidden sm:block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(236, 72, 153, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              📞 07908 845 498
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              className="md:hidden pb-4 space-y-1 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 rounded transition font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: navItems.length * 0.05 }}
              >
                <a
                  href="tel:07908845498"
                  className="block px-4 py-2 text-amber-600 font-semibold hover:bg-amber-50 rounded transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  📞 Call 07908 845 498
                </a>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
