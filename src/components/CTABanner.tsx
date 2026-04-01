import { Link } from "react-router-dom";
import ctaBg from "@/assets/cta-bg-img.png";

const CTABanner = () => (
  <section
    className="relative bg-cover bg-center py-24"
    style={{ backgroundImage: `url(${ctaBg})` }}
  >
    <div className="absolute inset-0 bg-foreground/70" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
        Join us in making a difference!
      </h2>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button className="bg-gold text-foreground px-6 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors">
          Join as a volunteer
        </button>
        <Link
          to="/donate"
          className="bg-background text-foreground px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
        >
          Donate
        </Link>
      </div>
    </div>
  </section>
);

export default CTABanner;
