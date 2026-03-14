import { Droplets, Heart, BookOpen, ShieldCheck, HandHeart } from "lucide-react";
import aboutGroup from "@/assets/about-group.jpg";
import awarenessImg from "@/assets/project-awareness.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import CTABanner from "@/components/CTABanner";

const programs = [
  { icon: Droplets, title: "Hygiene & Sanitation Awareness", desc: "Comprehensive hygiene education programs that teach proper sanitation practices, handwashing techniques, and disease prevention methods to communities across Nigeria.", served: "300+" },
  { icon: Heart, title: "Women & Widows Support", desc: "Empowerment programs specifically designed to support women and widows through skills training, micro-finance opportunities, and essential resource provision.", served: "50+" },
  { icon: BookOpen, title: "Children & Youth Development", desc: "Educational and developmental programs focused on children and youth, providing them with essential life skills, health education, and opportunities for growth.", served: "500+" },
  { icon: ShieldCheck, title: "Community Health Initiatives", desc: "Mobile health services and community-based health programs that bring essential medical care and health education to underserved rural communities." },
  { icon: HandHeart, title: "Emergency Relief & Support", desc: "Supporting families in crisis by covering emergency hospital bills and school fees for children who would otherwise be unable to continue their education." },
];

const approach = [
  { step: "01", title: "Community Assessment", desc: "We work closely with communities to understand their specific needs and challenges." },
  { step: "02", title: "Program Design", desc: "Custom programs are developed based on community input and best practices." },
  { step: "03", title: "Implementation", desc: "Programs are delivered with local partners and trained community volunteers." },
  { step: "04", title: "Monitoring & Evaluation", desc: "Continuous assessment ensures programs achieve their intended impact." },
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
              Transforming lives through targeted programs
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive initiatives designed to address the most pressing needs of Nigeria's vulnerable communities.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={aboutGroup} alt="Our programs" className="w-full h-72 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    {/* Programs */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Our Programs</h2>
        <p className="text-muted-foreground mb-12">Comprehensive initiatives designed to create lasting impact</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div key={p.title} className="bg-section-alt rounded-xl p-6">
              <div className="bg-gold/20 p-3 rounded-lg inline-block mb-4">
                <p.icon size={24} className="text-foreground" />
              </div>
              <h4 className="font-bold text-foreground mb-2 text-lg">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
              {p.served && <p className="text-sm font-bold text-gold">{p.served} served</p>}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Program */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden">
            <img src={awarenessImg} alt="Hygiene awareness" className="w-full h-96 object-cover rounded-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Hygiene & Sanitation Awareness</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Comprehensive hygiene education programs that teach proper sanitation practices, handwashing techniques, and disease prevention methods to communities across Nigeria.
            </p>
            <p className="font-bold text-foreground mb-2">Key Impact</p>
            <p className="text-muted-foreground mb-4">Reduced waterborne diseases by 60% in program areas</p>
            <p className="font-bold text-foreground mb-2">Program Activities</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Community workshops on proper hygiene practices</li>
              <li>Distribution of hygiene kits and supplies</li>
              <li>Training local health champions</li>
              <li>School-based hygiene education programs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Approach */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Our Approach</h2>
        <p className="text-muted-foreground mb-12">How we ensure sustainable and meaningful impact</p>
        <div className="grid md:grid-cols-4 gap-8">
          {approach.map((a) => (
            <div key={a.step}>
              <span className="text-4xl font-bold text-gold/30">{a.step}</span>
              <h4 className="font-bold text-foreground mt-2 mb-2">{a.title}</h4>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
  </div>
);

export default WhatWeDoPage;
