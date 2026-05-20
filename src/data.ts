/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SalonService, Testimonial, GalleryItem } from './types.js';

// Custom generated asset paths are defined here for reference
export const BRAND_ASSETS = {
  heroBg: '/src/assets/images/luxury_salon_hero_1779272216226.png',
  hairMakeoverAfter: '/src/assets/images/makeup_makeover_after_1779272237310.png',
  maleGrooming: '/src/assets/images/mens_premium_grooming_1779272257516.png'
};

export const SALON_SERVICES: SalonService[] = [
  {
    id: 'haircut-styling',
    name: 'Haircut & Couture Styling',
    category: 'Hair',
    priceRange: '₹600 - ₹2,500',
    duration: '45 - 60 mins',
    description: 'Expert structural cuts, wash, and luxury finish with professional blowouts tailored to your face shape.',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    popular: true,
    benefits: ['Personalized consultation', 'Luxury hair spa wash', 'High quality setting spray']
  },
  {
    id: 'hair-colour',
    name: 'Balayage & Couture Colouring',
    category: 'Hair',
    priceRange: '₹3,500 - ₹9,500',
    duration: '120 - 180 mins',
    description: 'Bespoke hand-painted balayage, dynamic highlights, or full-coverage global color with ammonia-free formulas.',
    imageUrl: BRAND_ASSETS.hairMakeoverAfter,
    popular: true,
    benefits: ['Fiber protection plex treatment', 'Tone lock serum', 'Professional colourist consultation']
  },
  {
    id: 'facials-skincare',
    name: 'Facials & Rejuvenating Skincare',
    category: 'Skincare',
    priceRange: '₹1,500 - ₹5,000',
    duration: '60 - 95 mins',
    description: 'Ultra-hydrating clinical facials, custom gold glow treatments, and organic botanical skin therapy.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    benefits: ['Deep pore extraction', 'Hydra-boost ultrasound infusion', 'Relaxing facial massage']
  },
  {
    id: 'pedicure-manicure',
    name: 'Spas, Pedicure & Manicure',
    category: 'Nails & Spas',
    priceRange: '₹800 - ₹2,200',
    duration: '45 - 75 mins',
    description: 'Relieving aroma therapies, cuticle care, custom organic scrub, and hydrating mask with a soothing massage.',
    imageUrl: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80&w=800',
    benefits: ['Mineral sea salt soak', 'Essential oil massage', 'High gloss gel finish option']
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal & Occasion Makeup',
    category: 'Celebrity & Bridal',
    priceRange: '₹8,000 - ₹25,000',
    duration: '120 - 180 mins',
    description: 'Breathable HD makeup, high fashion airbrushing, and complete drape setting for your historic day.',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    popular: true,
    benefits: ['Full styling & outfit drape setting', 'Waterproof cinematic base', 'Complimentary trial consultation']
  },
  {
    id: 'beard-grooming',
    name: 'Royal Beard Grooming',
    category: 'Grooming',
    priceRange: '₹350 - ₹900',
    duration: '30 mins',
    description: 'Precision hot-towel razor shaves, dynamic beard alignment, oil treatment, and styling.',
    imageUrl: BRAND_ASSETS.maleGrooming,
    benefits: ['Hot towel tea tree wrap', 'Premium sandalwood beard oil', 'Precision trimmer finish']
  },
  {
    id: 'hair-treatments',
    name: 'Keratin & Olaplex Hair Treatments',
    category: 'Hair',
    priceRange: '₹4,000 - ₹12,000',
    duration: '120 - 150 mins',
    description: 'Intense micro-keratin damage repair systems, hair smoothing, and deep bond-building Olaplex therapy.',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13df79311e?auto=format&fit=crop&q=80&w=800',
    benefits: ['Deep cuticle rebuilding', 'Eliminates 95% frizz', 'Results lasting up to 4 months']
  },
  {
    id: 'waxing-grooming',
    name: 'Waxing & Charcoal Grooming',
    category: 'Grooming',
    priceRange: '₹400 - ₹1,800',
    duration: '30 - 60 mins',
    description: 'Gentle honey or premium liposoluble Rica wax options for all skin types, plus detan charcoal masks.',
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    benefits: ['Low-pain Italian Rica wax', 'Anti-inflammatory after-care', 'Soothing lavender oil finish']
  },
  {
    id: 'celebrity-styling',
    name: 'Elite Celebrity Styling',
    category: 'Celebrity & Bridal',
    priceRange: '₹3,000 - ₹8,000',
    duration: '60 - 90 mins',
    description: 'Red-carpet styling services, dynamic hair extension integration, and high-fashion hair sculpting.',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
    benefits: ['Direct booking with master director', 'HD camera-ready styling', 'Optional custom extensions setup']
  },
  {
    id: 'nail-bar',
    name: 'Nail Art & Extension Bar',
    category: 'Nails & Spas',
    priceRange: '₹1,200 - ₹3,500',
    duration: '60 - 90 mins',
    description: 'Flawless acrylic or gel overlays, intricate custom paint design, chrome overlays, and stone accents.',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    benefits: ['Shatter-proof extensions', 'Intricate hand-painted detail', 'Safe hygienic LED curing']
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'certified-stylists',
    title: 'Certified Master Stylists',
    description: 'Our specialists are highly trained in international hair academies, bringing global trends directly to Padmasri Hills.'
  },
  {
    id: 'hygienic-environment',
    title: 'Double-Hygienic Setup',
    description: 'Surgical-grade ultraviolet sanitization for tools, freshly sealed single-use capes, and highly sanitized, airy aesthetic spaces.'
  },
  {
    id: 'premium-products',
    title: 'Premium Global Products',
    description: 'We exclusively select authentic world-class brands like L’Oréal Professionnel, Olaplex, Rica, Moroccanoil, and Kryolan.'
  },
  {
    id: 'affordable-luxury',
    title: 'Affordable Luxury pricing',
    description: 'Experiencing five-star pampering shouldn’t feel unreachable. We present rich global styles at honest, transparent rates.'
  },
  {
    id: 'personalized-styling',
    title: 'Bespoke Personalized Styling',
    description: 'No template styles. We chart out individual hair health, facial structure, skin profile, and lifestyle needs before every draft.'
  },
  {
    id: 'trending-hairstyles',
    title: 'Trending Hairstyles Catalog',
    description: 'Always ahead. From curtain bangs and wolf cuts to majestic beard fades and soft balayage melts, we master the viral styles.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Classic Balayage Blend',
    category: 'hairstyles',
    imageUrl: BRAND_ASSETS.hairMakeoverAfter,
    desc: 'Golden warm balayage on waves with dynamic texture.'
  },
  {
    id: 'g2',
    title: 'Premium Styling Cabin',
    category: 'interiors',
    imageUrl: BRAND_ASSETS.heroBg,
    desc: 'The gold-accented styling room reflecting ultimate luxury.'
  },
  {
    id: 'g3',
    title: 'Bridal HD Glint',
    category: 'bridal',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    desc: 'Sophisticated bridal makeup with royal Hyderabad jewelry pairing.'
  },
  {
    id: 'g4',
    title: 'Couture Fade Grooming',
    category: 'grooming',
    imageUrl: BRAND_ASSETS.maleGrooming,
    desc: 'Skin fade beard trim on South Asian modern hair pattern.'
  },
  {
    id: 'g5',
    title: 'Deep Rose Spa Session',
    category: 'skincare',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    desc: 'Soothing skincare session matching premium hydration therapy.'
  },
  {
    id: 'g6',
    title: 'Custom Gel Art Duo',
    category: 'makeup',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    desc: 'Gel manicures and bespoke nail enhancements.'
  }
];

