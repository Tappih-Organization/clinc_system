import { motion } from "framer-motion";
import {
  Stethoscope,
  Sparkles,
  Plus,
  Smile,
  Brush,
  Sun,
  ArrowRight,
  Check,
  Zap,
  Shield,
  Heart,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Service } from "@/types/dental";

const iconMap = {
  Stethoscope,
  Sparkles,
  Plus,
  Smile,
  Brush,
  Sun,
};

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const gradients = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-400",
    "from-green-500 to-emerald-400",
    "from-orange-500 to-yellow-400",
    "from-red-500 to-pink-400",
    "from-indigo-500 to-blue-400",
  ];

  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl transform -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl transform translate-x-1/2" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-green-200/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full px-6 py-3 mb-6 border border-blue-200"
            >
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Our Expert Services</span>
              <Sparkles className="w-5 h-5" />
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-gray-900">Dental Care</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From routine checkups to advanced procedures, we offer complete
              dental solutions tailored to your unique needs with cutting-edge
              technology and gentle care.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap] || Stethoscope;
              const gradient = gradients[index % gradients.length];

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm overflow-hidden relative">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Floating Particles */}
                    <motion.div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce-gentle" />
                    <motion.div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-float" />

                    <CardHeader className="text-center pb-4 relative">
                      {/* Icon with enhanced animation */}
                      <motion.div
                        className={`mx-auto mb-6 w-20 h-20 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          y: -5,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </motion.div>

                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                        {service.title}
                      </CardTitle>

                      {service.price && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1 + index * 0.1,
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className={`bg-gradient-to-r ${gradient} text-white border-0 shadow-md`}
                          >
                            {service.price}
                          </Badge>
                        </motion.div>
                      )}
                    </CardHeader>

                    <CardContent className="pt-0 relative">
                      <motion.p
                        className="text-gray-600 mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Features List with Enhanced Animation */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.3 + index * 0.1 + featureIndex * 0.1,
                            }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            </motion.div>
                            <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA Button with Gradient */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          onClick={scrollToBooking}
                          className={`w-full bg-gradient-to-r ${gradient} hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group/btn`}
                        >
                          <Shield className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Book Consultation
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl p-8 lg:p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                <motion.h3
                  className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Ready to Transform Your Smile?
                </motion.h3>

                <motion.p
                  className="text-lg lg:text-xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Join thousands of satisfied patients who have discovered the
                  perfect blend of advanced dental technology and compassionate
                  care at our practice.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      onClick={scrollToBooking}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <Star className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                      Schedule Your Appointment
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open("tel:+15551234567", "_self")}
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
                    >
                      <Shield className="w-5 h-5 mr-3" />
                      Emergency Care Available
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Floating Testimonial Elements */}
                <motion.div
                  className="flex justify-center items-center gap-8 mt-8 text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>2,500+ Happy Patients</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>15+ Years Experience</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
