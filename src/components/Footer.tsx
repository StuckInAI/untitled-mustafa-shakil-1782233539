const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0a04] text-[#f5e6d3]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍫</span>
              <span
                className="text-xl font-bold text-[#e8b96a]"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Chocolate Hub
              </span>
            </div>
            <p className="text-[#f5e6d3]/60 text-sm leading-relaxed max-w-xs">
              Crafting exceptional chocolates for life's most meaningful moments since 2014.
              Premium quality, personal touch.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#e8b96a] text-xs uppercase tracking-[0.2em] mb-5 font-light">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#f5e6d3]/60 hover:text-[#e8b96a] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="text-[#e8b96a] text-xs uppercase tracking-[0.2em] mb-5 font-light">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#f5e6d3]/60">
              <li>hello@chocolatehub.co.uk</li>
              <li>+44 20 1234 5678</li>
              <li>Mon – Fri: 9am – 6pm</li>
              <li>Sat: 10am – 4pm</li>
            </ul>
          </div>
        </div>

        {/* Divider & copyright */}
        <div className="mt-12 pt-8 border-t border-[#4a2c17] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f5e6d3]/40">
          <p>© {year} Chocolate Hub. All rights reserved.</p>
          <p>Crafted with love &amp; fine cacao 🍫</p>
        </div>
      </div>
    </footer>
  );
}
