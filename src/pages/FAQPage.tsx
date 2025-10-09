import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const faqCategories = [
    {
      category: "Services & Care",
      faqs: [
        {
          question: "What services do you offer?",
          answer:
            "We provide comprehensive midwifery care including prenatal checkups, labor and birth support (both home and facility births), postnatal care, breastfeeding support, and antenatal education classes. We also offer health monitoring and assessments throughout pregnancy.",
        },
        {
          question: "Do you attend home births?",
          answer:
            "Yes, we support safe home births for low-risk pregnancies. We conduct thorough assessments during pregnancy to ensure home birth is appropriate for your situation. We prepare comprehensive emergency transfer plans and bring all necessary medical equipment. We work with local hospitals to ensure seamless transfers if needed.",
        },
        {
          question: "What is included in prenatal care?",
          answer:
            "Prenatal visits include comprehensive health assessments, monitoring baby's growth and heartbeat, blood pressure checks, urine analysis, nutritional guidance, and plenty of time to answer all your questions. We also help you develop a personalized birth plan. Each visit is tailored to your specific needs and stage of pregnancy.",
        },
        {
          question: "Do you provide postnatal care?",
          answer:
            "Yes, we provide comprehensive postnatal care including home visits (within 24 hours after birth), breastfeeding support, newborn care guidance, monitoring both mother and baby's recovery, and emotional wellbeing support. We typically see families for the first 6 weeks postpartum but can extend care as needed.",
        },
      ],
    },
    {
      category: "Qualifications & Safety",
      faqs: [
        {
          question: "Are you registered with SANC?",
          answer:
            "Yes, Sr Fikiswa is fully registered with the South African Nursing Council (SANC) and maintains all required certifications. She also holds current certifications in neonatal resuscitation, CPR, and emergency obstetric protocols. Continuing education is a priority to stay current with best practices.",
        },
        {
          question: "How do you handle emergencies?",
          answer:
            "Safety is our top priority. We carry emergency equipment and medications, maintain hospital transfer protocols, and have established relationships with local obstetricians and hospitals. We continuously assess risk factors and monitor both mother and baby closely. If complications arise, we coordinate immediate transfer to appropriate medical care.",
        },
        {
          question: "What if I need to transfer to a hospital?",
          answer:
            "We have established transfer protocols with local hospitals. If transfer becomes necessary, we accompany you, brief the hospital staff, and continue to support you as appropriate. We ensure all your medical records are immediately available to the hospital team. Many transfers are non-emergency, precautionary measures.",
        },
      ],
    },
    {
      category: "Practical Information",
      faqs: [
        {
          question: "What areas do you serve?",
          answer:
            "We primarily serve families in Cape Town and surrounding areas (within 50km). For home births, we assess distance and accessibility during consultation to ensure we can arrive promptly when labor begins. For clinic-based services, families from wider areas are welcome.",
        },
        {
          question: "Do you accept medical aid?",
          answer:
            "Yes, we work with most medical aid schemes in South Africa. We provide detailed invoices that you can submit to your medical aid for reimbursement. Many schemes cover midwifery services under maternity benefits. Contact us to discuss your specific medical aid coverage, and we'll help you understand your benefits.",
        },
        {
          question: "When should I book my first appointment?",
          answer:
            "We recommend booking your first prenatal visit as soon as you confirm your pregnancy, ideally around 8-12 weeks. Early care allows us to establish baseline health information, identify any risk factors, and monitor your health throughout pregnancy. However, we welcome you at any stage of pregnancy.",
        },
        {
          question: "How long are appointments?",
          answer:
            "Initial consultations typically last 60-90 minutes, allowing time to review your complete medical history, discuss your preferences, and answer all questions. Regular prenatal visits are 30-45 minutes. We never rush—if you need more time, we're happy to provide it.",
        },
      ],
    },
    {
      category: "Birth & Labor",
      faqs: [
        {
          question: "What happens during labor support?",
          answer:
            "During labor, we provide continuous one-on-one support. This includes monitoring your wellbeing and baby's heartbeat, assisting with comfort measures and position changes, supporting your breathing and relaxation, involving your birth partner, and guiding you through each stage. We stay with you throughout active labor and for 2-4 hours after birth.",
        },
        {
          question: "Can my partner be present?",
          answer:
            "Absolutely! We encourage partners to be actively involved. During antenatal visits, we help partners understand how to support you. During labor, we guide them in providing comfort and encouragement. Partners are welcome at home births and we support their presence in hospital births as well.",
        },
        {
          question: "What pain management options are available?",
          answer:
            "We specialize in natural pain management techniques including position changes, water therapy, massage, breathing exercises, aromatherapy, and TENS units. For home births, these are the primary methods. If you're birthing in a hospital, you'll also have access to medical pain relief options like epidurals.",
        },
        {
          question: "What if I want a hospital birth?",
          answer:
            "We fully support hospital births! We can provide prenatal care throughout pregnancy and accompany you to the hospital for labor support. We work alongside hospital staff, advocating for your birth preferences while respecting hospital protocols. Our presence provides continuity of care in the hospital setting.",
        },
      ],
    },
    {
      category: "Classes & Education",
      faqs: [
        {
          question: "What do antenatal classes cover?",
          answer:
            "Our 6-week antenatal course covers pregnancy changes, stages of labor, pain management options, breathing and relaxation techniques, the partner's role, newborn care basics, breastfeeding fundamentals, and postpartum recovery. Classes are interactive with demonstrations and hands-on practice. Small group sizes ensure personalized attention.",
        },
        {
          question: "When should we start antenatal classes?",
          answer:
            "We recommend starting classes in your third trimester, around 28-32 weeks of pregnancy. This timing ensures the information is fresh when you go into labor, while giving you time to practice techniques and ask follow-up questions during your remaining prenatal visits.",
        },
        {
          question: "Are classes only for first-time parents?",
          answer:
            "No! While first-time parents especially benefit, we welcome experienced parents too. Each birth is different, and our classes cover the latest research and techniques. Many experienced parents find the refresher valuable, and they often contribute wonderful insights to class discussions.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our midwifery services, 
              qualifications, and what to expect
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${categoryIndex}-${index}`}
                      className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-all"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="text-primary" size={40} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We're here to help! Reach out and we'll answer any questions you have about 
                  our services, your pregnancy, or what to expect.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/booking">Book a Consultation</Link>
                </Button>
              </div>

              <div className="mt-8 text-center text-muted-foreground">
                <p className="mb-2">Prefer to talk? Call us directly:</p>
                <a href="tel:+27123456789" className="text-primary font-semibold text-lg hover:underline">
                  +27 (0) 12 345 6789
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
