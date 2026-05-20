/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Sparkles, MapPin, Scissors } from 'lucide-react';

export default function OfferBanner() {
  return (
    <div 
      id="offer-banner" 
      className="bg-neutral-950 border-b border-amber-500/10 text-amber-100 py-2.5 px-4 overflow-hidden relative z-40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-sans tracking-wide">
        {/* Left Segment: Location Quick Hook */}
        <div className="hidden md:flex items-center gap-1.5 text-neutral-400 font-medium select-none">
          <MapPin id="pin-icon" className="w-3.5 h-3.5 text-amber-500/80" />
          <span>Padmasri Hills, Bandlaguda Jagir, Hyderabad</span>
        </div>

        {/* Center Moving Marquee Content */}
        <div className="flex-1 md:flex-initial overflow-hidden flex items-center justify-center">
          <div className="flex items-center animate-none gap-8 text-center justify-center font-medium font-serif italic text-[11px] md:text-sm">
            <span className="flex items-center gap-2 select-none">
              <Sparkles id="sparkle-gold-1" className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="text-amber-300 not-italic font-sans uppercase tracking-widest font-semibold text-[10px] bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-sm mr-1">OFFER</span>
              <span className="text-stone-300 font-sans not-italic uppercase tracking-wider font-medium">Premium Salon Services at Affordable Prices</span>
              <Sparkles id="sparkle-gold-2" className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            </span>
          </div>
        </div>

        {/* Right Segment: Hours Info */}
        <div className="hidden lg:flex items-center gap-1.5 text-neutral-400 select-none font-medium">
          <Scissors id="barber-scissors" className="w-3.5 h-3.5 text-amber-400" />
          <span>Open Daily until 10 PM</span>
        </div>
      </div>
    </div>
  );
}
