/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Loader from './components/Loader.tsx';
import OfferBanner from './components/OfferBanner.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import ServicesList from './components/ServicesList.tsx';
import BeforeAfter from './components/BeforeAfter.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import GallerySection from './components/GallerySection.tsx';
import ReelsSection from './components/ReelsSection.tsx';
import Testimonials from './components/Testimonials.tsx';
import BookingForm from './components/BookingForm.tsx';
import ContactMap from './components/ContactMap.tsx';
import Footer from './components/Footer.tsx';
import MyBookingsModal from './components/MyBookingsModal.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);

  // Synchronize scheduled bookings metric counts from localStorage on entry
  const refreshBookingCount = () => {
    const cached = localStorage.getItem('alexander_bookings');
    if (cached) {
      try {
        const bookingsList = JSON.parse(cached);
        if (Array.isArray(bookingsList)) {
          const active = bookingsList.filter((b: any) => b.status !== 'cancelled').length;
          setBookingCount(active);
        }
      } catch (err) {
        // quiet fail
      }
    }
  };

  useEffect(() => {
    refreshBookingCount();
    // Refresh count on window visibility or focus switches
    window.addEventListener('focus', refreshBookingCount);
    return () => window.removeEventListener('focus', refreshBookingCount);
  }, []);

  const handleSelectServiceFromCatalog = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const handleBookingSuccess = () => {
    refreshBookingCount();
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-slate-100 font-sans selection:bg-amber-400 selection:text-neutral-950 overflow-x-hidden antialiased">
      {/* Luxury Geometric Opacity Loader */}
      <Loader />

      {/* Top Floating Announcement */}
      <OfferBanner />

      {/* Main sticky Transparent bar */}
      <Navbar 
        onOpenBookings={() => setIsBookingsOpen(true)} 
        bookingCount={bookingCount} 
      />

      {/* Core Landings Page layout */}
      <main>
        {/* Full cinematic landing visual */}
        <Hero />

        {/* Master Storytelling bio and statistics */}
        <About />

        {/* Tab catalog and Search systems */}
        <ServicesList onSelectService={handleSelectServiceFromCatalog} />

        {/* Before & After interactive sweep compare slider */}
        <BeforeAfter />

        {/* Bento Grid standard cards */}
        <WhyChooseUs />

        {/* Lookbook filtered layout and overlay zoom tool */}
        <GallerySection />

        {/* Inst-Reels visual portfolio */}
        <ReelsSection />

        {/* Reviews dynamic carousel and review uploader */}
        <Testimonials />

        {/* Automated Priority reservation form */}
        <BookingForm 
          selectedServiceId={selectedServiceId} 
          onBookingSuccess={handleBookingSuccess} 
        />

        {/* Physical coordinates details desk and active black map viewer */}
        <ContactMap />
      </main>

      {/* Signature branding copy */}
      <Footer />

      {/* Double feedback panels and quick dial help */}
      <FloatingWhatsApp />

      {/* User Recorded Appointments Monitor panel */}
      <MyBookingsModal 
        isOpen={isBookingsOpen} 
        onClose={() => setIsBookingsOpen(false)} 
        onUpdateCount={setBookingCount} 
      />
    </div>
  );
}
