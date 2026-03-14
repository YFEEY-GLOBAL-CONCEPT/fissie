import { useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      alert("Please fill in required fields.");
      return;
    }
    alert("Message sent! We'll get back to you shortly.");
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="section-label mb-4">Contact Us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                We'd love to hear from you
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Let's talk!</h3>
              <div className="flex items-center gap-6 mb-6">
                <a href="tel:+2348023165665" className="text-muted-foreground hover:text-foreground text-sm">+234 802 316 5665</a>
                <a href="mailto:info@fissieehelping.org" className="text-muted-foreground hover:text-foreground text-sm">info@fissieehelping.org</a>
              </div>

              <h4 className="font-bold text-foreground mb-1">Head Office</h4>
              <p className="text-sm text-muted-foreground mb-4">Abuja, Nigeria</p>

              <h4 className="font-bold text-foreground mb-1">Branch Office</h4>
              <p className="text-sm text-muted-foreground mb-6">Northern Nigeria</p>

              <div className="flex items-center gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook size={18} /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={18} /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={18} /></a>
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
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                />
              </div>
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
              <button type="submit" className="bg-gold text-foreground px-8 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
