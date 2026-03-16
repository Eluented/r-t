'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const recipientEmail = 'rosalindstuition@gmail.com';

  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    subjects: '',
    message: '',
    website: '',
  });
  const [formErrors, setFormErrors] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    subjects: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState('');

  const validateEmail = (email: string) => {
    // Simple RFC 5322 compliant regex
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // UK mobile: 07xxx xxxxxx or 07xxxxxxxxx
    return /^07\d{9}$/.test(phone.replace(/\s+/g, ''));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate on change
    if (name === 'email') {
      setFormErrors((prev) => ({ ...prev, email: validateEmail(value) ? '' : 'Please enter a valid email address.' }));
    }
    if (name === 'phone') {
      setFormErrors((prev) => ({ ...prev, phone: validatePhone(value) ? '' : 'Please enter a valid UK mobile number (07XXXXXXXXX).' }));
    }
    if (name === 'parentName') {
      setFormErrors((prev) => ({ ...prev, parentName: value.trim().length >= 2 ? '' : 'Name must be at least 2 characters.' }));
    }
    if (name === 'childAge') {
      setFormErrors((prev) => ({ ...prev, childAge: value ? '' : 'Please select an age/year group.' }));
    }
    if (name === 'subjects') {
      setFormErrors((prev) => ({ ...prev, subjects: value ? '' : 'Please select a subject.' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    // Validate all fields before submit
    const errors: any = {};
    if (!formData.parentName.trim() || formData.parentName.trim().length < 2) {
      errors.parentName = 'Name must be at least 2 characters.';
    }
    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid UK mobile number (07XXXXXXXXX).';
    }
    if (!formData.childAge) {
      errors.childAge = 'Please select an age/year group.';
    }
    if (!formData.subjects) {
      errors.subjects = 'Please select a subject.';
    }
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setSubmitError('Please correct the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    try {
      if (!web3FormsKey) {
        throw new Error('Form is not configured yet. Please try again shortly.');
      }

      const submittedAt = new Date().toLocaleString('en-GB', {
        dateStyle: 'full',
        timeStyle: 'short',
      });

      const formattedMessage = [
        `New Tutoring Enquiry from Rosalind's Tuition`,
        '',
        `Parent/Guardian Name: ${formData.parentName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Child's Age / Year Group: ${formData.childAge}`,
        `Subjects of Interest: ${formData.subjects}`,
        `Submitted: ${submittedAt}`,
        '',
        formData.message
          ? `Message / Concerns: ${formData.message}`
          : 'No additional message provided.'
      ].join('\n');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          from_name: "Rosalind's Tuition",
          subject: `New Tutoring Enquiry: ${formData.parentName}`,
          name: formData.parentName,
          email: formData.email,
          message: formattedMessage,
          replyto: formData.email,
          to: recipientEmail,
          recipient: recipientEmail,
          botcheck: formData.website,
        }),
      });

      const result = await response.json() as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong. Please try again.');
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
      setFormErrors({ parentName: '', email: '', phone: '', childAge: '', subjects: '' });

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
          {formErrors.parentName && (
            <span className="text-red-600 text-sm mt-1 block">{formErrors.parentName}</span>
          )}
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
          {formErrors.email && (
            <span className="text-red-600 text-sm mt-1 block">{formErrors.email}</span>
          )}
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
          {formErrors.phone && (
            <span className="text-red-600 text-sm mt-1 block">{formErrors.phone}</span>
          )}
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
          {formErrors.childAge && (
            <span className="text-red-600 text-sm mt-1 block">{formErrors.childAge}</span>
          )}
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
          {formErrors.subjects && (
            <span className="text-red-600 text-sm mt-1 block">{formErrors.subjects}</span>
          )}
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
