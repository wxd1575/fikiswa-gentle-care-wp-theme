import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 z-10" />
        <img
          src={heroImage}
          alt="Maternity care"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Birth Experience with{" "}
            <span className="text-primary">Comfort</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Compassionate, professional midwifery care for your special journey.
            Experience personalized support throughout pregnancy, birth, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Book Your Appointment
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Heart className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Compassionate Care</h3>
                <p className="text-sm text-muted-foreground">Personalized support</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Professional</h3>
                <p className="text-sm text-muted-foreground">Certified expertise</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Always available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
