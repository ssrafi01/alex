/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Clock, Share2, Instagram, Facebook, ShieldAlert } from 'lucide-react';

export default function ContactMap() {
  const mapSourceUrl = "https://maps.google.com/maps?q=Heera%20Complex,%201,%20Padmasri%20Hills%20Rd,%20Padmasri%20Hills,%20Sun%20City,%20Bandlaguda%20Jagir,%20Hyderabad,%20Telangana%20500093&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section 
      id="contact" 
      className="bg-neutral-950 py-24 relative overflow-hidden border-t border-amber-500/5 text-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Split-Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Editorial Address Book */}
          <div className="lg:col-span-5 font-sans space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-amber-400" />
                <span className="text-amber-400 font-sans text-xs uppercase tracking-[4px] font-bold">Location Desk</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-amber-50 leading-tight">
                Visit our Luxury <br />
                <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-300">
                  Hyderabad Sanctuary
                </span>
              </h2>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed tracking-wide font-normal">
                Perfect hair transformations are closer than you contemplate. Alexander Unisex Salon is nestled securely inside Heera Complex at Padmasri Hills, Sun City, Hyderabad.
              </p>
            </div>

            {/* Structured Contact Details cards */}
            <div className="space-y-4">
              
              {/* Maps Address card */}
              <div className="flex gap-4 p-4 rounded-sm bg-zinc-90 w-full border border-amber-500/5 hover:border-amber-400/15 transition-colors">
                <div className="w-10 h-10 rounded-full border border-amber-400/20 bg-neutral-950 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-amber-200 font-bold mb-1">Our Address</h4>
                  <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed font-medium">
                    Heera Complex, 1, Padmasri Hills Rd, Padmasri Hills, Sun City, Bandlaguda Jagir, Hyderabad, Telangana 500093
                  </p>
                </div>
              </div>

              {/* Hotlines Phone card */}
              <div className="flex gap-4 p-4 rounded-sm bg-zinc-90 w-full border border-amber-500/5 hover:border-amber-400/15 transition-colors">
                <div className="w-10 h-10 rounded-full border border-amber-400/20 bg-neutral-950 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-amber-200 font-bold mb-1">Primary Hotline</h4>
                  <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed font-semibold">
                    <a href="tel:+919052050202" className="hover:text-amber-400 transition-colors">+91 90520 50202</a>
                  </p>
                </div>
              </div>

              {/* Hours operation card */}
              <div className="flex gap-4 p-4 rounded-sm bg-zinc-90 w-full border border-amber-500/5 hover:border-amber-400/15 transition-colors">
                <div className="w-10 h-10 rounded-full border border-amber-400/20 bg-neutral-950 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-amber-200 font-bold mb-1">Hours of Service</h4>
                  <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed font-medium">
                    Open Daily — 09:30 AM to 10:00 PM <br />
                    <span className="text-emerald-400 text-[10px] font-mono tracking-wider font-extrabold uppercase mt-1 block">Closes at 10 PM</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Social Grid Connect */}
            <div className="space-y-3 pt-2">
              <h4 className="font-sans text-[10px] uppercase font-bold text-stone-500 tracking-widest">Connect with Alexander</h4>
              <div className="flex items-center gap-3">
                <a
                  href="#instagram"
                  className="w-10 h-10 rounded-full border border-stone-800 hover:border-amber-400/50 hover:bg-amber-400/5 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  className="w-10 h-10 rounded-full border border-stone-800 hover:border-amber-400/50 hover:bg-amber-400/5 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-all"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText('Heera Complex, Padmasri Hills, Hyderabad')}
                  className="w-10 h-10 rounded-full border border-stone-800 hover:border-amber-400/50 hover:bg-amber-405/5 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-all cursor-pointer"
                  title="Copy location coordinates"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Side: High-End Frameless IFrame Google Maps implementation */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-md overflow-hidden border border-amber-500/15 relative bg-zinc-900 shadow-2xl">
              <iframe
                src={mapSourceUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} // Custom stylized dark map mode to pair premium visual theme
                allowFullScreen={false}
                loading="lazy"
                title="Alexander Unisex Salon Padmasri Hills Location Map"
                referrerPolicy="no-referrer-when-downgrade"
                id="maps-embed-iframe"
              />
              
              {/* Outer corner frame lines */}
              <div className="absolute inset-4 border border-amber-500/10 rounded-sm pointer-events-none z-10" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
