import { Link } from "react-router-dom";
import { toast } from "sonner";
import foundationLogo from "@/assets/foundation-logo.png";

const Footer = () => {
  const handleSocialClick = (platform: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info(`Our ${platform} page is coming soon! Follow us for updates.`);
  };

  return (
    <footer className="bg-[#172554] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={foundationLogo}
                alt="Logo"
                className="h-8 md:h-10 w-auto"
              />
              <p className="text-xl font-bold leading-tight">
                FissieE-J Helping Hands <br className="hidden md:block" />{" "}
                Foundation
              </p>
            </div>
            <p className="opacity-60 text-sm max-w-xs mb-6">
              Restoring dignity, inspiring hope for single mothers, widows, and
              orphans across Nigeria.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Home</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/about" className="hover:opacity-100">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/about#team" className="hover:opacity-100">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:opacity-100">
                  What we do
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">More</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/what-we-do" className="hover:opacity-100">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:opacity-100">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:opacity-100">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/terms-and-privacy" className="hover:opacity-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-privacy" className="hover:opacity-100">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/auth" className="hover:opacity-100">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="#"
                  onClick={handleSocialClick("Facebook")}
                  className="hover:opacity-100"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleSocialClick("Instagram")}
                  className="hover:opacity-100"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleSocialClick("Twitter")}
                  className="hover:opacity-100"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleSocialClick("LinkedIn")}
                  className="hover:opacity-100"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>
            © {new Date().getFullYear()} FissieE-J Helping Hands Foundation. All
            rights reserved.
          </p>
          <p>
            Build by{" "}
            <a
              href="https://Yeefy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
            >
              Yeefy.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
