import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Phone, Mail, MapPin, Star } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  // CHOOSE YOUR MODE:
  const USE_PHP_BACKEND = true; // Set to false to use mock mode (no PHP needed)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    if (USE_PHP_BACKEND) {
      // ==================== PHP BACKEND MODE ====================
      try {
        const response = await fetch('http://localhost/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setFormStatus('success');
          console.log('✅ Form submitted successfully!', formData);
          
          // Clear form
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
          
          setTimeout(() => {
            setFormStatus('idle');
          }, 5000);
        } else {
          setFormStatus('error');
          console.error('❌ Form submission failed:', result.message);
          setTimeout(() => {
            setFormStatus('idle');
          }, 5000);
        }
      } catch (error) {
        console.error('❌ Form submission error:', error);
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      }
    } else {
      // ==================== MOCK MODE (No PHP needed) ====================
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Log to console
      console.log('📧 Form Submitted (Mock Mode):', formData);
      console.log('-----------------------------------');
      console.log(`Name: ${formData.name}`);
      console.log(`Email: ${formData.email}`);
      console.log(`Phone: ${formData.phone}`);
      console.log(`Service: ${formData.service}`);
      console.log(`Message: ${formData.message}`);
      console.log('-----------------------------------');
      
      // Show success
      setFormStatus('success');
      
      // Optional: Show alert
      alert(`✅ Form Submitted (Mock Mode)!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nCheck the browser console (F12) for full details!`);
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  const services = [
    {
      title: "Loft Conversions",
      description: "Transform your unused attic space into a stunning bedroom, office, or entertainment area. We handle all planning permissions and building regulations.",
      features: ["Dormer & hip-to-gable options", "En-suite installations", "Velux windows & staircases", "Full insulation & lighting"]
    },
    {
      title: "Home Extensions",
      description: "Expand your living space with beautifully designed extensions that complement your home's architecture and enhance its value.",
      features: ["Single & double-storey extensions", "Kitchen & dining extensions", "Side return extensions", "Orangeries & conservatories"]
    },
    {
      title: "Full Renovations",
      description: "Complete property transformations from concept to completion. We breathe new life into dated homes with modern design and quality finishes.",
      features: ["Complete refurbishments", "Kitchen & bathroom upgrades", "Structural alterations", "Interior design consultation"]
    }
  ];

  const whyChooseUs = [
    {
      icon: "✓",
      title: "Free Site Visits",
      description: "No-obligation consultations to assess your project and provide expert advice"
    },
    {
      icon: "£",
      title: "Fixed-Price Quotes",
      description: "Transparent pricing with no hidden costs or surprise charges"
    },
    {
      icon: "⭐",
      title: "5-Year Guarantee",
      description: "Complete peace of mind with our comprehensive workmanship guarantee"
    },
    {
      icon: "⚡",
      title: "Skilled Tradespeople",
      description: "Experienced professionals dedicated to delivering premium results"
    }
  ];

  const process = [
    { step: "01", title: "Free Consultation", description: "We visit your property to understand your vision and requirements" },
    { step: "02", title: "Design & Planning", description: "Our team creates detailed plans and handles all necessary permissions" },
    { step: "03", title: "Fixed Quote", description: "Receive a comprehensive, transparent quote with no hidden costs" },
    { step: "04", title: "Construction", description: "Skilled tradespeople bring your project to life with attention to detail" },
    { step: "05", title: "Final Touches", description: "Quality finishing and inspection to ensure everything exceeds standards" }
  ];

  const testimonials = [
    {
      name: "Sarah & James Mitchell",
      location: "London",
      rating: 5,
      text: "Our loft conversion exceeded all expectations. The team was professional, punctual, and the finish is absolutely stunning. We've gained an entire extra floor!"
    },
    {
      name: "Robert Thompson",
      location: "Manchester",
      rating: 5,
      text: "From start to finish, the process was seamless. The fixed-price quote meant no surprises, and the 5-year guarantee gives us complete peace of mind."
    },
    {
      name: "Emily Davidson",
      location: "Birmingham",
      rating: 5,
      text: "Our kitchen extension has transformed how we live. The attention to detail and quality of workmanship is outstanding. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Development Mode Indicator */}
      <div className="fixed top-20 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-sm shadow-lg text-sm">
        🏠 Localhost Mode: {USE_PHP_BACKEND ? 'PHP Backend' : 'Mock (No PHP)'}
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-600/30 rounded-sm mb-6">
                <span className="text-amber-400 text-sm font-medium tracking-wide">PREMIUM HOME TRANSFORMATIONS</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your Home Into Something
                <span className="block text-amber-400">Extraordinary</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Specialists in loft conversions, extensions, and full property renovations. 
                We create modern, functional spaces that add lasting value and comfort to your home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center bg-amber-600 text-white px-8 py-4 rounded-sm hover:bg-amber-700 transition-all font-semibold text-lg group">
                  Book Free Site Visit
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-slate-900 transition-all font-semibold text-lg">
                  Explore Services
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-700">
                <div>
                  <div className="font-display text-4xl font-bold text-amber-400 mb-1">250+</div>
                  <div className="text-slate-400 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-amber-400 mb-1">5 Year</div>
                  <div className="text-slate-400 text-sm">Guarantee</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-amber-400 mb-1">98%</div>
                  <div className="text-slate-400 text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up-delay-1 hidden md:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-amber-600/30 rounded-sm"></div>
                <div className="relative bg-slate-700 rounded-sm overflow-hidden aspect-[4/5] shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" 
                    alt="Modern home interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/20 rounded-sm mb-4">
              <span className="text-amber-700 text-sm font-semibold tracking-wide">OUR SERVICES</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Expert Solutions for Every Home
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to completion, we deliver premium results that transform your living space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-sm shadow-lg p-8 hover-lift border-t-4 border-amber-600"
              >
                <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto"></div>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/20 rounded-sm mb-4">
              <span className="text-amber-700 text-sm font-semibold tracking-wide">WHY CHOOSE US</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              The Upscale Difference
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine expertise, transparency, and commitment to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-sm flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl text-white font-bold">{item.icon}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-sm p-10 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold mb-4">
                  Trusted by Homeowners Across the UK
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  With hundreds of successful projects completed, we've built a reputation for delivering exceptional quality, transparent pricing, and outstanding customer service. Our skilled tradespeople take pride in every detail, ensuring your home transformation exceeds expectations.
                </p>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={24} />
                  ))}
                  <span className="ml-3 text-lg font-semibold">4.9/5 Average Rating</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center">
                  <div className="font-display text-4xl font-bold text-amber-400 mb-2">15+</div>
                  <div className="text-slate-300">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center">
                  <div className="font-display text-4xl font-bold text-amber-400 mb-2">100%</div>
                  <div className="text-slate-300">Insured & Licensed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center">
                  <div className="font-display text-4xl font-bold text-amber-400 mb-2">24/7</div>
                  <div className="text-slate-300">Support Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center">
                  <div className="font-display text-4xl font-bold text-amber-400 mb-2">£5M</div>
                  <div className="text-slate-300">Public Liability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/20 rounded-sm mb-4">
              <span className="text-amber-700 text-sm font-semibold tracking-wide">OUR PROCESS</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Simple, Stress-Free Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial consultation to final handover, we manage every detail
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-amber-200"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-sm p-6 text-center hover-lift shadow-lg border border-slate-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold shadow-lg relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/20 rounded-sm mb-4">
              <span className="text-amber-700 text-sm font-semibold tracking-wide">TESTIMONIALS</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real experiences from homeowners we've had the pleasure to work with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-sm p-8 shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/20 rounded-sm mb-4">
                <span className="text-amber-700 text-sm font-semibold tracking-wide">GET IN TOUCH</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Start Your Home Transformation Today
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Book your free, no-obligation site visit and receive a fixed-price quote. We're here to answer all your questions and bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-600/10 rounded-sm flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Phone</div>
                    <a href="tel:+442012345678" className="text-amber-600 hover:text-amber-700 text-lg">
                      +44 20 1234 5671
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-600/10 rounded-sm flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Email</div>
                    <a href="mailto:info@upscalehomebuilders.co.uk" className="text-amber-600 hover:text-amber-700 text-lg">
                      info@upscalehomebuilders.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-600/10 rounded-sm flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Service Areas</div>
                    <div className="text-slate-600">
                      London, Manchester, Birmingham<br />
                      & surrounding areas across the UK
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-sm border-l-4 border-amber-600">
                <div className="font-semibold text-slate-900 mb-2">Office Hours</div>
                <div className="text-slate-600">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </div>
              </div>

              {/* Development Instructions */}
              <div className="mt-8 p-6 bg-blue-50 rounded-sm border-l-4 border-blue-600">
                <div className="font-semibold text-blue-900 mb-2">🏠 Development Mode</div>
                <div className="text-blue-700 text-sm">
                  Current mode: <strong>{USE_PHP_BACKEND ? 'PHP Backend' : 'Mock Mode'}</strong><br/>
                  {USE_PHP_BACKEND ? (
                    <>
                      Make sure XAMPP is running and contact.php is in htdocs!<br/>
                      Check submissions in: C:\xampp\htdocs\contact-submissions.log
                    </>
                  ) : (
                    <>
                      Mock mode - check browser console (F12) for form data.<br/>
                      Set USE_PHP_BACKEND = true to use real PHP backend.
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-sm p-8 shadow-lg">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
                Request Your Free Consultation
              </h3>
              
              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={24} />
                    <div>
                      <h4 className="font-semibold text-green-900 mb-1">Thank You!</h4>
                      <p className="text-green-700 text-sm">
                        {USE_PHP_BACKEND 
                          ? 'We\'ve received your inquiry and will contact you within 24 hours. Check contact-submissions.log for confirmation!'
                          : 'Form submitted successfully! Check the browser console (F12) for details.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm">
                  <div className="flex items-start">
                    <div className="text-red-600 mr-3">⚠️</div>
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Oops!</h4>
                      <p className="text-red-700 text-sm">
                        {USE_PHP_BACKEND
                          ? 'Something went wrong. Make sure XAMPP is running and contact.php is in htdocs. Check browser console (F12) for errors.'
                          : 'Something went wrong. Check the browser console (F12) for details.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="John Smith"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="john@example.com"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="07123 456789"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Service Interested In *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    disabled={formStatus === 'submitting'}
                  >
                    <option value="">Select a service</option>
                    <option value="Loft Conversion">Loft Conversion</option>
                    <option value="Home Extension">Home Extension</option>
                    <option value="Full Renovation">Full Renovation</option>
                    <option value="Full Renovation">Repairs </option>
                    <option value="Full Renovation">Refurbishment </option>
                    <option value="Full Renovation">Roof work </option>
                    <option value="Other / Not Sure">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Project Details</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="Tell us about your project ideas and requirements..."
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full px-8 py-4 rounded-sm transition-colors font-semibold text-lg flex items-center justify-center group ${
                    formStatus === 'submitting' 
                      ? 'bg-amber-400 cursor-not-allowed' 
                      : 'bg-amber-600 hover:bg-amber-700'
                  } text-white`}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Submit Request'}
                  {formStatus !== 'submitting' && (
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>

                <p className="text-slate-500 text-sm text-center">
                  {USE_PHP_BACKEND 
                    ? "We'll respond within 24 hours to arrange your free site visit"
                    : "🏠 Development mode - check console (F12) for submission details"}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
