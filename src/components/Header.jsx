import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-3xl font-bold text-slate-900">
            Upscale <span className="text-amber-600">Home Builders</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-600'
                    : 'text-slate-700 hover:text-amber-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-amber-600 text-white px-6 py-2.5 rounded-sm hover:bg-amber-700 transition-colors font-medium"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-600'
                    : 'text-slate-700 hover:text-amber-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="block bg-amber-600 text-white px-6 py-2.5 rounded-sm text-center hover:bg-amber-700 transition-colors font-medium"
            >
              Free Consultation
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
