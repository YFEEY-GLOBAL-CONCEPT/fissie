import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";
import aboutGroup from "@/assets/about-group.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import ImpactCounter from "@/components/ImpactCounter";
import CTABanner from "@/components/CTABanner";
import EventCard from "@/components/EventCard";

const team = [
  { name: "Fissie E-J", role: "Founder / CEO", img: team1 },
  { name: "Francis Weber", role: "Operations Director", img: team2 },
  { name: "Kyla Obrien", role: "Program Manager", img: team3 },
  { name: "Adrian Dixon", role: "Community Lead", img: team4 },
];

const awards = [
  { year: "2021", title: "Best NGO Award", location: "Bayelsa, Nigeria" },
  { year: "2018", title: "Global Award", location: "New York, USA" },
  { year: "2014", title: "CSR Award", location: "Lagos, Nigeria" },
  { year: "2010", title: "NGO of the Year", location: "Abuja, Nigeria" },
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
              FissieE-J Helping Hands Foundation is committed to providing inclusive care for children with special needs. We work across communities in Nigeria to ensure that every child has access to education, healthcare, and the basic amenities they deserve.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Video/Image section */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-xl overflow-hidden mb-16">
          <img src={aboutTeam} alt="Our team" className="w-full h-[400px] object-cover" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Mission</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              We make sure to provide inclusive care for children with special needs
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to create an environment where every child, regardless of their abilities, can access quality education, healthcare, and emotional support. We believe in building strong communities that uplift every member.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Vision</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Provide more inclusive care to children around the world
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We envision a world where no child is left behind. Our vision extends beyond borders, aiming to replicate our model of inclusive care in communities across Africa and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Awards */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-12">Awards & Recognitions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {awards.map((a) => (
            <motion.div
              key={a.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gold text-2xl">🏆</span>
              </div>
              <p className="font-bold text-foreground">{a.year}</p>
              <p className="text-sm text-foreground">{a.title}</p>
              <p className="text-xs text-muted-foreground">{a.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Journey */}
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Journey</p>
            <h2 className="text-3xl font-bold text-foreground mb-6">How we raised 34M</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Through the generous support of donors, volunteers, and corporate partners, we have been able to raise over ₦34 million to support our programs and initiatives.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <ImpactCounter end={34} suffix="M+" label="Donations Received" />
              <ImpactCounter end={400} suffix="+" label="Volunteers" />
              <ImpactCounter end={20} suffix="+" label="Supporters" />
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={aboutGroup} alt="Our journey" className="w-full h-80 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Meet our team</h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          Our dedicated team of professionals and volunteers work tirelessly to make a difference in the lives of children.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((t) => (
            <div key={t.name} className="text-center">
              <img src={t.img} alt={t.name} className="w-full h-64 object-cover rounded-xl mb-4" />
              <h4 className="font-bold text-foreground">{t.name}</h4>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />

    {/* Events */}
    <section className="py-16">
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

export default AboutPage;
