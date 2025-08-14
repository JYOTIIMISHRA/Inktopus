import { MessageCircle, Mail, Palette, Code, TrendingUp, Building2, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      category: "Branding",
      icon: <Palette size={48} className="text-[#FF6F61]" />,
      gradient: "from-[#3E2C5C] to-[#FF6F61]",
      services: [
        {
          name: "Logo Design",
          description: "Memorable logos that capture your brand essence"
        },
        {
          name: "Brand Identity",
          description: "Complete visual identity systems and guidelines"
        },
        {
          name: "Brand Strategy",
          description: "Positioning and messaging that resonates"
        },
        {
          name: "Print Design",
          description: "Business cards, brochures, and marketing materials"
        },
        {
          name: "Packaging Design",
          description: "Product packaging that stands out on shelves"
        }
      ]
    },
    {
      category: "Development",
      icon: <Code size={48} className="text-[#D4AF37]" />,
      gradient: "from-[#FF6F61] to-[#D4AF37]",
      services: [
        {
          name: "Website Development",
          description: "Modern, responsive websites that convert"
        },
        {
          name: "E-commerce Stores",
          description: "Online stores optimized for sales"
        },
        {
          name: "Web Applications",
          description: "Custom web apps for your business needs"
        },
        {
          name: "Mobile Apps",
          description: "iOS and Android applications"
        },
        {
          name: "SEO Optimization",
          description: "Technical SEO and performance optimization"
        }
      ]
    },
    {
      category: "Marketing",
      icon: <TrendingUp size={48} className="text-[#3E2C5C]" />,
      gradient: "from-[#D4AF37] to-[#3E2C5C]",
      services: [
        {
          name: "Digital Marketing Strategy",
          description: "Comprehensive marketing plans and execution"
        },
        {
          name: "Social Media Management",
          description: "Content creation and community management"
        },
        {
          name: "Content Marketing",
          description: "Blog posts, articles, and video content"
        },
        {
          name: "Email Marketing",
          description: "Automated campaigns that nurture leads"
        },
        {
          name: "PPC Advertising",
          description: "Google Ads and social media advertising"
        }
      ]
    },
    {
      category: "Business Support",
      icon: <Building2 size={48} className="text-[#FF6F61]" />,
      gradient: "from-[#3E2C5C] to-[#FF6F61]",
      services: [
        {
          name: "Business Strategy",
          description: "Growth planning and strategic consulting"
        },
        {
          name: "Operations Optimization",
          description: "Streamline processes and improve efficiency"
        },
        {
          name: "Market Research",
          description: "Industry analysis and competitor research"
        },
        {
          name: "Financial Planning",
          description: "Budget planning and financial projections"
        },
        {
          name: "Team Building",
          description: "Hiring strategies and team development"
        }
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3E2C5C] to-[#FF6F61] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-serif font-bold">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive creative and business solutions delivered with the power of 8 hands
            </p>
            <div className="text-6xl">🐙</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-3xl p-8 hover-lift"
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-[#3E2C5C] mb-4">
                    {category.category}
                  </h2>
                  <div className={`h-1 w-20 mx-auto bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                </div>

                {/* Services List */}
                <div className="space-y-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start group">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#3E2C5C] mb-2">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {service.description}
                          </p>
                        </div>
                        <button className="ml-4 p-2 rounded-full bg-[#FAF7F2] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Request Service Button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href={`https://wa.me/1234567890?text=Hi! I'm interested in ${category.category} services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${category.gradient} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2`}
                  >
                    <MessageCircle size={20} />
                    <span>Request {category.category} Service</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold gradient-text">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient workflow designed for maximum results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We understand your needs, goals, and vision through detailed consultation"
              },
              {
                step: "02",
                title: "Strategy",
                description: "We create a comprehensive plan tailored to your specific requirements"
              },
              {
                step: "03",
                title: "Execution",
                description: "Our 8 hands get to work, delivering high-quality results efficiently"
              },
              {
                step: "04",
                title: "Delivery",
                description: "We present the final product and provide ongoing support as needed"
              }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-4xl font-serif font-bold text-[#D4AF37] mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#3E2C5C]">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90">
              Get in touch and let's discuss how we can help bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#3E2C5C] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="mailto:hello@inktopus.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#3E2C5C] transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
