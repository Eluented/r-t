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
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="mb-8 md:mb-10 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm">
          <div className="flex flex-col gap-5 md:gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Rosalind's Tuition</h3>
              <p className="max-w-2xl mx-auto md:mx-0 text-sm md:text-base text-gray-300 leading-relaxed">
                Bridging the gaps in your child's learning with specialist SEN support and academic boosters.
              </p>
              <p className="text-sm font-semibold text-gray-200">Rosalind Reindorp</p>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <a
                href="tel:07908845498"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 hover:text-white transition-colors duration-200"
              >
                <span>📞</span>
                <span>07908 845 498</span>
              </a>
              <a
                href="mailto:rosalindreindorp@sky.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-blue-300/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-200 hover:bg-blue-500/20 hover:text-white transition-colors duration-200"
              >
                <span>✉️</span>
                <span>rosalindreindorp@sky.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 mb-8 md:mb-10">
          <nav aria-label="Footer quick links" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <h4 className="text-base md:text-lg font-bold text-white tracking-tight">Quick Links</h4>
            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-3 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex w-full rounded-lg px-2.5 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <h4 className="text-base md:text-lg font-bold text-white tracking-tight">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="tel:07908845498" className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200">📞 07908 845 498</a>
              </li>
              <li>
                <a href="mailto:rosalindreindorp@sky.com" className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200 break-all">✉️ rosalindreindorp@sky.com</a>
              </li>
              <li>📍 North West London</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <h4 className="text-base md:text-lg font-bold text-white tracking-tight">Specialist Support</h4>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Specialist in SEN support, SATs preparation, and entrance exam coaching.
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

        <div className="border-t border-white/10 pt-5 md:pt-6">
          <p className="text-center text-gray-400 text-[11px] sm:text-sm leading-relaxed">
            © 2026 Rosalind's Tuition. All rights reserved. | Specialising in SEN Support | North West London
          </p>
        </div>
      </div>
    </footer>
  );
}
