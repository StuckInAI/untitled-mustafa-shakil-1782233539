import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#fdf6ee]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#c9973a] text-sm uppercase tracking-[0.3em] mb-3 font-light">Kind Words</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2c1a0e] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            What Customers Say
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-24 bg-[#c9973a]" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[#e8b96a]/20 flex flex-col"
            >
              {/* Gold quote mark */}
              <div
                className="text-6xl leading-none text-[#e8b96a] mb-2 select-none"
                style={{ fontFamily: 'Georgia, serif', lineHeight: '1' }}
              >
                "
              </div>
              <p className="text-[#4a2c17] leading-relaxed text-sm flex-1 italic">
                {t.quote}
              </p>
              <div className="mt-6 pt-4 border-t border-[#e8b96a]/30">
                <p className="font-bold text-[#2c1a0e] text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                  {t.name}
                </p>
                <p className="text-[#c9973a] text-xs uppercase tracking-wide mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
