import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <p className="text-xl font-bold">
            FissieE-J<span className="italic text-gold">i</span>
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Home</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100">About us</Link></li>
            <li><Link to="/about" className="hover:opacity-100">Team</Link></li>
            <li><Link to="/what-we-do" className="hover:opacity-100">What we do</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">More</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/what-we-do" className="hover:opacity-100">Projects</Link></li>
            <li><Link to="/what-we-do" className="hover:opacity-100">Events</Link></li>
            <li><Link to="/donate" className="hover:opacity-100">Donate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#" className="hover:opacity-100">Facebook</a></li>
            <li><a href="#" className="hover:opacity-100">Instagram</a></li>
            <li><a href="#" className="hover:opacity-100">Twitter</a></li>
            <li><a href="#" className="hover:opacity-100">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-4">Subscribe to get latest updates</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none"
            />
            <button className="px-4 py-2 bg-background text-foreground rounded-r-md text-sm font-medium hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
