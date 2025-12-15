import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Heart,
  Users,
  MessageCircle,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Testimonial } from "@/types/dental";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const navigateTestimonial = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    if (direction === "prev") {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
    } else {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
      >
        <Star
          className={`w-6 h-6 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          } transition-all duration-300`}
        />
      </motion.div>
    ));
  };

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

  return (
    <section
      id="testimonials"
      className="py-16 lg:py-24 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-2xl transform -translate-x-1/2" />
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full px-6 py-3 mb-6 border border-orange-200"
            >
              <Heart className="w-5 h-5" />
              <span className="font-semibold">Patient Stories</span>
              <Award className="w-5 h-5" />
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                What Our Patients
              </span>
              <br />
              <span className="text-gray-900">Say About Us</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Don't just take our word for it - hear from the patients who have
              experienced our exceptional care
            </motion.p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-8 mb-16"
          >
            {[
              { icon: Users, number: "2,500+", label: "Happy Patients" },
              { icon: Star, number: "4.9/5", label: "Average Rating" },
              { icon: MessageCircle, number: "98%", label: "Would Recommend" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Testimonial Display */}
          <motion.div variants={itemVariants} className="relative mb-16">
            <div className="max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className=""
                >
                  <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]" />
                    </div>

                    <CardContent className="p-8 lg:p-16 text-center relative">
                      {/* Quote Icon with Animation */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.2,
                          duration: 0.6,
                          type: "spring",
                        }}
                        className="relative mb-8"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto relative">
                          <Quote className="w-10 h-10 text-white" />

                          {/* Floating Sparkles */}
                          <motion.div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-rotate-slow" />
                          <motion.div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-bounce-gentle" />
                        </div>
                      </motion.div>

                      {/* Review Text */}
                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg lg:text-2xl text-gray-700 leading-relaxed mb-8 italic font-light relative"
                      >
                        <span className="text-6xl text-blue-200 absolute -top-6 -left-4 font-serif">
                          "
                        </span>
                        {testimonials[currentIndex].review}
                        <span className="text-6xl text-blue-200 absolute -bottom-6 -right-4 font-serif">
                          "
                        </span>
                      </motion.blockquote>

                      {/* Patient Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex items-center justify-center gap-6"
                      >
                        {testimonials[currentIndex].image && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="relative"
                          >
                            <img
                              src={testimonials[currentIndex].image}
                              alt={testimonials[currentIndex].name}
                              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                              <Heart className="w-3 h-3 text-white" />
                            </div>
                          </motion.div>
                        )}
                        <div className="text-left">
                          <div className="font-bold text-xl text-gray-900">
                            {testimonials[currentIndex].name}
                          </div>
                          {testimonials[currentIndex].treatment && (
                            <Badge
                              variant="secondary"
                              className="mt-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200"
                            >
                              {testimonials[currentIndex].treatment}
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-1/2 left-4 transform -translate-y-1/2"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigateTestimonial("prev")}
                className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-blue-600 shadow-lg w-12 h-12 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigateTestimonial("next")}
                className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-blue-600 shadow-lg w-12 h-12 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Testimonial Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3 mb-16"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex
                    ? "w-12 h-3"
                    : "w-3 h-3 hover:scale-125"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-blue-600 to-purple-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Testimonial Grid Preview */}
          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="cursor-pointer group"
                  onClick={() => goToTestimonial(index)}
                >
                  <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-6 relative">
                      {/* Mini Quote Icon */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                        <Quote className="w-4 h-4 text-blue-600" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Review Preview */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        "
                        {testimonial.review.length > 120
                          ? testimonial.review.substring(0, 120) + "..."
                          : testimonial.review}
                        "
                      </p>

                      {/* Patient Info */}
                      <div className="flex items-center gap-3">
                        {testimonial.image && (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover border border-gray-200"
                          />
                        )}
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </div>
                          {testimonial.treatment && (
                            <div className="text-xs text-gray-500">
                              {testimonial.treatment}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button
                onClick={() => {
                  const element = document.getElementById("booking");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto group"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Join Our Happy Patients Today
                <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mt-4"
            >
              Experience the same exceptional care that our patients rave about
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
