import { Header } from "@/components/dental/Header";
import { Hero } from "@/components/dental/Hero";
import { About } from "@/components/dental/About";
import { Services } from "@/components/dental/Services";
import { Gallery } from "@/components/dental/Gallery";
import { Testimonials } from "@/components/dental/Testimonials";
import { Booking } from "@/components/dental/Booking";
import { Contact } from "@/components/dental/Contact";
import { Footer } from "@/components/dental/Footer";
import { dentalClinicData } from "@/lib/dental-data";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        clinicName={dentalClinicData.name}
        phone={dentalClinicData.contact.phone}
      />

      {/* Hero Section */}
      <Hero
        clinicName={dentalClinicData.name}
        tagline={dentalClinicData.tagline}
        description={dentalClinicData.description}
        phone={dentalClinicData.contact.phone}
      />

      {/* About Section */}
      <About dentist={dentalClinicData.dentist} team={dentalClinicData.team} />

      {/* Services Section */}
      <Services services={dentalClinicData.services} />

      {/* Gallery Section */}
      <Gallery images={dentalClinicData.gallery} />

      {/* Testimonials Section */}
      <Testimonials testimonials={dentalClinicData.testimonials} />

      {/* Booking Section */}
      <Booking />

      {/* Contact Section */}
      <Contact contact={dentalClinicData.contact} />

      {/* Footer */}
      <Footer
        clinicName={dentalClinicData.name}
        contact={dentalClinicData.contact}
      />
    </div>
  );
}
