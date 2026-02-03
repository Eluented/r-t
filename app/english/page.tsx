import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'English Tutoring | London Maths and English Tutoring',
  description: 'Specialist English tutoring including dyslexia support, guided reading, creative writing, SATs preparation, and more.',
};

export default function EnglishPage() {
  return (
    <main className="bg-white">
      <HeroSection
        title="English Tutoring"
        subtitle="Expert support for reading, writing, and language skills"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What I Offer</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                English is more than just grammar and punctuation. It's about helping children develop a love of language, build confidence in their communication, and unlock their creative potential. Whether your child is struggling to read, anxious about writing, or needs SATs preparation, I provide targeted, patient support tailored to their individual needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every programme is differentiated and individualised, working at your child's pace with techniques that make learning engaging and fun.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Key Areas of Support</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">📖</span>
                  <div>
                    <p className="font-semibold text-gray-900">Guided Reading</p>
                    <p className="text-sm text-gray-600">Helping reluctant readers discover the joy of books</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">📝</span>
                  <div>
                    <p className="font-semibold text-gray-900">Writing & Composition</p>
                    <p className="text-sm text-gray-600">From sentence structure to creative storytelling</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">🔤</span>
                  <div>
                    <p className="font-semibold text-gray-900">Phonics & Decoding</p>
                    <p className="text-sm text-gray-600">Specialist support for dyslexia and reading difficulties</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 text-xl">✍️</span>
                  <div>
                    <p className="font-semibold text-gray-900">Grammar & Punctuation</p>
                    <p className="text-sm text-gray-600">Making mechanics clear and memorable</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="bg-gray-50 rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Programmes & Specialisms</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Guided Reading */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Guided Reading for Struggling Readers</h3>
                <p className="text-gray-700 mb-4">
                  For children who find reading difficult, whether due to dyslexia or other challenges, I provide structured, patient guidance. Using multisensory techniques and carefully selected texts, we build phonemic awareness, decoding skills, and most importantly, confidence. The goal is to help your child see reading as an achievable, enjoyable skill.
                </p>
                <p className="text-gray-600 italic">Ideal for: Dyslexia, reluctant readers, children with auditory processing difficulties, those needing phonics intervention.</p>
              </div>

              {/* Comprehension & Understanding */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Comprehension & Understanding</h3>
                <p className="text-gray-700 mb-4">
                  Reading is only half the battle. I help children understand, analyse, and engage with texts at deeper levels. From answering comprehension questions to discussing themes and characters, we build critical thinking skills that support learning across all subjects.
                </p>
                <p className="text-gray-600 italic">Ideal for: KS2 and KS3 students, SATs preparation, building analytical thinking.</p>
              </div>

              {/* Writing & Creativity */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Creative Writing & Composition</h3>
                <p className="text-gray-700 mb-4">
                  Many children have wonderful ideas but struggle to express them on paper. I use scaffolding, story maps, and structured planning to help your child write confidently. Whether fiction, poetry, or descriptive writing, we build skills step-by-step while celebrating creativity.
                </p>
                <p className="text-gray-600 italic">Ideal for: Children who lack writing confidence, those with spelling/motor difficulties, creative learners.</p>
              </div>

              {/* Spelling & Grammar */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Spelling, Grammar & Punctuation</h3>
                <p className="text-gray-700 mb-4">
                  Rather than dull repetition, I teach spelling patterns, grammar rules, and punctuation through engaging activities and real-world contexts. Multi-sensory approaches work particularly well for children who find these areas challenging, including those with dyslexia and ADHD.
                </p>
                <p className="text-gray-600 italic">Ideal for: Dyslexia support, building foundations, KS2/KS3 consolidation.</p>
              </div>

              {/* SATs Preparation */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-600 mb-3">SATs Preparation (KS2)</h3>
                <p className="text-gray-700 mb-4">
                  The KS2 English SATs can be daunting. I provide targeted support to help your child tackle reading comprehension, spelling, punctuation, and grammar questions with confidence. We work at your child's pace, building skills and reducing anxiety.
                </p>
                <p className="text-gray-600 italic">Ideal for: Year 5 and 6 students, booster programmes, children with exam anxiety.</p>
              </div>

              {/* Entrance Exams */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-600 mb-3">Entrance Exam Preparation (4+, 7+, 11+)</h3>
                <p className="text-gray-700 mb-4">
                  Preparing your child for selective school entrance exams? I help with reading comprehension, writing under timed conditions, vocabulary building, and test-taking strategies. My supportive approach ensures your child feels confident and ready.
                </p>
                <p className="text-gray-600 italic">Ideal for: Gifted & talented pupils, selective school preparation, ages 4–11.</p>
              </div>
            </div>
          </div>

          {/* Why It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why My Approach Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalised Learning</h3>
                <p className="text-gray-700">
                  Every child learns differently. I adapt methods, pace, and materials to suit your child's unique learning style and needs.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Patient & Empathetic</h3>
                <p className="text-gray-700">
                  With 25 years' experience and personal experience as a parent of children with SEN, I understand frustration and anxiety. I create a safe space for learning.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Sensory Techniques</h3>
                <p className="text-gray-700">
                  Especially effective for dyslexia and SEN, multi-sensory methods engage different learning pathways and boost retention.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-purple-50 rounded-lg p-12 text-center border-l-4 border-purple-600 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Support Your Child's English?</h3>
            <p className="text-gray-700 mb-6">
              Contact me for a free consultation to discuss your child's needs and how I can help.
            </p>
            <a
              href="tel:07908845498"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
            >
              📞 Call 07908 845 498
            </a>
          </div>
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
