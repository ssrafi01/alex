/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white select-none"
        >
          {/* Subtle Golden Geometric Line System */}
          <div className="absolute inset-12 border border-amber-500/10 pointer-events-none" />
          <div className="absolute inset-16 border border-amber-500/5 pointer-events-none" />
          
          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            {/* Crown / Luxury Icon Emblem */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6"
            >
              <svg 
                className="w-12 h-12 text-amber-400" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              >
                <path d="M12 4L16 8L22 6L19 15H5L2 6L8 8L12 4Z" strokeLinecap="round" strokeLinejoin="round" fill="rgba(245, 158, 11, 0.05)" />
                <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                <circle cx="5" cy="15" r="1" fill="currentColor" />
                <circle cx="19" cy="15" r="1" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Main Typographic Monicker */}
            <motion.h1
              initial={{ opacity: 0, tracking: '10px' }}
              animate={{ opacity: 1, tracking: '3px' }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="font-serif text-3xl md:text-4xl text-amber-100 font-normal uppercase leading-tight"
            >
              ALEXANDER
            </motion.h1>

            {/* Sub-label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-sans text-[10px] tracking-[6px] text-amber-400 uppercase mt-2 font-medium"
            >
              Unisex Salon • Padmasri Hills
            </motion.div>

            {/* Shifting Thin Gold Line */}
            <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-8 relative overflow-hidden">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              />
            </div>

            {/* Location tag */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[11px] font-mono mt-12 text-zinc-400 tracking-wider uppercase"
            >
              Hyderabad, India
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
