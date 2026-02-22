'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, ChangeEvent, FormEvent } from 'react';
import StructuredData from '@/components/StructuredData';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation rules
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s\-']+$/.test(name)) return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    if (name.trim().length > 50) return 'Name must be less than 50 characters';
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return 'Phone number is required';
    // UK phone format validation - allows various formats
    const ukPhoneRegex = /^(?:(?:\+44\s?|0)(?:\d\s?){10})$/;
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    
    if (!/^[\d\s\-+()]+$/.test(phone)) return 'Phone can only contain numbers, spaces, hyphens, plus, and parentheses';
    if (cleanPhone.length < 10) return 'Phone number must be at least 10 digits';
    if (cleanPhone.length > 15) return 'Phone number must be less than 15 digits';
    
    return undefined;
  };

  const validateSubject = (subject: string): string | undefined => {
    if (!subject.trim()) return 'Subject is required';
    if (subject.trim().length < 3) return 'Subject must be at least 3 characters';
    if (subject.trim().length > 100) return 'Subject must be less than 100 characters';
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters';
    if (message.trim().length > 1000) return 'Message must be less than 1000 characters';
    return undefined;
  };

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name': return validateName(value);
      case 'email': return validateEmail(value);
      case 'phone': return validatePhone(value);
      case 'subject': return validateSubject(value);
      case 'message': return validateMessage(value);
      default: return undefined;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, formData[name as keyof FormData]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTouched({});
      setErrors({});
      setSubmitSuccess(false);
    }, 3000);
  };

  const isFormValid = !Object.values(errors).some(error => error) && 
                      Object.values(formData).every(value => value.trim() !== '');

  return (
    <main className="bg-white">
      <StructuredData type="contact" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 pt-20 pb-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 50, 0],
              x: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold mb-6 border border-white/30"
            >
              📞 Get in Touch
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Let's Start Your Child's
              <span className="block text-yellow-200">Learning Journey</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to help your child thrive? Reach out for a free consultation and discover how personalized tutoring can make all the difference.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl"
                  >
                    📞
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Call or Text</h3>
                    <a 
                      href="tel:07908845498" 
                      className="text-purple-600 hover:text-purple-700 font-semibold text-lg transition-colors"
                    >
                      07908 845 498
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9am-6pm</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-pink-500"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl"
                  >
                    ✉️
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                    <a 
                      href="mailto:rosalind@example.com" 
                      className="text-pink-600 hover:text-pink-700 font-semibold break-all transition-colors"
                    >
                      rosalind@tutoring.co.uk
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Response within 24 hours</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl"
                  >
                    📍
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-700 font-semibold">North West London</p>
                    <p className="text-sm text-gray-600 mt-1">Online & in-person tutoring available</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">Why Choose Rosalind?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>30 years teaching experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>SEN, EAL & Gifted specialists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Key Stages 1-4 coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Free initial consultation</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and I'll get back to you as soon as possible.</p>

                <AnimatePresence mode="wait">
                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="text-6xl mb-4"
                      >
                        ✅
                      </motion.div>
                      <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                      <p className="text-green-700">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={() => handleBlur('name')}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                            errors.name && touched.name
                              ? 'border-red-500 bg-red-50 focus:border-red-600 focus:ring-red-200'
                              : formData.name && !errors.name
                              ? 'border-green-500 bg-green-50 focus:border-green-600 focus:ring-green-200'
                              : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200'
                          } focus:outline-none focus:ring-4`}
                          placeholder="e.g. Jane Smith"
                        />
                        <AnimatePresence>
                          {errors.name && touched.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-600 text-sm mt-1 flex items-center gap-1"
                            >
                              <span>⚠️</span>
                              {errors.name}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={() => handleBlur('email')}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                            errors.email && touched.email
                              ? 'border-red-500 bg-red-50 focus:border-red-600 focus:ring-red-200'
                              : formData.email && !errors.email
                              ? 'border-green-500 bg-green-50 focus:border-green-600 focus:ring-green-200'
                              : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200'
                          } focus:outline-none focus:ring-4`}
                          placeholder="e.g. jane.smith@email.com"
                        />
                        <AnimatePresence>
                          {errors.email && touched.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-600 text-sm mt-1 flex items-center gap-1"
                            >
                              <span>⚠️</span>
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={() => handleBlur('phone')}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                            errors.phone && touched.phone
                              ? 'border-red-500 bg-red-50 focus:border-red-600 focus:ring-red-200'
                              : formData.phone && !errors.phone
                              ? 'border-green-500 bg-green-50 focus:border-green-600 focus:ring-green-200'
                              : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200'
                          } focus:outline-none focus:ring-4`}
                          placeholder="e.g. 07908 845 498 or 020 1234 5678"
                        />
                        <AnimatePresence>
                          {errors.phone && touched.phone && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-600 text-sm mt-1 flex items-center gap-1"
                            >
                              <span>⚠️</span>
                              {errors.phone}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={() => handleBlur('subject')}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                            errors.subject && touched.subject
                              ? 'border-red-500 bg-red-50 focus:border-red-600 focus:ring-red-200'
                              : formData.subject && !errors.subject
                              ? 'border-green-500 bg-green-50 focus:border-green-600 focus:ring-green-200'
                              : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200'
                          } focus:outline-none focus:ring-4`}
                        >
                          <option value="">-- Please select --</option>
                          <option value="Maths Tutoring">Maths Tutoring</option>
                          <option value="English Tutoring">English Tutoring</option>
                          <option value="Science Tutoring">Science Tutoring</option>
                          <option value="SATs Preparation">SATs Preparation</option>
                          <option value="Entrance Exam Prep">Entrance Exam Preparation (11+/7+/4+)</option>
                          <option value="Functional Skills">Functional Skills & Entry Level</option>
                          <option value="SEN Support">SEN Support</option>
                          <option value="EAL Support">EAL (English as Additional Language)</option>
                          <option value="Gifted & Talented">Gifted & Talented Pupils</option>
                          <option value="Home Education">Home-Educated Children</option>
                          <option value="Parent Advocacy">Parent Advocacy</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                        <AnimatePresence>
                          {errors.subject && touched.subject && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-600 text-sm mt-1 flex items-center gap-1"
                            >
                              <span>⚠️</span>
                              {errors.subject}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={() => handleBlur('message')}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-all resize-none ${
                            errors.message && touched.message
                              ? 'border-red-500 bg-red-50 focus:border-red-600 focus:ring-red-200'
                              : formData.message && !errors.message
                              ? 'border-green-500 bg-green-50 focus:border-green-600 focus:ring-green-200'
                              : 'border-gray-300 focus:border-purple-500 focus:ring-purple-200'
                          } focus:outline-none focus:ring-4`}
                          placeholder="Please tell me about your child's learning needs, current challenges, and what you're hoping to achieve..."
                        />
                        <div className="flex justify-between items-center mt-1">
                          <AnimatePresence>
                            {errors.message && touched.message && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-600 text-sm flex items-center gap-1"
                              >
                                <span>⚠️</span>
                                {errors.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                          <p className={`text-sm ml-auto ${
                            formData.message.length > 1000 ? 'text-red-600 font-bold' : 'text-gray-500'
                          }`}>
                            {formData.message.length}/1000
                          </p>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        whileHover={isFormValid && !isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
                        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                          isFormValid && !isSubmitting
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl cursor-pointer'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            >
                              ⏳
                            </motion.span>
                            Sending...
                          </span>
                        ) : (
                          <span>Send Message 📨</span>
                        )}
                      </motion.button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you consent to being contacted regarding tutoring services.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Service Areas Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 mb-20"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Where I Tutor
            </h2>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Face-to-Face */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border-l-4 border-emerald-600"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🏠</span>
                  Face-to-Face Tuition - North West London
                </h3>
                <p className="text-gray-700 mb-6">I provide home tuition across the following areas:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Hertfordshire</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Hatfield & St Albans <span className="text-gray-500">(AL2)</span></li>
                      <li>• Welwyn Garden City <span className="text-gray-500">(EN6)</span></li>
                      <li>• Watford & Rickmansworth <span className="text-gray-500">(WD6, WD7, WD8, WD19, WD23, WD25)</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">North London</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Finchley & Muswell Hill <span className="text-gray-500">(N2, N3, N6)</span></li>
                      <li>• Barnet & Hampstead <span className="text-gray-500">(N10, N11, N12, N14, N20, NW3, NW4)</span></li>
                      <li>• Mill Hill & West Hendon <span className="text-gray-500">(NW7, NW9, NW11)</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">North West London</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Edgware (my base) <span className="text-gray-500">(HA8)</span></li>
                      <li>• Burnt Oak <span className="text-gray-500">(HA0, HA1)</span></li>
                      <li>• Borehamwood & Surrounds <span className="text-gray-500">(HA3, HA5, HA6, HA7, HA9)</span></li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Online & International */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-blue-600"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">💻</span>
                    Online Tutoring - UK Wide
                  </h3>
                  <p className="text-gray-700 mb-4">Live video sessions available for any postcodes not listed above throughout the UK. Perfect for busy families who prefer remote learning with flexible scheduling.</p>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <span>✓</span>
                    <span>Interactive & engaging online sessions</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-600"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🌍</span>
                    International - Worldwide Welcome
                  </h3>
                  <p className="text-gray-700 mb-4">Students and families across the globe are welcome. I can accommodate different time zones with flexible scheduling to make sessions work for you.</p>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <span>✓</span>
                    <span>Global reach with local care</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Questions</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  q: 'How quickly will you respond?',
                  a: 'I aim to respond to all inquiries within 24 hours, usually much sooner during business hours.'
                },
                {
                  q: 'Is the first consultation free?',
                  a: 'Yes! The initial consultation is completely free with no obligation, so we can discuss your child\'s needs.'
                },
                {
                  q: 'Do you offer online tutoring?',
                  a: 'Yes, I offer both in-person tutoring in North West London and online sessions via video call.'
                },
                {
                  q: 'What age groups do you teach?',
                  a: 'I teach children across Key Stages 1-4, covering primary and secondary education (ages 5-16).'
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200"
                >
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="text-purple-600">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-gray-700 pl-6">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
