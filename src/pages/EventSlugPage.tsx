import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTABanner from "@/components/CTABanner";

const EventSlugPage = () => {
  const { slug } = useParams();

  // Mock data for individual events
  const eventData: Record<string, any> = {
    "annual-charity-gala": {
      title: "Annual Charity Gala 2023",
      date: "August 15, 2023",
      location: "Lagos Event Center",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80",
      description: "Our signature annual fundraising event bringing together leaders, philanthropists, and community members to support our core mission of empowering vulnerable groups.",
      content: `
        This year's gala was special as we celebrated 10 years of consistent impact. The evening featured 
        inspiring stories from beneficiaries, a silent auction, and performances by local artists. 
        All proceeds from the night have been allocated to our rural education scholarship fund.
      `
    },
    "community-outreach": {
      title: "Community Outreach Program",
      date: "September 22, 2023",
      location: "Abuja City Hall",
      image: "https://images.unsplash.com/photo-1593113511195-2d6db79b4de5?auto=format&fit=crop&q=80",
      description: "A direct engagement program providing essential supplies and medical checkups to underserved communities.",
      content: `
        Our team visited communities in the outskirts of Abuja, providing food items, hygiene kits, and 
        primary healthcare consultations. Over 500 families were reached during this two-day intensive outreach.
      `
    }
  };

  const event = eventData[slug || ""] || eventData["annual-charity-gala"];

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/events" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold font-bold mb-8 transition-colors">
            <ArrowLeft size={18} />
            Back to Events
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gold/10 text-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    Featured Event
                  </span>
                  <button className="text-gray-400 hover:text-[#172554] transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#172554] mb-6 leading-tight">
                  {event.title}
                </h1>
                
                <div className="flex flex-wrap gap-8 py-6 border-y border-gray-100 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-50 rounded-sm text-gold">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Date</p>
                      <p className="font-bold text-[#172554]">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-50 rounded-sm text-gold">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</p>
                      <p className="font-bold text-[#172554]">{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p className="text-xl font-medium text-gray-900 leading-relaxed italic">
                  "{event.description}"
                </p>
                <div className="leading-relaxed whitespace-pre-line">
                  {event.content}
                </div>
              </div>

              <div className="pt-8">
                 <Link to="/donate">
                   <Button className="bg-[#172554] text-white px-10 py-8 rounded-sm font-bold text-xl hover:bg-blue-900 transition-all shadow-sm">
                     Support This Cause
                   </Button>
                 </Link>
              </div>
            </div>

            <div className="sticky top-40">
              <div className="rounded-sm overflow-hidden shadow-sm ring-8 ring-gray-50">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTABanner />
    </div>
  );
};

export default EventSlugPage;
