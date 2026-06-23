export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0a04 0%, #2c1a0e 40%, #4a2c17 70%, #7b4a2d 100%)' }}
    >
      {/* Decorative SVG shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-16 left-8 opacity-10 w-48 h-48" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#e8b96a" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" stroke="#e8b96a" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" fill="#e8b96a" />
        </svg>
        <svg className="absolute bottom-20 right-12 opacity-10 w-64 h-64" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="10" width="80" height="80" rx="12" stroke="#c9973a" strokeWidth="2" />
          <rect x="25" y="25" width="50" height="50" rx="8" stroke="#c9973a" strokeWidth="1.5" />
          <rect x="38" y="38" width="24" height="24" rx="4" fill="#c9973a" />
        </svg>
        <svg className="absolute top-1/3 right-1/4 opacity-5 w-32 h-32" viewBox="0 0 100 100" fill="none">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="#e8b96a" strokeWidth="2" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7b4a2d] opacity-10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[#e8b96a] text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-light">
          Artisan · Premium · Handcrafted
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold text-[#fdf6ee] mb-6 leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Chocolate
          <span className="block text-[#e8b96a]">Reimagined</span>
        </h1>
        <p className="text-[#f5e6d3] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          From bespoke gift boxes to unforgettable wedding favours — we craft exceptional chocolates
          for life's most meaningful moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#c9973a] hover:bg-[#e8b96a] text-[#2c1a0e] px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#c9973a]/30 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="border border-[#e8b96a] text-[#e8b96a] hover:bg-[#e8b96a]/10 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
          >
            Explore Our Range
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fdf6ee] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#e8b96a] opacity-60 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
