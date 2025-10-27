import { Link } from "react-router-dom";
import pibdLogo from "@/assets/pibd-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={pibdLogo} alt="PiBD Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">PiBD</span>
            </Link>
            <p className="text-background/70 max-w-md">
              Pi Brand Identity is a Khulna-based technology firm dedicated to building digital solutions that empower businesses across Bangladesh and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-background/70 hover:text-background transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <Link to="/verify" className="text-background/70 hover:text-background transition-colors">
                  Verify Certificate
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-background/70">
              <li>01, Central Road</li>
              <li>West Tutpara, Khulna</li>
              <li>Bangladesh</li>
              <li className="pt-2">info@piebd.org</li>
              <li>+880 1723 479161</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/70 text-sm">
            © {new Date().getFullYear()} PiBD - Pi Brand Identity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
