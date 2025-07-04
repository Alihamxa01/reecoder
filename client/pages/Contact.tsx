import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Mail, Phone, Menu, X, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                className="h-16 w-auto"
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
              <Link
                to="/services"
                className="text-black hover:text-red-600 transition-colors font-medium"
              >
                Services
              </Link>
              <Link to="/contact" className="text-red-600 font-medium">
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
                <Link
                  to="/services"
                  className="text-black hover:text-red-600 transition-colors font-medium"
                >
                  Services
                </Link>
                <Link to="/contact" className="text-red-600 font-medium">
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
              Get In <span className="text-red-600">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
              Ready to start your project? Let's discuss how we can help bring
              your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're here to help you with any questions or project inquiries.
                Whether you need a complete web solution, AI integration, or
                just want to discuss your ideas, we'd love to hear from you. Our
                team is always ready to provide professional consultation and
                deliver exceptional results.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Phone</p>
                    <p className="text-black text-lg">03213995991</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Email</p>
                    <p className="text-black text-lg">
                      hellohamzaa.01@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Response Time</p>
                    <p className="text-black text-lg">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Services</p>
                    <p className="text-black text-lg">Available Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-red-50 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Why Choose reeCoder?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Professional consultation and planning</li>
                  <li>• Modern technologies and best practices</li>
                  <li>• Timely delivery and ongoing support</li>
                  <li>• Competitive pricing for quality work</li>
                  <li>• Custom solutions tailored to your needs</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-black mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John"
                        className="w-full border-gray-300 focus:border-red-600 focus:ring-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        className="w-full border-gray-300 focus:border-red-600 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Project Type
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:border-red-600 focus:ring-red-600">
                      <option>Select a service</option>
                      <option>Web Development</option>
                      <option>AI Integration</option>
                      <option>Chatbot Development</option>
                      <option>UI/UX Design</option>
                      <option>Mobile App Development</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Project Budget (Optional)
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:border-red-600 focus:ring-red-600">
                      <option>Select budget range</option>
                      <option>Under $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                      <option>Let's discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Project Details
                    </label>
                    <Textarea
                      placeholder="Tell us about your project, requirements, timeline, and any specific features you need..."
                      rows={6}
                      className="w-full border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full text-lg">
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-black mb-2">
                  How long does a typical project take?
                </h3>
                <p className="text-gray-600">
                  Project timelines vary based on complexity and requirements.
                  Simple websites typically take 1-2 weeks, while complex
                  applications with AI integrations may take 4-8 weeks.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Do you provide ongoing support?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide ongoing maintenance, updates, and support for
                  all our projects. We offer various support packages to fit
                  your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Can you work with existing projects?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We can enhance, modernize, or add new features to
                  existing websites and applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <Link to="/" className="mb-4 inline-block">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7a7f75c4c22b44fc80c15dfc47e89c8f%2Ff0f21f47e116463d9a39a765818d9c9d?format=webp&width=800"
                  alt="reeCoder Logo"
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-400 mb-4">We build what you imagine</p>
              <p className="text-gray-500 text-sm">
                Professional web development and AI solutions for modern
                businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block text-gray-400 hover:text-red-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-400 hover:text-red-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="block text-gray-400 hover:text-red-600 transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-400 hover:text-red-600 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Info and Social */}
            <div className="text-center md:text-right">
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-400 text-sm">03213995991</p>
                <p className="text-gray-400 text-sm">
                  hellohamzaa.01@gmail.com
                </p>
              </div>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.987-5.366 11.987-11.99C24.004 5.367 18.641.001 12.017.001zm5.568 16.908c-.876 0-1.259-.393-1.259-.922v-6.045c0-.529.383-.922 1.259-.922.876 0 1.259.393 1.259.922v6.045c0 .529-.383.922-1.259.922zm-11.136 0c-.876 0-1.259-.393-1.259-.922v-6.045c0-.529.383-.922 1.259-.922.876 0 1.259.393 1.259.922v6.045c0 .529-.383.922-1.259.922zm5.568-2.764c-2.315 0-4.194-1.879-4.194-4.194s1.879-4.194 4.194-4.194 4.194 1.879 4.194 4.194-1.879 4.194-4.194 4.194z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 reeCoder. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <span className="text-gray-500 text-sm hover:text-red-600 transition-colors cursor-pointer">
                  Privacy Policy
                </span>
                <span className="text-gray-500 text-sm hover:text-red-600 transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
