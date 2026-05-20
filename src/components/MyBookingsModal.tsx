/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { X, CalendarDays, Trash2, Clock, Check, AlertCircle, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Booking } from '../types.js';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateCount: (count: number) => void;
}

export default function MyBookingsModal({ isOpen, onClose, onUpdateCount }: MyBookingsModalProps) {
  const [appointments, setAppointments] = useState<Booking[]>([]);

  // Reload appointments from local storage context dynamically
  useEffect(() => {
    if (isOpen) {
      const cached = localStorage.getItem('alexander_bookings');
      if (cached) {
        try {
          const booked = JSON.parse(cached) as Booking[];
          setAppointments(booked);
          onUpdateCount(booked.filter(b => b.status !== 'cancelled').length);
        } catch (e) {
          // quiet fail
        }
      }
    }
  }, [isOpen]);

  const handleCancel = (bookingId: string) => {
    const updated = appointments.map((appt) => {
      if (appt.id === bookingId) {
        return { ...appt, status: 'cancelled' as const };
      }
      return appt;
    });

    setAppointments(updated);
    localStorage.setItem('alexander_bookings', JSON.stringify(updated));
    onUpdateCount(updated.filter(b => b.status !== 'cancelled').length);
  };

  const handleRemoveEntry = (bookingId: string) => {
    const updated = appointments.filter((appt) => appt.id !== bookingId);
    setAppointments(updated);
    localStorage.setItem('alexander_bookings', JSON.stringify(updated));
    onUpdateCount(updated.filter(b => b.status !== 'cancelled').length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="bookings-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-end bg-neutral-950/80 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Main Draw Slide Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-full max-w-md h-full bg-neutral-950 border-l border-amber-500/15 p-6 flex flex-col justify-between shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header portion */}
            <div>
              <div className="flex items-center justify-between border-b border-amber-500/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-amber-400" />
                  <h3 className="font-serif text-lg text-amber-100 font-normal uppercase tracking-wider">My Appointments</h3>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-1.5 border border-zinc-805 text-zinc-400 hover:text-amber-400 rounded-sm cursor-pointer"
                  aria-label="Close panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Booking Cards Stack */}
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin">
                {appointments.length > 0 ? (
                  appointments.map((appt) => {
                    const isCancelled = appt.status === 'cancelled';
                    
                    return (
                      <div
                        key={appt.id}
                        className={`p-4 rounded-sm border relative transition-all ${
                          isCancelled 
                            ? 'bg-neutral-950/20 border-zinc-900 opacity-60' 
                            : 'bg-zinc-900/40 border-amber-500/10 hover:border-amber-400/25'
                        }`}
                      >
                        {/* Upper Details */}
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold block">
                              Ref {appt.id}
                            </span>
                            <h4 className="font-serif text-sm text-amber-50 font-normal mt-1 leading-normal">
                              {appt.serviceName}
                            </h4>
                          </div>

                          {/* Status Badge */}
                          <div className="text-right">
                            {isCancelled ? (
                              <span className="text-[9px] bg-red-950/20 border border-red-900/40 text-red-400 px-2 py-0.5 rounded-sm uppercase font-mono tracking-wider">
                                Cancelled
                              </span>
                            ) : (
                              <span className="text-[9px] bg-amber-400/10 border border-amber-400/20 text-amber-400 px-2 py-0.5 rounded-sm uppercase font-mono tracking-wider animate-pulse">
                                Pending
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Mid Details */}
                        <div className="mt-4 pt-3 border-t border-amber-500/5 grid grid-cols-2 gap-2 text-[11px] font-sans text-stone-400">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-3.5 h-3.5 text-amber-500/70" />
                            <span>{appt.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-amber-500/70" />
                            <span>{appt.time}</span>
                          </div>
                        </div>

                        {/* Special request text */}
                        {appt.notes && (
                          <p className="text-[10px] italic text-stone-500 mt-2 bg-neutral-950/30 p-2 rounded-sm select-none">
                            " {appt.notes} "
                          </p>
                        )}

                        {/* Booking Cancel/Revise Activator */}
                        <div className="mt-4 flex justify-end gap-2 pt-2">
                          {isCancelled ? (
                            <button
                              onClick={() => handleRemoveEntry(appt.id)}
                              className="text-[10px] font-sans tracking-wider text-rose-400 hover:text-rose-300 uppercase font-bold flex items-center gap-1 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Remove Entry</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleCancel(appt.id)}
                              className="text-[10px] font-sans tracking-wider text-stone-500 hover:text-rose-400 uppercase font-bold flex items-center gap-1 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                              <span>Cancel Reservation</span>
                            </button>
                          )}
                        </div>

                      </div>
                    );
                  })
                ) : (
                  // Empty state
                  <div className="text-center py-16 space-y-4">
                    <Scissors className="w-8 h-8 text-stone-600 mx-auto stroke-1" />
                    <h4 className="font-serif text-amber-100 text-sm font-semibold">No Bookings Recorded</h4>
                    <p className="font-sans text-[11px] text-stone-500 max-w-xs mx-auto">
                      You haven't requested any styling treatments yet in this browser. Try selecting slots in the form!
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer portion of draw */}
            <div className="bg-neutral-950 border-t border-amber-500/10 pt-4 mt-6 text-center text-[10px] text-zinc-500">
              <span className="block font-medium">Alexander Unisex Salon – Padmasri Hills</span>
              <span className="block italic mt-1 pb-1">Direct support helper: +91 90520 50202</span>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
