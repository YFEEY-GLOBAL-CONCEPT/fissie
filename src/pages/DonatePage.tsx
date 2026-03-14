import { useState } from "react";
import { Link } from "react-router-dom";
import donateHero from "@/assets/donate-hero.jpg";

const amounts = [5000, 10000, 20000, 50000];

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "impact" | "what-you-get">("overview");

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
                Making a donation for our children.
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When you donate, you're supporting effective care to children with special needs—an investment in the leaders of tomorrow.
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
                How you can contribute to caring for our kids
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every donation goes directly to supporting our programs. We ensure complete transparency in how your contributions are used to make a lasting impact.
              </p>
            </div>
            <div>
              <div className="flex gap-6 border-b border-border mb-6">
                {(["overview", "impact", "what-you-get"] as const).map((tab) => (
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
              <p className="text-muted-foreground leading-relaxed">
                {activeTab === "overview" && "Your donation funds essential programs including education, healthcare, therapy sessions, and community outreach for children with special needs."}
                {activeTab === "impact" && "Every ₦5,000 provides a week of meals. Every ₦20,000 sponsors a child's education for a month. Your generosity directly transforms lives."}
                {activeTab === "what-you-get" && "Donors receive a tax receipt, impact reports, and invitations to our annual events to see firsthand the difference your contribution makes."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donate-form" className="py-20 bg-section-alt">
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

          <button
            onClick={handleDonate}
            className="w-full bg-gold text-foreground py-3 rounded-md font-bold text-lg hover:bg-gold-hover transition-colors"
          >
            Donate ₦{finalAmount > 0 ? finalAmount.toLocaleString() : "0"}
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Payments are securely processed via Paystack. Your card details never touch our servers.
          </p>
        </div>
      </section>

      {/* How we use */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground">How we use your donation</h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                We allocate funds transparently: 45% goes to childcare, 25% to education, 20% to healthcare, and 10% to administration.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Every naira is accounted for. We publish quarterly impact reports that detail exactly how donations are spent and the outcomes achieved.
              </p>
            </div>
          </div>
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
