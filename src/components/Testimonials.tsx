import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Thandi Nkosi",
      location: "Cape Town",
      text: "Sr Fikiswa made my birth experience so peaceful and empowering. Her calm presence and expertise gave me the confidence I needed. I couldn't have asked for better care.",
      rating: 5,
    },
    {
      name: "Nomvula Dlamini",
      location: "Durban",
      text: "From my first prenatal visit to postnatal care, Sr Fikiswa was there every step of the way. She truly cares about her patients and goes above and beyond.",
      rating: 5,
    },
    {
      name: "Lerato Maseko",
      location: "Johannesburg",
      text: "I had a beautiful home birth with Sr Fikiswa's support. She made sure everything was safe and comfortable. I'm so grateful for her dedication and kindness.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Families Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from the mothers and families who have experienced compassionate care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
