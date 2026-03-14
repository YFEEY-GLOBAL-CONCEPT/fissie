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
    alert("Message sent! We'll get back to you shortly. (Backend integration required via Lovable Cloud)");
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
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Let's talk!</h3>
                <p className="text-sm text-muted-foreground">+234 09012346514 &nbsp;&nbsp; hello@fissieej.com</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Head Office</h4>
                <p className="text-sm text-muted-foreground">8 Brewery Drive, Lagos, Nigeria.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Branch Office</h4>
                <p className="text-sm text-muted-foreground">Opp Opolo round about, Yenagoa, Bayelsa, Nigeria</p>
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

      {/* Map placeholder */}
      <section className="h-80 bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Map integration available with Lovable Cloud</p>
      </section>
    </div>
  );
};

export default ContactPage;
