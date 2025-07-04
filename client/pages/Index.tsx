import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7a7f75c4c22b44fc80c15dfc47e89c8f%2Ff0f21f47e116463d9a39a765818d9c9d?format=webp&width=800"
                alt="reeCoder Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-red-600 font-medium">
                Home
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-red-600 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-black hover:text-red-600 transition-colors font-medium"
              >
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
                <Link to="/" className="text-red-600 font-medium">
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-black hover:text-red-600 transition-colors font-medium"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-black hover:text-red-600 transition-colors font-medium"
                >
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
              Web Development and
              <span className="text-red-600"> AI Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
              We build what you imagine
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your digital vision into reality with cutting-edge
              technology. From modern web applications to intelligent AI
              integrations, we deliver exceptional results that drive business
              growth and user engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg">
                <Link to="/services">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              What We <span className="text-red-600">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              If you have any ideas or need any type of work, just share with us
              - we will build it for you with precision, creativity, and
              cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-red-100">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Web Development
                </h3>
                <p className="text-gray-600">
                  Modern, responsive websites and applications built with the
                  latest technologies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-red-100">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  AI Solutions
                </h3>
                <p className="text-gray-600">
                  Intelligent automation, chatbots, and AI integrations for
                  enhanced functionality
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-red-100">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Custom Design
                </h3>
                <p className="text-gray-600">
                  Beautiful, user-friendly interfaces designed to match your
                  brand identity
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-full text-lg"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Why Choose <span className="text-red-600">reeCoder</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with creative vision to deliver
              solutions that not only meet your requirements but exceed your
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick turnaround without compromising quality
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                Cutting-edge solutions with modern technologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Precision
              </h3>
              <p className="text-gray-600">
                Attention to detail in every aspect of development
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Support</h3>
              <p className="text-gray-600">
                Ongoing support and maintenance for your peace of mind
              </p>
            </div>
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
              Let's bring your ideas to life with professional development and
              innovative solutions. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-full text-lg"
              >
                <Link to="/about">Learn More</Link>
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
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7a7f75c4c22b44fc80c15dfc47e89c8f%2Ff0f21f47e116463d9a39a765818d9c9d?format=webp&width=800"
                alt="reeCoder Logo"
                className="h-12 w-auto"
              />
            </div>

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
