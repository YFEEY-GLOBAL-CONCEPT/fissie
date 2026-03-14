import { useState } from "react";
import { CreditCard, X, CheckCircle, AlertCircle } from "lucide-react";
import donateHero from "@/assets/donate-hero.jpg";

const amounts = [5000, 10000, 20000, 50000];

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Modal states
  const [showCardModal, setShowCardModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Card fields
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [processing, setProcessing] = useState(false);

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

  const handleDonateClick = () => {
    if (!name || !email || finalAmount < 100) {
      setErrorMessage("Please fill in all fields and select an amount (min ₦100).");
      setShowErrorModal(true);
      return;
    }
    setShowCardModal(true);
  };

  const handlePayment = () => {
    if (!cardNumber || !cardExpiry || !cardCvv) {
      setErrorMessage("Please enter all card details.");
      setShowErrorModal(true);
      return;
    }
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setShowCardModal(false);
      setShowSuccessModal(true);
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setSelectedAmount(null);
      setCustomAmount("");
      setCardNumber("");
      setCardExpiry("");
      setCardCvv("");
    }, 2000);
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
                Making a donation for our communities.
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When you donate, you're supporting effective care for underprivileged communities — an investment in the leaders of tomorrow.
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

      {/* Donation Form */}
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

          <button
            onClick={handleDonateClick}
            className="w-full bg-gold text-foreground py-3 rounded-md font-bold text-lg hover:bg-gold-hover transition-colors"
          >
            Donate ₦{finalAmount > 0 ? finalAmount.toLocaleString() : "0"}
          </button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Payments are securely processed via Paystack.
          </p>
        </div>
      </section>

      {/* Card Payment Modal */}
      {showCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4">
          <div className="bg-background rounded-xl shadow-xl max-w-md w-full p-6 relative">
            <button onClick={() => setShowCardModal(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            <div className="flex items-center gap-2 mb-6">
              <CreditCard size={24} className="text-gold" />
              <h3 className="text-xl font-bold text-foreground">Enter Card Details</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Amount: <span className="font-bold text-foreground">₦{finalAmount.toLocaleString()}</span>
            </p>
            <input
              type="text"
              placeholder="Card Number (e.g. 5399 8300 0000 0000)"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              maxLength={19}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground mb-3 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold font-mono"
            />
            <div className="grid grid-cols-2 gap-3 mb-6">
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
            <button
              onClick={handlePayment}
              disabled={processing}
              className="w-full bg-gold text-foreground py-3 rounded-md font-bold hover:bg-gold-hover transition-colors disabled:opacity-50"
            >
              {processing ? "Processing..." : `Pay ₦${finalAmount.toLocaleString()}`}
            </button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Secured by Paystack
            </p>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4">
          <div className="bg-background rounded-xl shadow-xl max-w-sm w-full p-8 text-center relative">
            <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              Your donation has been received successfully. A confirmation email will be sent shortly.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-gold text-foreground px-6 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4">
          <div className="bg-background rounded-xl shadow-xl max-w-sm w-full p-8 text-center relative">
            <button onClick={() => setShowErrorModal(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            <AlertCircle size={56} className="text-destructive mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Oops!</h3>
            <p className="text-muted-foreground mb-6">{errorMessage}</p>
            <button
              onClick={() => setShowErrorModal(false)}
              className="bg-gold text-foreground px-6 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonatePage;
