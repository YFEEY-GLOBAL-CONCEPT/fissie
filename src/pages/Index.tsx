import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Droplets, ShieldCheck, HandHeart } from "lucide-react";
import heroImg from "@/assets/hero-children.jpg";
import aboutImg from "@/assets/about-group.jpg";
import servicesImg from "@/assets/gallery-5.jpg";
import outreachImg from "@/assets/gallery-1.jpg";
import excursionImg from "@/assets/gallery-3.jpg";
import awarenessImg from "@/assets/project-awareness.jpg";
import ImpactCounter from "@/components/ImpactCounter";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import gallery1 from "@/assets/gallery-2.jpg";
import gallery2 from "@/assets/gallery-4.jpg";
import gallery3 from "@/assets/gallery-6.jpg";

const services = [
  { icon: Droplets, title: "Hygiene & Sanitation", desc: "Comprehensive hygiene education programs teaching proper sanitation practices and disease prevention." },
  { icon: Heart, title: "Women & Widows Support", desc: "Empowerment programs supporting women and widows through skills training and resources." },
  { icon: BookOpen, title: "Children & Youth Development", desc: "Educational and developmental programs providing essential life skills and health education." },
  { icon: ShieldCheck, title: "Community Health", desc: "Mobile health services and community-based health programs for underserved rural areas." },
  { icon: HandHeart, title: "Emergency Relief", desc: "Supporting families in crisis by covering emergency hospital bills and school fees." },
  { icon: Users, title: "Public Outreach", desc: "Community awareness campaigns and advocacy for vulnerable populations." },
];

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center bg-hero-bg">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Community outreach" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Helping <span className="text-gold">People,</span> Changing <span className="text-gold">Lives</span>
          </h1>
          <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-foreground leading-relaxed">
              We empower communities across Nigeria through <strong>hygiene education</strong>, <strong>women's support programs</strong>, and sustainable development initiatives that create lasting positive change.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/donate" className="bg-gold text-foreground px-6 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors">
              Help Now
            </Link>
            <Link to="/what-we-do" className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/20 transition-colors">
              Our Impact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Restoring Dignity, Inspiring Hope.
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              FissieE-J Helping Hands Foundation is a grassroots NGO committed to restoring dignity and hope for single mothers, widows, and orphans. Our work focuses on education, basic needs, hygiene, and welfare.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Though the mission has been active for over a decade, we were fully registered in 2023 and have been serving communities consistently for 2+ years.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We've impacted over 1,000 lives through hygiene awareness campaigns in IDP camps, rural areas, and government schools, plus food and essential supplies for orphanages.
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
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Mission</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Empowering underprivileged communities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to empower underprivileged women, widows, mothers, and children in underserved Nigerian communities by advancing hygiene and sanitation awareness, delivering community-based programs, and fostering healthier lives in alignment with SDG 6.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Vision</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Dignity, health, and hope for all</h3>
            <p className="text-muted-foreground leading-relaxed">
              We envision communities where all people, regardless of socio-economic status, practice good hygiene daily and thrive in health and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Ways to Support */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Ways to Support Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { emoji: "💰", title: "Financial Support", desc: "Direct monetary contributions" },
            { emoji: "🍚", title: "Food Donations", desc: "Nutritious meals and supplies" },
            { emoji: "🧼", title: "Hygiene Supplies", desc: "Soap, sanitizers, health products" },
            { emoji: "👕", title: "Clothing & Items", desc: "Essential clothing and materials" },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 rounded-xl bg-section-alt">
              <span className="text-4xl mb-3 block">{item.emoji}</span>
              <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-label mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our programs and initiatives
            </h2>
            <div className="space-y-6">
              {services.slice(0, 4).map((s) => (
                <div key={s.title} className="flex items-start gap-4">
                  <div className="bg-gold/20 p-2 rounded-lg shrink-0">
                    <s.icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={servicesImg} alt="Educational session" className="w-full h-[500px] object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    {/* Projects */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="section-label mb-4">Our Programs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 max-w-lg">
          Transforming lives through targeted programs
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard image={outreachImg} title="Hygiene & Sanitation Awareness" description="Comprehensive hygiene education teaching proper sanitation practices and disease prevention." link="/what-we-do" />
          <ProjectCard image={excursionImg} title="Women & Widows Support" description="Empowerment programs supporting women through skills training and micro-finance." link="/what-we-do" />
          <ProjectCard image={awarenessImg} title="Children & Youth Development" description="Educational programs providing essential life skills and health education." link="/what-we-do" />
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
        <div className="grid grid-cols-3 gap-8">
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
