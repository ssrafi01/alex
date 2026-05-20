/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scissors, Mail, MapPin, Phone, Clock, ArrowUp, ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkScroll = (id: string) => {
    const element = document.getElementById(id);
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

  const quickLinks = [
    { label: 'Our Services', target: 'services' },
    { label: 'Our Heritage', target: 'about' },
    { label: 'Why Choose Us', target: 'why-us' },
    { label: 'Makeovers Slider', target: 'before-after' },
    { label: 'Visual lookbook', target: 'gallery' },
    { label: 'Guest Reviews', target: 'testimonials' },
    { label: 'Get Direction', target: 'contact' },
  ];

  const categories = [
    'Haircut & Styling',
    'Couture Colour & Balayage',
    'Facials & Skincare',
    'Spas, Pedicure & Manicure',
    'Bridal & Occasion Makeup',
    'Royal Beard Grooming'
  ];

  return (
    <footer 
      id="footer" 
      className="bg-neutral-950 border-t border-amber-500/10 text-stone-400 font-sans text-xs relative overflow-hidden pt-20 pb-12"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-amber-500/5">
          
          {/* Logo and Brand Desk info: lg-span-5 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/5">
                <Scissors className="w-5 h-5 text-amber-400" />
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

            <p className="text-zinc-400 leading-relaxed font-normal tracking-wide max-w-sm">
              Alexander Unisex Salon – Padmasri Hills is Hyderabad's choice for premium beauty treatments. We celebrate hair coloring, grooming precision, and total skin rejuvenation.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-stone-400 leading-relaxed">
                  Heera Complex, 1, Padmasri Hills Rd, Sun City, Hyderabad, 500093
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+919052050202" className="text-stone-300 hover:text-amber-400 font-semibold transition-colors">+91 90520 50202</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Open Daily: 9:30 AM — 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links: lg-span-3 */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-sm tracking-wider text-amber-100 font-medium uppercase font-sans">Quick Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkScroll(link.target)}
                    className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 hover:translate-x-1 transition-all cursor-pointer font-medium"
                  >
                    <ArrowRight className="w-3 h-3 text-amber-500/60" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Menu: lg-span-4 */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-serif text-sm tracking-wider text-amber-100 font-medium uppercase font-sans">Core Services</h4>
            <ul className="space-y-3">
              {categories.map((cat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/25" />
                  <span className="text-stone-400 font-medium">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lower row: Copyright and Back to Top scroll to top clicker */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-zinc-500 text-[11px] font-sans">
          
          <div className="text-center sm:text-left space-y-1">
            <p className="font-medium font-mono">
              &copy; {new Date().getFullYear()} Alexander Unisex Salon – Padmasri Hills. 
            </p>
            <p>
              Heera Complex, Sun City, Bandlaguda Jagir, Hyderabad, TS, India. All rights reserved.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 border border-stone-850 hover:border-amber-400/50 bg-neutral-900 px-4.5 py-2.5 rounded-sm font-sans tracking-wide uppercase font-bold text-stone-300 hover:text-amber-400 transition-all cursor-pointer shadow-lg"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5" />
          </button>

        </div>

      </div>
    </footer>
  );
}
