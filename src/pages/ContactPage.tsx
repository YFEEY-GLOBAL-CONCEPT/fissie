import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactCards = [
  { icon: Phone, title: "Call Us", details: ["+234 802 316 5665"], color: "bg-blue-500" },
  { icon: Mail, title: "Email Us", details: ["info@fissieehelping.org", "contact@fissieehelping.org"], color: "bg-green-500" },
  { icon: MapPin, title: "Visit Us", details: ["Abuja, Nigeria", "Northern Nigeria"], color: "bg-purple-500" },
  { icon: Clock, title: "Office Hours", details: ["Mon - Fri: 9AM - 5PM", "Emergency: 24/7"], color: "bg-orange-500" },
];

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
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="section-label mb-4 inline-block">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We'd love to hear from you and answer any questions you may have about our work or how you can get involved.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactCards.map((card) => (
              <div key={card.title} className="rounded-xl overflow-hidden shadow-sm border border-border">
                <div className={`${card.color} p-4`}>
                  <card.icon size={24} className="text-primary-foreground mb-2" />
                  <h3 className="font-bold text-primary-foreground">{card.title}</h3>
                </div>
                <div className="p-4 bg-background">
                  {card.details.map((d, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{d}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">First Name *</label>
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
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Email *</label>
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
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Message *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full border border-border rounded-md bg-background p-4 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold resize-none"
                placeholder="Type your message"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-gold text-foreground px-8 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
