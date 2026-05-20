/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Eye, Scissors, X, CalendarCheck, Sparkles, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data.js';
import { GalleryItem } from '../types.js';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Grouped filters for intuitive selection
  const filters = [
    { label: 'All Looks', key: 'all' },
    { label: 'Hairstyles', key: 'hairstyles' },
    { label: 'Interiors', key: 'interiors' },
    { label: 'Bridal Work', key: 'bridal' },
    { label: 'Men\'s Grooming', key: 'grooming' },
    { label: 'Skincare', key: 'skincare' }
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const triggerScrollBooking = () => {
    setSelectedItem(null);
    const element = document.getElementById('booking');
    if (element) {
      const topOffset = 85;
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
      id="gallery" 
      className="bg-zinc-950 py-24 relative overflow-hidden border-t border-amber-500/5 text-stone-200"
    >
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/5 border border-amber-500/20 rounded-full">
            <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-sans text-[10px] tracking-widest uppercase font-semibold">Couture Grid</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-amber-50 leading-tight">
            Alexander Visual Gallery
          </h2>

          <p className="font-sans text-xs sm:text-sm text-stone-400 max-w-lg mx-auto leading-relaxed">
            Witness the creative fidelity and pristine precision formulated by our custom styling squad. Click on any frame to inspect details.
          </p>
        </div>

        {/* Filter Selection Panel */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-1.5 rounded-sm font-sans text-[10px] tracking-widest uppercase font-bold border transition-all ${
                activeFilter === filter.key
                  ? 'bg-amber-400 border-amber-400 text-neutral-950 shadow-md scale-[1.02]'
                  : 'bg-neutral-900/60 border-zinc-800 text-stone-400 hover:border-amber-400/25 hover:text-amber-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Styled Core Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[4/3] overflow-hidden rounded-md border border-amber-500/5 bg-zinc-900 cursor-pointer shadow-lg"
              >
                {/* Visual Cover */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 saturate-90"
                  referrerPolicy="no-referrer"
                />

                {/* Overlying Golden Tint Frame */}
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center mb-3 text-amber-400 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-lg text-amber-50 font-normal">{item.title}</span>
                  <span className="font-sans text-[9px] tracking-[3px] text-amber-400 uppercase font-bold mt-1.5">{item.category}</span>
                </div>

                {/* Floating Lower Quick-tag */}
                <div className="absolute bottom-3 left-3 bg-neutral-900/80 backdrop-blur-sm border border-amber-500/10 px-2.5 py-1 rounded-sm z-10 group-hover:opacity-0 transition-opacity">
                  <span className="font-sans text-[9px] tracking-wider uppercase text-amber-300 font-bold">
                    {item.title}
                  </span>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Gallery Image Lightbox Modal Overlay */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <div 
                className="relative bg-zinc-90 w-full max-w-2xl rounded-md border border-amber-500/20 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button top-right */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-neutral-950/80 border border-amber-500/10 rounded-full text-stone-200 hover:text-amber-400 z-20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* High quality Image section */}
                <div className="aspect-[16/10] bg-neutral-950 relative">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
                </div>

                {/* Meta details footer section inside modal */}
                <div className="bg-neutral-950 p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] tracking-[3px] text-amber-400 uppercase font-extrabold bg-amber-400/5 border border-amber-400/15 px-2 py-0.5 rounded-sm">
                      {selectedItem.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/25" />
                    <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider">Alexander Lookbook Ref {selectedItem.id}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-amber-100 font-normal">
                    {selectedItem.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-stone-400 leading-relaxed font-normal">
                    {selectedItem.desc} This bespoke visual design complies fully with the latest international guidelines in grooming safety, balancing vibrant, natural depth with luxury styling finishes.
                  </p>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={triggerScrollBooking}
                      className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 px-6 py-3 rounded-sm font-sans text-xs tracking-widest uppercase font-bold transition-all cursor-pointer shadow-lg"
                    >
                      <CalendarCheck className="w-4 h-4 text-neutral-950" />
                      <span>Book Look Appointment</span>
                    </button>

                    <button
                      onClick={() => setSelectedItem(null)}
                      className="border border-stone-800 hover:border-amber-400/30 font-sans text-xs tracking-widest text-stone-400 hover:text-amber-100 px-5 py-3 rounded-sm uppercase font-semibold transition-all cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
