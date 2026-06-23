import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.subject) e.subject = 'Please select a subject.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  const inputClass = (err?: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-[#2c1a0e] bg-white focus:outline-none focus:ring-2 focus:ring-[#c9973a]/50 transition-all duration-200 ${
      err ? 'border-red-400' : 'border-[#e8b96a]/40 focus:border-[#c9973a]'
    }`;

  return (
    <section id="contact" className="py-24 bg-[#2c1a0e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#e8b96a] text-sm uppercase tracking-[0.3em] mb-3 font-light">Reach Out</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#fdf6ee] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Get in Touch
          </h2>
          <p className="text-[#f5e6d3]/70 max-w-xl mx-auto leading-relaxed">
            Have a question, a custom order in mind, or just want to say hello? We'd love to hear from you.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-24 bg-[#e8b96a]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="text-[#e8b96a] font-bold text-lg mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Contact Details
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-9 h-9 rounded-full bg-[#4a2c17] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#e8b96a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#f5e6d3]/50 text-xs uppercase tracking-wide mb-1">Email</p>
                    <p className="text-[#fdf6ee] text-sm">hello@chocolatehub.co.uk</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-9 h-9 rounded-full bg-[#4a2c17] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#e8b96a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#f5e6d3]/50 text-xs uppercase tracking-wide mb-1">Phone</p>
                    <p className="text-[#fdf6ee] text-sm">+44 20 1234 5678</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-9 h-9 rounded-full bg-[#4a2c17] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#e8b96a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#f5e6d3]/50 text-xs uppercase tracking-wide mb-1">Hours</p>
                    <p className="text-[#fdf6ee] text-sm">Mon – Fri: 9am – 6pm</p>
                    <p className="text-[#fdf6ee] text-sm">Sat: 10am – 4pm</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-[#e8b96a] text-xs uppercase tracking-wide mb-4">Follow Us</p>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 rounded-full bg-[#4a2c17] hover:bg-[#c9973a] flex items-center justify-center cursor-pointer transition-colors duration-200 group"
                    title={social}
                  >
                    <span className="text-[#e8b96a] group-hover:text-[#2c1a0e] text-xs font-bold">
                      {social[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative quote */}
            <div className="mt-auto rounded-xl bg-[#4a2c17]/60 p-6 border border-[#e8b96a]/10">
              <p className="text-[#f5e6d3]/80 italic text-sm leading-relaxed">
                "Every enquiry is treated with the same care we put into every chocolate we make."
              </p>
              <p className="text-[#e8b96a] text-xs mt-3 uppercase tracking-wide">— The Chocolate Hub Team</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16 px-8">
                  <div className="text-6xl mb-6">🍫</div>
                  <h3
                    className="text-2xl font-bold text-[#e8b96a] mb-4"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Thank You!
                  </h3>
                  <p className="text-[#f5e6d3]/80 max-w-sm mx-auto leading-relaxed">
                    We've received your message and will get back to you within 24 hours. In the meantime,
                    feel free to explore our full range of chocolates.
                  </p>
                  <button
                    className="mt-8 bg-[#c9973a] hover:bg-[#e8b96a] text-[#2c1a0e] px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#f5e6d3]/70 text-xs uppercase tracking-wide mb-2">
                      Full Name <span className="text-[#e8b96a]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass(errors.name)}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[#f5e6d3]/70 text-xs uppercase tracking-wide mb-2">
                      Email Address <span className="text-[#e8b96a]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass(errors.email)}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#f5e6d3]/70 text-xs uppercase tracking-wide mb-2">
                      Phone <span className="text-[#f5e6d3]/40">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+44 7700 900000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass()}
                    />
                  </div>
                  <div>
                    <label className="block text-[#f5e6d3]/70 text-xs uppercase tracking-wide mb-2">
                      Subject <span className="text-[#e8b96a]">*</span>
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass(errors.subject)}
                    >
                      <option value="">Select a subject…</option>
                      <option value="general">General Enquiry</option>
                      <option value="custom">Custom Order</option>
                      <option value="corporate">Corporate Gift</option>
                      <option value="wedding">Wedding Favours</option>
                    </select>
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[#f5e6d3]/70 text-xs uppercase tracking-wide mb-2">
                    Message <span className="text-[#e8b96a]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us about your order, event, or question…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass(errors.message)} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9973a] hover:bg-[#e8b96a] text-[#2c1a0e] py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#c9973a]/30 tracking-wide"
                >
                  Send Message 🍫
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
