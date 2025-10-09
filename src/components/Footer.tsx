import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Sr Fikiswa's Maternity Centre" className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Compassionate, professional midwifery care for your special journey.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <Phone size={16} className="mr-2" />
                <span>+27 (0) 12 345 6789</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail size={16} className="mr-2" />
                <span>info@midwifefikiswa.co.za</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="text-primary" size={20} />
              </a>
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="text-primary" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sr Fikiswa's Maternity & Baby Centre. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Registered with South African Nursing Council (SANC)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
