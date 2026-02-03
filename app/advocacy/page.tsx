import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'Parent Advocacy & SEN Support | London Maths and English Tutoring',
  description: 'Support for parents navigating EHCP, tribunals, and special educational needs. Expert advice from lived experience.',
};

export default function AdvocacyPage() {
  return (
    <main className="bg-white">
      <HeroSection
        title="Advocacy & Parent Support"
        subtitle="Supporting families navigating special educational needs and EHCPs"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Beyond Tutoring</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Being a parent of children with special needs can feel isolating and overwhelming. You're navigating unfamiliar systems, fighting for your child's rights, and trying to get the support they deserve. I've been there—as a parent of 4 children with special needs and as someone who understands both the educational and emotional journey.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Alongside tutoring, I offer support and guidance to parents. I'm here to listen, advise, and help you navigate the complex world of special educational needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>You are not alone, and your child's needs are valid.</strong>
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Areas of Support</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-purple-600 text-xl">📋</span>
                  <div>
                    <p className="font-semibold text-gray-900">EHCPs & Education Health Care Plans</p>
                    <p className="text-sm text-gray-600">Understanding the process and securing support</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-600 text-xl">⚖️</span>
                  <div>
                    <p className="font-semibold text-gray-900">SEND Tribunals</p>
                    <p className="text-sm text-gray-600">Navigating disputes and appeals</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-600 text-xl">🎯</span>
                  <div>
                    <p className="font-semibold text-gray-900">Needs Assessment & Diagnosis</p>
                    <p className="text-sm text-gray-600">Understanding assessments and pathways</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 text-xl">💙</span>
                  <div>
                    <p className="font-semibold text-gray-900">Parent Listening & Advice</p>
                    <p className="text-sm text-gray-600">Someone who understands your journey</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="bg-gray-50 rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What I Can Help With</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* EHCP */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">EHCPs & Educational Health Care Plans</h3>
                <p className="text-gray-700 mb-4">
                  An EHCP (Educational Health Care Plan) can be transformative for your child, but the journey to getting one can be confusing. I can help you understand:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• What an EHCP is and whether your child might benefit</li>
                  <li>• How to request an EHCP assessment from your local authority</li>
                  <li>• What to include in your application and evidence to gather</li>
                  <li>• What happens during the assessment process</li>
                  <li>• How to challenge decisions if you disagree</li>
                  <li>• Managing the EHCP once you have one</li>
                </ul>
              </div>

              {/* SEND Tribunals */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-3">SEND Tribunals & Appeals</h3>
                <p className="text-gray-700 mb-4">
                  If your local authority has refused your request for an EHCP, or if you disagree with the plan they've issued, you have a right of appeal to the SEND Tribunal. This can feel daunting, but you don't have to do it alone.
                </p>
                <p className="text-gray-700 mb-4">
                  I can support you by:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Explaining the tribunal process</li>
                  <li>• Helping you gather evidence and build your case</li>
                  <li>• Advising on representation and next steps</li>
                  <li>• Offering emotional support through a stressful process</li>
                </ul>
              </div>

              {/* SEN Understanding */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-600 mb-3">Understanding SEN Needs & Diagnoses</h3>
                <p className="text-gray-700 mb-4">
                  Whether your child has been diagnosed with dyslexia, dyscalculia, autism, ADHD, or other special needs, understanding what this means for their learning is crucial. I can help you understand:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• What the diagnosis means and how it affects learning</li>
                  <li>• What accommodations and support your child might need</li>
                  <li>• How to work with schools to implement support</li>
                  <li>• Recommended strategies and interventions</li>
                  <li>• Where to access further specialist input</li>
                </ul>
              </div>

              {/* Parent Support */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Parent Support & Listening</h3>
                <p className="text-gray-700 mb-4">
                  Being a parent of a child with SEN comes with unique challenges. You may feel:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Overwhelmed by systems and processes</li>
                  <li>• Frustrated that your child isn't getting what they need</li>
                  <li>• Lonely or unsupported</li>
                  <li>• Uncertain about the future</li>
                  <li>• Exhausted from fighting for your child</li>
                </ul>
                <p className="text-gray-700">
                  I'm here to listen without judgment, share my own experiences, offer practical advice, and help you find resources and support networks. You're doing a brilliant job.
                </p>
              </div>

              {/* School Communication */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-cyan-600 mb-3">Working with Schools</h3>
                <p className="text-gray-700 mb-4">
                  Advocating for your child within school settings can be challenging. I can help you:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Communicate effectively with teachers and SENCOs</li>
                  <li>• Request appropriate adjustments and accommodations</li>
                  <li>• Understand school reports and assessments</li>
                  <li>• Plan transitions (from KS1 to KS2, Primary to Secondary, etc.)</li>
                  <li>• Address concerns about provision or progress</li>
                </ul>
              </div>

              {/* Signposting & Resources */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-600 mb-3">Signposting & Resources</h3>
                <p className="text-gray-700 mb-4">
                  There are many organisations and resources available to parents of children with SEN. I can help you find:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Local parent support groups</li>
                  <li>• Specialist assessment services</li>
                  <li>• Funding and grants for therapy or support</li>
                  <li>• Educational psychology and other professional input</li>
                  <li>• Respite care and family support services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Listen to Me? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Listen to Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-emerald-50 rounded-lg p-8 text-center border-l-4 border-emerald-600">
                <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Parent of 4 SEN Children</h3>
                <p className="text-gray-700">
                  I've walked this journey. I've fought for EHCPs, navigated tribunals, and managed complex needs across 4 children. I understand the emotional and practical reality.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-8 text-center border-l-4 border-blue-700">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trained & Experienced</h3>
                <p className="text-gray-700">
                  With a BA (Hons) in Professional Practice in Special Needs Education and 25 years in the field, I combine lived experience with professional expertise.
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-8 text-center border-l-4 border-amber-600">
                <div className="text-5xl mb-4">💙</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Someone Who Cares</h3>
                <p className="text-gray-700">
                  I'm not here to judge or pity. I'm here to support, empower, and help you advocate effectively for your child. Your voice matters.
                </p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-amber-50 rounded-lg p-8 border-l-4 border-amber-600 mb-16">
            <h3 className="text-lg font-bold text-amber-900 mb-3">Important Note</h3>
            <p className="text-gray-700">
              While I can offer guidance, advice, and emotional support based on my experience and knowledge, I am not a lawyer. For complex legal matters, particularly around tribunal representation, you may want to seek specialist legal advice or support from organisations like <strong>IPSEA</strong> (Independent Parental Special Education Advice) or <strong>ACE</strong> (Alliance for Inclusive Education). Many such organisations offer free or low-cost advice.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-emerald-50 rounded-lg p-12 text-center border-l-4 border-emerald-600 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Talk About Your Child's Needs</h3>
            <p className="text-gray-700 mb-6">
              Whether you need tutoring, advocacy support, or someone to listen and understand, I'm here. Contact me for a free consultation.
            </p>
            <a
              href="tel:07908845498"
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition"
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
