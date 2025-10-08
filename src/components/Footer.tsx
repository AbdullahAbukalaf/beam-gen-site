import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-primary-foreground py-12 border-t border-primary/20">
      <div className="container px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-black mb-4 text-primary">
              SMART BEAMS
            </h3>
            <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
              Smart Beams Steel Industrials Factory - Your comprehensive partner 
              in structural steel excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/966558303308"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Services", "Projects", "Clients", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-secondary-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground">+966 558303308</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground">info@smartbeams.net</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground">Dammam, KSA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20">
          <p className="text-center text-sm text-secondary-foreground">
            © 2025 Smart Beams Steel Industrials Factory. 
            All rights reserved. | ISO 9001:2015 & ISO 14001:2015 Certified
          </p>
        </div>
      </div>
    </footer>
  );
};
