import { Baby, Heart, Users, Home, Stethoscope, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Prenatal Care",
      description: "Comprehensive antenatal checkups and guidance throughout your pregnancy journey.",
    },
    {
      icon: Baby,
      title: "Birth Support",
      description: "Professional support during labor and delivery in a comfortable, safe environment.",
    },
    {
      icon: Home,
      title: "Home Births",
      description: "Safe and peaceful home birth services with full medical support and preparation.",
    },
    {
      icon: Users,
      title: "Postnatal Care",
      description: "Dedicated care for mother and baby during the critical postpartum period.",
    },
    {
      icon: Stethoscope,
      title: "Health Monitoring",
      description: "Regular health assessments and monitoring for both mother and baby's wellbeing.",
    },
    {
      icon: BookOpen,
      title: "Birth Education",
      description: "Antenatal classes and educational resources to prepare you for motherhood.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive midwifery care tailored to your unique needs and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
