import { gallery } from '@/lib/data';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#2c1a0e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#e8b96a] text-sm uppercase tracking-[0.3em] mb-3 font-light">Our Creations</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#fdf6ee] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Gallery
          </h2>
          <p className="text-[#f5e6d3]/70 max-w-xl mx-auto leading-relaxed">
            A glimpse into the artistry and attention to detail that goes into every Chocolate Hub creation.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-24 bg-[#e8b96a]" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className={`relative group rounded-xl overflow-hidden ${
                index === 0 || index === 5 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a0e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-[#e8b96a] font-semibold text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
