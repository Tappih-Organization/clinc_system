import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookingFormData } from "@/types/dental";
import { servicesList } from "@/lib/dental-data";

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];

export function Booking() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    }, 5000);
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

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  if (isSubmitted) {
    return (
      <section
        id="booking"
        className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-gray-900 mb-4"
                >
                  Appointment Request Submitted!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-600 mb-6"
                >
                  Thank you for choosing Bright Smiles Dental. We'll contact you
                  within 24 hours to confirm your appointment details.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-sm text-gray-500"
                >
                  Need immediate assistance? Call us at +1 (555) 123-4567
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="booking"
      className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
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
              Book Your Appointment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your visit with our experienced dental team. We're here
              to help you achieve optimal oral health.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Booking Form */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-gray-900">
                    Schedule Your Visit
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-gray-700 font-medium"
                        >
                          Full Name *
                        </Label>
                        <div className="relative mt-2">
                          <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-gray-700 font-medium"
                        >
                          Email Address *
                        </Label>
                        <div className="relative mt-2">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-gray-700 font-medium"
                      >
                        Phone Number *
                      </Label>
                      <div className="relative mt-2">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <Label
                        htmlFor="service"
                        className="text-gray-700 font-medium"
                      >
                        Service Required *
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                        required
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {servicesList.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="date"
                          className="text-gray-700 font-medium"
                        >
                          Preferred Date *
                        </Label>
                        <div className="relative mt-2">
                          <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="date"
                            type="date"
                            min={getTomorrowDate()}
                            value={formData.preferredDate}
                            onChange={(e) =>
                              handleInputChange("preferredDate", e.target.value)
                            }
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label
                          htmlFor="time"
                          className="text-gray-700 font-medium"
                        >
                          Preferred Time *
                        </Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) =>
                            handleInputChange("preferredTime", value)
                          }
                          required
                        >
                          <SelectTrigger className="mt-2">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-gray-400 mr-2" />
                              <SelectValue placeholder="Select time" />
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-gray-700 font-medium"
                      >
                        Additional Information (Optional)
                      </Label>
                      <div className="relative mt-2">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Textarea
                          id="message"
                          placeholder="Any specific concerns or requests..."
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          className="pl-10 min-h-[100px]"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Calendar className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? "Submitting..." : "Book Appointment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Emergency Contact */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Phone className="w-5 h-5 text-red-600 mr-2" />
                    Emergency Contact
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For dental emergencies outside of business hours:
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.open("tel:+15551234567", "_self")}
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Thursday", hours: "8:00 AM - 6:00 PM" },
                      { day: "Friday", hours: "8:00 AM - 5:00 PM" },
                      { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium text-gray-900">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg bg-blue-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Prefer to Talk?</h3>
                  <p className="mb-6 text-blue-100">
                    Our friendly staff is ready to help you schedule your
                    appointment over the phone.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      onClick={() => window.open("tel:+15551234567", "_self")}
                      className="bg-white text-blue-600 border-white hover:bg-blue-50"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() =>
                        window.open(
                          "mailto:info@brightsmilesdental.com",
                          "_self",
                        )
                      }
                      className="bg-white text-blue-600 border-white hover:bg-blue-50"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
