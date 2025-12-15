import { motion } from "framer-motion";
import {
  Award,
  Users,
  Clock,
  Star,
  CheckCircle,
  Heart,
  Shield,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DentistProfile, TeamMember } from "@/types/dental";

interface AboutProps {
  dentist: DentistProfile;
  team: TeamMember[];
}

export function About({ dentist, team }: AboutProps) {
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

  const stats = [
    {
      icon: Clock,
      label: dentist.experience,
      description: "Of Excellence",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: Users,
      label: "2,500+",
      description: "Happy Patients",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: Trophy,
      label: "50+",
      description: "Awards Won",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      icon: Star,
      label: "4.9/5",
      description: "Patient Rating",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
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
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-6 py-2 mb-6"
            >
              <Heart className="w-4 h-4" />
              <span className="font-medium">Meet Our Expert Team</span>
            </motion.div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meet Dr. {dentist.name.split(" ").pop()}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing exceptional dental care with a gentle touch
              and cutting-edge technology
            </p>
          </motion.div>

          {/* Dentist Profile */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                  >
                    <img
                      src={dentist.image}
                      alt={dentist.name}
                      className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                    />
                  </motion.div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-2xl"
                  >
                    <Award className="w-8 h-8" />
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.8, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-xl opacity-30"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.6, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl opacity-20"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div className="space-y-8" variants={itemVariants}>
                <div>
                  <motion.h3
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {dentist.name}
                  </motion.h3>
                  <motion.p
                    className="text-xl text-blue-600 font-semibold mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {dentist.title}
                  </motion.p>
                  <motion.p
                    className="text-gray-600 leading-relaxed text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {dentist.bio}
                  </motion.p>
                </div>

                {/* Specialties */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {dentist.specialties.map((specialty, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200 px-4 py-2 text-sm font-medium"
                        >
                          {specialty}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">
                    Key Certifications:
                  </h4>
                  <ul className="space-y-3">
                    {dentist.certifications.slice(0, 3).map((cert, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{cert}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <motion.div
                        className={`mx-auto mb-4 w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </motion.div>
                      <motion.div
                        className="text-3xl font-bold text-gray-900 mb-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        {stat.label}
                      </motion.div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-6 py-2 mb-6"
              >
                <Users className="w-4 h-4" />
                <span className="font-medium">Our Professional Team</span>
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Meet Our Dedicated Staff
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team of experienced professionals is committed to making
                your visit comfortable and pleasant
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Floating Info */}
                      <motion.div
                        className="absolute bottom-4 left-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <h4 className="font-bold text-lg mb-1">
                          {member.name}
                        </h4>
                        <p className="text-sm text-blue-200 font-medium">
                          {member.role}
                        </p>
                      </motion.div>

                      {/* Heart Icon */}
                      <motion.div
                        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Heart className="w-5 h-5 text-red-400" />
                      </motion.div>
                    </div>

                    <CardContent className="p-6">
                      <motion.p
                        className="text-gray-600 text-sm leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        {member.bio}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <Shield className="w-5 h-5" />
                Experience Our Expert Care
                <Star className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
