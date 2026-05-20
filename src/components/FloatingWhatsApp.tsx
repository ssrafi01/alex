/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, CalendarRange } from 'lucide-react';

export default function FloatingWhatsApp() {
  const triggerWhatsAppQuickMessage = () => {
    const text = `Hello Alexander Unisex Salon! I would like to quickly book an appointment and ask about styling prices. Please guide me.`;
    const waURL = `https://wa.me/919052050202?text=${encodeURIComponent(text)}`;
    window.open(waURL, '_blank');
  };

  return (
    <div 
      id="floating-whatsapp-container" 
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      <button
        onClick={triggerWhatsAppQuickMessage}
        className="pointer-events-auto bg-emerald-600 hover:bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_40px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-1 hover:scale-105 relative cursor-pointer group"
        aria-label="Direct WhatsApp Booking"
      >
        <MessageSquare className="w-6 h-6 fill-white stroke-none group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Pulsing ring visual */}
        <span className="absolute -inset-1 border border-emerald-500/30 rounded-full animate-ping pointer-events-none" />

        {/* Hover label flag */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-neutral-900 border border-amber-500/10 text-amber-300 px-3 py-1.5 rounded-sm whitespace-nowrap text-[10px] tracking-widest font-sans uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg shadow-black">
          WhatsApp Booking
        </span>
      </button>
    </div>
  );
}
