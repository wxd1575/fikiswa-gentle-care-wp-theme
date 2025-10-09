import { Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop"
                alt="Sr Fikiswa"
                className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Sr Fikiswa
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in midwifery, Sr Fikiswa brings a wealth of
              knowledge, compassion, and dedication to every family she serves. Her approach
              combines traditional midwifery wisdom with modern medical expertise.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Committed to providing personalized, respectful care, Sr Fikiswa believes that
              every birth is unique and sacred. She works closely with expectant mothers to
              create a safe, comfortable environment for bringing new life into the world.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    Certified Professional
                  </h3>
                  <p className="text-muted-foreground">
                    Registered with South African Nursing Council (SANC)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    Compassionate Approach
                  </h3>
                  <p className="text-muted-foreground">
                    Personalized care focused on your comfort and wellbeing
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    500+ Happy Families
                  </h3>
                  <p className="text-muted-foreground">
                    Trusted by families across South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
