/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, Sparkles, Clock, Check, Scissors, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SALON_SERVICES } from '../data.js';
import { SalonService } from '../types.js';

interface ServicesListProps {
  onSelectService: (serviceId: string) => void;
}

export default function ServicesList({ onSelectService }: ServicesListProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Hair', 'Skincare', 'Nails & Spas', 'Grooming', 'Celebrity & Bridal'];

  const filteredServices = SALON_SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookNow = (service: SalonService) => {
    onSelectService(service.id);
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
      id="services" 
      className="bg-zinc-950 py-24 relative overflow-hidden text-stone-200 border-t border-amber-500/5"
    >
      {/* Golden Spotlights */}
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/5 border border-amber-500/20 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-sans text-[10px] tracking-widest uppercase font-semibold">Couture Menu</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-amber-50">
            Our Elite Grooming & <br className="hidden sm:inline" />
            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
              Styling Services
            </span>
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-stone-400 tracking-wide max-w-xl mx-auto">
            Browse our comprehensive pricing portfolio. Filter by service category or type in your exact styling requirement.
          </p>
        </div>

        {/* Searching and Category Bar Grid */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-zinc-900/40 p-4 border border-amber-500/5 rounded-md backdrop-blur-sm">
          
          {/* Categories Horizontal */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 font-sans text-[11px] tracking-widest uppercase font-bold border transition-all rounded-sm shrink-0 ${
                  activeCategory === cat
                    ? 'bg-amber-400 border-amber-400 text-neutral-950 shadow-[0_4px_12px_rgba(212,154,29,0.15)]'
                    : 'bg-neutral-900/60 border-zinc-800 text-stone-300 hover:border-amber-400/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <input
              type="text"
              placeholder="Search services (e.g. Balayage)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-zinc-805 text-stone-200 pl-10 pr-4 py-2 rounded-sm text-xs font-sans tracking-wide focus:outline-none focus:border-amber-400 transition-colors placeholder:text-stone-600 font-medium"
            />
          </div>

        </div>

        {/* Services List / Grid */}
        <AnimatePresence mode="popLayout">
          {filteredServices.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={service.id}
                  className="group relative bg-zinc-900/40 hover:bg-zinc-900 border border-amber-500/5 hover:border-amber-400/25 p-5 md:p-6 rounded-md transition-all duration-300 flex flex-col md:flex-row gap-5 shadow-[0_10px_35px_-15px_rgba(0,0,0,0.5)]"
                >
                  {/* Service Card Thumbnail */}
                  <div className="w-full md:w-36 h-36 shrink-0 relative overflow-hidden rounded-md border border-amber-500/10 bg-neutral-950">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {service.popular && (
                      <span className="absolute top-2.5 left-2.5 bg-amber-400 text-neutral-950 font-sans text-[8px] tracking-[2px] font-extrabold px-1.5 py-0.5 uppercase shadow-md rounded-sm">
                        Popular Selection
                      </span>
                    )}
                  </div>

                  {/* Service Text Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-amber-500/80 font-bold">
                          {service.category}
                        </span>
                        
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
                          <Clock className="w-3.5 h-3.5 text-amber-500" />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-lg md:text-xl text-amber-100 font-medium mt-1 group-hover:text-amber-400 transition-colors">
                        {service.name}
                      </h3>

                      <p className="font-sans text-stone-400 text-xs leading-normal mt-2.5">
                        {service.description}
                      </p>

                      {/* Display Benefits List */}
                      {service.benefits && (
                        <ul className="mt-3.5 space-y-1">
                          {service.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-1.5 font-sans text-[10px] text-stone-500">
                              <Check className="w-3 h-3 text-amber-500/70 shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Booking Triggers and Dynamic pricing */}
                    <div className="mt-6 pt-4 border-t border-amber-500/5 flex items-center justify-between">
                      <div>
                        <span className="font-sans text-[9px] uppercase tracking-widest text-zinc-500 block">Affordable luxury</span>
                        <span className="font-serif text-base font-bold text-amber-400 mt-0.5 block">{service.priceRange}</span>
                      </div>

                      <button
                        onClick={() => handleBookNow(service)}
                        className="flex items-center gap-1 bg-neutral-950 group-hover:bg-amber-400 text-amber-400 group-hover:text-neutral-950 px-4 py-2 borders border-amber-500/20 group-hover:border-amber-400 rounded-sm font-sans text-[10px] tracking-widest uppercase font-extrabold transition-all cursor-pointer"
                      >
                        <span>Request Slot</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-zinc-900/20 border border-zinc-800 rounded-lg">
              <Scissors className="w-8 h-8 text-stone-500 mx-auto stroke-1" />
              <h4 className="font-serif text-lg text-amber-100 mt-3 font-semibold">No styling matched your query</h4>
              <p className="font-sans text-xs text-stone-400 mt-1 max-w-sm mx-auto">
                No services match "{searchQuery}". Try searching "haircut", "skincare", "makeover" or reset the category.
              </p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-amber-400 text-neutral-950 font-bold font-sans text-[10px] tracking-widest uppercase rounded-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
