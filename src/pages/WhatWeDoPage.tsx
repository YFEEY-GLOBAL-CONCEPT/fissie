import {
  Heart,
  Users,
  BookOpen,
  Home,
  Stethoscope,
  Megaphone,
} from "lucide-react";
import aboutGroup from "@/assets/image copy 3.png";
import outreachImg from "@/assets/image copy 4.png";
import excursionImg from "@/assets/image copy.png";
import awarenessImg from "@/assets/image copy 2.png";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import EventCard from "@/components/EventCard";

const services = [
  {
    icon: Heart,
    title: "Hygiene Awareness",
    desc: "Advancing hygiene and sanitation awareness in underserved communities through workshops and campaigns.",
  },
  {
    icon: Stethoscope,
    title: "Health & Welfare",
    desc: "Providing medical supplies and health support to IDP camps and rural government schools.",
  },
  {
    icon: BookOpen,
    title: "Education Support",
    desc: "Scholarships and educational materials for orphans and underprivileged children.",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    desc: "Support programs for single mothers and widows to foster self-reliance and better lives.",
  },
  {
    icon: Home,
    title: "Basic Needs",
    desc: "Food and essential supplies for orphanages and families in extreme need.",
  },
  {
    icon: Megaphone,
    title: "Community Advocacy",
    desc: "Advocating for the rights and well-being of the most vulnerable in our society.",
  },
];

const WhatWeDoPage = () => (
  <div>
    {/* Hero */}
    <section className="bg-[#172554] py-24 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
              Our Work
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Lives Across Nigeria
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Our initiatives reach IDP camps, rural areas, and government
              schools, providing essential services and fostering long-term
              health and well-being.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src={aboutGroup}
              alt="Our work"
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-[#172554] mb-12">
          How We Make an Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="flex items-start gap-4">
              <div className="bg-gold/20 p-3 rounded-lg shrink-0">
                <s.icon size={22} className="text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Projects */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="section-label mb-4">Projects We Have Done</p>
        <h2 className="text-3xl font-bold text-foreground mb-10 max-w-lg">
          We are creating a place where children with special needs can thrive
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            image={outreachImg}
            title="Mission Smile 1k: Outdoor charity"
            description="Community outreach providing food and supplies."
          />
          <ProjectCard
            image={excursionImg}
            title="Weekly Excursions"
            description="Fun outdoor activities and learning experiences."
          />
          <ProjectCard
            image={awarenessImg}
            title="Monthly Public Awareness"
            description="Raising awareness about children's needs."
          />
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

    <CTABanner />
  </div>
);

export default WhatWeDoPage;
