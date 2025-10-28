import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import pibdLogo from "@/assets/pibd-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Verify Certificate", href: "/verify" },
    { name: "Contact", href: "#contact" },
  ];

  const shouldShowScrolledStyle = !isHomePage || scrolled;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        shouldShowScrolledStyle 
          ? 'bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <img src={pibdLogo} alt="PiBD Logo" className="h-12 w-12 relative z-10" />
            </div>
            <span className={`text-2xl font-bold bg-clip-text text-transparent transition-all ${
              shouldShowScrolledStyle 
                ? 'bg-gradient-primary' 
                : 'bg-gradient-to-r from-white to-purple-200'
            }`}>
              PiBD
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('#');
              const isVerifyPage = link.href === '/verify';
              
              if (isVerifyPage) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative text-sm font-medium transition-colors group ${
                      shouldShowScrolledStyle 
                        ? 'text-foreground/70 hover:text-primary' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      shouldShowScrolledStyle ? 'bg-gradient-primary' : 'bg-white'
                    }`} />
                  </Link>
                );
              }
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors group ${
                    shouldShowScrolledStyle 
                      ? 'text-foreground/70 hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    shouldShowScrolledStyle ? 'bg-gradient-primary' : 'bg-white'
                  }`} />
                </a>
              );
            })}
            <Button className="bg-white/95 hover:bg-white text-[#6B2D8F] font-semibold transition-all hover:shadow-purple group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 animate-fade-in border-t border-border/50 mt-2 bg-background/95 backdrop-blur-xl rounded-b-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isVerifyPage = link.href === '/verify';
                
                if (isVerifyPage) {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                }
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
              <Button className="bg-white/95 hover:bg-white text-[#6B2D8F] font-semibold transition-opacity w-full group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
