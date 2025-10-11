import { Mail, MapPin, Phone, Navigation, MessageCircle, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showQR, setShowQR] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create form data
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone || 'Not provided');
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', `New Contact Form Submission from ${formData.name}`);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');
      
      // Send via fetch to stay on the same page
      const response = await fetch('https://formsubmit.co/ajax/moathkoush@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#f1eeee]">
      <div className="container px-6 lg:px-8">
        <div className="max-auto opacity-100">
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
                    onClick={() => window.location.href = 'mailto:moathkoush@gmail.com'}
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
                      <p className="text-sm text-muted-foreground">moathkoush@gmail.com</p>
                      <p className="text-sm text-muted-foreground">info@smartbeams.net</p>
                      <p className="text-sm text-muted-foreground">Abdulaziz@smartbeams.net</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-primary/20">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-dark mb-1">Location</p>
                      <p className="text-sm text-secondary-foreground">
                        Dammam - Dallah Industrial, KSA
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button
                          onClick={() => window.open('https://www.google.com/maps?q=26.451778,50.016528', '_blank')}
                          variant="link"
                          className="p-0 h-auto text-primary hover:text-primary/80"
                        >
                          <Navigation className="h-3 w-3 mr-1" />
                          Get Directions
                        </Button>
                        <Button
                          onClick={() => setShowQR(!showQR)}
                          variant="link"
                          className="p-0 h-auto text-primary hover:text-primary/80"
                        >
                          <QrCode className="h-3 w-3 mr-1" />
                          {showQR ? 'Hide' : 'Show'} QR Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QR Code for Location */}
                {showQR && (
                  <div className="mt-4 p-6 rounded-lg bg-white border-2 border-primary/20 text-center transition-all duration-300">
                    <p className="text-sm font-medium text-dark mb-3">Scan to Get Directions</p>
                    <div className="inline-block p-4 bg-white rounded-lg">
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://www.google.com/maps?q=26.451778,50.016528')}`}
                        alt="Location QR Code"
                        className="w-48 h-48"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Scan with your phone camera
                    </p>
                  </div>
                )}

                {/* Google Map */}
                <div className="mt-6 rounded-lg overflow-hidden border-2 border-primary/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.296384758379!2d50.20471!3d26.37621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49f8c5b7d5c5c5%3A0x5c5c5c5c5c5c5c5c!2sDammam%20-%20Dallah%20Industrial%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
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
              <div className="space-y-6">
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

                <Button 
                  onClick={handleSubmit}
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Your message will be sent directly to our email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};