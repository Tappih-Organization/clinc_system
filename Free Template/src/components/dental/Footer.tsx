import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactInfo } from "@/types/dental";

interface FooterProps {
  clinicName: string;
  contact: ContactInfo;
}

export function Footer({ clinicName, contact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Orthodontics",
    "Teeth Whitening",
    "Emergency Care",
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formatAddress = () => {
    const { street, city, state, zip } = contact.address;
    return `${street}, ${city}, ${state} ${zip}`;
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">BS</span>
                </div>
                <span className="font-bold text-xl">{clinicName}</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Providing exceptional dental care with a gentle touch for
                patients of all ages. Your smile is our passion.
              </p>

              {/* Social Media */}
              <div className="flex gap-3">
                {contact.socials.facebook && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      window.open(contact.socials.facebook, "_blank")
                    }
                    className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                )}
                {contact.socials.instagram && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      window.open(contact.socials.instagram, "_blank")
                    }
                    className="border-gray-600 text-gray-300 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                )}
                {contact.socials.whatsapp && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      window.open(contact.socials.whatsapp, "_blank")
                    }
                    className="border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection("#services")}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {formatAddress()}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <button
                    onClick={() => window.open(`tel:${contact.phone}`, "_self")}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {contact.phone}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <button
                    onClick={() =>
                      window.open(`mailto:${contact.email}`, "_self")
                    }
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {contact.email}
                  </button>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Mon-Thu: 8AM-6PM</p>
                    <p className="text-gray-300 text-sm">Fri: 8AM-5PM</p>
                    <p className="text-gray-300 text-sm">Sat: 9AM-3PM</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-red-900/30 border border-red-800 rounded-lg">
                <p className="text-red-300 text-sm mb-2">
                  <strong>Emergency Line:</strong>
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`tel:${contact.phone}`, "_self")}
                  className="border-red-600 text-red-300 hover:bg-red-600 hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>
                © {currentYear} {clinicName}. All rights reserved.
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500" /> for healthy
                smiles
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </button>
              <button
                onClick={() => scrollToSection("#booking")}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
