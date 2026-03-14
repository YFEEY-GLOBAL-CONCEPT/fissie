import aboutImg from "@/assets/about-group.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import ImpactCounter from "@/components/ImpactCounter";
import CTABanner from "@/components/CTABanner";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  { name: "Fissie E-J", role: "Founder / Executive Director", image: team1 },
  { name: "Grace Adamu", role: "Programs Manager", image: team2 },
  { name: "Samuel Okoro", role: "Community Outreach Lead", image: team3 },
  { name: "Blessing Eze", role: "Volunteer Coordinator", image: team4 },
];

const AboutPage = () => (
  <div>
    {/* Hero */}
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="section-label mb-4">Know About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We are a non-governmental organization
            </h1>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              FissieE-J Helping Hands Foundation is a grassroots NGO committed to restoring dignity and hope for single mothers, widows, and orphans. Our work focuses on education, basic needs, hygiene, and welfare, driven by a long-standing passion to support the less privileged.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Though the mission has been active for over a decade, we were fully registered in 2023 and have been serving communities consistently for 2+ years.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Image */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-xl overflow-hidden mb-16">
          <img src={aboutImg} alt="Our team in action" className="w-full h-[400px] object-cover" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Mission</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              We make sure to provide inclusive care for children with special needs
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to empower underprivileged women, widows, mothers, and children in underserved Nigerian communities by advancing hygiene and sanitation awareness, delivering community-based programs, and fostering healthier lives in alignment with SDG 6.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Vision</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Provide more inclusive care to children around the world
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We envision communities where all people, regardless of socio-economic status, practice good hygiene daily and thrive in health and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Impact & Looking Ahead */}
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Journey</p>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Impact So Far</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We've impacted over 1,000 lives through hygiene awareness campaigns in IDP camps, rural areas, and government schools, plus food and essential supplies for orphanages.
            </p>
            <h3 className="text-xl font-bold text-foreground mb-3 mt-8">Looking Ahead</h3>
            <p className="text-muted-foreground leading-relaxed">
              We aim to expand hygiene education across all ages, partner with companies and schools to reach more people, help clean up slums and underserved communities, and support children with school fees—working to stay at the forefront of humanitarian action across Africa.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <ImpactCounter end={1000} suffix="+" label="Lives Impacted" />
              <ImpactCounter end={2} suffix="+" label="Years Active" />
              <ImpactCounter end={10} suffix="+" label="Communities" />
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={gallery7} alt="Our impact" className="w-full h-80 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Meet our team</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Our dedicated team works tirelessly to make a difference in communities across Nigeria.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-foreground">{member.name}</h4>
              <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
              <div className="flex items-center justify-center gap-3">
                <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook size={14} /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={14} /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={14} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
  </div>
);

export default AboutPage;
