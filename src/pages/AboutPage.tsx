import { Award, Heart, Users, GraduationCap, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Sr Fikiswa</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dedicated to providing compassionate, evidence-based midwifery care 
              that honors the sacred journey of bringing new life into the world.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop"
                  alt="Sr Fikiswa"
                  className="relative rounded-2xl shadow-xl w-full h-[600px] object-cover"
                />
              </div>
            </div>

            <div className="animate-fade-in space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Passionate About Birth, Committed to You
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of dedicated service in midwifery, Sr Fikiswa has had the profound 
                privilege of supporting more than 500 families through pregnancy, birth, and the early 
                weeks of parenthood. Her journey in midwifery began with a deep calling to serve women 
                during one of life's most transformative experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Trained in both traditional midwifery wisdom and modern obstetric care, Sr Fikiswa 
                brings a unique blend of expertise that honors the natural birth process while ensuring 
                the highest standards of safety. She believes that every woman deserves to feel 
                empowered, informed, and supported throughout her birthing journey.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Her approach is centered on building trusting relationships, providing personalized 
                care, and creating an environment where families feel safe to ask questions, express 
                concerns, and make informed decisions about their care.
              </p>

              <Button size="lg" asChild>
                <Link to="/booking">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Qualifications & Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Certified expertise combined with years of hands-on experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="pt-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  Professional Certification
                </h3>
                <p className="text-muted-foreground">
                  Registered Midwife with the South African Nursing Council (SANC)
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="pt-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  Advanced Training
                </h3>
                <p className="text-muted-foreground">
                  Specialized training in high-risk obstetrics and neonatal resuscitation
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="pt-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  15+ Years Experience
                </h3>
                <p className="text-muted-foreground">
                  Over a decade supporting families through birth and early parenthood
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="pt-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  500+ Births Attended
                </h3>
                <p className="text-muted-foreground">
                  Trusted by hundreds of families across South Africa
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="pt-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  Holistic Approach
                </h3>
                <p className="text-muted-foreground">
                  Integrating emotional, physical, and spiritual aspects of birth
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="pt-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  Safety First
                </h3>
                <p className="text-muted-foreground">
                  Current certifications in CPR, first aid, and emergency protocols
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
              Philosophy of Care
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I believe that birth is a normal, natural process and that women's bodies are 
                designed beautifully for bringing babies into the world. My role is to support, 
                guide, and safeguard this process—not to control it.
              </p>

              <p>
                Every woman and every birth is unique. I take time to understand your individual 
                needs, preferences, and concerns. Whether you're planning a home birth, hospital 
                birth, or birth center delivery, my care is tailored to support your vision while 
                ensuring safety.
              </p>

              <p>
                I practice evidence-based care, staying current with the latest research while 
                honoring time-tested midwifery wisdom. I believe in informed choice—providing you 
                with complete information so you can make decisions that feel right for you and 
                your family.
              </p>

              <p>
                The relationship between a midwife and the families she serves is sacred. I am 
                committed to being present—physically, emotionally, and spiritually—for your 
                journey. From your first prenatal visit through the weeks after birth, you can 
                count on continuous, compassionate support.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link to="/booking">Begin Your Journey With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
