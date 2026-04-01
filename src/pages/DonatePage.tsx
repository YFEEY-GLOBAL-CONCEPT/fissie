import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { CreditCard, Heart, ShieldCheck, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import donateHero from "@/assets/team-img.png";
import CTABanner from "@/components/CTABanner";

const amounts = [5000, 10000, 20000, 50000];

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const finalAmount = selectedAmount || Number(customAmount) || 0;

  const handleOpenPayment = () => {
    if (!name || !email || finalAmount < 100) {
      toast.error("Please fill in your details and select a donation amount.");
      return;
    }
    setIsModalOpen(true);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsModalOpen(false);
      toast.success("Thank you! Your donation was successful.", {
        description: `₦${finalAmount.toLocaleString()} has been received to support our mission.`,
      });
      // Reset form
      setName("");
      setEmail("");
      setSelectedAmount(null);
      setCustomAmount("");
    }, 2000);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-[#172554] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={donateHero}
            alt="Donate"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
              Support Our Cause
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Making a donation for our communities.
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              When you donate, you're supporting effective care to single
              mothers, widows, and orphans—an investment in a brighter future
              for Nigeria.
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
                <h2 className="text-4xl font-bold text-[#172554] mb-6">
                  How you can contribute
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every donation goes directly to supporting our programs. We
                  ensure complete transparency in how your contributions are
                  used to make a lasting impact.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl flex gap-4">
                  <div className="bg-gold/20 p-3 rounded-xl h-fit">
                    <Heart className="text-[#172554]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#172554] mb-1">Impact</h4>
                    <p className="text-sm text-gray-500">
                      ₦5,000 provides a week of nutritious meals.
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl flex gap-4">
                  <div className="bg-gold/20 p-3 rounded-xl h-fit">
                    <Zap className="text-[#172554]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#172554] mb-1">Education</h4>
                     <p className="text-sm text-gray-500">
                      ₦20,000 sponsors educational materials for a community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#172554] p-8 rounded-sm text-white">
                <div className="flex gap-4 items-center mb-4">
                  <ShieldCheck className="text-gold" size={32} />
                  <h3 className="text-xl font-bold">Secure Payment</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  Your donation is processed securely. We use industry-standard
                  encryption to protect your information.
                </p>
                <div className="flex gap-4">
                  {/* Payment partner logos would go here */}
                  <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold">
                    VISA
                  </div>
                  <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold">
                    MASTER
                  </div>
                  <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold">
                    PAYSTACK
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-sm shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-[#172554] mb-8 text-center uppercase tracking-wider">
                Select Donation Amount
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => {
                        setSelectedAmount(a);
                        setCustomAmount("");
                      }}
                      className={`py-4 rounded-xl font-bold text-lg transition-all ${
                        selectedAmount === a
                          ? "bg-gold text-[#172554] shadow-lg scale-105"
                          : "bg-gray-50 text-gray-400 hover:bg-gray-100 border border-transparent"
                      }`}
                    >
                      ₦{a.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 font-bold text-[#172554] text-xl">
                    ₦
                  </span>
                  <Input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-8 py-6 rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold text-2xl font-bold transition-colors"
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-xs font-bold text-[#172554] uppercase tracking-widest opacity-60"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold h-12 px-0 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-xs font-bold text-[#172554] uppercase tracking-widest opacity-60"
                    >
                      Email Address
                    </Label>
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

                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <Button
                    onClick={handleOpenPayment}
                    className="w-full bg-gold text-[#172554] py-8 rounded-sm font-bold text-xl hover:bg-gold-hover transition-all shadow-md mt-4"
                  >
                    Donate ₦
                    {finalAmount > 0 ? finalAmount.toLocaleString() : "0"}
                  </Button>

                  <DialogContent className="sm:max-w-[425px] rounded-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-[#172554]">
                        Complete Donation
                      </DialogTitle>
                      <DialogDescription>
                        Complete your donation of ₦{finalAmount.toLocaleString()}
                      </DialogDescription>
                    </DialogHeader>

                    <form
                      onSubmit={handlePaymentSubmit}
                      className="space-y-8 pt-4"
                    >
                      <div className="flex gap-2 mb-6 border-b border-gray-100 pb-4 overflow-x-auto no-scrollbar">
                        {["card", "bank", "ussd", "mobile"].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setPaymentMethod(method)}
                            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-colors ${
                              paymentMethod === method
                                ? "bg-[#172554] text-white"
                                : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>

                      {paymentMethod === "card" && (
                        <>
                          <div className="space-y-2">
                            <Label
                              htmlFor="card-number"
                              className="text-[10px] font-bold uppercase tracking-widest text-[#172554]/60"
                            >
                              Card Number
                            </Label>
                            <div className="relative">
                              <CreditCard
                                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors"
                                size={18}
                              />
                              <Input
                                id="card-number"
                                placeholder="0000 0000 0000 0000"
                                className="pl-8 rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold h-10 transition-colors"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <Label
                                htmlFor="expiry"
                                className="text-[10px] font-bold uppercase tracking-widest text-[#172554]/60"
                              >
                                Expiry Date
                              </Label>
                              <Input
                                id="expiry"
                                placeholder="MM/YY"
                                className="rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold h-10 transition-colors"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="cvv"
                                className="text-[10px] font-bold uppercase tracking-widest text-[#172554]/60"
                              >
                                CVV
                              </Label>
                              <Input
                                id="cvv"
                                placeholder="123"
                                maxLength={3}
                                className="rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold h-10 transition-colors"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="card-name"
                              className="text-[10px] font-bold uppercase tracking-widest text-[#172554]/60"
                            >
                              Name on Card
                            </Label>
                            <Input
                              id="card-name"
                              placeholder="John Doe"
                              className="rounded-none border-0 border-b-2 border-border bg-transparent focus-visible:ring-0 focus-visible:border-gold h-10 transition-colors"
                              required
                            />
                          </div>
                        </>
                      )}

                      {paymentMethod === "bank" && (
                        <div className="p-4 bg-gray-50 rounded-lg text-sm text-center">
                          <p className="font-bold text-[#172554] mb-2">Transfer to:</p>
                          <p className="font-mono text-lg mb-1">0123456789</p>
                          <p className="font-medium text-gray-600">GTBank - FissieE-J Foundation</p>
                          <p className="text-xs text-gray-400 mt-4">Transfers will be verified automatically.</p>
                        </div>
                      )}

                      {paymentMethod === "ussd" && (
                        <div className="p-4 bg-gray-50 rounded-lg text-sm text-center">
                          <p className="font-bold text-[#172554] mb-2">Dial the shortcode:</p>
                          <p className="font-mono text-xl font-bold text-gold mb-1">*737*000*45#</p>
                          <p className="text-xs text-gray-400 mt-4">Follow the prompts to complete payment.</p>
                        </div>
                      )}

                      {paymentMethod === "mobile" && (
                        <div className="space-y-4">
                          <div className="space-y-2 mt-4">
                             <Label className="text-[10px] font-bold uppercase tracking-widest text-[#172554]/60">Mobile Number</Label>
                             <Input placeholder="08012345678" className="border-b-2 rounded-none" required />
                          </div>
                          <p className="text-xs text-center text-gray-400">Supported networks: MTN, Airtel, Glo</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full bg-[#172554] text-white py-6 rounded-xl font-bold relative overflow-hidden"
                      >
                        {isProcessing ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Processing...
                          </span>
                        ) : (
                          `Confirm ₦${finalAmount.toLocaleString()}`
                        )}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <p className="text-center text-xs text-gray-400 pt-4 leading-relaxed">
                  By donating, you agree to our terms and conditions. <br />
                  FissieE-J is a registered NGO in Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Usage */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172554] mb-4">
              Every naira counts
            </h2>
            <p className="text-gray-600">
              We are transparent about our spending. Here's how your donations
              directly affect lives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "Hygiene & Sanitation", value: "45%" },
              { label: "Education & Schools", value: "35%" },
              { label: "Welfare & Support", value: "20%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-10 rounded-sm text-center shadow-md hover:translate-y-[-5px] transition-all"
              >
                <p className="text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-[#172554] font-bold uppercase tracking-widest text-sm">
                  {stat.label}
                </p>
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
