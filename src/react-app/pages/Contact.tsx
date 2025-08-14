import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const services = [
    "Branding & Identity",
    "Web Development",
    "E-commerce Store",
    "Mobile App",
    "Digital Marketing",
    "Social Media Management",
    "Business Strategy",
    "Operations Consulting",
    "Other"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3E2C5C] to-[#FF6F61] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-serif font-bold">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to unleash the power of 8 hands on your project? Let's discuss how we can bring your vision to life.
            </p>
            <div className="text-6xl">🐙</div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center hover-lift group"
            >
              <div className="bg-gradient-to-r from-[#3E2C5C] to-[#FF6F61] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#3E2C5C] mb-3">
                WhatsApp Chat
              </h3>
              <p className="text-gray-600 mb-4">
                Get instant responses and quick project discussions
              </p>
              <div className="text-[#FF6F61] font-semibold">
                Start Chat →
              </div>
            </a>

            <a
              href="mailto:hello@inktopus.com"
              className="bg-white rounded-2xl p-8 text-center hover-lift group"
            >
              <div className="bg-gradient-to-r from-[#FF6F61] to-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#3E2C5C] mb-3">
                Email Us
              </h3>
              <p className="text-gray-600 mb-4">
                Send detailed project requirements and get a comprehensive proposal
              </p>
              <div className="text-[#FF6F61] font-semibold">
                Send Email →
              </div>
            </a>

            <a
              href="tel:+1234567890"
              className="bg-white rounded-2xl p-8 text-center hover-lift group"
            >
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#3E2C5C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#3E2C5C] mb-3">
                Call Us
              </h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team for urgent projects
              </p>
              <div className="text-[#FF6F61] font-semibold">
                +1 (234) 567-890
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold gradient-text">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-green-800">Message Sent!</h4>
                    <p className="text-green-600">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3E2C5C] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3E2C5C] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#3E2C5C] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#3E2C5C] mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#3E2C5C] mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent transition-colors"
                    placeholder="Tell us about your project, goals, timeline, and budget..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold gradient-text">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-600">
                  Multiple ways to reach our creative powerhouse
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FAF7F2] p-3 rounded-lg">
                    <Mail className="text-[#3E2C5C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3E2C5C] mb-1">Email</h3>
                    <p className="text-gray-600">hello@inktopus.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FAF7F2] p-3 rounded-lg">
                    <MessageCircle className="text-[#3E2C5C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3E2C5C] mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+1 (234) 567-890</p>
                    <p className="text-sm text-gray-500">Instant messaging for quick questions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FAF7F2] p-3 rounded-lg">
                    <Phone className="text-[#3E2C5C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3E2C5C] mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (234) 567-890</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FAF7F2] p-3 rounded-lg">
                    <MapPin className="text-[#3E2C5C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3E2C5C] mb-1">Studio</h3>
                    <p className="text-gray-600">Creative Studio</p>
                    <p className="text-sm text-gray-500">Remote-first with global reach</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#3E2C5C] to-[#FF6F61] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-white/90 mb-6">
                  For urgent projects or quick questions, reach out directly via WhatsApp
                </p>
                <a
                  href="https://wa.me/1234567890?text=Hi! I need urgent help with my project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#3E2C5C] px-6 py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about working with INKTOPUS
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How does the 8-hand approach work?",
                answer: "Our team works collaboratively across all aspects of your project simultaneously. While traditional agencies work sequentially, we tackle branding, development, marketing, and strategy in parallel, dramatically reducing project timelines."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Thanks to our 8-hand approach, we complete most projects 50-75% faster than traditional agencies. A typical website takes 1-2 weeks, while comprehensive branding projects take 2-3 weeks."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprises. Our 8-hand approach makes premium creative services accessible to smaller budgets through increased efficiency."
              },
              {
                question: "What's included in your support?",
                answer: "All projects include 30 days of free revisions and support. We're also available 24/7 via WhatsApp for urgent questions or issues that arise after project completion."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#3E2C5C] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
