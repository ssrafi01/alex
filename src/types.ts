/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SalonService {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  duration: string;
  description: string;
  imageUrl: string;
  popular?: boolean;
  benefits?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  service?: string;
  avatarUrl?: string;
  isCustom?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hairstyles' | 'interiors' | 'makeup' | 'bridal' | 'grooming' | 'skincare';
  imageUrl: string;
  desc: string;
}

export interface Booking {
  id: string;
  clientName: string;
  clientPhone: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface FeatureBenefit {
  id: string;
  title: string;
  description: string;
}
