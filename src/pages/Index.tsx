import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-group.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import ImpactCounter from "@/components/ImpactCounter";
import CTABanner from "@/components/CTABanner";

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center bg-hero-bg">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Community outreach" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-[64px] font-bold text-hero-foreground leading-tight mb-6">
            Inclusive care for children with special needs
          </h1>
          <div className="flex items-center gap-4 flex-wrap mb-12">
            <Link to="/what-we-do" className="bg-gold text-foreground px-6 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors">
              What we do
            </Link>
            <button className="flex items-center gap-2 text-hero-foreground font-medium">
              <span className="bg-hero-foreground/20 p-3 rounded-full">▶</span>
              Play Video
            </button>
          </div>
          <div className="flex items-center gap-12 text-hero-foreground">
            <div>
              <span className="text-sm opacity-80">250 children under our care</span>
            </div>
            <div>
              <span className="text-sm opacity-80">98 donations collected</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="section-label mb-4">Know About Us</p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We provide a place for children with special needs
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              FissieE-J Helping Hands Foundation is a grassroots NGO committed to restoring dignity and hope for single mothers, widows, and orphans. Our work focuses on education, basic needs, hygiene, and welfare, driven by a long-standing passion to support the less privileged.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Though the mission has been active for over a decade, we were fully registered in 2023 and have been serving communities consistently for 2+ years.
            </p>
            <Link to="/about" className="inline-block bg-gold text-foreground px-6 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors">
              Learn more
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={aboutImg} alt="Community outreach" className="w-full h-80 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="section-label mb-4">Our Mission</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Empowering Communities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to empower underprivileged women, widows, mothers, and children in underserved Nigerian communities by advancing hygiene and sanitation awareness, delivering community-based programs, and fostering healthier lives in alignment with SDG 6.
            </p>
          </div>
          <div>
            <p className="section-label mb-4">Our Vision</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Thriving Communities</h3>
            <p className="text-muted-foreground leading-relaxed">
              We envision communities where all people, regardless of socio-economic status, practice good hygiene daily and thrive in health and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Impact Stats */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground text-center mb-4">
          Our Impact So Far
        </h2>
        <p className="text-primary-foreground/70 text-center mb-12 max-w-xl mx-auto">
          We've impacted over 1,000 lives through hygiene awareness campaigns in IDP camps, rural areas, and government schools.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <ImpactCounter end={1000} label="Lives Impacted" suffix="+" />
          <ImpactCounter end={2} label="Years Active" suffix="+" />
          <ImpactCounter end={10} label="Communities" suffix="+" />
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <CTABanner />

    {/* Gallery Preview */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-10">Our Gallery</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[gallery1, gallery2, gallery3].map((img, i) => (
            <img key={i} src={img} alt={`Gallery ${i+1}`} className="w-full h-48 object-cover rounded-lg" />
          ))}
        </div>
        <Link to="/gallery" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
          View Full Gallery
        </Link>
      </div>
    </section>
  </div>
);

export default HomePage;
