import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="FissieE-J" className="h-10 w-auto" />
            <p className="text-lg font-bold">
              FissieE-J Helping Hands <span className="text-gold">Foundation</span>
            </p>
          </div>
          <p className="text-sm opacity-80">Empowering communities through compassion, care, and sustainable development.</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100">Who We Are</Link></li>
            <li><Link to="/what-we-do" className="hover:opacity-100">What We Do</Link></li>
            <li><Link to="/gallery" className="hover:opacity-100">Gallery</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">More</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/donate" className="hover:opacity-100">Donate</Link></li>
            <li><Link to="/admin" className="hover:opacity-100">Admin</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="https://www.instagram.com/fissieej_helpinghands" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Instagram</a></li>
            <li><a href="tel:+2347036869240" className="hover:opacity-100">+234 703 686 9240</a></li>
            <li><a href="tel:+2348023165665" className="hover:opacity-100">+234 802 316 5665</a></li>
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
          <div className="mt-4 text-sm opacity-80">
            <p>Bank: GT Bank</p>
            <p>Account: 0854640729</p>
            <p>Name: FISSIEE-J HELPING HANDS FOUNDATION</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
