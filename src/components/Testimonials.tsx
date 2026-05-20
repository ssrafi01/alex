/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { Star, MessageSquareCode, Sparkles, UserCheck, ChevronRight, ChevronLeft, PlusCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { REAL_TESTIMONIALS } from '../data.js';
import { Testimonial } from '../types.js';

export default function Testimonials() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Review Input Form state
  const [formName, setFormName] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formText, setFormText] = useState('');
  const [formService, setFormService] = useState('Haircut & Couture Styling');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  // Load reviews from data + localStorage
  useEffect(() => {
    const cached = localStorage.getItem('alexander_reviews');
    if (cached) {
      try {
        setReviews(JSON.parse(cached));
      } catch (e) {
        setReviews(REAL_TESTIMONIALS);
      }
    } else {
      setReviews(REAL_TESTIMONIALS);
    }
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) return;

    const newRev: Testimonial = {
      id: `custom-${Date.now()}`,
      name: formName,
      rating: formRating,
      text: formText,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      service: formService,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      isCustom: true
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);
    localStorage.setItem('alexander_reviews', JSON.stringify(updated));

    setFormSubmitted(true);
    setFormName('');
    setFormText('');
    
    // Clear and reset form modal safely
    setTimeout(() => {
      setFormSubmitted(false);
      setShowFormModal(false);
      setActiveIndex(0); // View the new review first
    }, 2000);
  };

  const servicesList = [
    'Haircut & Couture Styling',
    'Balayage & Couture Colouring',
    'Facials & Rejuvenating Skincare',
    'Spas, Pedicure & Manicure',
    'Bridal & Occasion Makeup',
    'Royal Beard Grooming',
    'Keratin & Olaplex Hair Treatments',
    'Nail Art & Extension Bar'
  ];

  return (
    <section 
      id="testimonials" 
      className="bg-zinc-950 py-24 relative overflow-hidden border-t border-amber-500/5 text-stone-200"
    >
      {/* Decorative vectors */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/5 border border-amber-500/20 rounded-full">
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-300 font-sans text-[10px] tracking-widest uppercase font-semibold">Verified Feedback</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-amber-50 leading-tight">
              Aura & Ambience as told <br />
              <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-300">
                by our prestigious guests
              </span>
            </h2>

            <p className="font-sans text-xs md:text-sm text-stone-400 leading-relaxed font-normal">
              Alexander Unisex Salon Hyderabad hosts thousands of beauty and groom enthusiasts around Sun City, Bandlaguda Jagir, and Padmasri Hills. Undergo premium care.
            </p>
          </div>

          <button
            onClick={() => setShowFormModal(true)}
            className="flex items-center gap-1.5 border border-amber-500/20 hover:border-amber-400/80 bg-neutral-900 hover:bg-amber-400/5 px-5 py-3 rounded-sm font-sans text-xs uppercase tracking-widest font-bold text-amber-300 hover:text-amber-400 transition-all cursor-pointer shadow-lg"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Post a Review</span>
          </button>
        </div>

        {/* Rotational luxury slider card container */}
        {reviews.length > 0 && (
          <div className="relative max-w-4xl mx-auto py-6 px-4">
            
            {/* Sliding Container Card */}
            <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-amber-500/10 p-8 md:p-12 rounded-lg text-center overflow-hidden min-h-[300px] flex flex-col justify-between shadow-2xl">
              
              {/* Overlapping quotes watermarks */}
              <div className="absolute top-10 left-10 text-9xl font-serif text-amber-400/5 pointer-events-none select-none font-extrabold leading-none">“</div>
              <div className="absolute bottom-10 right-10 text-9xl font-serif text-amber-400/5 pointer-events-none select-none font-extrabold leading-none">”</div>

              <div className="space-y-6 max-w-2xl mx-auto">
                {/* Yellow Stars display */}
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => {
                    const starsCount = reviews[activeIndex]?.rating || 5;
                    const fillValue = idx < Math.floor(starsCount) ? 'fill-amber-400 text-amber-400' : 'text-zinc-650';
                    return <Star key={idx} className={`w-5 h-5 ${fillValue}`} />;
                  })}
                </div>

                {/* Testimonial body review text with animation */}
                <p className="font-serif text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-amber-50">
                  "{reviews[activeIndex]?.text}"
                </p>

                {/* Customer Details info block */}
                <div className="space-y-1">
                  <h4 className="font-sans text-sm tracking-wider uppercase text-amber-200 font-bold mb-0.5">
                    {reviews[activeIndex]?.name}
                  </h4>
                  
                  {reviews[activeIndex]?.service && (
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-medium block">
                      Service: {reviews[activeIndex]?.service}
                    </span>
                  )}
                  
                  <span className="text-[10px] text-zinc-600 block pt-1 uppercase">
                    Dated • {reviews[activeIndex]?.date}
                  </span>
                </div>
              </div>

              {/* Slide Selector Indicators and Arrows */}
              <div className="flex items-center justify-between mt-10 border-t border-amber-500/5 pt-6 max-w-md mx-auto w-full z-10">
                <button
                  onClick={handlePrev}
                  className="p-3 border border-stone-800 rounded-sm hover:border-amber-400 text-stone-400 hover:text-amber-400 transition-all cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Mini dotted gauges */}
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-[120px] scrollbar-none py-1">
                  {reviews.map((_, rIdx) => (
                    <button
                      key={rIdx}
                      onClick={() => setActiveIndex(rIdx)}
                      className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                        activeIndex === rIdx ? 'bg-amber-400 w-4' : 'bg-stone-700'
                      }`}
                      aria-label={`Go to review ${rIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-3 border border-stone-805 rounded-sm hover:border-amber-400 text-stone-400 hover:text-amber-400 transition-all cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Review Form Modal Overlay */}
        <AnimatePresence>
          {showFormModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-sm"
              onClick={() => setShowFormModal(false)}
            >
              <div
                className="relative bg-zinc-90 w-full max-w-md rounded-md border border-amber-500/20 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Block inside dialog */}
                <div className="bg-neutral-950 p-6 md:p-8 border-b border-amber-500/10 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-amber-100 font-normal">Share Your Experience</h3>
                    <p className="font-sans text-[11px] text-stone-400 mt-0.5">We review every testimonial to elevate our services</p>
                  </div>
                  <button
                    onClick={() => setShowFormModal(false)}
                    className="p-1 border border-zinc-805 text-zinc-400 hover:text-amber-400 rounded-sm"
                  >
                    Close
                  </button>
                </div>

                {/* Unified Form Body */}
                <div className="bg-neutral-950 p-6 md:p-8">
                  {formSubmitted ? (
                    <motion.div 
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="text-center py-12 space-y-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                        <Check className="w-6 h-6 animate-bounce" />
                      </div>
                      <h4 className="font-serif text-lg text-amber-100">Feedback Posted!</h4>
                      <p className="font-sans text-xs text-stone-400">Thank you Srinivasa! Your honest rating makes us proud.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleReviewSubmit} className="space-y-5 font-sans">
                      
                      {/* Name field */}
                      <div>
                        <label className="text-[10px] uppercase font-bold text-stone-400 block mb-2 tracking-widest">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Srinivasa Varma"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="w-full bg-neutral-950 border border-zinc-805 text-stone-100 p-3 rounded-sm text-xs focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      {/* Service Selection */}
                      <div>
                        <label className="text-[10px] uppercase font-bold text-stone-400 block mb-2 tracking-widest">Service Received</label>
                        <select
                          value={formService}
                          onChange={(e) => setFormService(e.target.value)}
                          className="w-full bg-neutral-950 border border-zinc-805 text-stone-300 p-3 rounded-sm text-xs focus:outline-none focus:border-amber-400 transition-colors"
                        >
                          {servicesList.map((svc) => (
                            <option key={svc} value={svc}>{svc}</option>
                          ))}
                        </select>
                      </div>

                      {/* Star select clicker */}
                      <div>
                        <label className="text-[10px] uppercase font-bold text-stone-400 block mb-2 tracking-widest">Select Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setFormRating(star)}
                              className="p-1 focus:outline-none"
                              aria-label={`Rate ${star} stars`}
                            >
                              <Star className={`w-7 h-7 ${star <= formRating ? 'text-amber-400 fill-amber-400' : 'text-zinc-650'}`} />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Review body paragraph description */}
                      <div>
                        <label className="text-[10px] uppercase font-bold text-stone-400 block mb-2 tracking-widest">Your Review</label>
                        <textarea
                          rows={3}
                          required
                          placeholder="What did you like about the Ambience, Style, or Staff?"
                          value={formText}
                          onChange={(e) => setFormText(e.target.value)}
                          className="w-full bg-neutral-950 border border-zinc-805 text-stone-100 p-3 rounded-sm text-xs focus:outline-none focus:border-amber-400 transition-colors placeholder:text-zinc-600"
                        />
                      </div>

                      {/* Submit action panel */}
                      <button
                        type="submit"
                        className="w-full bg-amber-400 hover:bg-amber-500 text-neutral-950 font-sans tracking-widest uppercase font-bold py-3.5 rounded-sm text-xs transition-colors cursor-pointer"
                      >
                        Publish Testimonial
                      </button>

                    </form>
                  )}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
