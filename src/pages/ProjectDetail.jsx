import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Clock, CheckCircle, Star, ArrowLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-amber-600 hover:text-amber-700 font-semibold">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
          
          <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-600/30 rounded-sm mb-6">
            <span className="text-amber-400 text-sm font-medium tracking-wide">{project.category.toUpperCase()}</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-slate-300">
            <div className="flex items-center">
              <MapPin size={20} className="mr-2 text-amber-400" />
              {project.location}
            </div>
            <div className="flex items-center">
              <Clock size={20} className="mr-2 text-amber-400" />
              {project.duration}
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-amber-400 font-bold">£</span>
              {project.budget}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 -mt-6">
        <div className="max-w-7xl mx-auto">
          <img 
            src={project.afterImage} 
            alt={project.title}
            className="w-full h-96 md:h-[600px] object-cover rounded-sm shadow-2xl"
          />
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Before & After */}
              <div className="mb-12">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                  Before & After
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="relative">
                      <img 
                        src={project.beforeImage} 
                        alt="Before"
                        className="w-full h-64 object-cover rounded-sm shadow-lg"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-sm text-sm font-semibold">
                        BEFORE
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img 
                        src={project.afterImage} 
                        alt="After"
                        className="w-full h-64 object-cover rounded-sm shadow-lg"
                      />
                      <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-sm text-sm font-semibold">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="mb-12">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                    Project Gallery
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {project.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-sm shadow-lg hover:scale-105 transition-transform cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-white rounded-sm p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(project.testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                    "{project.testimonial.text}"
                  </p>
                  <div className="font-semibold text-slate-900">
                    — {project.testimonial.author}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-sm p-8 shadow-lg sticky top-24">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                  Project Features
                </h3>
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Interested in a Similar Project?</h4>
                  <Link 
                    to="/#contact" 
                    className="w-full inline-flex items-center justify-center bg-amber-600 text-white px-6 py-3 rounded-sm hover:bg-amber-700 transition-colors font-semibold group"
                  >
                    Get Your Free Quote
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            More Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/projects/${relatedProject.slug}`}
                  className="bg-white rounded-sm shadow-lg overflow-hidden hover-lift group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedProject.afterImage} 
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-sm text-sm font-semibold">
                        {relatedProject.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{relatedProject.location}</p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-lg"
            >
              View All Projects
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
