/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { ShieldCheck, Award, Sparkles, Gem, Sliders, Scissors } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data.js';

export default function WhyChooseUs() {
  const iconMap: Record<string, ReactNode> = {
    'certified-stylists': <Award className="w-5 h-5 text-amber-400" />,
    'hygienic-environment': <ShieldCheck className="w-5 h-5 text-amber-400" />,
    'premium-products': <Gem className="w-5 h-5 text-amber-400" />,
    'affordable-luxury': <Sparkles className="w-5 h-5 text-amber-400" />,
    'personalized-styling': <Sliders className="w-5 h-5 text-amber-400" />,
    'trending-hairstyles': <Scissors className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section 
      id="why-us" 
      className="bg-zinc-950 py-24 relative overflow-hidden border-t border-amber-500/5 text-stone-200"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/5 border border-amber-500/20 rounded-full">
            <Gem className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-sans text-[10px] tracking-widest uppercase font-semibold">Excellence Standards</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-amber-50 leading-tight">
            Why Discerning Clients <br className="hidden sm:inline" />
            Choose Alexander Salon
          </h2>

          <p className="font-sans text-xs sm:text-sm text-stone-400 max-w-lg mx-auto leading-relaxed">
            Our commitment is to render premium styling, total hygiene, and authentic world-class beauty products in dynamic spaces.
          </p>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            // Apply unique grid span or heights for visual rhythm (bento layout)
            const isLarge = index === 0 || index === 4;

            return (
              <div
                key={item.id}
                className={`group relative bg-zinc-900/40 hover:bg-zinc-900 border border-amber-500/5 hover:border-amber-400/20 p-6 md:p-8 rounded-md transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_10px_35px_-12px_rgba(0,0,0,0.5)] ${
                  isLarge ? 'md:col-span-1 lg:col-span-1 border-amber-400/10' : ''
                }`}
              >
                {/* Upper Thin Gold Grid Accent Lines */}
                <div className="absolute top-0 left-0 w-[1px] h-0 bg-gradient-to-b from-amber-400 to-transparent group-hover:h-full transition-all duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Icon Emblem Frame */}
                  <div className="w-11 h-11 rounded-full border border-amber-500/15 bg-neutral-950 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    {iconMap[item.id] || <Award className="w-5 h-5 text-amber-400" />}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-md sm:text-lg text-amber-100 font-medium group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Paragraph text */}
                  <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

                {/* Lower tiny numbering block */}
                <div className="mt-8 pt-4 border-t border-amber-500/5 flex items-center justify-between">
                  <span className="font-sans text-[9px] text-stone-600 font-extrabold uppercase tracking-widest font-mono">
                    Alexander Ref 0{index + 1}
                  </span>
                  
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/20 group-hover:bg-amber-400 transition-colors" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
