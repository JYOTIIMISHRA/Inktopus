import { Link, useLocation } from "react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-lg border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-serif font-bold gradient-text">
              INKTOPUS
            </div>
            <div className="text-2xl group-hover:animate-pulse">
               <img 
                 src="src\react-app\Inktopus.png" 
                 alt="Octopus" 
                  className="w-[1em] h-[1em] object-contain inline-block"
                />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-[#3E2C5C] bg-[#D4AF37]/10"
                    : "text-[#1E1E1E] hover:text-[#3E2C5C] hover:bg-[#D4AF37]/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/919348489391"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300 flex items-center space-x-2"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#D4AF37]/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-[#3E2C5C] bg-[#D4AF37]/10"
                      : "text-[#1E1E1E] hover:text-[#3E2C5C] hover:bg-[#D4AF37]/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg text-white px-6 py-2 rounded-full font-medium mt-4 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
