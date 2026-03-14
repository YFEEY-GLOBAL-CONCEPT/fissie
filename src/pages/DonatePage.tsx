import { useState } from "react";
import { Link } from "react-router-dom";
import donateHero from "@/assets/gallery-8.jpg";

const amounts = [5000, 10000, 20000, 50000];

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "impact" | "bank-transfer">("overview");

  const finalAmount = selectedAmount || Number(customAmount) || 0;

  const handleDonate = () => {
    if (!name || !email || finalAmount < 100) {
      alert("Please fill in all fields and select an amount.");
      return;
    }
    alert(`Thank you ${name}! Donation of ₦${finalAmount.toLocaleString()} will be processed. (Paystack integration requires backend setup via Lovable Cloud)`);
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
                Join us in making a difference!
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your support helps us reach more communities with education, empowerment and sustainable programs.
              </p>
              <a href="#donate-form" className="inline-block bg-gold text-foreground px-6 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors">
                Donate now
              </a>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={donateHero} alt="Donate" className="w-full h-72 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ways to support our mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every donation goes directly to supporting our programs. We ensure complete transparency in how your contributions are used.
              </p>
            </div>
            <div>
              <div className="flex gap-6 border-b border-border mb-6">
                {(["overview", "impact", "bank-transfer"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? "border-b-2 border-foreground text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {tab.replace(/-/g, " ")}
                  </button>
                ))}
              </div>
              <div className="text-muted-foreground leading-relaxed">
                {activeTab === "overview" && "You can support us through financial donations, food donations, hygiene supplies, and essential clothing & materials. Every contribution makes a difference."}
                {activeTab === "impact" && "We've impacted over 1,000 lives through hygiene awareness campaigns in IDP camps, rural areas, and government schools, plus food and essential supplies for orphanages."}
                {activeTab === "bank-transfer" && (
                  <div>
                    <p className="mb-2">You can also donate via bank transfer:</p>
                    <p className="font-bold text-foreground">Bank: GT Bank</p>
                    <p className="font-bold text-foreground">Account: 0854640729</p>
                    <p className="font-bold text-foreground">Name: FISSIEE-J HELPING HANDS FOUNDATION</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donate-form" className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Make a Donation</h2>

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

      {/* CTA */}
      <section className="py-0">
        <Link to="/contact" className="block">
          <div className="bg-primary py-12 text-center">
            <p className="text-primary-foreground text-lg">Have questions about donating? <span className="underline font-medium">Contact us</span></p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default DonatePage;
