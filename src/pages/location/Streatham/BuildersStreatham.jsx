import { useEffect } from 'react';

export default function BuildersStreatham() {
  useEffect(() => {
    document.title = 'Builders in Streatham London SW16 | Expert Building Services | Upscale Home Builders';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional builders in Streatham, London SW16. Expert building, renovation and construction services. Local builders near you. Free quotes. Call today!');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Builders in Streatham, London SW16
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Your trusted local builders serving Streatham and surrounding areas
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Get Free Quote
              </a>
              <a href="tel:02012345678" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition border-2 border-blue-400">
                Call Now: 020 1234 5678
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Expert Builders Serving Streatham SW16
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Looking for reliable <strong>builders in Streatham</strong>? Upscale Home Builders is your trusted local building company, serving Streatham, SW16, and the surrounding South London areas. With over 15 years of experience, we provide professional building services including loft conversions, home extensions, renovations, and new builds.
              </p>
              <p className="mb-4">
                As established <strong>builders in Streatham London SW16</strong>, we understand the unique character of properties in the area. Whether you own a Victorian terrace, Edwardian semi, or modern home, our skilled team delivers exceptional craftsmanship tailored to your property.
              </p>
              <p className="mb-4">
                Our <strong>building services in Streatham</strong> are comprehensive, covering everything from initial design and planning permission to final completion. We're fully insured, and all our work is guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Building Services in Streatham SW16
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Loft Conversions</h3>
              <p className="text-gray-600 mb-4">
                Transform your unused loft space into a stunning bedroom, office, or playroom. Expert loft conversion builders in Streatham.
              </p>
              <a href="/services/loft-conversions" className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-bold mb-3">Home Extensions</h3>
              <p className="text-gray-600 mb-4">
                Single-storey, double-storey, and wrap-around extensions. Create the extra space your family needs.
              </p>
              <a href="/services/extensions" className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-bold mb-3">House Renovations</h3>
              <p className="text-gray-600 mb-4">
                Complete property renovations in Streatham. Kitchens, bathrooms, and full house refurbishments.
              </p>
              <a href="/services/renovations" className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3">New Builds</h3>
              <p className="text-gray-600 mb-4">
                Custom new build homes designed and constructed to your exact specifications in SW16.
              </p>
              <a href="/services/new-builds" className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Design & Planning</h3>
              <p className="text-gray-600 mb-4">
                Full architectural design and planning permission services for Streatham properties.
              </p>
              <a href="/services/design" className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Property Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Ongoing property maintenance and repair services for homes in Streatham and SW16.
              </p>
              <a href="/services/maintenance" className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Builders in Streatham?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Local Knowledge</h3>
                <p className="text-gray-600">
                  We know Streatham properties inside out. Extensive experience with Victorian and Edwardian homes in SW16.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
                <p className="text-gray-600">
                  Comprehensive insurance coverage and all necessary certifications. Your property is protected.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Free Quotations</h3>
                <p className="text-gray-600">
                  No-obligation free quotes for all building projects in Streatham. Transparent, competitive pricing.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">
                  All work is guaranteed. We use only premium materials and skilled tradespeople.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Punctual & Reliable</h3>
                <p className="text-gray-600">
                  We respect your time. Projects completed on schedule with minimal disruption.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Excellent Reviews</h3>
                <p className="text-gray-600">
                  5-star rated builders in Streatham. Check our reviews from satisfied local customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Areas We Cover in Streatham & SW16
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're your local builders serving Streatham and the following areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <div className="bg-white p-4 rounded-lg shadow">Streatham Hill</div>
              <div className="bg-white p-4 rounded-lg shadow">Streatham Common</div>
              <div className="bg-white p-4 rounded-lg shadow">Streatham Vale</div>
              <div className="bg-white p-4 rounded-lg shadow">West Norwood</div>
              <div className="bg-white p-4 rounded-lg shadow">Norbury</div>
              <div className="bg-white p-4 rounded-lg shadow">Tooting</div>
              <div className="bg-white p-4 rounded-lg shadow">Balham</div>
              <div className="bg-white p-4 rounded-lg shadow">Brixton</div>
              <div className="bg-white p-4 rounded-lg shadow">Clapham</div>
            </div>
            <p className="text-gray-600 mt-6">
              <strong>Postcode areas:</strong> SW16, SW17, SW2, SW12, SE27, SE21
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Building Project in Streatham?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our expert team of builders in Streatham SW16 for a free consultation and quote
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg">
              Get Free Quote
            </a>
            <a href="tel:02012345678" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition border-2 border-blue-400 shadow-lg">
              Call: 020 1234 5678
            </a>
          </div>
          <p className="mt-8 text-blue-200">
            📍 Serving Streatham, London SW16 and surrounding areas<br/>
            📧 info@upscalehomebuilders.co.uk<br/>
            ⏰ Monday - Saturday: 8am - 6pm
          </p>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "name": "Upscale Home Builders",
          "image": "https://upscalehomebuilders.co.uk/logo.png",
          "description": "Professional builders in Streatham, London SW16. Expert building, renovation and construction services.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Streatham High Road",
            "addressLocality": "Streatham",
            "addressRegion": "London",
            "postalCode": "SW16",
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.4321,
            "longitude": -0.1257
          },
          "telephone": "+442012345678",
          "priceRange": "££",
          "areaServed": [
            "Streatham",
            "SW16",
            "South London"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 51.4321,
              "longitude": -0.1257
            },
            "geoRadius": "5000"
          }
        })}
      </script>
    </div>
  );
}
