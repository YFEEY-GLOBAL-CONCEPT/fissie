import { motion } from "framer-motion";
import aboutImg from "@/assets/about-group.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import ImpactCounter from "@/components/ImpactCounter";
import CTABanner from "@/components/CTABanner";

const team = [
  { name: "Olufisola Junaid", role: "Founder & Executive Director", img: team1, bio: "Olatofowomo Olufisola Junaid, popularly known as Fissie-J, is a dedicated humanitarian and Founder of the FissieE-J Helping Hands Foundation, bringing her passion, experience, and commitment to community development into every decision she makes." },
  { name: "Mohammed Ripiada Faridah", role: "Head of Operations", img: team2, bio: "Ripiada Faridah is the Head of Operations, providing strategic and operational leadership for over three years, ensuring programs are delivered efficiently, ethically, and with measurable impact." },
];

const values = [
  { title: "Compassion", desc: "We approach every situation with empathy and understanding, treating each person with dignity and respect." },
  { title: "Community", desc: "We believe in the power of community collaboration and work together to create lasting positive change." },
  { title: "Excellence", desc: "We strive for the highest standards in all our programs and maintain transparency in our operations." },
  { title: "Impact", desc: "We focus on sustainable solutions that create measurable, long-term improvements in communities." },
];

const AboutPage = () => (
  <div>
    {/* Hero */}
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="section-label mb-4">Who We Are</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering communities through compassion and care
            </h1>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              FissieE-J Helping Hands Foundation is a grassroots NGO committed to restoring dignity and hope for single mothers, widows, and orphans. Our work focuses on education, basic needs, hygiene, and welfare, driven by a long-standing passion to support the less privileged.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-xl overflow-hidden mb-16">
          <img src={aboutImg} alt="Community outreach" className="w-full h-[400px] object-cover" />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-lg font-medium text-foreground mb-4">Founded with a heart for service and a vision for change</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            FissieE-J Helping Hands Foundation was born from a deep commitment to addressing the pressing needs of Nigeria's most vulnerable communities. Founded by passionate individuals who witnessed firsthand the challenges faced by women, widows, mothers, and children in accessing basic hygiene and sanitation resources.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our journey began with a simple belief: that every person deserves access to clean water, proper sanitation, and the knowledge to maintain good hygiene. What started as small community initiatives has grown into a comprehensive foundation that serves multiple states across Nigeria.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, we continue to expand our reach and impact, working hand-in-hand with local communities, volunteers, and partners to create sustainable change that transforms lives and builds stronger, healthier communities for generations to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Mission</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Empowering underprivileged communities
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To improve the lives of underprivileged communities by providing hygiene and sanitation awareness, supporting women, widows, mothers, and children through sustainable programs that create lasting impact.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Vision</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Dignity, health, and hope for all
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A world where every family has access to basic hygiene, sanitation, and the support they need to live with dignity, health, and hope for a better future.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
        <p className="text-muted-foreground mb-12">The principles that guide everything we do</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((v) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="font-bold text-foreground text-lg mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Impact */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Impact</p>
            <h2 className="text-3xl font-bold text-foreground mb-6">Making a difference across Nigeria</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We've impacted over 1,000 lives through hygiene awareness campaigns in IDP camps, rural areas, and government schools, plus food and essential supplies for orphanages.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <ImpactCounter end={1000} suffix="+" label="Lives Impacted" />
              <ImpactCounter end={2} suffix="+" label="Years Active" />
              <ImpactCounter end={10} suffix="+" label="Communities" />
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={gallery7} alt="Community support" className="w-full h-80 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Our Leadership Team</h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          Meet the dedicated individuals driving our mission forward
        </p>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((t) => (
            <div key={t.name} className="text-center">
              <img src={t.img} alt={t.name} className="w-full h-72 object-cover rounded-xl mb-4" />
              <h4 className="font-bold text-foreground text-lg">{t.name}</h4>
              <p className="text-sm text-gold font-medium mb-2">{t.role}</p>
              <p className="text-sm text-muted-foreground">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
  </div>
);

export default AboutPage;
