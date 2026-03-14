import { Link } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ image, title, description, link = "#" }: ProjectCardProps) => (
  <div className="relative rounded-xl overflow-hidden group">
    <img src={image} alt={title} className="w-full h-80 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-lg font-bold text-primary-foreground mb-1">{title}</h3>
      <p className="text-sm text-primary-foreground/80 mb-3 line-clamp-2">{description}</p>
      <Link
        to={link}
        className="inline-block bg-background text-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
      >
        Learn more
      </Link>
    </div>
  </div>
);

export default ProjectCard;
