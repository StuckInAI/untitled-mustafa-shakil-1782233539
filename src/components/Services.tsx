import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f5e6d3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#c9973a] text-sm uppercase tracking-[0.3em] mb-3 font-light">What We Offer</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2c1a0e] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Our Services
          </h2>
          <p className="text-[#7b4a2d] max-w-xl mx-auto leading-relaxed">
            From intimate gifts to grand corporate gestures, we have a chocolate solution crafted just for you.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-24 bg-[#c9973a]" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#fdf6ee] rounded-2xl p-8 shadow-sm border border-[#e8b96a]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3
                className="text-xl font-bold text-[#2c1a0e] mb-3 group-hover:text-[#c9973a] transition-colors duration-200"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {service.title}
              </h3>
              <p className="text-[#7b4a2d] leading-relaxed text-sm">{service.description}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-[#c9973a]/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
