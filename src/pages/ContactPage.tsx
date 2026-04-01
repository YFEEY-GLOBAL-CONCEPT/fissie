import { useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "Enquiries",
    organization: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      toast.error("Please fill in required fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "Enquiries",
      organization: "",
      interest: "",
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-bg py-16 text-hero-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Contact Us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                We'd love to hear from you
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Let's talk!</h3>
                <p className="text-sm text-muted-foreground">+234 802 316 5665 &nbsp;&nbsp; hello@fissieej.com</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Primary Location</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1 font-semibold text-gold">Abuja</p>
                <p className="text-sm text-muted-foreground">fissie J close jahi 1, Abuja, Nigeria.</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-foreground hover:text-gold transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-foreground hover:text-gold transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-foreground hover:text-gold transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">First Name</label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Last Name</label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Email Id</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Inquiry Type</label>
                <select
                  value={form.inquiryType}
                  onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-gold transition-colors appearance-none"
                >
                  <option value="Enquiries">General Enquiries</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Support">Support</option>
                  <option value="Media">Media/Press Inquiry</option>
                </select>
              </div>
            </div>

            {form.inquiryType === "Partnership" && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Organization Name</label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="Company/NGO Name"
                />
              </motion.div>
            )}

            {form.inquiryType === "Volunteer" && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Area of Interest</label>
                <input
                  type="text"
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="e.g., Education, Hygiene, Events"
                />
              </motion.div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border-b-2 border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full border border-border rounded-md bg-background p-4 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold resize-none"
                placeholder="Type your Message"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-gold text-foreground px-12 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-gold-hover transition-all shadow-lg hover:shadow-gold/20">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map integration */}
      <section className="h-[450px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15759.56382098485!2d7.4526017!3d9.083896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4f6be4e377%3A0xc03233215284bf40!2sJahi%2C%20Abuja!5e0!3m2!1sen!2sng!4v1710460000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Fissie J Close, Jahi 1, Abuja"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
