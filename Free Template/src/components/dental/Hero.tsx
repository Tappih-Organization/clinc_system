import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  ChevronDown,
  Sparkles,
  Heart,
  Shield,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  clinicName: string;
  tagline: string;
  description: string;
  phone: string;
}

export function Hero({ clinicName, tagline, description, phone }: HeroProps) {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingElements = [
    { icon: Heart, color: "text-pink-400", delay: 0, duration: 6 },
    { icon: Sparkles, color: "text-yellow-400", delay: 1, duration: 5 },
    { icon: Shield, color: "text-green-400", delay: 2, duration: 7 },
    { icon: Award, color: "text-purple-400", delay: 0.5, duration: 8 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900">
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-cyan-300 rounded-full blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="absolute top-1/2 right-1/4 w-20 h-20 bg-purple-300 rounded-full blur-xl"
          />

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&h=1080&fit=crop')] bg-cover bg-center"
        />
      </div>

      {/* Floating Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 0.6,
            y: -200,
            x: 25,
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${element.color} z-10`}
          style={{
            left: `${20 + index * 20}%`,
            top: `${70 + index * 5}%`,
          }}
        >
          <element.icon className="w-8 h-8" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20 text-center text-white z-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">
              Award-Winning Dental Care
            </span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>

          {/* Main Heading with Gradient Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              {clinicName}
            </span>
          </motion.h1>

          {/* Tagline with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-8"
          >
            <p className="text-xl md:text-3xl lg:text-4xl font-light text-blue-100">
              {tagline}
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-12 text-blue-50 max-w-4xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-white to-blue-50 text-blue-600 hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:shadow-2xl text-lg px-10 py-6 h-auto rounded-2xl font-semibold group"
              >
                <Calendar className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Book Appointment
                <Sparkles className="w-4 h-4 ml-2 group-hover:scale-125 transition-transform duration-300" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToServices}
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:shadow-2xl text-lg px-10 py-6 h-auto rounded-2xl font-semibold group"
              >
                <Shield className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: "15+", label: "Years Experience", icon: Award },
              { number: "2500+", label: "Happy Patients", icon: Heart },
              { number: "98%", label: "Success Rate", icon: Shield },
              { number: "24/7", label: "Emergency Care", icon: Phone },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-300 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
            >
              <Phone className="w-5 h-5 text-cyan-300" />
              <span className="text-lg font-medium">{phone}</span>
            </motion.div>
            <div className="hidden sm:block w-px h-8 bg-blue-300/50" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-lg bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
            >
              Emergency Appointments Available
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: 15,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="cursor-pointer group"
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
              <ChevronDown className="w-8 h-8 text-white group-hover:text-cyan-300 transition-colors duration-300" />
            </div>
            <p className="text-sm text-blue-200 mt-2 opacity-80">
              Scroll to explore
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-xl hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, delay: 3 }}
        className="absolute top-1/2 right-8 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur-lg hidden lg:block"
      />
    </section>
  );
}
