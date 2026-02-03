import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'About Rosalind | London Maths and English Tutoring',
  description: 'Meet Rosalind Reindorp - SEN specialist tutor with 25 years experience and lived experience as parent of 4 children with special needs.',
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <HeroSection
        title="About Me"
        subtitle="My journey, my passion, and why I do what I do"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* My Story */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Story</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2 space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  My journey into education and advocacy began long before I became a tutor. I've always been driven by a desire to help others, to make learning accessible, and to support those who struggle. This passion shaped my career and my life.
                </p>

                <p className="leading-relaxed">
                  <strong>As an educator,</strong> I've dedicated 25 years to working in schools and supporting children with diverse learning needs. I've seen firsthand how the right approach, the right teacher, and the right support can transform a child's relationship with learning. I've witnessed reluctant readers discover the joy of books, anxious mathematicians build confidence with numbers, and struggling learners blossom when given individualised, patient support.
                </p>

                <p className="leading-relaxed">
                  <strong>As a parent,</strong> my perspective changed dramatically when four of my own children were diagnosed with special needs. Suddenly, I wasn't just an educator observing SEN from the outside—I was living it. I fought for assessments, navigated the EHCP process, attended tribunal hearings, managed complex needs, and learned that being a parent of children with SEN is one of the most challenging and rewarding experiences of my life.
                </p>

                <p className="leading-relaxed">
                  This dual experience—as both professional and parent—has shaped who I am as a tutor. I understand the educational barriers my clients face, but I also understand the emotional journey of their parents. I've been there. I know what it feels like to be told your child has a learning difference, to worry about their future, and to fight for the support they deserve.
                </p>

                <p className="leading-relaxed font-semibold text-purple-600">
                  That's why I founded London Maths and English Tutoring. To bridge the gaps. To support families. And to make sure every child—regardless of their learning profile—has the chance to succeed.
                </p>
              </div>

              <div className="bg-emerald-50 rounded-lg p-8 h-fit border-l-4 border-emerald-600">
                <h3 className="text-2xl font-bold text-emerald-600 mb-6">Who I Am</h3>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <p className="font-semibold">Rosalind Reindorp</p>
                    <p className="text-sm text-gray-600">Specialist SEN Tutor</p>
                  </li>
                  <li className="border-t border-blue-200 pt-4">
                    <p className="text-sm"><strong>Location:</strong> North West London</p>
                  </li>
                  <li>
                    <p className="text-sm"><strong>Experience:</strong> 25 years in education</p>
                  </li>
                  <li>
                    <p className="text-sm"><strong>Qualifications:</strong> BA (Hons) in Professional Practice in Special Needs Education</p>
                  </li>
                  <li>
                    <p className="text-sm"><strong>Specialisms:</strong> SEN, dyslexia, dyscalculia, ADHD, autism, SEMH, reluctant readers, exam preparation</p>
                  </li>
                  <li>
                    <p className="text-sm"><strong>Personal:</strong> Parent of 4 children with special needs. EHCP experience.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Qualifications & Training */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Qualifications & Training</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold text-emerald-600 mb-4">Education & Qualifications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>BA (Hons) in Professional Practice in Special Needs Education</strong> – demonstrating formal training in understanding, supporting, and teaching children with diverse learning needs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>25 years of professional experience</strong> in education, working with children and families</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Specialist training in SEN interventions</strong> – phonics, literacy intervention schemes, numeracy strategies, multi-sensory approaches</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Continuous professional development</strong> – always updating my knowledge of best practice</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-700">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Why My Training Matters</h3>
                <p className="text-gray-700 mb-4">
                  Special needs education is a specialised field. My degree and training mean I understand:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• The neuroscience behind learning difficulties</li>
                  <li>• How dyslexia, dyscalculia, autism, and ADHD affect learning</li>
                  <li>• Evidence-based intervention strategies</li>
                  <li>• Multi-sensory, differentiated teaching methods</li>
                  <li>• How to adapt and scaffold learning for struggling learners</li>
                  <li>• The emotional and social aspects of SEN</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Teaching Philosophy</h2>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-50 to-transparent rounded-lg p-8 border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-gray-909 mb-3">1. Every Child Can Succeed</h3>
                <p className="text-gray-700">
                  I believe passionately that every child, regardless of their learning profile, can succeed. Struggling doesn't mean lacking ability—it often means the teaching approach hasn't matched the learning style yet. My job is to find what works for YOUR child.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-transparent rounded-lg p-8 border-l-4 border-pink-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Understanding Before Speed</h3>
                <p className="text-gray-700">
                  I prioritise deep understanding over rote learning. A child who truly understands addition will solve problems confidently; one who's just memorised facts will struggle with novel situations. We go slowly, ensure foundations are secure, and only move forward when the child is ready.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-transparent rounded-lg p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Individualised, Differentiated Teaching</h3>
                <p className="text-gray-700">
                  One-size-fits-all teaching doesn't work, especially for children with SEN. I tailor every lesson to match your child's learning style, pace, interests, and needs. Some children learn through movement, others through visual aids, others through stories. I'll find the approach that clicks for YOUR child.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-transparent rounded-lg p-8 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Step-by-Step Guidance</h3>
                <p className="text-gray-700">
                  Learning doesn't happen all at once. I break down complex concepts into manageable steps, scaffold learning with concrete materials, visuals, and models, and celebrate every small success along the way. Progress might be slower, but it's deeper and more meaningful.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-transparent rounded-lg p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Making Learning Fun</h3>
                <p className="text-gray-700">
                  Learning should be engaging and enjoyable, not a chore. I use games, practical activities, stories, and real-world contexts to make Maths and English come alive. When children are having fun, they're more engaged, they remember more, and they develop a positive attitude to learning.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-transparent rounded-lg p-8 border-l-4 border-blue-700">
                <h3 className="text-xl font-bold text-gray-900 mb-3">6. Building Confidence & Self-Belief</h3>
                <p className="text-gray-700">
                  Many children with learning difficulties have experienced failure, frustration, or shame. Rebuilding confidence is as important as teaching academics. I create a safe, pressure-free environment where mistakes are learning opportunities, efforts are celebrated, and every child is valued. By the end, I want your child to believe they CAN succeed.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-transparent rounded-lg p-8 border-l-4 border-blue-700">
                <h3 className="text-xl font-bold text-gray-900 mb-3">7. Bridging Gaps</h3>
                <p className="text-gray-700">
                  If there are gaps in foundational knowledge, we address them. There's no shame in going back to basics if it means the child can build secure, confident learning from solid foundations. We'll work at their pace until they're ready to move forward.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-transparent rounded-lg p-8 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">8. Patience & Empathy</h3>
                <p className="text-gray-700">
                  Patience isn't just a virtue—it's essential in education, especially with children who struggle. I understand that learning can be frustrating, that progress isn't always linear, and that sometimes children need time and support. I'm here for the long journey, not just quick fixes.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why I'm Passionate About This Work</h2>

            <div className="bg-emerald-50 rounded-lg p-12">
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <strong>I see every child's potential.</strong> I meet children who've been told they're "not bright," "lazy," or "difficult." But when given the right support and the right teacher, they flourish. That transformation is why I do this work.
                </p>

                <p className="leading-relaxed">
                  <strong>I understand the frustration of parents.</strong> I've been the parent sitting across from a teacher, hearing that my child "isn't trying," fighting for assessments, battling for EHCPs, and worrying about the future. I get it. I've lived it. And I want to be the ally other parents need.
                </p>

                <p className="leading-relaxed">
                  <strong>I believe in the power of differentiation.</strong> When teaching is tailored to how a child actually learns—not how we expect them to learn—magic happens. I've seen it countless times. A child who was failing suddenly succeeds. A reluctant reader discovers a favourite author. A maths-phobic child starts enjoying numbers. These moments fuel my passion.
                </p>

                <p className="leading-relaxed">
                  <strong>I'm driven by equity and inclusion.</strong> Every child deserves access to quality education and support. My background working in schools with diverse populations reinforced this belief. I'm committed to supporting families in North West London, particularly those navigating the complexities of special needs.
                </p>

                <p className="text-lg font-semibold text-pink-600">
                  Ultimately, I do this work because I believe bridging learning gaps changes lives. Not just academically, but emotionally, socially, and in terms of confidence and self-belief. That's why I'm here.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-emerald-50 rounded-lg p-12 text-center border-l-4 border-emerald-600 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h3>
            <p className="text-gray-700 mb-6">
              I'd love to meet your family and discuss how I can support your child's learning. Contact me for a free, no-obligation consultation.
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
