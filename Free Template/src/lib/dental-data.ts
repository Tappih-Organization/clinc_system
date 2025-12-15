import { ClinicData } from "@/types/dental";

export const dentalClinicData: ClinicData = {
  name: "Bright Smiles Dental",
  tagline: "Your Family's Smile Partner",
  description:
    "Providing exceptional dental care with a gentle touch for patients of all ages. Our modern clinic combines advanced technology with personalized care to ensure your comfort and optimal oral health.",

  dentist: {
    name: "Dr. Sarah Johnson",
    title: "Doctor of Dental Surgery",
    experience: "15+ years of experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
    bio: "Dr. Sarah Johnson has been dedicated to providing exceptional dental care for over 15 years. She graduated from Harvard School of Dental Medicine and has completed advanced training in cosmetic and restorative dentistry. Dr. Johnson is committed to staying current with the latest dental technologies and techniques to provide her patients with the best possible care.",
    certifications: [
      "Doctor of Dental Surgery (DDS) - Harvard School of Dental Medicine",
      "Advanced Cosmetic Dentistry Certification",
      "Invisalign Certified Provider",
      "Member of American Dental Association (ADA)",
    ],
    specialties: [
      "Cosmetic Dentistry",
      "Restorative Dentistry",
      "Preventive Care",
      "Invisalign Treatment",
    ],
  },

  team: [
    {
      id: "1",
      name: "Lisa Rodriguez",
      role: "Dental Hygienist",
      image:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face",
      bio: "Lisa is a licensed dental hygienist with 8 years of experience. She specializes in preventive care and patient education.",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Dental Assistant",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face",
      bio: "Michael assists Dr. Johnson with procedures and ensures patient comfort throughout their visit.",
    },
    {
      id: "3",
      name: "Emily Davis",
      role: "Office Manager",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face",
      bio: "Emily manages scheduling, insurance, and ensures smooth operations for all patients.",
    },
  ],

  services: [
    {
      id: "general",
      title: "General Dentistry",
      description:
        "Comprehensive dental care including checkups, cleanings, and preventive treatments.",
      icon: "Stethoscope",
      features: [
        "Regular Checkups",
        "Professional Cleanings",
        "Fluoride Treatments",
        "Oral Cancer Screenings",
      ],
      price: "Starting at $150",
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our cosmetic dental procedures.",
      icon: "Sparkles",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
      price: "Starting at $300",
    },
    {
      id: "implants",
      title: "Dental Implants",
      description:
        "Permanent solution for missing teeth with natural-looking results.",
      icon: "Plus",
      features: [
        "Single Implants",
        "Multiple Implants",
        "Full Mouth Reconstruction",
        "Implant Crowns",
      ],
      price: "Starting at $2,500",
    },
    {
      id: "orthodontics",
      title: "Orthodontics",
      description:
        "Straighten your teeth with traditional braces or clear aligners.",
      icon: "Smile",
      features: [
        "Traditional Braces",
        "Invisalign",
        "Retainers",
        "Orthodontic Consultations",
      ],
      price: "Starting at $4,000",
    },
    {
      id: "cleaning",
      title: "Professional Cleaning",
      description: "Deep cleaning and maintenance for optimal oral health.",
      icon: "Brush",
      features: [
        "Regular Cleanings",
        "Deep Cleaning",
        "Plaque Removal",
        "Gum Care",
      ],
      price: "Starting at $120",
    },
    {
      id: "whitening",
      title: "Teeth Whitening",
      description:
        "Professional whitening treatments for a brighter, whiter smile.",
      icon: "Sun",
      features: [
        "In-Office Whitening",
        "Take-Home Kits",
        "Touch-Up Treatments",
        "Consultation",
      ],
      price: "Starting at $400",
    },
  ],

  testimonials: [
    {
      id: "1",
      name: "Jennifer Smith",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1a5?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "Dr. Johnson and her team are absolutely wonderful! I was nervous about getting dental work done, but they made me feel so comfortable. The office is modern and clean, and the results exceeded my expectations.",
      date: "2024-01-15",
      treatment: "Cosmetic Dentistry",
    },
    {
      id: "2",
      name: "Robert Thompson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "I've been coming to Bright Smiles Dental for 3 years now, and I couldn't be happier. The staff is professional, friendly, and always on time. Highly recommend!",
      date: "2024-01-10",
      treatment: "General Dentistry",
    },
    {
      id: "3",
      name: "Maria Garcia",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "Got my dental implants here and the process was smooth from start to finish. Dr. Johnson explained everything clearly and the results look completely natural.",
      date: "2024-01-05",
      treatment: "Dental Implants",
    },
    {
      id: "4",
      name: "David Wilson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "The Invisalign treatment here changed my life! The team was supportive throughout the entire process and my teeth look amazing now.",
      date: "2023-12-20",
      treatment: "Orthodontics",
    },
  ],

  gallery: [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      alt: "Modern reception area",
      category: "clinic",
      title: "Reception Area",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      alt: "Treatment room with modern equipment",
      category: "clinic",
      title: "Treatment Room",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      alt: "Dr. Johnson with patient",
      category: "team",
      title: "Dr. Johnson with Patient",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop",
      alt: "Before and after teeth whitening",
      category: "before-after",
      title: "Teeth Whitening Results",
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop",
      alt: "State-of-the-art dental equipment",
      category: "equipment",
      title: "Modern Equipment",
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
      alt: "Comfortable waiting area",
      category: "clinic",
      title: "Waiting Area",
    },
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      alt: "Dental team photo",
      category: "team",
      title: "Our Team",
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
      alt: "Smile makeover before and after",
      category: "before-after",
      title: "Smile Makeover",
    },
    {
      id: "9",
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
      alt: "Advanced dental technology",
      category: "equipment",
      title: "Digital X-Ray",
    },
    {
      id: "10",
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      alt: "Patient consultation",
      category: "team",
      title: "Consultation",
    },
    {
      id: "11",
      src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
      alt: "Modern clinic interior",
      category: "clinic",
      title: "Clinic Interior",
    },
    {
      id: "12",
      src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&h=400&fit=crop",
      alt: "Sterilization equipment",
      category: "equipment",
      title: "Sterilization Station",
    },
  ],

  contact: {
    address: {
      street: "123 Health Plaza Drive",
      city: "Beverly Hills",
      state: "CA",
      zip: "90210",
      country: "USA",
    },
    phone: "+1 (555) 123-4567",
    email: "info@brightsmilesdental.com",
    hours: {
      Monday: "8:00 AM - 6:00 PM",
      Tuesday: "8:00 AM - 6:00 PM",
      Wednesday: "8:00 AM - 6:00 PM",
      Thursday: "8:00 AM - 6:00 PM",
      Friday: "8:00 AM - 5:00 PM",
      Saturday: "9:00 AM - 3:00 PM",
      Sunday: "Closed",
    },
    socials: {
      facebook: "https://facebook.com/brightsmilesdental",
      instagram: "https://instagram.com/brightsmilesdental",
      whatsapp: "https://wa.me/15551234567",
    },
  },
};

export const servicesList = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Orthodontics",
  "Professional Cleaning",
  "Teeth Whitening",
  "Root Canal Treatment",
  "Oral Surgery",
  "Pediatric Dentistry",
  "Emergency Dental Care",
];
