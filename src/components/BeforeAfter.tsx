/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowLeftRight, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_ASSETS } from '../data.js';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Before image representation (premium high contrast hair representation)
  const beforeImage = 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800';
  // After image from custom generated balayage
  const afterImage = BRAND_ASSETS.hairMakeoverAfter;

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach global mouse and touch lift listeners to secure smooth slide behavior outside boundaries
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section 
      id="before-after" 
      className="bg-neutral-950 py-24 relative overflow-hidden border-t border-amber-500/5 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Section Headers / Description */}
          <div className="lg:col-span-5 font-sans space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-amber-400" />
              <span className="text-amber-400 font-sans text-xs uppercase tracking-[4px] font-bold">Artistry Reveal</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-amber-100 leading-tight">
              Stunning Hair Treatments & <br />
              <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-300">
                Balayage Transformations
              </span>
            </h2>

            <p className="text-stone-300 text-sm md:text-base leading-relaxed tracking-wide font-normal">
              Slide to reveal the incredible structural restore and custom multi-tonal dimensional color achieved in a single salon appointment session. 
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-amber-400 text-xs font-bold">B</span>
                </div>
                <div>
                  <h4 className="text-stone-300 text-xs uppercase tracking-wider font-bold">Before: Under-hydrated Frizz</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Dry locks with faded brassy layers lacking cohesion, luster, and volume.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-amber-400 text-xs font-bold">A</span>
                </div>
                <div>
                  <h4 className="text-stone-300 text-xs uppercase tracking-wider font-bold">After: Couture Warm Balayage</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">Satin soft hair melts infused with premium Olaplex treatment, featuring a luxury layered blowout shape.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-stone-500 text-[11px] font-serif italic">
              <HelpCircle className="w-4 h-4 text-amber-500/80" />
              <span>Use the golden slider handle on the image to sweep!</span>
            </div>
          </div>

          {/* Interactive Comparing Image Element */}
          <div className="lg:col-span-7 flex justify-center">
            <div 
              ref={containerRef}
              className="relative w-full max-w-lg aspect-[4/3] rounded-md border border-amber-500/15 overflow-hidden bg-neutral-900 cursor-ew-resize select-none shadow-[y_20px_40px_rgba(0,0,0,0.6)]"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* After State - Base (Visible when clipping handle slides left) */}
              <div className="absolute inset-0 select-none">
                <img
                  src={afterImage}
                  alt="After Styling Finish"
                  className="w-full h-full object-cover pointer-events-none filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 right-4 bg-neutral-950/80 backdrop-blur-sm border border-amber-400/20 text-amber-300 font-sans text-[9px] tracking-[2px] font-semibold px-2 py-1 uppercase rounded-sm">
                  Couture After
                </span>
              </div>

              {/* Before State - Top clipped Layer */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden select-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={beforeImage}
                  alt="Before Styling Start"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none filter saturate-50 grayscale-20 brightness-90"
                  style={{ width: containerRef.current?.getBoundingClientRect().width || '450px', maxWidth: 'none' }}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 bg-zinc-950/80 backdrop-blur-sm border border-zinc-805 text-zinc-400 font-sans text-[9px] tracking-[2px] font-semibold px-2 py-1 uppercase rounded-sm whitespace-nowrap">
                  Before Visit
                </span>
              </div>

              {/* Dynamic Golden Drag Line and Circle Handle */}
              <div 
                className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-amber-500 via-amber-400 to-amber-600 z-30 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-amber-400 bg-neutral-950 flex items-center justify-center shadow-2xl relative">
                  <ArrowLeftRight className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  
                  {/* Decorative outer pulse ring */}
                  <div className="absolute -inset-1 rounded-full border border-amber-400/20 animate-ping pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
