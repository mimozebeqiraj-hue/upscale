import { useState, useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Upscale Home Builders | Streatham SW16';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Upscale Home Builders in Streatham SW16. Get a free quote for your building project. Call 020 1234 5678 or fill out our contact form.');
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '', // 'success' or 'error'
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again or call us directly.'
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again or call us at 020 1234 5678.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              Ready to start your building project? Contact us for a free consultation and quote
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. All fields marked with * are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    {status.message}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="020 1234 5678"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    <option value="Loft Conversion">Loft Conversion</option>
                    <option value="Home Extension">Home Extension</option>
                    <option value="House Renovation">House Renovation</option>
                    <option value="New Build">New Build</option>
                    <option value="Kitchen Renovation">Kitchen Renovation</option>
                    <option value="Bathroom Renovation">Bathroom Renovation</option>
                    <option value="General Building Work">General Building Work</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Get in touch with us directly via phone, email, or visit our office in Streatham.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white p-3 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <a href="tel:02012345678" className="text-blue-600 font-semibold text-xl hover:text-blue-800">
                        020 1234 5678
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Mon-Sat: 8am - 6pm</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white p-3 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <a href="mailto:info@upscalehomebuilders.co.uk" className="text-green-600 font-semibold hover:text-green-800">
                        info@upscalehomebuilders.co.uk
                      </a>
                      <p className="text-sm text-gray-600 mt-1">24-hour response time</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white p-3 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Location</h3>
                      <p className="text-gray-700">
                        Streatham High Road<br/>
                        Streatham, London<br/>
                        SW16 1EJ
                      </p>
                      <p className="text-sm text-gray-600 mt-2">Serving Streatham & South London</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="font-bold text-lg mb-2 text-red-900">Emergency Building Services</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    For urgent structural issues or emergency repairs
                  </p>
                  <a href="tel:02012345678" className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                    Call Emergency Line
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-600">
                      * Emergency call-outs available 7 days a week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us in Streatham
            </h2>
            <p className="text-gray-600">
              We're based in Streatham SW16 and serve the surrounding South London areas
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-12 text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Streatham, London SW16</h3>
              <p className="text-gray-700 mb-6">
                Conveniently located on Streatham High Road
              </p>
              <a 
                href="https://www.google.com/maps/search/Streatham+High+Road+SW16" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Areas Served */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
              Areas We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
              <div className="p-3 bg-white rounded shadow-sm">Streatham SW16</div>
              <div className="p-3 bg-white rounded shadow-sm">Streatham Hill</div>
              <div className="p-3 bg-white rounded shadow-sm">West Norwood</div>
              <div className="p-3 bg-white rounded shadow-sm">Tooting</div>
              <div className="p-3 bg-white rounded shadow-sm">Balham</div>
              <div className="p-3 bg-white rounded shadow-sm">Brixton</div>
              <div className="p-3 bg-white rounded shadow-sm">Clapham</div>
              <div className="p-3 bg-white rounded shadow-sm">Dulwich</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How quickly can you provide a quote?
                </h3>
                <p className="text-gray-600">
                  We aim to respond to all enquiries within 24 hours. For urgent projects, we can often provide same-day site visits and quotes.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Do you offer free quotes?
                </h3>
                <p className="text-gray-600">
                  Yes! All initial consultations and quotes are completely free with no obligation.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Are you insured and licensed?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We're fully insured with comprehensive liability coverage and hold all necessary licenses and certifications.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What areas do you cover?
                </h3>
                <p className="text-gray-600">
                  We're based in Streatham SW16 and serve all of South London, typically within a 5-mile radius including Tooting, Balham, Brixton, and surrounding areas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Do you handle planning permission?
                </h3>
                <p className="text-gray-600">
                  Yes, we can manage the entire planning permission process for you, including architectural drawings, applications, and liaising with the council.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
