import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "fissiej_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({
      accepted: true,
      timestamp: new Date().toISOString(),
      preferences: { analytics: true, functional: true, marketing: true },
    }));
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({
      accepted: false,
      timestamp: new Date().toISOString(),
      preferences: { analytics: false, functional: true, marketing: false },
    }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-500">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 relative">
          <button
            onClick={handleDecline}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="flex items-start gap-4">
            <div className="bg-gold/20 p-2.5 rounded-xl shrink-0 mt-0.5">
              <Cookie size={22} className="text-foreground" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-foreground mb-1 text-sm">We use cookies 🍪</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                We use cookies to improve your experience, analyze site traffic, and personalize
                content. By accepting, you allow us to collect anonymized usage data to make our
                site better.
              </p>
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="bg-gold text-[#172554] hover:bg-gold-hover font-bold text-xs px-6"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  size="sm"
                  className="text-xs font-bold px-6"
                >
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
