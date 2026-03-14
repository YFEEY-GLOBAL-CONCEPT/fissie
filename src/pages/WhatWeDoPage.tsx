import { Heart, Users, BookOpen, Droplets, Megaphone, Home } from "lucide-react";
import aboutGroup from "@/assets/about-group.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";

const services = [
  { icon: Heart, title: "Women Empowerment", desc: "Supporting widows and single mothers with skills and resources for self-sufficiency." },
  { icon: Droplets, title: "Hygiene Education", desc: "Workshops and awareness campaigns in rural communities and IDP camps." },
  { icon: BookOpen, title: "Education Support", desc: "Providing school fees, materials, and learning support for children." },
  { icon: Home, title: "Basic Needs", desc: "Food, shelter, and essential supplies for the less privileged." },
  { icon: Users, title: "Community Programs", desc: "Community-based initiatives for sustainable development." },
  { icon: Megaphone, title: "Public Awareness", desc: "Advocacy for hygiene and sanitation in alignment with SDG 6." },
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
              Empowering communities across Nigeria
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Our programs span across multiple communities, providing essential hygiene education, women's empowerment, and sustainable development initiatives throughout Nigeria.
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
          How we serve our communities
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
        <p className="section-label mb-4">Our Programs</p>
        <h2 className="text-3xl font-bold text-foreground mb-10 max-w-lg">
          Creating lasting positive change in communities
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard image={gallery5} title="Hygiene Awareness Campaigns" description="Education workshops in IDP camps, rural areas, and government schools." />
          <ProjectCard image={gallery8} title="Women Empowerment Program" description="Skills training and resources for widows and single mothers." />
          <ProjectCard image={gallery9} title="Community Outreach" description="Food distribution and essential supplies for orphanages and communities." />
        </div>
      </div>
    </section>

    <CTABanner />
  </div>
);

export default WhatWeDoPage;
