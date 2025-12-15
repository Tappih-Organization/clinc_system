export interface DentistProfile {
  name: string;
  title: string;
  experience: string;
  image: string;
  bio: string;
  certifications: string[];
  specialties: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image?: string;
  rating: number;
  review: string;
  date: string;
  treatment?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "clinic" | "team" | "before-after" | "equipment";
  title?: string;
}

export interface ContactInfo {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface ClinicData {
  name: string;
  tagline: string;
  description: string;
  dentist: DentistProfile;
  team: TeamMember[];
  services: Service[];
  testimonials: Testimonial[];
  gallery: GalleryImage[];
  contact: ContactInfo;
}
