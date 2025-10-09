import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Heart, Baby, Home, Users, Stethoscope, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import prenatalImage from "@/assets/prenatal-care.jpg";
import homeBirthImage from "@/assets/home-birth.jpg";
import postnatalImage from "@/assets/postnatal-care.jpg";
import educationImage from "@/assets/education.jpg";

const ServicesPage = () => {
  const services = [
    {
      icon: Heart,
      title: "Comprehensive Prenatal Care",
      image: prenatalImage,
      shortDesc: "Complete antenatal support throughout your pregnancy journey",
      fullDesc: "Our prenatal care program provides comprehensive monitoring and support from conception through delivery. Each visit includes detailed health assessments, ultrasound monitoring, nutritional counseling, and emotional support. We take time to answer all your questions and address any concerns, ensuring you feel confident and prepared every step of the way.",
      features: [
        "Monthly checkups during first and second trimester",
        "Bi-weekly visits in third trimester",
        "Blood pressure and weight monitoring",
        "Fetal heart rate monitoring",
        "Nutritional guidance and meal planning",
        "Risk assessment and management",
        "Birth plan development",
        "24/7 phone support for urgent concerns"
      ],
      duration: "Throughout pregnancy (8-10 visits)",
      investment: "Medical aid accepted"
    },
    {
      icon: Baby,
      title: "Labor & Birth Support",
      image: homeBirthImage,
      shortDesc: "Professional continuous support during labor and delivery",
      fullDesc: "Experience compassionate, hands-on support during one of life's most significant moments. We provide continuous care throughout your labor, utilizing comfort measures, position changes, and emotional support to help you achieve the birth experience you desire. Our presence ensures professional medical expertise combined with nurturing care.",
      features: [
        "Continuous one-on-one support during active labor",
        "Pain management techniques and comfort measures",
        "Monitoring of mother and baby's wellbeing",
        "Assistance with breathing and relaxation",
        "Support for birth partners and family",
        "Immediate postpartum care",
        "Early breastfeeding initiation",
        "Birth documentation and newborn assessment"
      ],
      duration: "Throughout labor and first 2 hours postpartum",
      investment: "From R8,500"
    },
    {
      icon: Home,
      title: "Safe Home Birth Services",
      image: homeBirthImage,
      shortDesc: "Experience birth in the comfort and privacy of your own home",
      fullDesc: "Home birth offers a peaceful, intimate environment for welcoming your baby. We conduct thorough prenatal assessments to ensure you're a suitable candidate, prepare comprehensive birth kits, and arrange emergency transfer protocols. Our experienced midwife brings all necessary medical equipment and stays with you throughout labor and the immediate postpartum period.",
      features: [
        "Comprehensive home assessment and preparation",
        "Complete medical equipment and supplies provided",
        "Partner and family involvement welcomed",
        "Natural pain management techniques",
        "Emergency transfer plan and hospital liaison",
        "Newborn examination and care",
        "Placenta handling according to your wishes",
        "Extended postpartum stay (4-6 hours)"
      ],
      duration: "Labor, birth, and 4-6 hours postpartum",
      investment: "From R12,000"
    },
    {
      icon: Users,
      title: "Postnatal Care & Support",
      image: postnatalImage,
      shortDesc: "Essential care for mother and baby after birth",
      fullDesc: "The postpartum period requires specialized care and support as you recover and adjust to life with your newborn. Our postnatal service includes home visits, breastfeeding support, newborn care guidance, and monitoring of both mother and baby's health. We help you navigate challenges and celebrate milestones during this precious time.",
      features: [
        "Home visits within 24 hours after birth",
        "Daily visits for first week (or as needed)",
        "Physical recovery assessment",
        "Breastfeeding support and troubleshooting",
        "Newborn care education (bathing, cord care, etc.)",
        "Jaundice and weight monitoring",
        "Emotional wellbeing support",
        "Partner and family guidance",
        "Referrals when additional support needed"
      ],
      duration: "First 6 weeks postpartum",
      investment: "From R3,500 (packages available)"
    },
    {
      icon: Stethoscope,
      title: "Health Monitoring & Assessments",
      image: prenatalImage,
      shortDesc: "Regular health checks to ensure optimal wellbeing",
      fullDesc: "Consistent health monitoring is essential for identifying and addressing potential concerns early. We provide thorough assessments of both maternal and fetal health, including vital signs monitoring, growth tracking, and developmental checks. Our vigilant care helps ensure the healthiest possible outcomes.",
      features: [
        "Blood pressure monitoring",
        "Urine analysis for protein and glucose",
        "Fetal heart rate assessment",
        "Fundal height measurements",
        "Position and presentation checks",
        "Group B Strep screening",
        "Anemia screening",
        "Glucose tolerance testing when indicated"
      ],
      duration: "Integrated into prenatal visits",
      investment: "Included in prenatal care package"
    },
    {
      icon: BookOpen,
      title: "Antenatal Education Classes",
      image: educationImage,
      shortDesc: "Comprehensive childbirth and parenting education",
      fullDesc: "Knowledge is power when preparing for childbirth and parenthood. Our comprehensive antenatal classes cover everything from pregnancy changes to labor stages, newborn care, and early parenting. Small group settings allow for personalized attention and building community with other expectant families.",
      features: [
        "6-week comprehensive course",
        "Stages of labor and birth process",
        "Pain management options",
        "Breathing and relaxation techniques",
        "Partner's role during birth",
        "Newborn care basics",
        "Breastfeeding fundamentals",
        "Postpartum recovery and adjustment",
        "Take-home resources and materials"
      ],
      duration: "6 weekly sessions (2 hours each)",
      investment: "R2,800 per couple"
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive, compassionate midwifery care tailored to your unique journey. 
              From your first prenatal visit through postpartum recovery, we're with you every step.
            </p>
            <Button size="lg" asChild>
              <Link to="/booking">Schedule Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in`}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} animate-fade-in`}>
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="text-primary" size={32} />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <Card className="mb-6 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-xl">What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6 p-4 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Duration</p>
                      <p className="font-semibold text-foreground">{service.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Investment</p>
                      <p className="font-semibold text-foreground">{service.investment}</p>
                    </div>
                  </div>

                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="/booking">Book This Service Now</Link>
                  </Button>
                </div>
              </div>
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
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule your initial consultation today and discover how personalized midwifery 
                care can transform your birth experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/booking">Book Your Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Ask Questions First</Link>
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

export default ServicesPage;
