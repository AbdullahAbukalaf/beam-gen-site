import { Mail, MapPin, Phone, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "@/hooks/useInView";
import { toast } from "sonner";
import { useState } from "react";

export const Contact = () => {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#f1eeee]">
      <div className="container px-6 lg:px-8">
        <div ref={ref} className={` mx-auto ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4 text-center">
            CONTACT US
          </h2>
          <p className="text-lg text-dark text-center mb-16">
            Ready to start your project? Get in touch with us today
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-6">
                  Get In Touch
                </h3>
                
                {/* Quick Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <Button
                    onClick={() => window.location.href = 'tel:+966558303308'}
                    className="flex-1 min-w-[140px]"
                    variant="default"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    onClick={() => window.location.href = 'mailto:info@smartbeams.net'}
                    className="flex-1 min-w-[140px]"
                    variant="secondary"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </Button>
                  <Button
                    onClick={() => window.open('https://wa.me/966558303308', '_blank')}
                    className="flex-1 min-w-[140px] bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-primary/20">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark mb-1">Phone</p>
                      <p className="text-sm text-muted-foreground">+966 558303308</p>
                      <p className="text-sm text-muted-foreground">+966 53 54 12221</p>
                      <p className="text-sm text-muted-foreground">+966 550748180</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-primary/20">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark mb-1">Email</p>
                      <p className="text-sm text-muted-foreground">info@smartbeams.net</p>
                      <p className="text-sm text-muted-foreground">Abdulaziz@smartbeams.net</p>
                      <p className="text-sm text-muted-foreground">subhi@smartbeams.net</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-primary/20">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark mb-1">Location</p>
                      <p className="text-sm text-secondary-foreground">
                        Dammam - Dallah Industrial, KSA
                      </p>
                      <Button
                        onClick={() => window.open('https://maps.google.com/?q=Dammam+Dallah+Industrial+KSA', '_blank')}
                        variant="link"
                        className="p-0 h-auto mt-2 text-primary hover:text-primary/80"
                      >
                        <Navigation className="h-3 w-3 mr-1" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="mt-6 rounded-lg overflow-hidden border-2 border-primary/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.2963847583786!2d50.20471!3d26.37621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDIyJzM0LjQiTiA1MMKwMTInMTcuMCJF!5e0!3m2!1sen!2ssa!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Smart Beams Location"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card/50 border-2 border-primary/20 rounded-xl p-8 shadow-[var(--shadow-card)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+966 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
