import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Filter,
  Image as ImageIcon,
  Sparkles,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GalleryImage } from "@/types/dental";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: GalleryImage[];
}

const categories = [
  {
    key: "all",
    label: "All Photos",
    icon: ImageIcon,
    color: "from-blue-500 to-cyan-400",
  },
  {
    key: "clinic",
    label: "Our Clinic",
    icon: Camera,
    color: "from-purple-500 to-pink-400",
  },
  {
    key: "team",
    label: "Our Team",
    icon: Sparkles,
    color: "from-green-500 to-emerald-400",
  },
  {
    key: "before-after",
    label: "Results",
    icon: ZoomIn,
    color: "from-orange-500 to-yellow-400",
  },
  {
    key: "equipment",
    label: "Technology",
    icon: Filter,
    color: "from-red-500 to-pink-400",
  },
];

export function Gallery({ images }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

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
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  const openLightbox = (image: GalleryImage) => {
    const index = filteredImages.findIndex((img) => img.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentIndex + 1) % filteredImages.length;

    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") navigateImage("prev");
    if (e.key === "ArrowRight") navigateImage("next");
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section
      id="gallery"
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl transform translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl transform -translate-x-1/2" />
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full px-6 py-3 mb-6 border border-purple-200"
            >
              <Camera className="w-5 h-5" />
              <span className="font-semibold">Visual Gallery</span>
              <Sparkles className="w-5 h-5" />
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Our Clinic
              </span>
              <br />
              <span className="text-gray-900">Gallery</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Take a virtual tour of our modern facility and witness the
              transformations we achieve for our patients
            </motion.p>
          </motion.div>

          {/* Enhanced Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={
                    selectedCategory === category.key ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.key)}
                  className={cn(
                    "transition-all duration-300 rounded-2xl px-6 py-3 font-semibold group",
                    selectedCategory === category.key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg hover:shadow-xl border-0`
                      : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 border-2 border-gray-200 hover:shadow-lg",
                  )}
                >
                  <category.icon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {category.label}
                  <motion.div
                    className="ml-2 w-1 h-1 bg-current rounded-full opacity-0 group-hover:opacity-100"
                    animate={
                      selectedCategory === category.key
                        ? { scale: [1, 1.5, 1] }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      repeat: selectedCategory === category.key ? Infinity : 0,
                    }}
                  />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Grid with Advanced Hover Effects */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${selectedCategory}-${image.id}`}
                  variants={itemVariants}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(image)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-white p-3">
                    <motion.div
                      className="relative overflow-hidden rounded-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                      {/* Zoom Icon */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <ZoomIn className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </motion.div>

                      {/* Floating Particles */}
                      {hoveredIndex === index && (
                        <>
                          <motion.div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce-gentle" />
                          <motion.div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-float" />
                        </>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <ImageIcon className="w-10 h-10 text-gray-400" />
              </motion.div>
              <p className="text-gray-500 text-lg">
                No images found for this category.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 right-4 z-10"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="text-white hover:bg-white/20 w-12 h-12 rounded-full backdrop-blur-sm border border-white/20"
              >
                <X className="w-6 h-6" />
              </Button>
            </motion.div>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("prev");
                    }}
                    className="text-white hover:bg-white/20 w-12 h-12 rounded-full backdrop-blur-sm border border-white/20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("next");
                    }}
                    className="text-white hover:bg-white/20 w-12 h-12 rounded-full backdrop-blur-sm border border-white/20"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </motion.div>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              className="max-w-5xl max-h-[85vh] mx-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Image Info */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  {selectedImage.title && (
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {selectedImage.title}
                    </h3>
                  )}
                  <div className="flex items-center justify-center gap-4 text-gray-300 text-sm">
                    <span>
                      {currentIndex + 1} of {filteredImages.length}
                    </span>
                    <div className="w-px h-4 bg-gray-500" />
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30"
                    >
                      {
                        categories.find(
                          (cat) => cat.key === selectedImage.category,
                        )?.label
                      }
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {filteredImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                    setSelectedImage(filteredImages[index]);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60",
                  )}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
