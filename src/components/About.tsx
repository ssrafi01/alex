/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ShieldCheck, Award, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS } from '../data.js';

// Animated Counter sub-component to ensure modular, efficient ticking state
function AnimatedCount({ targetValue, prefix = '', suffix = '', durationMs = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      setCount(Math.floor(progress * targetValue));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };
    requestAnimationFrame(animate);
  }, [targetValue, durationMs]);

  return <span className="font-serif font-semibold">{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const features = [
    {
      icon: <Award className="w-5 h-5 text-amber-400" />,
      title: 'Academy-Trained Stylists',
      text: 'Our handpicked masters are licensed innovators in Balayage, precision crop cuts, and bridal contouring.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: 'Flawless Hygiene Routine',
      text: 'Complete tool sterilizations after every seat, clean biodegradable disposable capes, and sanitized styling zones.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      title: 'Tailored Aesthetic Profile',
      text: 'We thoroughly assess skin shade profiles, skull dynamics, and fiber elasticity before committing any blades.'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative bg-zinc-950 py-24 border-t border-amber-500/5 overflow-hidden"
    >
      {/* Decorative Golden Ambient Backlight Glow */}
      <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section Split-Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Rich Editorial Copy */}
          <div className="lg:col-span-7 font-sans">
            <div className="text-left space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-amber-400" />
                <span className="text-amber-400 font-sans text-xs uppercase tracking-[4px] font-bold">Our Heritage</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-amber-100 leading-tight">
                Crafting Elevated Beauty <br />
                <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-300">
                  And Uncompromising Confidence
                </span>
              </h2>

              <p className="text-stone-300 text-sm md:text-base leading-relaxed font-normal tracking-wide">
                Alexander Unisex Salon – Padmasri Hills represents the zenith of premium hair fashion and skincare wellness in Southern Hyderabad. We reject templated hair styling. For us, styling is an intimate conversation, a couture medium designed to curate your natural beauty and boost your everyday look.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Whether you seek a royal haircut, a beautiful global highlight melt, or HD cameras-ready bridal contouring, our premium styling cabin at Padmasri Hills features world-class master stylists and certified skincare specialists who operate at the highest standards of safety, precision, and service.
              </p>

              {/* Dynamic Feature List */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pt-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-sm border border-amber-500/5 bg-zinc-900/40">
                    <div className="mt-0.5 w-10 h-10 rounded-full border border-amber-500/15 bg-neutral-950 flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-sans text-xs md:text-sm uppercase tracking-wider text-amber-200 font-semibold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-stone-400 leading-normal">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Layered Premium Image Collages */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[4/5] overflow-hidden rounded-md border border-amber-500/15 bg-zinc-900">
              
              {/* Outer Glowing Grid Accent */}
              <div className="absolute inset-4 border border-amber-500/20 rounded-sm pointer-events-none z-10" />
              
              <img
                src={BRAND_ASSETS.hairMakeoverAfter}
                alt="Styling makeover preview at Alexander Salon"
                className="w-full h-full object-cover filter brightness-90 saturate-75"
                referrerPolicy="no-referrer"
              />

              {/* Inner Floating Frame */}
              <div className="absolute bottom-6 left-6 right-6 bg-neutral-950/80 backdrop-blur-md border border-amber-500/20 p-5 rounded-sm z-20">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  <Heart className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-sans text-[10px] tracking-[2px] uppercase font-bold text-amber-300">Hyderabad Choice</span>
                </div>
                <h4 className="font-serif text-sm font-semibold text-amber-50 select-none">Alexander Unisex Salon</h4>
                <p className="font-sans text-[11px] text-stone-400 mt-1 font-medium italic">
                  "Designed for those who view styling as an exquisite self care ritual."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Animated Statistical Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8 mt-20 border-t border-b border-amber-500/10 bg-gradient-to-r from-neutral-950 via-zinc-900/20 to-neutral-950">
          
          <div className="text-center py-4 border-r border-amber-500/5 last:border-0 md:border-r">
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-400">
              <AnimatedCount targetValue={15} suffix="+" />
            </div>
            <span className="font-sans text-[10px] sm:text-xs tracking-widest text-stone-400 uppercase font-medium mt-1.5 block">
              Certified Master Stylists
            </span>
          </div>

          <div className="text-center py-4 border-r border-amber-500/5 last:border-0 md:border-r">
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-400">
              <AnimatedCount targetValue={90} suffix="+" />
            </div>
            <span className="font-sans text-[10px] sm:text-xs tracking-widest text-stone-400 uppercase font-medium mt-1.5 block">
              Google 5-Star Reviews
            </span>
          </div>

          <div className="text-center py-4 border-r border-amber-500/5 last:border-0">
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-400">
              <AnimatedCount targetValue={5} prefix="₹" suffix="k+" />
            </div>
            <span className="font-sans text-[10px] sm:text-xs tracking-widest text-stone-400 uppercase font-medium mt-1.5 block">
              Happy Clipped Customers
            </span>
          </div>

          <div className="text-center py-4">
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-400">
              <AnimatedCount targetValue={10} suffix="+" />
            </div>
            <span className="font-sans text-[10px] sm:text-xs tracking-widest text-stone-400 uppercase font-medium mt-1.5 block">
              Years of Styling History
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
