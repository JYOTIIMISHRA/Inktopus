import { MessageCircle, Zap, Users, Award, Clock, Heart, Target, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Zap className="text-[#FF6F61]" size={32} />,
      title: "Speed",
      description: "With 8 hands working simultaneously, we deliver results faster than traditional agencies"
    },
    {
      icon: <Heart className="text-[#D4AF37]" size={32} />,
      title: "Creativity",
      description: "Every project is infused with fresh ideas and innovative solutions that stand out"
    },
    {
      icon: <Target className="text-[#3E2C5C]" size={32} />,
      title: "Precision",
      description: "Meticulous attention to detail ensures every element is perfectly crafted"
    }
  ];

  const team = [
    {
      role: "Creative Director",
      description: "Leading brand strategy and visual design with an eye for luxury aesthetics",
      icon: "🎨",
      color: "from-[#3E2C5C] to-[#FF6F61]"
    },
    {
      role: "Technical Lead",
      description: "Building robust, scalable solutions that perform beautifully across all platforms",
      icon: "💻",
      color: "from-[#FF6F61] to-[#D4AF37]"
    },
    {
      role: "Marketing Strategist",
      description: "Crafting campaigns that connect with audiences and drive meaningful engagement",
      icon: "📈",
      color: "from-[#D4AF37] to-[#3E2C5C]"
    },
    {
      role: "Business Consultant",
      description: "Optimizing operations and scaling businesses for sustainable growth",
      icon: "🚀",
      color: "from-[#3E2C5C] to-[#FF6F61]"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "8", label: "Hands Working" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3E2C5C] to-[#FF6F61] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-serif font-bold">
                Meet INKTOPUS
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We're not just another creative agency. We're your dedicated creative powerhouse with 8 hands working in perfect harmony to bring your vision to life.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="text-8xl floating opacity-80">
                🐙
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold gradient-text">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Born from the idea that creativity shouldn't be limited by traditional constraints, INKTOPUS emerged as a revolutionary approach to creative services. Just like our namesake octopus, we adapted to use all our capabilities simultaneously.
                </p>
                <p>
                  While you have 2 hands to manage your business, we bring 8 hands worth of expertise, working in perfect coordination across branding, development, marketing, and business strategy. This isn't just a tagline—it's our fundamental approach to every project.
                </p>
                <p>
                  Our mission is simple: deliver exceptional creative and business solutions with unmatched speed, creativity, and precision. We believe that great work shouldn't take forever, and that's why our 8-handed approach allows us to accomplish in days what others do in weeks.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#3E2C5C] to-[#FF6F61] rounded-3xl p-8 text-white text-center">
                <div className="text-6xl mb-6">🐙</div>
                <h3 className="text-2xl font-serif font-bold mb-4">
                  The INKTOPUS Advantage
                </h3>
                <p className="text-white/90">
                  8 specialized hands working as one cohesive creative force
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold gradient-text">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every project and client relationship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover-lift"
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#3E2C5C] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold gradient-text">
              Our 8 Hands at Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each pair of hands specializes in different aspects of your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#FAF7F2] rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{member.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold text-[#3E2C5C] mb-3">
                      {member.role}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {member.description}
                    </p>
                    <div className={`h-1 w-16 bg-gradient-to-r ${member.color} rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-[#3E2C5C] to-[#FF6F61] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold">
              INKTOPUS by the Numbers
            </h2>
            <p className="text-xl text-white/90">
              The results speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2">
                  {stat.number}
                </div>
                <p className="text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold gradient-text">
              Why Clients Choose INKTOPUS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The advantages of working with a creative powerhouse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="text-[#FF6F61]" size={32} />,
                title: "Faster Delivery",
                description: "8 hands mean we can tackle multiple aspects of your project simultaneously"
              },
              {
                icon: <Users className="text-[#D4AF37]" size={32} />,
                title: "Dedicated Team",
                description: "You get a full creative team working exclusively on your project"
              },
              {
                icon: <Award className="text-[#3E2C5C]" size={32} />,
                title: "Premium Quality",
                description: "Every project receives our signature luxury treatment and attention to detail"
              },
              {
                icon: <Lightbulb className="text-[#FF6F61]" size={32} />,
                title: "Fresh Perspective",
                description: "Innovative solutions that set your brand apart from the competition"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#3E2C5C]">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
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
              Ready to Experience the 8-Hand Advantage?
            </h2>
            <p className="text-xl text-white/90">
              Let's chat about your project and see how INKTOPUS can bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#3E2C5C] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
              >
                <MessageCircle size={20} />
                <span>Chat with INKTOPUS</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
