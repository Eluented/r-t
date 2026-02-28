'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    subjects: '',
    message: '',
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childAge: '',
        subjects: '',
        message: '',
        website: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-700 bg-clip-text text-transparent mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      <motion.p 
        className="text-gray-600 mb-6 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Fill out the form below and I'll be in touch within 24 hours. Or call <strong>07908 845 498</strong> for a free, no-obligation consultation.
      </motion.p>

      {submitted && (
        <motion.div 
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <p className="text-green-800 font-semibold">
            ✓ Thank you! Your message has been sent. I'll be in touch soon.
          </p>
        </motion.div>
      )}

      {submitError && (
        <motion.div
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-red-700 font-semibold">{submitError}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
        />

        {/* Parent Name */}
        <motion.div
          custom={0}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">
            Parent/Guardian Name *
          </label>
          <motion.input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            onFocus={() => setFocused('parentName')}
            onBlur={() => setFocused('')}
            required
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              focused === 'parentName'
                ? 'border-purple-600 shadow-lg'
                : 'border-gray-300'
            }`}
            placeholder="e.g., John Smith"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Email */}
        <motion.div
          custom={1}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused('')}
            required
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              focused === 'email'
                ? 'border-purple-600 shadow-lg'
                : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          custom={2}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <motion.input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocused('phone')}
            onBlur={() => setFocused('')}
            required
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              focused === 'phone'
                ? 'border-pink-600 shadow-lg'
                : 'border-gray-300'
            }`}
            placeholder="07XXX XXXXXX"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Child Age */}
        <motion.div
          custom={3}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-2">
            Child's Age / Year Group *
          </label>
          <motion.select
            id="childAge"
            name="childAge"
            value={formData.childAge}
            onChange={handleChange}
            onFocus={() => setFocused('childAge')}
            onBlur={() => setFocused('')}
            required
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              focused === 'childAge'
                ? 'border-blue-700 shadow-lg'
                : 'border-gray-300'
            }`}
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">-- Select Age/Year Group --</option>
            <option value="3-4">Reception (3-4)</option>
            <option value="4-5">Year 1 (4-5)</option>
            <option value="5-6">Year 2 (5-6)</option>
            <option value="6-7">Year 3 (6-7)</option>
            <option value="7-8">Year 4 (7-8)</option>
            <option value="8-9">Year 5 (8-9)</option>
            <option value="9-10">Year 6 (9-10)</option>
            <option value="10-11">Year 7 (10-11)</option>
            <option value="11-12">Year 8 (11-12)</option>
            <option value="12-13">Year 9 (12-13)</option>
            <option value="13+">Year 10+ (13+)</option>
          </motion.select>
        </motion.div>

        {/* Subjects of Interest */}
        <motion.div
          custom={4}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label htmlFor="subjects" className="block text-sm font-semibold text-gray-700 mb-2">
            Subjects of Interest *
          </label>
          <motion.select
            id="subjects"
            name="subjects"
            value={formData.subjects}
            onChange={handleChange}
            onFocus={() => setFocused('subjects')}
            onBlur={() => setFocused('')}
            required
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              focused === 'subjects'
                ? 'border-purple-600 shadow-lg'
                : 'border-gray-300'
            }`}
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">-- Select Subject(s) --</option>
            <option value="maths">Maths Only</option>
            <option value="english">English Only</option>
            <option value="both">Both Maths & English</option>
          </motion.select>
        </motion.div>

        {/* Message */}
        <motion.div
          custom={5}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message / Specific Concerns (optional)
          </label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused('')}
            rows={4}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              focused === 'message'
                ? 'border-pink-600 shadow-lg'
                : 'border-gray-300'
            }`}
            placeholder="Tell me about your child's learning needs, any SEN diagnoses, or specific goals you'd like to achieve..."
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-emerald-600 to-blue-700 text-white font-bold py-3 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? 'Sending...' : 'Send My Enquiry'}
        </motion.button>
      </form>
    </motion.div>
  );
}
