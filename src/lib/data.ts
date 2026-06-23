import { Service, Testimonial, GalleryItem, FaqItem } from '@/types';

export const services: Service[] = [
  {
    id: 'custom-boxes',
    icon: '🎁',
    title: 'Custom Gift Boxes',
    description: 'Beautifully curated chocolate gift boxes personalised with your message, ribbon, and choice of premium chocolates for any occasion.',
  },
  {
    id: 'wedding-favours',
    icon: '💍',
    title: 'Wedding Favours',
    description: 'Elegant handcrafted chocolate favours for your special day — branded, wrapped, and tailored to match your wedding theme perfectly.',
  },
  {
    id: 'corporate-gifts',
    icon: '🏢',
    title: 'Corporate Gifts',
    description: 'Impress clients and reward teams with premium branded chocolate hampers, bulk orders, and bespoke corporate gifting solutions.',
  },
  {
    id: 'tasting-experiences',
    icon: '✨',
    title: 'Tasting Experiences',
    description: 'Join our exclusive guided chocolate tasting sessions to explore the rich world of single-origin and artisan chocolate.',
  },
  {
    id: 'seasonal-collections',
    icon: '🌸',
    title: 'Seasonal Collections',
    description: "Limited-edition seasonal boxes crafted for Easter, Christmas, Valentine's Day, and other special celebrations throughout the year.",
  },
  {
    id: 'workshops',
    icon: '🍫',
    title: 'Chocolate Workshops',
    description: 'Hands-on chocolate making workshops for individuals, couples, and groups — a unique and memorable creative experience.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Mitchell',
    role: 'Bride',
    quote: 'The wedding favours from Chocolate Hub were absolutely stunning. Every guest complimented them and the quality was exceptional. Couldn\'t be happier!',
  },
  {
    id: 't2',
    name: 'James Thornton',
    role: 'Marketing Manager',
    quote: 'We ordered corporate gifts for 200 clients and the whole experience was seamless. The chocolates were luxurious and our clients were genuinely impressed.',
  },
  {
    id: 't3',
    name: 'Priya Sharma',
    role: 'Chocolate Enthusiast',
    quote: 'The tasting experience was one of the best afternoons I\'ve had. So much knowledge, such incredible chocolate — I left with a completely new appreciation.',
  },
  {
    id: 't4',
    name: 'Daniel Cross',
    role: 'Regular Customer',
    quote: 'I\'ve been ordering from Chocolate Hub for three years now. The seasonal collections are always something to look forward to. Truly world-class quality.',
  },
];

export const gallery: GalleryItem[] = [
  { id: 'g1', title: 'Artisan Truffle Collection', imageUrl: 'https://picsum.photos/seed/choc-truffle/600/400' },
  { id: 'g2', title: 'Wedding Favour Boxes', imageUrl: 'https://picsum.photos/seed/choc-wedding/600/400' },
  { id: 'g3', title: 'Dark Chocolate Bark', imageUrl: 'https://picsum.photos/seed/choc-bark/600/400' },
  { id: 'g4', title: 'Corporate Gift Hampers', imageUrl: 'https://picsum.photos/seed/choc-hamper/600/400' },
  { id: 'g5', title: 'Seasonal Easter Box', imageUrl: 'https://picsum.photos/seed/choc-easter/600/400' },
  { id: 'g6', title: 'Chocolate Workshop', imageUrl: 'https://picsum.photos/seed/choc-workshop/600/400' },
  { id: 'g7', title: 'Single-Origin Selection', imageUrl: 'https://picsum.photos/seed/choc-origin/600/400' },
  { id: 'g8', title: 'Luxury Gift Ribbon Box', imageUrl: 'https://picsum.photos/seed/choc-luxury/600/400' },
];

export const faqs: FaqItem[] = [
  {
    id: 'f1',
    question: 'How do I place a custom order?',
    answer: 'Simply fill out our contact form below, selecting "Custom Order" from the subject dropdown. Describe what you have in mind and we\'ll get back to you within 24 hours to discuss the details and provide a quote.',
  },
  {
    id: 'f2',
    question: 'What is your minimum order for corporate gifts?',
    answer: 'We cater to corporate orders of all sizes, with a minimum of 10 units for branded packaging. For larger bulk orders (50+), we offer preferential pricing — please get in touch to discuss your requirements.',
  },
  {
    id: 'f3',
    question: 'Do you offer delivery? How long does it take?',
    answer: 'Yes! We deliver nationwide. Standard delivery takes 3–5 business days, while express next-day delivery is available for an additional fee. For large or custom orders, lead time is typically 7–10 business days.',
  },
  {
    id: 'f4',
    question: 'Can you accommodate dietary requirements?',
    answer: 'Absolutely. We offer a range of options including dairy-free, vegan, gluten-free, and nut-free chocolates. Please let us know your requirements when placing an order so we can tailor your selection accordingly.',
  },
  {
    id: 'f5',
    question: 'How far in advance should I order for a wedding?',
    answer: 'We recommend placing wedding orders at least 4–6 weeks in advance to ensure we can accommodate your chosen designs, quantities, and packaging. For large weddings (150+ guests), 8 weeks ahead is ideal.',
  },
  {
    id: 'f6',
    question: 'Do you offer samples before a large order?',
    answer: 'Yes, we offer tasting sample packs for a small fee (redeemable against your full order) so you can try our chocolates before committing to a bulk or custom order. Contact us to arrange a sample pack.',
  },
];
