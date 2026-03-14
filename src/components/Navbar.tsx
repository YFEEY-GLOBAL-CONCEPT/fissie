import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Who We Are", to: "/about" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="FissieE-J Helping Hands Foundation" className="h-10 w-auto" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            FissieE-J Helping Hands <span className="text-gold">Foundation</span>
          </span>
        </Link>

        {/* Desktop - centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/donate"
            className="bg-gold text-foreground px-5 py-2 rounded-md text-sm font-medium hover:bg-gold-hover transition-colors"
          >
            Donate
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-3 text-sm font-medium text-foreground border-b border-border"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="mt-3 block text-center bg-gold text-foreground px-5 py-2 rounded-md text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
