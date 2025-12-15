import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactInfo } from "@/types/dental";

interface ContactProps {
  contact: ContactInfo;
}

export function Contact({ contact }: ContactProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const formatAddress = () => {
    const { street, city, state, zip } = contact.address;
    return `${street}, ${city}, ${state} ${zip}`;
  };

  const getMapUrl = () => {
    const address = formatAddress();
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;
  };

  const openInMaps = () => {
    const address = formatAddress();
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located in the heart of Beverly Hills. We're here to
              serve you and your family's dental needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Address */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Our Location
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {contact.address.street}
                        <br />
                        {contact.address.city}, {contact.address.state}{" "}
                        {contact.address.zip}
                        <br />
                        {contact.address.country}
                      </p>
                      <Button
                        variant="outline"
                        onClick={openInMaps}
                        className="hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600"
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Phone Number
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Call us for appointments, emergencies, or any questions
                        about our services.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open(`tel:${contact.phone}`, "_self")
                        }
                        className="hover:bg-green-50 hover:border-green-600 hover:text-green-600"
                      >
                        {contact.phone}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Email Address
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Send us your questions, feedback, or appointment
                        requests via email.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open(`mailto:${contact.email}`, "_self")
                        }
                        className="hover:bg-purple-50 hover:border-purple-600 hover:text-purple-600"
                      >
                        {contact.email}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Office Hours
                      </h3>
                      <div className="space-y-2">
                        {Object.entries(contact.hours).map(([day, hours]) => (
                          <div
                            key={day}
                            className="flex justify-between items-center"
                          >
                            <span className="text-gray-600 font-medium">
                              {day}
                            </span>
                            <span
                              className={`font-medium ${hours === "Closed" ? "text-red-600" : "text-gray-900"}`}
                            >
                              {hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Stay connected with us on social media for dental tips,
                    clinic updates, and patient stories.
                  </p>
                  <div className="flex gap-4">
                    {contact.socials.facebook && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          window.open(contact.socials.facebook, "_blank")
                        }
                        className="hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600"
                      >
                        <Facebook className="w-5 h-5" />
                      </Button>
                    )}
                    {contact.socials.instagram && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          window.open(contact.socials.instagram, "_blank")
                        }
                        className="hover:bg-pink-50 hover:border-pink-600 hover:text-pink-600"
                      >
                        <Instagram className="w-5 h-5" />
                      </Button>
                    )}
                    {contact.socials.whatsapp && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          window.open(contact.socials.whatsapp, "_blank")
                        }
                        className="hover:bg-green-50 hover:border-green-600 hover:text-green-600"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg h-full overflow-hidden">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full min-h-[600px] bg-gray-200">
                    {/* Placeholder Map - In production, replace with actual Google Maps embed */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                      <div className="text-center p-8">
                        <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Interactive Map
                        </h4>
                        <p className="text-gray-600 mb-4">{formatAddress()}</p>
                        <Button
                          onClick={openInMaps}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Open in Google Maps
                        </Button>
                      </div>
                    </div>

                    {/* Interactive map placeholder - replace with actual Google Maps embed in production */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Emergency Notice */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  Dental Emergency?
                </h3>
                <p className="text-red-700 mb-6">
                  If you're experiencing a dental emergency outside of our
                  regular business hours, please don't hesitate to contact our
                  emergency line.
                </p>
                <Button
                  size="lg"
                  onClick={() => window.open(`tel:${contact.phone}`, "_self")}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Line: {contact.phone}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
