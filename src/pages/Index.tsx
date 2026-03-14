import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Home as HomeIcon, Stethoscope, Megaphone } from "lucide-react";
import heroImg from "@/assets/hero-children.jpg";
import aboutImg from "@/assets/about-group.jpg";
import servicesImg from "@/assets/services-child.jpg";
import outreachImg from "@/assets/project-outreach.jpg";
import excursionImg from "@/assets/project-excursion.jpg";
import awarenessImg from "@/assets/project-awareness.jpg";
import ImpactCounter from "@/components/ImpactCounter";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import EventCard from "@/components/EventCard";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const services = [
  { icon: Heart, title: "Family Support", desc: "Providing comprehensive family support services to families of children with special needs." },
  { icon: Stethoscope, title: "Health Benefits", desc: "Access to healthcare, therapy sessions, and medical support for our children." },
  { icon: BookOpen, title: "Education", desc: "Scholarships, educational materials, and learning support for every child." },
  { icon: HomeIcon, title: "Basic Amenities", desc: "Ensuring access to food, shelter, and essential living needs." },
  { icon: Users, title: "Therapy", desc: "Professional therapy and counseling services for emotional wellbeing." },
  { icon: Megaphone, title: "Public Outreach", desc: "Community awareness campaigns and advocacy for children's rights." },
];

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center bg-hero-bg">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Children smiling" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-hero-foreground leading-tight mb-6">
            Inclusive care for children with special needs
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/what-we-do" className="bg-gold text-foreground px-6 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors">
              What we do
            </Link>
            <Link to="/donate" className="bg-hero-foreground/10 text-hero-foreground border border-hero-foreground/30 px-6 py-3 rounded-md font-medium hover:bg-hero-foreground/20 transition-colors">
              ● Play Video
            </Link>
          </div>
          <div className="flex gap-12 mt-12">
            <div>
              <p className="text-2xl font-bold text-hero-foreground">250+</p>
              <p className="text-sm text-hero-foreground/70">children under our care</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-hero-foreground">58</p>
              <p className="text-sm text-hero-foreground/70">donations collected</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">Know About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We provide a place for children with special needs
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              FissieE-J Helping Hands Foundation is a non-governmental organization dedicated to providing inclusive care, education, and support for children with special needs in Nigeria.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our mission is to create a nurturing environment where every child can thrive, regardless of their abilities. We believe in the potential of every child.
            </p>
            <Link to="/about" className="inline-block bg-gold text-foreground px-6 py-3 rounded-md font-medium hover:bg-gold-hover transition-colors">
              Learn more
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={aboutImg} alt="About our organization" className="w-full h-80 object-cover rounded-xl" />
          </div>
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
              Some services we provide for our children
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We offer a comprehensive range of services designed to support the holistic development of children with special needs.
            </p>
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
            <img src={servicesImg} alt="Child receiving care" className="w-full h-[500px] object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    {/* Projects */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="section-label mb-4">Projects We Have Done</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 max-w-lg">
          We are creating a place where children with special needs can thrive
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard image={outreachImg} title="Mission Smile 1k: Outdoor charity" description="Community outreach providing food and supplies to children in need." />
          <ProjectCard image={excursionImg} title="Weekly Excursions" description="Fun outdoor activities and learning experiences for our children." />
          <ProjectCard image={awarenessImg} title="Monthly Public Awareness" description="Raising awareness about the needs of children with special needs." />
        </div>
      </div>
    </section>

    {/* Impact Stats */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground text-center mb-4">
          How we spend your donations and where it goes
        </h2>
        <p className="text-primary-foreground/70 text-center mb-12 max-w-xl mx-auto">
          We are transparent about our spending. Here's how your donations directly affect children's lives.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <ImpactCounter end={1248} label="People Helped" suffix="+" />
          <ImpactCounter end={34} label="Projects Completed" suffix="+" />
          <ImpactCounter end={580} label="Donations Received" />
          <ImpactCounter end={12} label="Communities Served" />
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <CTABanner />

    {/* Events */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8">Our Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <EventCard day="13" month="APR" title="A day with our wonderful children" />
          <EventCard day="25" month="APR" title="Seminar: Caring for children with autism" />
        </div>
      </div>
    </section>

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
