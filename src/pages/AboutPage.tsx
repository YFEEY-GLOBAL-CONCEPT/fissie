import { motion } from "framer-motion";
import aboutTeam from "@/assets/team-img.png";
import aboutGroup from "@/assets/group-img.png";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import heroImg from "@/assets/hero-bg.jpg";
import ImpactCounter from "@/components/ImpactCounter";
import CTABanner from "@/components/CTABanner";
import EventCard from "@/components/EventCard";
import founderImg from "@/assets/founder.png";
import coFounderImg from "@/assets/co-founder.png";
const team = [
  {
    name: "Olufisola Junaid",
    role: "Founder & Executive Director",
    img: founderImg,
    bio: "Olatofowomo Olufisola Junaid, popularly known as Fissie-J, is a dedicated humanitarian and Founder of the FissieE-J Helping Hands Foundation, bringing her passion, experience, and commitment to community development into every decision she makes. Known for her hardworking nature and exceptional leadership qualities, she has built a reputation as someone who is deeply invested in making a positive difference in the lives of others. Her calm yet strong presence on the board reflects her integrity, empathy, and unwavering focus on impact. As a well-traveled philanthropist, Olatofowomo Olufisola Junaid has engaged with diverse cultures and communities, gaining valuable insight into global social issues. Her exposure to different environments strengthens her ability to design meaningful interventions and support initiatives that uplift vulnerable groups. She uses her international experience, compassion, and professional excellence to guide the organization’s mission and ensure its projects bring real, lasting change.",
  },
  {
    name: "Mohammed Ripiada Faridah",
    role: "Head of Operations",
    img: coFounderImg,
    bio: "Ripiada Faridah is the Head of Operations at FissieE-J Helping Hands Foundation, where she has provided strategic and operational leadership for over three years. She ensures the Foundation’s programs are delivered efficiently, ethically, and with measurable impact, strengthening service delivery to vulnerable and underserved communities. During her tenure, Ripiada has successfully led and coordinated multiple community outreaches, overseeing planning, execution, and stakeholder engagement with a strong emphasis on accountability and results. Her background in Governance, Risk, and Compliance (GRC) has been instrumental in establishing transparent systems, managing organizational risk, and reinforcing donor confidence through sound governance and sustainable operational practices. Beyond the Foundation, Ripiada is the Founder of AfricaFirstDaughter, an initiative focused on digital safety education for children, and an experienced human rights advocate supporting marginalized individuals with limited access to justice. Driven by a deep commitment to child education and social equity, she brings integrity, structure, and compassion to her leadership—positioning organizations she serves for excellence, credibility, and lasting social impact.",
  },
];

const coreValues = [
  {
    title: "Compassion",
    desc: "We approach every situation with empathy and understanding, treating each person with dignity and respect.",
  },
  {
    title: "Community",
    desc: "We believe in the power of community collaboration and work together to create lasting positive change.",
  },
  {
    title: "Excellence",
    desc: "We strive for the highest standards in all our programs and maintain transparency in our operations.",
  },
  {
    title: "Impact",
    desc: "We focus on sustainable solutions that create measurable, long-term improvements in communities.",
  },
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
    <section className="bg-[#172554] py-24 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
              Know About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We are a non-governmental organization
            </h1>
          </div>
          <div>
            <p className="leading-relaxed">
              FissieE-J Helping Hands Foundation is committed to restoring
              dignity and hope for single mothers, widows, and orphans. We work
              across communities in Nigeria to advance hygiene awareness,
              provide essential welfare support, and empower the vulnerable.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Video/Image section */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-xl overflow-hidden mb-16">
          <img
            src={heroImg}
            alt="Our team"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Our Mission
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              To restore dignity and hope for single mothers, widows, and
              orphans through hygiene awareness, education, and welfare support
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to empower underserved communities through hygiene
              and sanitation campaigns, educational support, and essential
              welfare programs that create lasting positive change.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Our Vision
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              A Nigeria where every community has access to hygiene, education,
              and essential welfare
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We envision a society where no one is left behind—where single
              mothers, widows, and orphans have the support they need to thrive
              and live with dignity.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Journey */}
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Our Journey
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Through the generous support of donors, volunteers, and corporate
              partners, we have been able to significantly scale our programs
              and initiatives to reach those who need it most.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <ImpactCounter end={1000} suffix="+" label="Lives Impacted" />
              <ImpactCounter end={50} suffix="+" label="Schools" />
              <ImpactCounter end={8} label="IDP Camps" />
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src={aboutGroup}
              alt="Our journey"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <p className="section-label mb-4 mx-auto inline-block">
            Our Core Values
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
            The principles that guide everything we do
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gold/30 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 relative">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse text-right" : "text-left"}`}
              >
                <div className="flex-1 w-full md:w-1/2">
                  <div
                    className={`p-8 rounded-3xl border border-border bg-white shadow-xl hover:border-gold transition-colors group relative ${i % 2 === 1 ? "md:mr-4" : "md:ml-4"}`}
                  >
                    <div
                      className={`absolute top-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-sm hidden md:block -translate-y-1/2 ${i % 2 === 1 ? "-right-10" : "-left-10"}`}
                    />
                    <h3 className="text-2xl font-bold text-[#172554] mb-3 group-hover:text-gold transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg italic">
                      "{value.desc}"
                    </p>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <p className="section-label mb-4 mx-auto inline-block">
            Our Leadership Team
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#172554] mt-4">
            Meet the dedicated individuals driving our mission forward
          </h2>
        </div>
        <div className="grid gap-24 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center bg-white p-8 lg:p-12 rounded-md shadow-md border border-gold/10 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none" />
              <div className="w-full lg:w-2/5 shrink-0">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/20">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 lg:hidden" />
                </div>
              </div>
              <div className="w-full lg:w-3/5 text-left">
                <div className="mb-8 p-4 border-l-4 border-gold bg-gold/5 rounded-r-xl">
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#172554] mb-2 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-gold font-bold text-xl uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg lg:text-xl font-medium px-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Events */}
    <section className="py-16">
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

export default AboutPage;
