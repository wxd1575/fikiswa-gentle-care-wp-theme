import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Thandi Nkosi",
      location: "Cape Town",
      text: "Sr Fikiswa made my birth experience so peaceful and empowering. Her calm presence and expertise gave me the confidence I needed. She was there for every question, every concern, and most importantly, during those crucial moments of labor. I couldn't have asked for better care. She truly made me feel like I was the most important person in the world.",
      rating: 5,
      service: "Home Birth Support",
      date: "January 2024"
    },
    {
      name: "Nomvula Dlamini",
      location: "Durban",
      text: "From my first prenatal visit to postnatal care, Sr Fikiswa was there every step of the way. She truly cares about her patients and goes above and beyond. Her knowledge is incredible, but what stood out most was her compassion. She made my husband and me feel prepared and confident. Our baby boy is now 3 months old and thriving, thanks to the foundation Sr Fikiswa helped us build.",
      rating: 5,
      service: "Comprehensive Prenatal & Postnatal Care",
      date: "December 2023"
    },
    {
      name: "Lerato Maseko",
      location: "Johannesburg",
      text: "I had a beautiful home birth with Sr Fikiswa's support. She made sure everything was safe and comfortable. I'm so grateful for her dedication and kindness. She arrived early, stayed late, and never once made me feel rushed. She respected all my birth wishes while keeping a watchful eye on my baby and me. This was my third birth but by far my best experience.",
      rating: 5,
      service: "Home Birth",
      date: "November 2023"
    },
    {
      name: "Zanele Sithole",
      location: "Pretoria",
      text: "As a first-time mom, I was terrified. Sr Fikiswa's antenatal classes completely changed that. She explained everything in a way I could understand and made me feel capable. During my labor, she was my rock. She knew exactly what I needed before I even asked. Her postnatal visits were equally wonderful—she helped me through breastfeeding challenges and gave me the confidence to trust my mothering instincts.",
      rating: 5,
      service: "Antenatal Classes & Birth Support",
      date: "October 2023"
    },
    {
      name: "Busisiwe Mthembu",
      location: "Pietermaritzburg",
      text: "After a traumatic hospital birth with my first child, I was determined to have a different experience. Sr Fikiswa provided that and more. She listened to my fears without judgment and created a birth plan that made me feel safe and empowered. My second birth was everything I hoped for—peaceful, dignified, and on my terms. I will be forever grateful.",
      rating: 5,
      service: "Birth Support & Counseling",
      date: "September 2023"
    },
    {
      name: "Ntombi Radebe",
      location: "Port Elizabeth",
      text: "Sr Fikiswa is not just a midwife; she's an angel. When I was struggling with postnatal depression, she recognized the signs and connected me with the help I needed. Her postnatal care went far beyond physical recovery—she cared about my emotional wellbeing too. I honestly don't know what I would have done without her support during those difficult weeks.",
      rating: 5,
      service: "Postnatal Care",
      date: "August 2023"
    },
    {
      name: "Lindiwe Khumalo",
      location: "Bloemfontein",
      text: "My pregnancy was considered high-risk due to my age, but Sr Fikiswa's careful monitoring and proactive approach put my mind at ease. She coordinated with my obstetrician seamlessly and made sure I always understood what was happening. Thanks to her vigilant care, my baby girl arrived healthy and strong. Sr Fikiswa's expertise is unmatched.",
      rating: 5,
      service: "High-Risk Prenatal Care",
      date: "July 2023"
    },
    {
      name: "Mpho Mokoena",
      location: "East London",
      text: "My husband and I attended Sr Fikiswa's antenatal classes together, and it was the best decision we made. She prepared us not just for birth, but for parenthood. The classes were informative, interactive, and fun. She created a community among the couples, and we still keep in touch with the friends we made. When it came time for our birth, we felt completely ready.",
      rating: 5,
      service: "Antenatal Education",
      date: "June 2023"
    },
    {
      name: "Thabile Ngcobo",
      location: "Kimberley",
      text: "I had an unplanned home birth (baby came faster than expected!), and Sr Fikiswa rushed over and arrived just in time. Even in that intense situation, she was calm, professional, and made sure everything went safely. Her quick thinking and experience saved the day. She stayed with us for hours afterward to ensure we were both doing well. True dedication!",
      rating: 5,
      service: "Emergency Birth Support",
      date: "May 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Stories from <span className="text-primary">Our Families</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Read heartfelt experiences from mothers and families who chose compassionate midwifery care
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Happy Families</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={28} />
                ))}
              </div>
              <p className="text-muted-foreground">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card relative"
              >
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote size={64} className="text-primary" />
                </div>
                <CardContent className="pt-6 relative">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-primary fill-primary" size={18} />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <div className="mt-3 inline-block">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Write Your Story?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the hundreds of families who have experienced compassionate, 
                personalized midwifery care with Sr Fikiswa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/booking">Book Your Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
