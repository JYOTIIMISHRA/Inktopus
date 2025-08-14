import { Link } from "react-router";
import { MessageCircle, Mail, ArrowRight, Zap, Users, Award, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3E2C5C] to-[#FF6F61] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                  You've got{" "}
                  <span className="text-[#D4AF37]">2 hands</span>
                  <br />
                  I've got{" "}
                  <span className="text-[#D4AF37]">8</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                  Your creative powerhouse with 8 hands. We deliver branding, development, marketing, and business support with unmatched speed and precision.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919348489391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#3E2C5C] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
                >
                  <MessageCircle size={20} />
                  <span>Request Service on WhatsApp</span>
                </a>
                <a
                  href="mailto:hello@inktopus.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#3E2C5C] transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
                >
                  <Mail size={20} />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="floating opacity-80">
                <div className="flex justify-center lg:justify-end">
                <div className="floating opacity-80">
                <img 
                  src="src/react-app/Inktopus.png" 
                  alt="Octopus" 
                  className="w-full max-w-sm object-contain inline-block" 
                />
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold gradient-text">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we handle every aspect of your creative and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Branding",
                description: "Complete brand identity and visual design systems",
                icon: "🎨",
                color: "from-[#3E2C5C] to-[#FF6F61]"
              },
              {
                title: "Development",
                description: "Modern websites and applications that perform",
                icon: "💻",
                color: "from-[#FF6F61] to-[#D4AF37]"
              },
              {
                title: "Marketing",
                description: "Strategic campaigns that drive results",
                icon: "📈",
                color: "from-[#D4AF37] to-[#3E2C5C]"
              },
              {
                title: "Business Support",
                description: "Operations and growth strategy consulting",
                icon: "🚀",
                color: "from-[#3E2C5C] to-[#FF6F61]"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#FAF7F2] rounded-2xl p-8 text-center hover-lift group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-[#3E2C5C]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className={`h-1 w-16 mx-auto bg-gradient-to-r ${service.color} rounded-full`}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="gradient-bg text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose INKTOPUS */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold gradient-text">
              Why Choose INKTOPUS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Speed, creativity, and precision in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-[#FF6F61]" size={32} />,
                title: "Lightning Fast",
                description: "With 8 hands working simultaneously, we deliver projects in record time"
              },
              {
                icon: <Award className="text-[#D4AF37]" size={32} />,
                title: "Premium Quality",
                description: "Every project receives our signature luxury treatment and attention to detail"
              },
              {
                icon: <Users className="text-[#3E2C5C]" size={32} />,
                title: "Personal Touch",
                description: "Direct communication and personalized service for every client"
              },
              {
                icon: <Clock className="text-[#FF6F61]" size={32} />,
                title: "Always Available",
                description: "Round-the-clock support via WhatsApp and email for urgent needs"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#3E2C5C]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3E2C5C] to-[#FF6F61] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90">
              Let's bring your vision to life with the power of 8 hands
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#3E2C5C] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
              >
                <MessageCircle size={20} />
                <span>Start a Project</span>
              </a>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#3E2C5C] transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
              >
                <span>View Our Work</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
