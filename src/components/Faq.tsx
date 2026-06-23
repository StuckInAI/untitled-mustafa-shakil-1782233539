import { useState } from 'react';
import { faqs } from '@/lib/data';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-24 bg-[#f5e6d3]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#c9973a] text-sm uppercase tracking-[0.3em] mb-3 font-light">Got Questions?</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2c1a0e] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Frequently Asked
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-24 bg-[#c9973a]" />
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#c9973a] bg-white shadow-md'
                    : 'border-[#e8b96a]/30 bg-[#fdf6ee] hover:border-[#c9973a]/50'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  onClick={() => toggle(faq.id)}
                >
                  <span
                    className={`font-semibold text-sm leading-snug ${
                      isOpen ? 'text-[#c9973a]' : 'text-[#2c1a0e]'
                    }`}
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#c9973a] border-[#c9973a] text-white rotate-45'
                        : 'border-[#c9973a] text-[#c9973a]'
                    }`}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-[#7b4a2d] leading-relaxed text-sm">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
