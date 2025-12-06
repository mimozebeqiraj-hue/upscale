import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="font-display text-3xl font-bold mb-4">
              Upscale <span className="text-amber-400">Home Builders</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Transforming homes across the UK with premium loft conversions, extensions, and renovations. Quality craftsmanship backed by our 5-year guarantee.
            </p>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-amber-400 fill-amber-400" size={18} />
              ))}
              <span className="text-slate-400 text-sm ml-2">4.9/5 Rating</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-amber-400 transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-amber-400 transition-colors">Blog</Link></li>
              <li><Link to="/#contact" className="text-slate-400 hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
  <h3>Our Services</h3>
  <ul>
    <li><a href="/builders-streatham">Builders Streatham</a></li>
    <li><a href="/builders-near-me">Local Builders</a></li>
    <li><a href="/construction-company-streatham">Construction Company</a></li>
    <li><a href="/home-renovation-streatham">Home Renovation</a></li>
  </ul>
</div>

<div>
  <h3>Areas We Serve</h3>
  <ul>
    <li><a href="/builders-streatham">Streatham SW16</a></li>
    <li><a href="/builders-near-me">Builders Near You</a></li>
    <li>South London</li>
  </ul>
</div>

          <div>
            <h4 className="font-display text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>+44 20 1234 5678</li>
              <li>info@upscalehomebuilders.co.uk</li>
              <li className="pt-2">Serving London & UK-wide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Upscale Home Builders. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
