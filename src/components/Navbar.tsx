/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, CalendarDays, Phone, Scissors, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBookings: () => void;
  bookingCount: number;
}

export default function Navbar({ onOpenBookings, bookingCount }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Why Choose Us', id: 'why-us' },
    { label: 'Before/After', id: 'before-after' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-[37px] md:top-[39px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-neutral-950/90 backdrop-blur-md shadow-lg border-b border-amber-500/10 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Group */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/5 group-hover:border-amber-400/80 transition-colors">
              <Scissors className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <span className="font-serif text-lg md:text-xl tracking-wider text-amber-100 font-semibold block uppercase leading-none">
                ALEXANDER
              </span>
              <span className="text-[9px] tracking-[3px] text-amber-500/80 uppercase font-sans font-semibold mt-0.5 block leading-none">
                UNISEX SALON
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-stone-300 hover:text-amber-400 text-xs tracking-widest uppercase font-medium transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Monitor Bookings Badge */}
            {bookingCount > 0 && (
              <button
                onClick={onOpenBookings}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 text-[11px] tracking-wider uppercase font-semibold border border-amber-400/20 rounded-full transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>My Appointments ({bookingCount})</span>
              </button>
            )}

            {/* Tel Hook */}
            <a
              href="tel:+919052050202"
              className="flex items-center gap-1.5 text-stone-300 hover:text-amber-400 text-xs font-semibold mr-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>+91 90520 50202</span>
            </a>

            {/* High Conversion Booking Button */}
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 px-5 py-2.5 rounded-sm font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(212,154,29,0.2)] hover:shadow-[0_4px_30px_rgba(212,154,29,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Seat
            </button>
          </div>

          {/* Mobile Actions and Burger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {bookingCount > 0 && (
              <button
                onClick={onOpenBookings}
                className="p-2 bg-amber-400/10 text-amber-300 border border-amber-400/20 rounded-full focus:outline-none relative"
                aria-label="View bookings"
              >
                <CalendarDays className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-neutral-950 font-sans text-[9px] font-extrabold flex items-center justify-center">
                  {bookingCount}
                </span>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[77px] z-50 bg-neutral-950/95 backdrop-blur-lg border-b border-amber-500/20 py-6 px-4 flex flex-col gap-4 shadow-2xl lg:hidden"
          >
            <div className="grid grid-cols-2 gap-3 mb-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="py-2.5 px-4 text-center text-stone-300 hover:text-amber-400 bg-neutral-900 border border-amber-500/5 hover:border-amber-400/20 rounded-md text-xs tracking-wider uppercase font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="h-[1px] bg-neutral-800" />

            <div className="flex flex-col gap-3">
              <a
                href="tel:+919052050202"
                className="flex items-center justify-center gap-2 py-3 bg-neutral-900 border border-neutral-800 rounded-md text-stone-300 hover:text-amber-400 text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call +91 90520 50202</span>
              </a>

              <button
                onClick={() => scrollToSection('booking')}
                className="w-full bg-amber-400 hover:bg-amber-500 text-neutral-950 py-3.5 rounded-md text-xs tracking-widest uppercase font-bold text-center"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
