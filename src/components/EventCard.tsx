import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  day: string;
  month: string;
  title: string;
  link?: string;
}

const EventCard = ({ day, month, title, link = "#" }: EventCardProps) => (
  <Link
    to={link}
    className="flex items-center gap-6 bg-muted rounded-lg p-6 hover:shadow-md transition-shadow"
  >
    <div className="text-center">
      <span className="text-3xl font-bold text-gold block">{day}</span>
      <span className="text-xs font-bold uppercase text-muted-foreground">{month}</span>
    </div>
    <div className="flex-1">
      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
        Next Events <span className="inline-block w-6 h-0.5 bg-muted-foreground align-middle ml-2" />
      </p>
      <p className="font-bold text-foreground">{title}</p>
    </div>
    <div className="bg-primary text-primary-foreground p-2 rounded-full">
      <ArrowRight size={18} />
    </div>
  </Link>
);

export default EventCard;
