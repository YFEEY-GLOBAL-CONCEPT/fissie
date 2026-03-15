import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  BookOpen,
  Home as HomeIcon,
  Stethoscope,
  Megaphone,
} from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";
import servicesImg from "@/assets/outreach-img.png";
import outreachImg from "@/assets/outreach-img.png";
import excursionImg from "@/assets/excursion-img.png";
import awarenessImg from "@/assets/awareness-img.png";
import ImpactCounter from "@/components/ImpactCounter";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import EventCard from "@/components/EventCard";
import gallery1 from "@/assets/gallery-main.png";
import gallery2 from "@/assets/excursion-img.png";
import gallery3 from "@/assets/about-img.jpg";
import gallery4 from "@/assets/group-img.png";
import gallery5 from "@/assets/team-img.png";

const services = [
  {
    icon: Heart,
    title: "Family Support",
    desc: "Providing comprehensive family support services to families of children with special needs.",
  },
  {
    icon: Stethoscope,
    title: "Health Benefits",
    desc: "Access to healthcare, therapy sessions, and medical support for our children.",
  },
  {
    icon: BookOpen,
    title: "Education",
    desc: "Scholarships, educational materials, and learning support for every child.",
  },
  {
    icon: HomeIcon,
    title: "Basic Amenities",
    desc: "Ensuring access to food, shelter, and essential living needs.",
  },
  {
    icon: Users,
    title: "Therapy",
    desc: "Professional therapy and counseling services for emotional wellbeing.",
  },
  {
    icon: Megaphone,
    title: "Public Outreach",
    desc: "Community awareness campaigns and advocacy for children's rights.",
  },
];

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center bg-[#172554]">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Helping People, Changing Lives"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172554] to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
            Helping <span className="text-gold">People</span>,<br />
            Changing <span className="text-gold">Lives</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
            We empower communities across Nigeria through hygiene education,
            women's support programs, and sustainable development initiatives
            that create lasting positive change.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to="/donate"
              className="bg-gold text-[#172554] px-8 py-2.5 rounded-sm font-bold hover:bg-gold-hover transition-all shadow-lg hover:scale-105"
            >
              Help Now
            </Link>
            <Link
              to="/what-we-do"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-2.5 rounded-sm font-bold hover:bg-white/20 transition-all"
            >
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
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#172554] mb-8 leading-tight">
              Restoring Dignity, Inspiring Hope.
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              FisseE-J Helping Hands Foundation is a grassroots NGO committed to
              restoring dignity and hope for single mothers, widows, and
              orphans. Our work focuses on education, basic needs, hygiene, and
              welfare.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-3xl font-bold text-[#172554] mb-1">1,000+</p>
                <p className="text-gray-500 text-sm">Lives Impacted</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-3xl font-bold text-[#172554] mb-1">2023</p>
                <p className="text-gray-500 text-sm">Fully Registered</p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center justify-center bg-[#172554] text-white px-8 py-4 rounded-sm font-bold hover:bg-[#1e2e6b] transition-all shadow-lg"
            >
              Learn our story
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src={gallery3}
              alt="About our organization"
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl overflow-hidden">
            <img
              src={gallery5}
              alt="Child receiving care"
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </div>
          <div>
            <p className="section-label mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Some services we provide for our children
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We offer a comprehensive range of services designed to support the
              holistic development of children with special needs.
            </p>
            <div className="space-y-6">
              {services.slice(0, 4).map((s) => (
                <div key={s.title} className="flex items-start gap-4">
                  <div className="bg-gold/20 p-2 rounded-lg shrink-0">
                    <s.icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      {s.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
          <ProjectCard
            image={outreachImg}
            title="Mission Smile 1k: Outdoor charity"
            description="Community outreach providing food and supplies to children in need."
          />
          <ProjectCard
            image={excursionImg}
            title="Weekly Excursions"
            description="Fun outdoor activities and learning experiences for our children."
          />
          <ProjectCard
            image={awarenessImg}
            title="Monthly Public Awareness"
            description="Raising awareness about the needs of children with special needs."
          />
        </div>
      </div>
    </section>

    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Our Impact So Far
        </h2>
        <p className="text-white/70 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          We've impacted over 1,000 lives through hygiene awareness campaigns in
          IDP camps, rural areas, and government schools, plus food and
          essential supplies for orphanages.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          <ImpactCounter end={1000} label="Lives Impacted" suffix="+" />
          <ImpactCounter end={50} label="Schools Reached" suffix="+" />
          <ImpactCounter end={8} label="IDP Camps Visited" />
          <ImpactCounter end={10} label="Years Active" suffix="+" />
        </div>
      </div>
    </section>

    {/* Events */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8">Our Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <EventCard
            day="13"
            month="APR"
            title="A day with our wonderful children"
          />
          <EventCard
            day="25"
            month="APR"
            title="Seminar: Caring for children with autism"
          />
        </div>
      </div>
    </section>

    {/* Gallery Preview */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-10">
          Our Gallery
        </h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[gallery1, heroImg, gallery4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
        <Link
          to="/gallery"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          View Full Gallery
        </Link>
      </div>
    </section>

    {/* CTA Banner */}
    <CTABanner />
  </div>
);

export default HomePage;
