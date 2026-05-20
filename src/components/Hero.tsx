/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, CalendarCheck, Star, Sparkles, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS } from '../data.js';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-24"
    >
      {/* Cinematic Background Image with Dark Vignette overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BRAND_ASSETS.heroBg}
          alt="Alexander Unisex Salon Luxury Interior Backdrop"
          className="w-full h-full object-cover opacity-35 scale-105 filter brightness-90 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-neutral-950 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/80 z-10" />
      </div>

      {/* Elegant Radial Golden Spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none z-10" />

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8 md:mt-2">
        
        {/* Upper Badge Layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-neutral-900/80 border border-amber-500/20 px-4.5 py-2 rounded-full mb-8 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-amber-100 font-sans text-xs uppercase tracking-[3px] font-semibold">
            The Ultimate Salon Experience
          </span>
        </motion.div>

        {/* Brand Display Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-amber-50 leading-tight sm:leading-none">
            Luxury Grooming &
            <span className="block mt-2 font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 py-1">
              Beauty Experience
            </span>
          </h1>
        </motion.div>

        {/* Subtitle / Subparagraph text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl mx-auto text-stone-300 font-sans text-sm md:text-base leading-relaxed tracking-wide font-normal"
        >
          Step into a world of artistic sophistication. Alexander Unisex Salon – Padmasri Hills is Hyderabad’s premium beauty destination for bespoke haircutting, balayage contour coloring, rejuvenating skincare, and flawless celebrity makeup.
        </motion.p>

        {/* Call to Action Group */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 sm:flex sm:justify-center items-center gap-5 px-4"
        >
          <button
            onClick={scrollToBooking}
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 px-8 py-4 rounded-sm font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 shadow-[0_10px_25px_rgba(212,154,29,0.2)] hover:shadow-[0_10px_35px_rgba(212,154,29,0.35)] cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-stone-950" />
            <span>Book Appointment</span>
          </button>

          <a
            href="tel:+919052050202"
            className="w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center gap-1.5 border border-stone-700 hover:border-amber-400/50 hover:bg-amber-400/5 text-amber-50 px-8 py-4 rounded-sm font-sans text-xs tracking-widest uppercase font-bold transition-all"
          >
            <Phone className="w-4 h-4 text-amber-500" />
            <span>Call Now</span>
          </a>
        </motion.div>

        {/* Floating Review Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 inline-flex items-center gap-3 bg-zinc-900/60 backdrop-blur-md border border-amber-500/10 px-6 py-3 rounded-md"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-8 h-8 rounded-full border border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-extrabold text-amber-400"
              >
                C{i}
              </div>
            ))}
          </div>
          <div className="h-6 w-[1px] bg-amber-500/10" />
          <div className="text-left font-sans">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-xs font-extrabold text-amber-200 tracking-wide">4.2★ Rating</span>
            </div>
            <span className="text-[10px] tracking-wide text-stone-400 font-medium uppercase font-mono block">
              90+ Trusted Clients on Google Reviews
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Shifting Gold Grid Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-10" />

      {/* Centered Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="font-sans text-[9px] tracking-[4px] text-stone-500 uppercase mb-2 font-medium">Discover Alexander</span>
        <ChevronDown className="w-4 h-4 text-amber-400/70 animate-bounce" />
      </div>
    </section>
  );
}
