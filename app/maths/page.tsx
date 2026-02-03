import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'Maths Tutoring | London Maths and English Tutoring',
  description: 'Specialist Maths tutoring including dyscalculia support, SATs preparation, confidence building, and Entry Level Maths.',
};

export default function MathsPage() {
  return (
    <main className="bg-white">
      <HeroSection
        title="Maths Tutoring"
        subtitle="Building confidence and mathematical understanding, one step at a time"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What I Offer</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Many children find Maths overwhelming. Whether it's due to a specific difficulty like dyscalculia, previous gaps in understanding, or just a loss of confidence, I'm here to help. My approach is step-by-step, practical, and tailored to your child's individual needs. We focus on understanding concepts, not just memorising procedures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Using games, visual aids, manipulatives, and real-world contexts, I make Maths engaging and achievable. Every child can succeed at Maths—sometimes they just need the right approach and a patient teacher.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Key Areas of Support</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-purple-600 text-xl">🎮</span>
                  <div>
                    <p className="font-semibold text-gray-900">Maths Games & Fun</p>
                    <p className="text-sm text-gray-600">Making numeracy engaging and interactive</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 text-xl">🔢</span>
                  <div>
                    <p className="font-semibold text-gray-900">Core Concepts</p>
                    <p className="text-sm text-gray-600">Addition, subtraction, multiplication, division, fractions</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 text-xl">💡</span>
                  <div>
                    <p className="font-semibold text-gray-900">Problem Solving</p>
                    <p className="text-sm text-gray-600">Building reasoning and application skills</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 text-xl">⚡</span>
                  <div>
                    <p className="font-semibold text-gray-900">Confidence Building</p>
                    <p className="text-sm text-gray-600">Overcoming Maths anxiety and fear</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="bg-gray-50 rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Programmes & Specialisms</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Maths Games & Intervention */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Maths Games & Intervention Schemes</h3>
                <p className="text-gray-700 mb-4">
                  Who said learning Maths has to be boring? I use games, practical activities, and manipulatives to teach core concepts. These multi-sensory approaches are particularly effective for children with dyscalculia, ADHD, or those who struggle with abstract thinking. Games make learning fun while building essential number skills.
                </p>
                <p className="text-gray-600 italic">Ideal for: Dyscalculia support, KS1/KS2 foundations, building engagement.</p>
              </div>

              {/* Core Concepts */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Core Maths Concepts</h3>
                <p className="text-gray-700 mb-4">
                  From understanding what numbers mean, to adding and subtracting, multiplying and dividing, through to fractions and decimals—I break down each concept step-by-step. If there are gaps, we go back and fill them. Understanding matters more than speed.
                </p>
                <p className="text-gray-600 italic">Ideal for: Building foundations, closing learning gaps, KS1–KS3.</p>
              </div>

              {/* Dyscalculia Support */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Dyscalculia Support</h3>
                <p className="text-gray-700 mb-4">
                  Dyscalculia can make Maths feel impossible. With specialist understanding and tailored strategies, I help children with number difficulties build confidence and competence. Multi-sensory approaches, number lines, manipulatives, and concrete experiences are essential—abstract approaches often fail for these learners.
                </p>
                <p className="text-gray-600 italic">Ideal for: Children with dyscalculia, number processing difficulties, anxiety around Maths.</p>
              </div>

              {/* SATs Preparation */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-600 mb-3">SATs Preparation (KS2)</h3>
                <p className="text-gray-700 mb-4">
                  Year 5 and 6 SATs Maths can be stressful. I provide targeted booster sessions to help your child tackle arithmetic, reasoning, and problem-solving questions. We build confidence, reduce anxiety, and ensure key concepts are secure.
                </p>
                <p className="text-gray-600 italic">Ideal for: Year 5–6 students, booster programmes, exam preparation.</p>
              </div>

              {/* Entrance Exams */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-600 mb-3">Entrance Exam Preparation (4+, 7+, 11+)</h3>
                <p className="text-gray-700 mb-4">
                  Preparing for selective school entrance exams requires practice, strategy, and confidence. I help your child tackle non-verbal reasoning, Maths problems, and timed questions. My patient, supportive approach means your child feels ready and capable.
                </p>
                <p className="text-gray-600 italic">Ideal for: Gifted & talented pupils, selective school preparation, ages 4–11.</p>
              </div>

              {/* Entry Level Maths */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-cyan-600 mb-3">Entry Level & Functional Maths</h3>
                <p className="text-gray-700 mb-4">
                  For older students or those working at Entry Level, I provide practical, real-world Maths. Money, time, measurements, and problem-solving in everyday contexts. Building functional Maths skills prepares young people for independence and life beyond school.
                </p>
                <p className="text-gray-600 italic">Ideal for: KS4 students, Entry Level learners, life skills focus.</p>
              </div>
            </div>
          </div>

          {/* Why It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why My Approach Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Concrete to Abstract</h3>
                <p className="text-gray-700">
                  We start with real objects, move to pictures, then to numbers. This progression supports all learners, especially those with dyscalculia or abstract thinking difficulties.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Sensory & Engaging</h3>
                <p className="text-gray-700">
                  Games, manipulatives, colours, and movement make learning stick. Far more effective than worksheets alone, especially for struggling learners.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confidence First</h3>
                <p className="text-gray-700">
                  Building a child's belief in themselves is as important as the Maths itself. We celebrate progress and create a positive, pressure-free environment.
                </p>
              </div>
            </div>
          </div>

          {/* Typical Journey */}
          <div className="bg-purple-50 rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">A Typical Learning Journey</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Initial Assessment</h3>
                  <p className="text-gray-700 mt-2">I identify where gaps exist, what's causing confusion, and what your child's learning style is.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Personalised Plan</h3>
                  <p className="text-gray-700 mt-2">We create a tailored programme with clear targets, using methods that work for YOUR child.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Step-by-Step Learning</h3>
                  <p className="text-gray-700 mt-2">We work through concepts at a pace that suits your child, always building on secure foundations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Regular Review</h3>
                  <p className="text-gray-700 mt-2">I monitor progress, celebrate achievements, and adjust strategies as needed. Your child WILL see improvement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-purple-50 rounded-lg p-12 text-center border-l-4 border-purple-600 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Child's Maths?</h3>
            <p className="text-gray-700 mb-6">
              Contact me for a free consultation to discuss your child's Maths needs and how I can help them succeed.
            </p>
            <a
              href="tel:07908845498"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition"
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
