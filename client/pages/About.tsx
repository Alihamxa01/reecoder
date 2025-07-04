import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function About() {
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
                src="https://cdn.builder.io/api/v1/image/assets%2F7a7f75c4c22b44fc80c15dfc47e89c8f%2F5f1f96e74e1740ffbe09f7bb2c1f1fca?format=webp&width=800"
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
              <Link to="/about" className="text-red-600 font-medium">
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
                <Link
                  to="/"
                  className="text-black hover:text-red-600 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link to="/about" className="text-red-600 font-medium">
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
              About <span className="text-red-600">reeCoder</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
              Transforming digital visions into exceptional realities
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At reeCoder, we specialize in transforming your digital vision
                into reality. Our team combines cutting-edge web development
                with innovative AI solutions to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in building not just websites, but complete digital
                experiences that drive growth and engagement for your business.
                Our passion lies in creating solutions that are both technically
                robust and visually stunning.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                If you have any ideas or need any type of work, just share with
                us - we will build it for you with precision and creativity.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with cutting-edge technology solutions
                that not only meet their current needs but also prepare them for
                future challenges. We strive to be the bridge between
                imagination and implementation.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
              What We <span className="text-red-600">Do</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow border-red-100">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">W</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Web Development
                  </h3>
                  <p className="text-gray-600">
                    Modern, responsive websites built with the latest
                    technologies and best practices
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow border-red-100">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">AI</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    AI Solutions
                  </h3>
                  <p className="text-gray-600">
                    Intelligent automation and AI integrations that enhance your
                    business operations
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow border-red-100">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">D</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Custom Design
                  </h3>
                  <p className="text-gray-600">
                    Unique designs tailored to your brand identity and business
                    requirements
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Team Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
              Meet Our <span className="text-red-600">Team</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">AH</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    Ali Hamza
                  </h3>
                  <p className="text-red-600 font-medium mb-4">
                    Lead Developer & AI Specialist
                  </p>
                  <p className="text-gray-600">
                    Full-stack developer with expertise in modern web
                    technologies and AI integrations. Passionate about creating
                    innovative solutions that push the boundaries of what's
                    possible.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">NR</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    Nadeem Rana
                  </h3>
                  <p className="text-red-600 font-medium mb-4">
                    UI/UX Designer & Frontend Developer
                  </p>
                  <p className="text-gray-600">
                    Creative designer and frontend specialist focused on user
                    experience and modern interface design. Dedicated to
                    crafting beautiful, functional digital experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-full text-lg"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F7a7f75c4c22b44fc80c15dfc47e89c8f%2F5f1f96e74e1740ffbe09f7bb2c1f1fca?format=webp&width=800"
                  alt="reeCoder Logo"
                  className="h-10 w-auto mx-auto md:mx-0"
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
