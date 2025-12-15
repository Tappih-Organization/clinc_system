import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Calendar,
  Sparkles,
  Shield,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  clinicName: string;
  phone: string;
}

const navItems = [
  { name: "Home", href: "#home", icon: Heart },
  { name: "About", href: "#about", icon: Shield },
  { name: "Services", href: "#services", icon: Sparkles },
  { name: "Gallery", href: "#gallery", icon: Calendar },
  { name: "Reviews", href: "#testimonials", icon: Heart },
  { name: "Contact", href: "#contact", icon: Phone },
];

export function Header({ clinicName, phone }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-transparent",
        )}
      >
        {/* Animated Background */}
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white to-purple-50/50"
          />
        )}

        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Enhanced Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">BS</span>
                </div>

                {/* Floating Sparkles */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                  animate={{
                    scale: 1.2,
                    rotate: 180,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full"
                  animate={{
                    scale: 1.3,
                    y: -3,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>

              <div className="flex flex-col">
                <span
                  className={cn(
                    "font-bold text-xl lg:text-2xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600",
                    !isScrolled && "text-white bg-clip-text",
                  )}
                >
                  {clinicName}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium transition-colors duration-300",
                    isScrolled ? "text-gray-500" : "text-blue-200",
                  )}
                >
                  Excellence in Dental Care
                </span>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl group flex items-center gap-2",
                      activeSection === item.href.substring(1)
                        ? "text-blue-600"
                        : isScrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-blue-200",
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    {item.name}

                    {/* Active Indicator */}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      initial={false}
                    />
                  </motion.button>
                </motion.div>
              ))}
            </nav>

            {/* Enhanced Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(`tel:${phone}`, "_self")}
                  className={cn(
                    "transition-all duration-300 rounded-xl group flex items-center gap-2",
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white hover:text-blue-200 hover:bg-white/10",
                  )}
                >
                  <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  Call Now
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("#booking")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Book Now
                  <Sparkles className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-3 rounded-xl transition-all duration-300 group",
                isScrolled
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10",
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 rounded-b-2xl"
              >
                <nav className="py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "flex items-center gap-3 w-full text-left px-6 py-3 text-sm font-medium transition-all duration-300 group",
                        activeSection === item.href.substring(1)
                          ? "text-blue-600 bg-blue-50 border-r-4 border-blue-600"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50",
                      )}
                    >
                      <item.icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      {item.name}
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                        />
                      )}
                    </motion.button>
                  ))}

                  <div className="px-6 pt-6 space-y-3 border-t border-gray-100">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`tel:${phone}`, "_self")}
                        className="w-full justify-start group border-2 border-blue-200 hover:border-blue-600 hover:bg-blue-50"
                      >
                        <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Call Now: {phone}
                      </Button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button
                        onClick={() => scrollToSection("#booking")}
                        className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group"
                      >
                        <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Book Appointment
                        <Sparkles className="w-4 h-4 ml-auto group-hover:scale-110 transition-transform duration-300" />
                      </Button>
                    </motion.div>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mouse Follower for Desktop */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 lg:opacity-30 pointer-events-none z-40 mix-blend-multiply"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  );
}
