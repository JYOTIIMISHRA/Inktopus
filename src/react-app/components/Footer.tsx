import { Link } from "react-router";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3E2C5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-serif font-bold text-[#D4AF37]">
                INKTOPUS
              </div>
              <div className="text-2xl">🐙</div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your creative powerhouse with 8 hands. We bring speed, creativity, and precision to every project.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-[#D4AF37]">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-[#FF6F61] transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="block text-white/80 hover:text-[#FF6F61] transition-colors text-sm">
                Services
              </Link>
              <Link to="/portfolio" className="block text-white/80 hover:text-[#FF6F61] transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-[#FF6F61] transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-[#FF6F61] transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-[#D4AF37]">Services</h3>
            <div className="space-y-2">
              <div className="text-white/80 text-sm">Branding & Identity</div>
              <div className="text-white/80 text-sm">Web Development</div>
              <div className="text-white/80 text-sm">Digital Marketing</div>
              <div className="text-white/80 text-sm">Business Support</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-[#D4AF37]">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@inktopus.com"
                className="flex items-center space-x-2 text-white/80 hover:text-[#FF6F61] transition-colors text-sm"
              >
                <Mail size={16} />
                <span>hello@inktopus.com</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-[#FF6F61] transition-colors text-sm"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Chat</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-white/80 hover:text-[#FF6F61] transition-colors text-sm"
              >
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <MapPin size={16} />
                <span>Creative Studio</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 INKTOPUS. All rights reserved. Made with 8 hands and lots of ink.
          </p>
        </div>
      </div>
    </footer>
  );
}
