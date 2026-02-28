import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/english', label: 'English' },
    { href: '/maths', label: 'Maths' },
    { href: '/advocacy', label: 'Advocacy' },
    { href: '/about', label: 'About Me' },
    { href: '/contact', label: 'Contact' },
  ];

  const specialisms = [
    'SEN Support',
    'SATs Preparation',
    'Entrance Exam Coaching',
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gray-950 text-gray-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="mb-8 md:mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">Rosalind's Tuition</h3>
              <p className="mt-2 max-w-2xl text-sm md:text-base text-gray-300 leading-relaxed">
                Bridging the gaps in your child's learning with specialist SEN support and academic boosters.
              </p>
              <p className="mt-3 text-sm font-semibold text-gray-200">Rosalind Reindorp</p>
            </div>

            <a
              href="tel:07908845498"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 hover:text-white transition-colors duration-200"
            >
              <span>📞</span>
              <span>07908 845 498</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr] md:gap-10 mb-10">
          <nav aria-label="Footer quick links" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-bold text-white tracking-tight">Quick Links</h4>
            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-bold text-white tracking-tight">Contact</h4>
            <p className="mt-4 text-sm text-gray-300">North West London</p>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
              Specialist in SEN support, SATs preparation, and entrance exam coaching
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {specialisms.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-gray-400 text-xs sm:text-sm leading-relaxed">
            © 2026 Rosalind's Tuition. All rights reserved. | Specialising in SEN Support | North West London
          </p>
        </div>
      </div>
    </footer>
  );
}
