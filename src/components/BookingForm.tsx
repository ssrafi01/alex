/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { Calendar, Phone, Sparkles, AlertTriangle, CheckSquare, MessageSquare, Clock, User, ClipboardList, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SALON_SERVICES } from '../data.js';
import { Booking } from '../types.js';

interface BookingFormProps {
  selectedServiceId: string;
  onBookingSuccess: () => void;
}

export default function BookingForm({ selectedServiceId, onBookingSuccess }: BookingFormProps) {
  // Configured inputs
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');

  // Status displays
  const [receipt, setReceipt] = useState<Booking | null>(null);
  const [errors, setErrors] = useState<string>('');

  // Pre-select service if changed in catalog
  useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    } else {
      setServiceId(SALON_SERVICES[0].id);
    }
  }, [selectedServiceId]);

  const timeBlocks = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', 
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
  ];

  // Secure Indian phone patterns (must be close to 10 digits digits)
  const validateForm = () => {
    if (!clientName.trim()) return 'Please enter your name.';
    if (!clientPhone.trim() || clientPhone.length < 10) return 'Please provide a valid Indian phone number (10 digits).';
    if (!date) return 'Please select a preferred date.';
    if (!serviceId) return 'Please choose a grooming treatment.';
    return '';
  };

  const handleBookSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors('');

    const errorMsg = validateForm();
    if (errorMsg) {
      setErrors(errorMsg);
      return;
    }

    const matchedService = SALON_SERVICES.find(s => s.id === serviceId);
    const serviceName = matchedService ? matchedService.name : 'Executive Service';

    const newBooking: Booking = {
      id: `ALX-${Math.floor(100000 + Math.random() * 900000)}`,
      clientName,
      clientPhone,
      serviceId,
      serviceName,
      date,
      time,
      notes,
      createdAt: new Date().toISOString(),
      status: 'pending' // pending confirmation from salon manager
    };

    // Store to localStorage
    const existing: Booking[] = [];
    const cached = localStorage.getItem('alexander_bookings');
    if (cached) {
      try {
        existing.push(...JSON.parse(cached));
      } catch (err) {
        // quiet fail
      }
    }
    
    const updated = [newBooking, ...existing];
    localStorage.setItem('alexander_bookings', JSON.stringify(updated));

    setReceipt(newBooking);
    onBookingSuccess();

    // Reset fields
    setClientName('');
    setClientPhone('');
    setNotes('');
  };

  // Compose dynamic WhatsApp message string pointing to executive line
  const triggerWhatsAppDraft = () => {
    const matchedService = SALON_SERVICES.find(s => s.id === serviceId);
    const serviceLabel = matchedService ? matchedService.name : 'Grooming Style';
    
    const text = `Hello Alexander Unisex Salon (Padmasri Hills),%0A%0AI would like to request appointment booking:%0A%0A*Name:* ${clientName || 'Guest'}%0A*Phone:* ${clientPhone || 'Shared'}%0A*Service:* ${serviceLabel}%0A*Date:* ${date || 'Preferred'}%0A*Time:* ${time}%0A*Notes:* ${notes || 'None'}%0A%0AThank you, looking forward to confirm my appointment!`;
    const waURL = `https://wa.me/919052050202?text=${text}`;
    window.open(waURL, '_blank');
  };

  return (
    <section 
      id="booking" 
      className="bg-zinc-950 py-24 relative overflow-hidden border-t border-amber-500/5 text-stone-200"
    >
      {/* Decorative vectors */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-amber-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Luxury Quick appointment details */}
          <div className="lg:col-span-5 font-sans space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-amber-400" />
              <span className="text-amber-400 font-sans text-xs uppercase tracking-[4px] font-bold">Priority Seat</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-amber-50 leading-tight">
              Reserve Your Premium <br />
              <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-300">
                Salon Experience
              </span>
            </h2>

            <p className="text-stone-300 text-sm md:text-base leading-relaxed tracking-wide font-normal">
              Book online to safeguard your preferred slot. Avoid waiting queues at Padmasri Hills. Alexander operates with absolute punctuality and hygienic setups.
            </p>

            {/* Benefit Items Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <CheckSquare id="form-check-1" className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm text-stone-400">Instantly saved to local appointment logs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckSquare id="form-check-2" className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm text-stone-400">Zero booking fee or advanced payments needed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckSquare id="form-check-3" className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs md:text-sm text-stone-400">Priority consultation with primary Director on early slots</span>
              </div>
            </div>

            {/* Quick Contact Desk */}
            <div className="p-5 rounded-md bg-neutral-900 border border-amber-500/10 text-stone-400">
              <h4 className="font-sans text-xs uppercase tracking-wider text-amber-200 font-bold mb-2">Need Quick Assistance?</h4>
              <p className="text-xs leading-normal">
                If the automated system isn't matching your specific timing, call our front desk in Hyderabad at <strong className="text-amber-300">+91 90520 50202</strong> for manual reserves. Hour closes 10 PM.
              </p>
            </div>
          </div>

          {/* Right Block: Secure Dynamic Form Engine */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="bg-neutral-950 border border-amber-500/15 w-full max-w-lg p-6 md:p-8 rounded-lg relative shadow-2xl">
              
              <AnimatePresence mode="wait">
                {receipt ? (
                  // Success Receipt display
                  <motion.div
                    key="receipt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6 text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/50 flex items-center justify-center text-amber-400 mx-auto">
                      <Check className="w-8 h-8 animate-bounce" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl text-amber-100">Slot Request Sent!</h3>
                      <p className="font-sans text-xs text-stone-400">Reference Block: <strong className="text-amber-400 font-mono">{receipt.id}</strong></p>
                    </div>

                    <div className="bg-neutral-900/60 p-5 rounded-md text-left font-sans space-y-3.5 border border-amber-500/15">
                      <div className="flex justify-between text-xs">
                        <span className="text-stone-500 font-medium lowercase">Client</span>
                        <span className="text-amber-200 font-bold">{receipt.clientName}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-stone-500 font-medium lowercase">Contact</span>
                        <span className="text-stone-300 font-bold">{receipt.clientPhone}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-stone-500 font-medium lowercase">Service</span>
                        <span className="text-amber-100 font-bold">{receipt.serviceName}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-stone-500 font-medium lowercase">Preferred Date</span>
                        <span className="text-stone-300 font-semibold">{receipt.date}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-stone-500 font-medium lowercase">Selected Slot</span>
                        <span className="text-amber-300 font-mono font-bold">{receipt.time}</span>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <button
                        onClick={triggerWhatsAppDraft}
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs tracking-widest uppercase font-bold py-3.5 rounded-sm transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>Send to WhatsApp Screen</span>
                      </button>

                      <button
                        onClick={() => setReceipt(null)}
                        className="w-full border border-stone-800 hover:border-amber-400 text-stone-300 hover:text-amber-400 font-sans text-[11px] tracking-widest uppercase font-bold py-3 rounded-sm transition-all cursor-pointer"
                      >
                        Book Another Treatment
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  // Scheduler Form Body
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-serif text-xl text-amber-100 font-normal">Schedule Grooming</h3>
                      <p className="font-sans text-[11px] text-stone-400 mt-1">Complete the entries to block coordinates instantly.</p>
                    </div>

                    {errors && (
                      <div className="bg-red-500/10 border border-red-500/30 text-rose-300 text-xs p-3 rounded-sm flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                        <span className="font-medium">{errors}</span>
                      </div>
                    )}

                    <form onSubmit={handleBookSubmit} className="space-y-4 font-sans text-xs">
                      
                      {/* Name and Phone Flex */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] uppercase font-bold text-stone-400 mb-1.5 block tracking-widest">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-600" />
                            <input
                              type="text"
                              placeholder="e.g. Srinivasa"
                              value={clientName}
                              onChange={(e) => setClientName(e.target.value)}
                              className="w-full bg-neutral-950 border border-zinc-805 text-stone-100 pl-9 pr-3 py-2.5 rounded-sm text-xs focus:outline-none focus:border-amber-400 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] uppercase font-bold text-stone-400 mb-1.5 block tracking-widest">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-600" />
                            <input
                              type="tel"
                              placeholder="e.g. 90520 50202"
                              value={clientPhone}
                              onChange={(e) => setClientPhone(e.target.value)}
                              className="w-full bg-neutral-950 border border-zinc-805 text-stone-100 pl-9 pr-3 py-2.5 rounded-sm text-xs focus:outline-none focus:border-amber-400 transition-colors"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Service Selector selection */}
                      <div>
                        <label className="text-[10px] uppercase font-bold text-stone-400 mb-1.5 block tracking-widest">Select Styling Treatment</label>
                        <div className="relative">
                          <ClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-600 pointer-events-none" />
                          <select
                            value={serviceId}
                            onChange={(e) => setServiceId(e.target.value)}
                            className="w-full bg-neutral-950 border border-zinc-805 text-stone-300 pl-10 pr-3 py-2.5 rounded-sm text-xs focus:outline-none focus:border-amber-400 transition-colors"
                          >
                            {SALON_SERVICES.map((s) => (
                              <option key={s.id} value={s.id}>{s.name} ({s.priceRange})</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Date selection and Time selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] uppercase font-bold text-stone-400 mb-1.5 block tracking-widest">Preferred Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-600 pointer-events-none" />
                            <input
                              type="date"
                              required
                              min={new Date().toISOString().split('T')[0]} // avoid historical dates
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className="w-full bg-neutral-950 border border-zinc-805 text-stone-100 pl-10 pr-3 py-2.5 rounded-sm text-xs focus:outline-none focus:border-amber-400 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] uppercase font-bold text-stone-400 mb-1.5 block tracking-widest">Selected Hour</label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-600 pointer-events-none" />
                            <select
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                              className="w-full bg-neutral-950 border border-zinc-805 text-stone-300 pl-10 pr-3 py-2.5 rounded-sm text-xs focus:outline-none focus:border-amber-400 transition-colors"
                            >
                              {timeBlocks.map((timeBlock) => (
                                <option key={timeBlock} value={timeBlock}>{timeBlock}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Stylist Notes / Special Instructions optional */}
                      <div>
                        <label className="text-[10px] uppercase font-bold text-stone-400 mb-1.5 block tracking-widest">Special Requests / Notes (Optional)</label>
                        <textarea
                          rows={2}
                          placeholder="Fibers, allergies, extensions, or style references..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full bg-neutral-950 border border-zinc-805 text-stone-100 p-3 rounded-sm text-xs focus:outline-none focus:border-amber-400 transition-colors placeholder:text-zinc-650"
                        />
                      </div>

                      {/* Submit action block */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-sans text-xs tracking-widest uppercase font-bold py-4 rounded-sm transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(212,154,29,0.15)] hover:shadow-[0_4px_30px_rgba(212,154,29,0.3)] hover:-translate-y-0.5"
                        >
                          Book Priority Chair
                        </button>
                      </div>

                      {/* Simple direct WhatsApp option */}
                      <div className="flex items-center justify-center gap-3 pt-2">
                        <span className="h-[1px] flex-1 bg-zinc-805" />
                        <span className="text-[10px] uppercase tracking-widest text-[#d8c393]/70 font-semibold font-sans">Or Quick Reserve</span>
                        <span className="h-[1px] flex-1 bg-zinc-805" />
                      </div>

                      <button
                        type="button"
                        onClick={triggerWhatsAppDraft}
                        className="w-full flex items-center justify-center gap-1 bg-[#1a382c] hover:bg-[#234c3c] text-emerald-300 hover:text-emerald-250 font-sans text-[11px] tracking-widest uppercase font-bold py-3 border border-emerald-500/10 rounded-sm transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-emerald-300 stroke-none" />
                        <span>Instant WhatsApp Booking</span>
                      </button>

                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
