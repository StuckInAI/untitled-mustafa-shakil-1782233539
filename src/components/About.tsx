const stats = [
  { value: '10+', label: 'Years of Craft' },
  { value: '500+', label: 'Premium Products' },
  { value: '10,000+', label: 'Happy Customers' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#fdf6ee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/chocolate-hub/600/500"
                alt="Chocolate Hub artisan chocolates"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a0e]/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c9973a]/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#c9973a]/40 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-[#c9973a] text-sm uppercase tracking-[0.3em] mb-3 font-light">Our Story</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#2c1a0e] mb-6 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              A Passion for
              <span className="text-[#c9973a]"> Perfection</span>
            </h2>
            <div className="space-y-4 text-[#4a2c17] leading-relaxed text-base">
              <p>
                Chocolate Hub was born from a simple belief — that chocolate, made with care and the finest
                ingredients, has the power to transform ordinary moments into extraordinary memories.
              </p>
              <p>
                Our chocolatiers source single-origin cacao from ethical farms around the world, blending
                traditional techniques with modern creativity to produce confections that delight every sense.
              </p>
              <p>
                Whether you're celebrating a wedding, rewarding your team, or simply treating someone you
                love, every piece we craft carries the same dedication to quality that has defined us
                for over a decade.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl md:text-4xl font-bold text-[#c9973a] mb-1"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#7b4a2d] uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
