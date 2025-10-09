import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Phone, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    dueDate: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request received! We'll contact you within 24 hours to confirm.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      dueDate: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    "Comprehensive Prenatal Care",
    "Labor & Birth Support",
    "Safe Home Birth Services",
    "Postnatal Care & Support",
    "Health Monitoring & Assessments",
    "Antenatal Education Classes",
    "Initial Consultation",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Book Your <span className="text-primary">Appointment</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Take the first step towards a beautiful birth experience. Schedule your consultation today.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="text-primary" size={24} />
              <span className="text-foreground font-medium">24-Hour Response</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="text-primary" size={24} />
              <span className="text-foreground font-medium">Flexible Scheduling</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="text-primary" size={24} />
              <span className="text-foreground font-medium">Medical Aid Accepted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll contact you to confirm your appointment within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dueDate">Expected Due Date (if applicable)</Label>
                        <Input
                          id="dueDate"
                          name="dueDate"
                          type="date"
                          value={formData.dueDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Appointment Date *</Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12pm - 3pm)</SelectItem>
                          <SelectItem value="evening">Evening (3pm - 6pm)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about any specific concerns or questions you have..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Booking Request
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted by Sr Fikiswa's Maternity Centre 
                      regarding your appointment.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-primary" size={24} />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+27123456789" className="text-foreground font-medium hover:text-primary">
                      +27 (0) 12 345 6789
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:info@midwifefikiswa.co.za" className="text-foreground font-medium hover:text-primary">
                      info@midwifefikiswa.co.za
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Office Hours</p>
                    <p className="text-foreground font-medium">Mon-Fri: 9am - 5pm</p>
                    <p className="text-foreground font-medium">24/7 Emergency Support</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 text-primary" size={24} />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Confirmation Call</p>
                      <p className="text-sm text-muted-foreground">
                        We'll call within 24 hours to confirm your appointment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Pre-Appointment Info</p>
                      <p className="text-sm text-muted-foreground">
                        Receive preparation instructions and forms via email
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Your Appointment</p>
                      <p className="text-sm text-muted-foreground">
                        Meet Sr Fikiswa and begin your personalized care journey
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong className="text-foreground">Emergency?</strong> If you're experiencing 
                    a medical emergency, please call our 24/7 line immediately or visit your nearest hospital.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+27123456789">
                      <Phone className="mr-2" size={18} />
                      Call Emergency Line
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingPage;