export const REAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Srinivas Rao',
    rating: 5,
    text: 'Wonderful experience and amazing staff. They are patient and recommend options based on hair type. Excellent service at honest prices and superb styling.',
    date: 'May 12, 2026',
    service: 'Haircut & Couture Styling',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Anjali Sharma',
    rating: 4.5,
    text: 'Amazing professional grooming and premium ambience in Sun City area! Got my balayage and Olaplex treatment done. The color looks extremely elegant.',
    date: 'May 04, 2026',
    service: 'Balayage & Couture Colouring',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    name: 'Rahul Verma',
    rating: 5,
    text: 'The best salon setup around Bandlaguda Jagir. Extremely hygienic environment, all salon instruments were sanitized right before me. Professional trimming controls.',
    date: 'April 28, 2026',
    service: 'Royal Beard Grooming',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export const INSTAGRAM_REELS = [
  {
    id: 'r1',
    title: 'Couture Balayage Transformation',
    views: '12.4k views',
    imageUrl: BRAND_ASSETS.hairMakeoverAfter,
    link: '#reels'
  },
  {
    id: 'r2',
    title: 'Royal Sandalwood Beard Groom',
    views: '8.1k views',
    imageUrl: BRAND_ASSETS.maleGrooming,
    link: '#reels'
  },
  {
    id: 'r3',
    title: 'Spa Pedicure Sensory Reveal',
    views: '16.9k views',
    imageUrl: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80&w=400',
    link: '#reels'
  },
  {
    id: 'r4',
    title: 'Backlit Luxury Salon Tour',
    views: '24.2k views',
    imageUrl: BRAND_ASSETS.heroBg,
    link: '#reels'
  }
];
