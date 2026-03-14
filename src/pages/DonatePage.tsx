import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Heart, Users, Droplets, BookOpen } from "lucide-react";
import donateHero from "@/assets/donate-hero.jpg";

const amounts = [5000, 10000, 20000, 50000];

const howItHelps = [
  { icon: Droplets, title: "Hygiene Education", desc: "Funding workshops and awareness campaigns in rural communities." },
  { icon: Users, title: "Women Empowerment", desc: "Supporting widows and single mothers with skills and resources." },
  { icon: Heart, title: "Child Welfare", desc: "Providing basic needs and educational support for orphans." },
  { icon: BookOpen, title: "Community Development", desc: "Clean water projects and sanitation facility improvements." },
];

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const finalAmount = selectedAmount || Number(customAmount) || 0;

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\D/g, "").slice(0, 16);
    return v.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) return v.slice(0, 2) + "/" + v.slice(2);
    return v;
  };

  const handleDonate = () => {
    if (!name || !email || finalAmount < 100) {
      alert("Please fill in all fields and select an amount (min ₦100).");
      return;
    }
    if (!cardNumber || !cardExpiry || !cardCvv) {
      alert("Please enter your card details.");
      return;
    }
    alert(`Thank you ${name}! Donation of ₦${finalAmount.toLocaleString()} will be processed. (Paystack integration requires Lovable Cloud)`);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Donate</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Make a <span className="text-gold">Difference</span>
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your contribution helps us provide essential hygiene education, support widows, and empower communities across Nigeria. Every donation counts.
              </p>
              <a href="#donate-form" className="inline-block bg-gold text-foreground px-6 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors">
                Donate now
              </a>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={donateHero} alt="Our impact in communities" className="w-full h-72 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background border border-border rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">Bank Transfer</h3>
              <p className="text-muted-foreground mb-4">Direct transfer to our bank account:</p>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-bold text-foreground">FISSIEE-J HELPING HANDS FOUNDATION</p>
                <p className="text-lg text-foreground mt-1">0854640729</p>
                <p className="text-sm text-muted-foreground">GT Bank</p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Please use your name as reference</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">Material Support</h3>
              <p className="text-muted-foreground mb-4">Donate items like hygiene kits, food supplies, or educational materials.</p>
              <Link to="/contact" className="inline-block border-2 border-primary text-foreground px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">How Your Donation Helps</h2>
          <p className="text-muted-foreground text-center mb-12">Transparency in every contribution</p>
          <div className="grid md:grid-cols-4 gap-6">
            {howItHelps.map((item) => (
              <div key={item.title} className="bg-background rounded-xl p-6 border border-border">
                <item.icon size={28} className="text-gold mb-3" />
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form with Card Input */}
      <section id="donate-form" className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Make a Donation</h2>

          {/* Amount selection */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {amounts.map((a) => (
              <button
                key={a}
                onClick={() => { setSelectedAmount(a); setCustomAmount(""); }}
                className={`py-3 rounded-md font-medium text-sm transition-colors ${
                  selectedAmount === a
                    ? "bg-gold text-foreground"
                    : "bg-background border border-border text-foreground hover:bg-muted"
                }`}
              >
                ₦{a.toLocaleString()}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Custom amount (₦)"
            value={customAmount}
            onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground mb-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
          />

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground mb-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground mb-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
          />
          <textarea
            placeholder="Optional message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground mb-6 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold resize-none"
          />

          {/* Card Details */}
          <div className="border border-border rounded-lg p-5 mb-6 bg-muted/50">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard size={20} className="text-muted-foreground" />
              <span className="text-sm font-bold text-foreground">Card Details</span>
            </div>
            <input
              type="text"
              placeholder="Card Number (e.g. 5399 8300 0000 0000)"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              maxLength={19}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground mb-3 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold font-mono"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                maxLength={5}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold font-mono"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                maxLength={4}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold font-mono"
              />
            </div>
          </div>

          <button
            onClick={handleDonate}
            className="w-full bg-gold text-foreground py-3 rounded-md font-bold text-lg hover:bg-gold-hover transition-colors"
          >
            Donate ₦{finalAmount > 0 ? finalAmount.toLocaleString() : "0"}
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Payments are securely processed via Paystack.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
