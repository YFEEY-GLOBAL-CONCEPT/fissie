import EventCard from "@/components/EventCard";
import CTABanner from "@/components/CTABanner";

const EventPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#172554] py-24 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
                Our Events
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stay updated with our latest activities
              </h1>
            </div>
            <div>
              <p className="leading-relaxed opacity-90">
                Join us in our journey of making a difference. From community
                outreaches to educational seminars, stay informed about how we
                are impacting lives and how you can get involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-20 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-16">
            Join us at our upcoming events or explore the impact of our past
            initiatives. Your participation makes a difference.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard day="15" month="AUG" title="Annual Charity Gala" />
            <EventCard day="22" month="SEP" title="Community Outreach" />
            <EventCard day="10" month="OCT" title="Fundraising Dinner" />
            <EventCard day="05" month="NOV" title="Widows Support Program" />
            <EventCard day="18" month="DEC" title="End of Year Festivities" />
            <EventCard day="25" month="JAN" title="New Year Education Drive" />
          </div>
        </div>
      </div>
      <CTABanner />
    </div>
  );
};

export default EventPage;
