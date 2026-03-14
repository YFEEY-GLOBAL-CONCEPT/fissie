import { Heart, Users, BookOpen, Home, Stethoscope, Megaphone } from "lucide-react";
import aboutGroup from "@/assets/about-group.jpg";
import outreachImg from "@/assets/project-outreach.jpg";
import excursionImg from "@/assets/project-excursion.jpg";
import awarenessImg from "@/assets/project-awareness.jpg";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import EventCard from "@/components/EventCard";

const services = [
  { icon: Heart, title: "Family Support", desc: "Providing comprehensive family support services to families of children with special needs." },
  { icon: Stethoscope, title: "Health Benefits", desc: "Access to healthcare and medical support for our children." },
  { icon: BookOpen, title: "Education", desc: "Scholarships, educational materials, and learning support." },
  { icon: Home, title: "Basic Amenities", desc: "Ensuring access to food, shelter, and essentials." },
  { icon: Users, title: "Therapy", desc: "Professional therapy and counseling services." },
  { icon: Megaphone, title: "Public Outreach", desc: "Community awareness campaigns and advocacy." },
];

const WhatWeDoPage = () => (
  <div>
    {/* Hero */}
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">What We Do</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We are working cross country
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Our programs span across multiple communities, providing essential care, education, and support for children with special needs throughout Nigeria.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={aboutGroup} alt="Our work" className="w-full h-72 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          What we do for our kids with special needs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="flex items-start gap-4">
              <div className="bg-gold/20 p-3 rounded-lg shrink-0">
                <s.icon size={22} className="text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
          <ProjectCard image={outreachImg} title="Mission Smile 1k: Outdoor charity" description="Community outreach providing food and supplies." />
          <ProjectCard image={excursionImg} title="Weekly Excursions" description="Fun outdoor activities and learning experiences." />
          <ProjectCard image={awarenessImg} title="Monthly Public Awareness" description="Raising awareness about children's needs." />
        </div>
      </div>
    </section>

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
  </div>
);

export default WhatWeDoPage;
