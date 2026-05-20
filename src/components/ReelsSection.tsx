/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play, Sparkles, Instagram, Eye, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { INSTAGRAM_REELS } from '../data.js';

export default function ReelsSection() {
  return (
    <section 
      id="reels" 
      className="bg-zinc-950 py-24 relative overflow-hidden border-t border-amber-500/5 text-stone-200"
    >
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/5 border border-amber-500/20 rounded-full">
            <Instagram className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-sans text-[10px] tracking-widest uppercase font-semibold">Social Catalog</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-amber-50 leading-tight">
            Trending Makeovers On Reels
          </h2>

          <p className="font-sans text-xs sm:text-sm text-stone-400 max-w-lg mx-auto leading-relaxed">
            Follow our transformations daily on social media. Check out premium hair smoothing, royal beard lines, and skin facials.
          </p>
        </div>

        {/* Reels grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_REELS.map((reel) => (
            <div
              key={reel.id}
              className="group relative aspect-[9/16] rounded-md overflow-hidden border border-amber-500/5 hover:border-amber-400/30 bg-neutral-900 cursor-pointer shadow-lg transition-all duration-500"
            >
              {/* Cover cover with thumbnail */}
              <img
                src={reel.imageUrl}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 saturate-[0.85]"
                referrerPolicy="no-referrer"
              />

              {/* Dark Ambient Vignette always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/30 z-10" />

              {/* Central Playing Badge - Hover Reveal */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 rounded-full bg-neutral-950/80 border border-amber-400 text-amber-400 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Play className="w-5 h-5 fill-amber-400 ml-0.5" />
                </div>
              </div>

              {/* Left Top Views counter badge */}
              <div className="absolute top-3 left-3 bg-neutral-950/70 border border-amber-500/10 px-2 py-0.5 rounded-sm z-20 flex items-center gap-1">
                <Eye className="w-3 h-3 text-amber-400" />
                <span className="font-mono text-[9px] text-stone-300 font-bold uppercase">{reel.views}</span>
              </div>

              {/* Reel descriptions at bottom */}
              <div className="absolute bottom-4 inset-x-4 z-20 space-y-1.5 text-left font-sans">
                <span className="text-[9px] tracking-widest text-amber-400 uppercase font-bold block">@AlexanderUnisex</span>
                
                <h4 className="text-amber-50 text-xs font-semibold leading-relaxed group-hover:text-amber-300 transition-colors line-clamp-2">
                  {reel.title}
                </h4>

                <div className="flex items-center gap-1.5 pt-1">
                  <span className="w-2 h-2 rounded-full bg-[#1da1f2]/10 border border-amber-400/30 font-semibold" />
                  <span className="text-[9px] text-stone-400 font-bold uppercase">Trending Style</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Social Follow Link CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-300 text-xs tracking-widest uppercase font-bold transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            <span>Instagram lookbook feed @AlexanderSalon</span>
            <Instagram className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
