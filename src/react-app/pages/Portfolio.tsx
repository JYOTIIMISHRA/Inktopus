import { ExternalLink, MessageCircle, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Luxe Beauty Brand",
      category: "Branding",
      description: "Complete brand identity for premium skincare line",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
      tags: ["Logo Design", "Brand Guidelines", "Packaging"],
      gradient: "from-[#3E2C5C] to-[#FF6F61]"
    },
    {
      title: "TechFlow E-commerce",
      category: "Development",
      description: "Modern e-commerce platform with custom features",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Web Development", "E-commerce", "SEO"],
      gradient: "from-[#FF6F61] to-[#D4AF37]"
    },
    {
      title: "GreenLeaf Campaign",
      category: "Marketing",
      description: "Sustainable lifestyle brand marketing campaign",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      tags: ["Social Media", "Content Marketing", "PPC"],
      gradient: "from-[#D4AF37] to-[#3E2C5C]"
    },
    {
      title: "StartupX Growth",
      category: "Business Support",
      description: "Strategic consulting for rapid business expansion",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tags: ["Strategy", "Operations", "Market Research"],
      gradient: "from-[#3E2C5C] to-[#FF6F61]"
    },
    {
      title: "ArtisanCraft Brand",
      category: "Branding",
      description: "Handcrafted goods brand with artisanal feel",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      tags: ["Logo Design", "Print Design", "Brand Strategy"],
      gradient: "from-[#FF6F61] to-[#D4AF37]"
    },
    {
      title: "FinanceFlow App",
      category: "Development",
      description: "Mobile app for personal finance management",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Mobile App", "UI/UX", "Backend"],
      gradient: "from-[#D4AF37] to-[#3E2C5C]"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Luxe Beauty",
      text: "INKTOPUS transformed our brand completely. The speed and quality of their work is unmatched.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      company: "TechFlow",
      text: "Working with INKTOPUS felt like having an entire creative agency dedicated to our project.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      company: "GreenLeaf",
      text: "Their 8-handed approach really shows. We got results faster than we ever imagined possible.",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3E2C5C] to-[#FF6F61] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-serif font-bold">
              Our Work
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Showcasing the power of 8 hands through successful projects across branding, development, marketing, and business support
            </p>
            <div className="text-6xl">🐙</div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden hover-lift group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}>
                    <button className="bg-white text-[#3E2C5C] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-[#3E2C5C] mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-[#FAF7F2] text-[#3E2C5C] px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold gradient-text">
              Before & After
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformation power of our 8-handed approach
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-serif font-semibold text-[#3E2C5C] mb-4">
                  Before: Outdated Brand
                </h3>
                <div className="bg-gray-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-4">📰</div>
                    <p>Old-fashioned design<br />Limited appeal<br />Poor user experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-serif font-semibold text-[#3E2C5C] mb-4">
                  After: Modern Transformation
                </h3>
                <div className="bg-gradient-to-br from-[#3E2C5C] to-[#FF6F61] rounded-2xl p-8 h-64 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-4xl mb-4">✨</div>
                    <p>Modern luxury design<br />Premium brand appeal<br />Exceptional user experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold gradient-text">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our clients say about working with INKTOPUS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover-lift"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#D4AF37] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-semibold text-[#3E2C5C]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
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
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-white/90">
              Let's discuss your project and see how our 8 hands can bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#3E2C5C] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
              >
                <MessageCircle size={20} />
                <span>Start Your Project</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#3E2C5C] transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
              >
                <span>Get in Touch</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
