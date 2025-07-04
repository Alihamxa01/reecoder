import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Full Stack Development",
      description:
        "We use modern tools like HTML, CSS, Next.js, and adapt to client requirements to build full web solutions.",
      icon: "🌐",
    },
    {
      title: "Chatbot Development",
      description:
        "We build AI-based and rule-based chatbots integrated into websites, apps, and platforms.",
      icon: "🤖",
    },
    {
      title: "UI/UX Design",
      description:
        "We create sleek, user-friendly interface designs customized to your brand.",
      icon: "🎨",
    },
    {
      title: "AI Integrations",
      description:
        "From OpenAI to TensorFlow, we integrate advanced AI tools based on project goals.",
      icon: "🧠",
    },
    {
      title: "Frontend Development",
      description:
        "Interactive UIs using HTML, CSS, JavaScript, and frameworks like React or Vue.",
      icon: "💻",
    },
    {
      title: "Backend Development",
      description: "Robust backend solutions using Node.js, MongoDB, and APIs.",
      icon: "⚙️",
    },
    {
      title: "API Integration",
      description:
        "Seamless integration of third-party APIs and custom API development for enhanced functionality.",
      icon: "🔗",
    },
    {
      title: "AI Powered Web App",
      description:
        "Intelligent web applications powered by machine learning and AI technologies for smart user experiences.",
      icon: "🚀",
    },
    {
      title: "AI Agents",
      description:
        "Custom AI agents and autonomous systems designed to automate tasks and improve business efficiency.",
      icon: "🤖",
    },
    {
      title: "Figma Design",
      description:
        "Professional Figma design services from wireframes to high-fidelity prototypes and design systems.",
      icon: "🎯",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7a7f75c4c22b44fc80c15dfc47e89c8f%2Ff0f21f47e116463d9a39a765818d9c9d?format=webp&width=800"
                alt="reeCoder Logo"
                className="h-32 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-black hover:text-red-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-red-600 transition-colors font-medium"
              >
                About
              </Link>
              <Link to="/services" className="text-red-600 font-medium">
                Services
              </Link>
              <Link
                to="/contact"
                className="text-black hover:text-red-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-black hover:text-red-600 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-black hover:text-red-600 transition-colors font-medium"
                >
                  About
                </Link>
                <Link to="/services" className="text-red-600 font-medium">
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-black hover:text-red-600 transition-colors font-medium"
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Our <span className="text-red-600">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
              Comprehensive web development and AI solutions tailored to your
              business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-red-100 hover:border-red-200"
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our
              expert development and AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-full text-lg"
              >
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo */}
            <Link to="/">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7a7f75c4c22b44fc80c15dfc47e89c8f%2Ff0f21f47e116463d9a39a765818d9c9d?format=webp&width=800"
                alt="reeCoder Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Tagline */}
            <p className="text-gray-400 text-lg">We build what you imagine</p>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-red-600 transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-red-600 transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <Link
                to="/"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
              <span>03213995991</span>
              <span className="hidden sm:inline">•</span>
              <span>hellohamzaa.01@gmail.com</span>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-6 w-full">
              <p className="text-gray-500 text-sm">
                © 2025 reeCoder. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
