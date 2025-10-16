import { useRef, useState } from "react";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendFormSubmit } from "@/lib/sendFormSubmit";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuoteModal = ({ open, onOpenChange }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const startedAtRef = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.projectDetails) {
      toast.error("Please fill in all required fields");
      return;
    }

    const tooFast = Date.now() - startedAtRef.current < 3000;

    setIsSubmitting(true);
    const res = await sendFormSubmit(
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || "Not provided",
        projectDetails: formData.projectDetails,
        _honey: tooFast ? "robot" : "",
      },
      {
        to: "sales@smartbeams.net",
        subject: `New Quote Request from ${formData.name}`,
        template: "table",
        captcha: false,
        // autoresponse: "Thanks! We received your quote request and will reach out shortly.",
      }
    );

    if (res.ok) {
      toast.success("Quote request received! We'll contact you shortly.");
      setFormData({ name: "", email: "", phone: "", company: "", projectDetails: "" });
      startedAtRef.current = Date.now();
      onOpenChange(false);
    } else {
      toast.error(`Failed to send request. ${res.error ?? "Please try again."}`);
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { startedAtRef.current = Date.now(); onOpenChange(o); }}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Request a Quote</DialogTitle>
          <DialogDescription>
            Fill in your project details and we'll get back to you with a comprehensive quote.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* hidden honeypot */}
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div>
            <label htmlFor="quote-name" className="block text-sm font-medium mb-2">Name *</label>
            <Input
              id="quote-name" required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="quote-email" className="block text-sm font-medium mb-2">Email *</label>
            <Input
              id="quote-email" type="email" required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@company.com"
            />
          </div>

          <div>
            <label htmlFor="quote-phone" className="block text-sm font-medium mb-2">Phone *</label>
            <Input
              id="quote-phone" type="tel" required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+966 XXX XXX XXX"
            />
          </div>

          <div>
            <label htmlFor="quote-company" className="block text-sm font-medium mb-2">Company</label>
            <Input
              id="quote-company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="quote-details" className="block text-sm font-medium mb-2">Project Details *</label>
            <Textarea
              id="quote-details" required rows={5}
              value={formData.projectDetails}
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
              placeholder="Describe your project requirements, tonnage, timeline, etc."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
