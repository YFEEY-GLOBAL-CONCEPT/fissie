import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import foundationLogo from "@/assets/foundation-logo.png";

const navLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/what-we-do" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/75 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-[#172554] flex items-center gap-2"
        >
          <img
            src={foundationLogo}
            alt="Logo"
            className="h-8 md:h-10 w-auto"
          />
          <span className="inline text-lg md:text-xl">FissieE-J</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors hover:text-[#172554] ${
                location.pathname === link.to
                  ? "text-[#172554]"
                  : "text-gray-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/donate"
            className="bg-gold text-[#172554] px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-gold-hover transition-all shadow-sm"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
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
            className="mt-3 block text-center bg-primary text-primary-foreground px-6 py-2 text-sm font-medium"
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
