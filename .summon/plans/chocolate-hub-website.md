---
status: implemented
title: Chocolate Hub Business Website
---

## Goal
A single-page, elegant and professional business website for "Chocolate Hub" — a chocolate business — with all key sections and a contact form so customers can reach them.

---

## Steps

### 1. Project foundation
- Ensure `/app/src/styles/global.css` starts with `@import "tailwindcss";` and defines a rich, elegant colour palette using Tailwind v4 CSS variables: deep chocolate brown, warm cream/ivory, soft gold accent, and dark text tones.
- Ensure `/app/src/main.tsx` imports the global stylesheet once and mounts the root `App` component.

### 2. Shared types
- Create `/app/src/types/index.ts` to define shared TypeScript types: `Testimonial`, `Service`, `GalleryItem`, and `FaqItem`.

### 3. Static data / content library
- Create `/app/src/lib/data.ts` to hold all static content arrays:
  - `services`: list of chocolate-related offerings (e.g. custom boxes, wedding favours, corporate gifts, tasting experiences).
  - `testimonials`: 3–4 sample customer reviews with name, role, and quote.
  - `gallery`: 6–8 items with a title and a placeholder image URL (use `https://picsum.photos/seed/<slug>/600/400`).
  - `faqs`: 5–6 common questions and answers about ordering, delivery, custom orders, etc.

### 4. Navigation component
- Create `/app/src/components/Navbar.tsx`.
- Fixed top bar with the "Chocolate Hub" logo/wordmark on the left and smooth-scroll anchor links on the right: About, Services, Gallery, Testimonials, FAQ, Contact.
- Collapses into a hamburger menu on mobile.
- Background becomes solid (deep brown) on scroll, transparent at top.

### 5. Hero section
- Create `/app/src/components/Hero.tsx`.
- Full-viewport-height section with a rich chocolate-toned gradient background.
- Large headline, a short tagline, and a "Get in Touch" call-to-action button that scrolls to the contact section.
- Decorative subtle pattern or floating chocolate-themed SVG shapes in the background.

### 6. About section
- Create `/app/src/components/About.tsx`.
- Two-column layout (image left, text right) on desktop; stacked on mobile.
- Uses a placeholder image (`https://picsum.photos/seed/chocolate-hub/600/500`).
- Short brand story paragraph and 3 highlight stats (e.g. "10+ Years", "500+ Products", "1000+ Happy Customers") displayed in an elegant row.

### 7. Services section
- Create `/app/src/components/Services.tsx`.
- Section heading and a responsive card grid (3 columns desktop, 2 tablet, 1 mobile).
- Each card shows an icon, service name, and a short description from `data.ts`.
- Cards have a subtle hover lift effect.

### 8. Gallery / Portfolio section
- Create `/app/src/components/Gallery.tsx`.
- Masonry-style or uniform grid of image cards using the gallery data from `data.ts`.
- Each image has a hover overlay showing the item title.
- Responsive: 3 columns desktop, 2 tablet, 1 mobile.

### 9. Testimonials section
- Create `/app/src/components/Testimonials.tsx`.
- Horizontal scrollable row or a 3-column grid of quote cards.
- Each card shows a quote, customer name, and role.
- Gold accent quotation marks for decoration.

### 10. FAQ section
- Create `/app/src/components/Faq.tsx`.
- Accordion-style list using local React state (no library needed).
- Each item expands/collapses on click to reveal the answer.
- Smooth animated expand using Tailwind transition classes.

### 11. Contact Form section
- Create `/app/src/components/Contact.tsx`.
- Section with a short intro, then a form with fields: Full Name, Email, Phone (optional), Subject (dropdown: General Enquiry, Custom Order, Corporate Gift, Wedding), Message.
- All required fields show inline validation feedback on submit.
- On successful submission (client-side only, no backend), show a friendly success message.
- Form sits alongside a small info panel showing a business email placeholder, phone placeholder, and social media icons.

### 12. Footer component
- Create `/app/src/components/Footer.tsx`.
- Dark brown background with the wordmark, a short tagline, navigation links, and a copyright notice.

### 13. Main App assembly
- Update `/app/src/App.tsx` to compose all sections in order: `Navbar`, `Hero`, `About`, `Services`, `Gallery`, `Testimonials`, `Faq`, `Contact`, `Footer`.
- Each section has a matching `id` attribute for smooth-scroll anchor navigation.
- Ensure overall page scroll behaviour is smooth (`scroll-behavior: smooth` via global CSS).
