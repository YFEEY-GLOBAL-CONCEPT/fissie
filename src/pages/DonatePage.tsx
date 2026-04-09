import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Heart, ShieldCheck, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import donateHero from "@/assets/team-img.png";
import CTABanner from "@/components/CTABanner";

const PAYSTACK_PUBLIC_KEY = "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const loadPaystackScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.getElementById("paystack-script")) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = "paystack-script";
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Paystack"));
    document.head.appendChild(script);
  });
};

const DonatePage = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successRef, setSuccessRef] = useState("");
  const [successAmount, setSuccessAmount] = useState(0);

  const finalAmount = Number(amount) || 0;

  useEffect(() => {
    loadPaystackScript().catch(() =>
      toast.error("Could not load payment gateway. Please refresh.")
    );
  }, []);

  const handlePayWithPaystack = () => {
    if (!name.trim() || !email.trim() || finalAmount < 100) {
      toast.error("Please fill in your details and enter a donation amount (min ₦100).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const PaystackPop = (window as any).PaystackPop;
    if (!PaystackPop) {
      toast.error("Payment gateway not ready. Please refresh and try again.");
      return;
    }

    const handler = PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: email.trim(),
      amount: finalAmount * 100,
      currency: "NGN",
      ref: `FISSIEJ-${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
      metadata: {
        custom_fields: [
          { display_name: "Donor Name", variable_name: "donor_name", value: name.trim() },
          { display_name: "Amount (NGN)", variable_name: "amount_ngn", value: `₦${finalAmount.toLocaleString()}` },
        ],
      },
      callback: (response: { reference: string }) => {
        setSuccessRef(response.reference);
        setSuccessAmount(finalAmount);
        setShowSuccess(true);
        setName("");
        setEmail("");
        setAmount("");
      },
      onClose: () => {
        toast.info("Payment window closed. You can try again anytime.");
      },
    });

    handler.openIframe();
  };

  if (showSuccess) {
    return (
      <div className="bg-white min-h-screen">
        <section className="py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-lg mx-auto text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h1 className="text-4xl font-bold text-foreground">Thank You!</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your generous donation of <span className="font-bold text-foreground">₦{successAmount.toLocaleString()}</span> has been received successfully.
              </p>
              <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-1">Transaction Reference</p>
                <p className="font-mono">{successRef}</p>
              </div>
              <p className="text-muted-foreground">
                A confirmation has been sent to your email. Your contribution will directly impact lives in our communities.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button
                  onClick={() => setShowSuccess(false)}
                  className="bg-gold text-foreground hover:bg-gold-hover font-bold"
                >
                  Donate Again
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = "/"}
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-hero-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={donateHero} alt="Donate" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Support Our Cause</p>
            <h1 className="text-4xl md:text-6xl font-bold text-hero-foreground mb-6 leading-tight">
              Making a donation for our communities.
            </h1>
            <p className="text-xl text-hero-foreground/80 mb-8 leading-relaxed">
              When you donate, you're supporting effective care to single mothers, widows, and
              orphans—an investment in a brighter future for Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donate-form" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">How you can contribute</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Every donation goes directly to supporting our programs. We ensure complete
                  transparency in how your contributions are used to make a lasting impact.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-muted rounded-2xl flex gap-4">
                  <div className="bg-gold/20 p-3 rounded-xl h-fit">
                    <Heart className="text-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Impact</h4>
                    <p className="text-sm text-muted-foreground">₦5,000 provides a week of nutritious meals.</p>
                  </div>
                </div>
                <div className="p-6 bg-muted rounded-2xl flex gap-4">
                  <div className="bg-gold/20 p-3 rounded-xl h-fit">
                    <Zap className="text-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      ₦20,000 sponsors educational materials for a community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-hero-bg p-8 rounded-sm text-hero-foreground">
                <div className="flex gap-4 items-center mb-4">
                  <ShieldCheck className="text-gold" size={32} />
                  <h3 className="text-xl font-bold">Secure Payment via Paystack</h3>
                </div>
                <p className="text-hero-foreground/70 leading-relaxed mb-6">
                  Your donation is processed securely through Paystack, Nigeria's leading payment
                  gateway. We never store your card details.
                </p>
                <div className="flex gap-4">
                  <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
                  <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold">MASTER</div>
                  <div className="h-8 w-16 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold">PAYSTACK</div>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 md:p-12 rounded-sm shadow-md border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center uppercase tracking-wider">
                Enter Donation Amount
              </h3>

              <div className="space-y-6">
                <div className="relative">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 font-bold text-foreground text-xl">₦</span>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-8 py-6 rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold text-2xl font-bold transition-colors"
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold text-foreground uppercase tracking-widest opacity-60">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold h-12 px-0 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold text-foreground uppercase tracking-widest opacity-60">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold h-12 px-0 transition-colors"
                    />
                  </div>
                </div>

                <Button
                  onClick={handlePayWithPaystack}
                  className="w-full bg-gold text-foreground py-8 rounded-sm font-bold text-xl hover:bg-gold-hover transition-all shadow-md mt-4"
                >
                  Donate ₦{finalAmount > 0 ? finalAmount.toLocaleString() : "0"}
                </Button>

                <p className="text-center text-xs text-muted-foreground pt-4 leading-relaxed">
                  By donating, you agree to our terms and conditions. <br />
                  FissieE-J is a registered NGO in Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Every naira counts</h2>
            <p className="text-muted-foreground">
              We are transparent about our spending. Here's how your donations directly affect lives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "Hygiene & Sanitation", value: "45%" },
              { label: "Education & Schools", value: "35%" },
              { label: "Welfare & Support", value: "20%" },
            ].map((stat) => (
              <div key={stat.label} className="bg-background p-10 rounded-sm text-center shadow-md hover:translate-y-[-5px] transition-all">
                <p className="text-5xl font-bold text-gold mb-2">{stat.value}</p>
                <p className="text-foreground font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
};

export default DonatePage;
