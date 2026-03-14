import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/2349012346514?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20FissieE-J%20Helping%20Hands%20Foundation"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-primary-foreground p-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
