import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request received! We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", company: "", projectDetails: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Request a Quote</DialogTitle>
          <DialogDescription>
            Fill in your project details and we'll get back to you with a comprehensive quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="quote-name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <Input
              id="quote-name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="quote-email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <Input
              id="quote-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@company.com"
            />
          </div>

          <div>
            <label htmlFor="quote-phone" className="block text-sm font-medium mb-2">
              Phone *
            </label>
            <Input
              id="quote-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+966 XXX XXX XXX"
            />
          </div>

          <div>
            <label htmlFor="quote-company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <Input
              id="quote-company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="quote-details" className="block text-sm font-medium mb-2">
              Project Details *
            </label>
            <Textarea
              id="quote-details"
              required
              value={formData.projectDetails}
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
              placeholder="Describe your project requirements, tonnage, timeline, etc."
              rows={5}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Submit Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
