import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">London Maths & English Tutoring</h3>
            <p className="text-gray-400 text-sm">
              Bridging the gaps in your child's learning with specialist SEN support and academic boosters.
            </p>
            <p className="text-gray-400 text-sm mt-3">
              <strong>Rosalind Reindorp</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/english" className="text-gray-400 hover:text-white transition">
                  English
                </Link>
              </li>
              <li>
                <Link href="/maths" className="text-gray-400 hover:text-white transition">
                  Maths
                </Link>
              </li>
              <li>
                <Link href="/advocacy" className="text-gray-400 hover:text-white transition">
                  Advocacy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <a
                  href="tel:07908845498"
                  className="hover:text-white transition font-semibold"
                >
                  📞 07908 845 498
                </a>
              </li>
              <li className="text-gray-400">
                <span>North West London</span>
              </li>
              <li className="text-gray-400 text-sm">
                Specialist in SEN support, SATs preparation, and entrance exam coaching
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2026 London Maths and English Tutoring. All rights reserved. | Specialising in SEN Support | North West London
          </p>
        </div>
      </div>
    </footer>
  );
}
