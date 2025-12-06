import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Shield, ChevronRight, CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { number: "250+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "5 Year", label: "Guarantee" }
  ];

  const values = [
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "We're committed to delivering the highest quality workmanship on every project, no matter the size."
    },
    {
      icon: <Users size={32} />,
      title: "Customer Focus",
      description: "Your vision and satisfaction drive everything we do. We listen, advise, and deliver beyond expectations."
    },
    {
      icon: <Shield size={32} />,
      title: "Integrity",
      description: "Transparent pricing, honest communication, and doing what we say we'll do - that's our promise."
    },
    {
      icon: <Clock size={32} />,
      title: "Reliability",
      description: "We respect your time and home. Projects are completed on schedule with minimal disruption."
    }
  ];

  const team = [
    {
      name: "Michael Thompson",
      role: "Founder & Managing Director",
      description: "With over 15 years in construction, Michael founded Upscale Home Builders to deliver premium home improvements with exceptional service.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Design",
      description: "Sarah brings creative vision and practical expertise to every project, ensuring designs are both beautiful and functional.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    },
    {
      name: "James Wilson",
      role: "Lead Project Manager",
      description: "James coordinates all aspects of construction, keeping projects on time and ensuring every detail meets our exacting standards.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    }
  ];

  const certifications = [
    "Federation of Master Builders Member",
    "TrustMark Registered",
    "£5M Public Liability Insurance",
    "CHAS Accredited",
    "Which? Trusted Trader",
    "Checkatrade Approved"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-600/30 rounded-sm mb-6">
              <span className="text-amber-400 text-sm font-medium tracking-wide">ABOUT US</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building Dreams, Transforming Homes
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              For over 15 years, Upscale Home Builders has been transforming properties across the UK. 
              We combine traditional craftsmanship with modern techniques to deliver exceptional results that exceed expectations.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Upscale Home Builders was founded in 2009 with a simple mission: to provide homeowners 
                  with exceptional building services backed by integrity, expertise, and genuine care for their homes.
                </p>
                <p>
                  What started as a small team of skilled tradespeople has grown into one of the UK's most 
                  trusted home improvement companies. We've completed hundreds of loft conversions, extensions, 
                  and renovations, each one unique and tailored to our clients' needs.
                </p>
                <p>
                  Our success is built on a foundation of quality workmanship, transparent communication, and 
                  treating every home as if it were our own. We're proud of the relationships we've built with 
                  our clients, many of whom have become advocates for our work.
                </p>
                <p>
                  Today, we continue to grow while maintaining the values that made us successful: delivering 
                  premium results, keeping our promises, and making the home improvement process as stress-free 
                  as possible.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-amber-600/30 rounded-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800" 
                alt="Our team at work" 
                className="relative rounded-sm shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-amber-600/10 rounded-sm flex items-center justify-center mx-auto mb-4 text-amber-600">
                  {value.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your project's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-sm shadow-lg overflow-hidden hover-lift">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-amber-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Accreditations & Certifications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fully qualified, insured, and trusted by industry bodies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-50 rounded-sm">
                <CheckCircle className="text-amber-600 mr-3 flex-shrink-0" size={24} />
                <span className="text-slate-900 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied homeowners who've trusted us with their most important investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact" 
              className="inline-flex items-center justify-center bg-amber-600 text-white px-8 py-4 rounded-sm hover:bg-amber-700 transition-all font-semibold text-lg group"
            >
              Book Free Consultation
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/projects" 
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-slate-900 transition-all font-semibold text-lg"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
