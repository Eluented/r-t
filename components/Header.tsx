'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/english', label: 'English' },
    { href: '/maths', label: 'Maths' },
    { href: '/advocacy', label: 'Advocacy' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with hover animation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <motion.div 
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-600 via-emerald-500 to-blue-600 text-white rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <span className="text-2xl">📚</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text text-transparent leading-tight">
                  Rosalind's Tuition
                </span>
                <span className="text-xs text-gray-500 font-medium hidden sm:block">
                  North West London
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center gap-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                {(() => {
                  const isActive = isActiveRoute(item.href);

                  return (
                <Link 
                  href={item.href} 
                  className={`px-4 py-2 rounded-lg transition-all relative group font-medium ${
                    isActive
                      ? 'text-emerald-700 bg-gradient-to-r from-emerald-50 to-blue-50 shadow-sm'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="desktop-nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600"
                    />
                  )}
                </Link>
                  );
                })()}
              </motion.div>
            ))}
          </motion.nav>

          {/* Call to Action Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.a
              href="tel:07908845498"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📞</span>
              <span>Call Now</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              className="md:hidden bg-gradient-to-b from-white via-white to-emerald-50/20 border-t border-gray-200"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="py-4 space-y-1 px-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: index * 0.08 }}
                  >
                    {(() => {
                      const isActive = isActiveRoute(item.href);

                      return (
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all font-medium border ${
                        isActive
                          ? 'text-emerald-700 border-emerald-200 bg-gradient-to-r from-emerald-50 to-blue-50 shadow-sm'
                          : 'text-gray-700 border-transparent hover:text-emerald-600 hover:border-emerald-100 hover:bg-gradient-to-r hover:from-emerald-50/80 hover:to-blue-50/80'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <motion.span
                          layoutId="mobile-nav-active-dot"
                          className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600"
                        />
                      ) : (
                        <span className="h-2.5 w-2.5 rounded-full bg-transparent border border-gray-200 group-hover:border-emerald-300 transition-colors" />
                      )}
                    </Link>
                      );
                    })()}
                  </motion.div>
                ))}
                <motion.div
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: navItems.length * 0.08 }}
                  className="pt-2 border-t border-gray-200 mt-2"
                >
                  <a
                    href="tel:07908845498"
                    className="block px-4 py-3 text-white font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg hover:shadow-lg shadow-md transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    📞 Call 07908 845 498
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
