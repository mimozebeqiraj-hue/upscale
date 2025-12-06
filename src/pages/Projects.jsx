import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ChevronRight } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-600/30 rounded-sm mb-6">
            <span className="text-amber-400 text-sm font-medium tracking-wide">OUR PORTFOLIO</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Recent Projects
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed loft conversions, extensions, and renovations. 
            Each project showcases our commitment to quality, design, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-sm font-semibold transition-all ${
                  selectedCategory === category.value
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="bg-white rounded-sm shadow-lg overflow-hidden hover-lift group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.afterImage} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-sm text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-600">
                      <MapPin size={16} className="mr-2 text-amber-600" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock size={16} className="mr-2 text-amber-600" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <span className="mr-2 text-amber-600 font-bold">£</span>
                      {project.budget}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
                    View Project Details
                    <ChevronRight size={20} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's Create Your Project
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your home? Book a free consultation and receive a fixed-price quote for your project.
          </p>
          <Link 
            to="/#contact" 
            className="inline-flex items-center justify-center bg-amber-600 text-white px-8 py-4 rounded-sm hover:bg-amber-700 transition-all font-semibold text-lg group"
          >
            Book Free Site Visit
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
