import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide comprehensive midwifery care including prenatal checkups, labor and birth support (both home and facility births), postnatal care, breastfeeding support, and antenatal education classes.",
    },
    {
      question: "Do you attend home births?",
      answer:
        "Yes, we support safe home births for low-risk pregnancies. We conduct thorough assessments to ensure home birth is appropriate and prepare emergency transfer plans for safety.",
    },
    {
      question: "Are you registered with SANC?",
      answer:
        "Yes, Sr Fikiswa is fully registered with the South African Nursing Council (SANC) and maintains all required certifications and continuing education.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve families in Cape Town and surrounding areas. For home births, we assess distance and accessibility during consultation.",
    },
    {
      question: "Do you accept medical aid?",
      answer:
        "Yes, we work with most medical aid schemes. Please contact us to discuss your specific medical aid coverage and payment options.",
    },
    {
      question: "When should I book my first appointment?",
      answer:
        "We recommend booking your first prenatal visit as soon as you confirm your pregnancy, ideally around 8-12 weeks. Early care allows us to monitor your health throughout pregnancy.",
    },
    {
      question: "What happens in a prenatal visit?",
      answer:
        "Prenatal visits include health assessments, monitoring baby's growth and heartbeat, blood pressure checks, nutritional guidance, and answering all your questions. Each visit is personalized to your needs.",
    },
    {
      question: "Do you provide postnatal care?",
      answer:
        "Yes, we provide comprehensive postnatal care including home visits, breastfeeding support, newborn care guidance, and monitoring both mother and baby's recovery and wellbeing.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our midwifery services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
