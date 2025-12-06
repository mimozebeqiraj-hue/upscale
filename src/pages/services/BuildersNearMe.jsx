import { useEffect } from 'react';

export default function BuildersNearMe() {
  useEffect(() => {
    document.title = 'Builders Near Me SW16 | Local Builders in Streatham | Call for Free Quote';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Looking for builders near me? Find expert local builders in SW16 Streatham. Professional building services near you. Fast response, free quotes. Call now!');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Builders Near Me in SW16 Streatham
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Your local building experts - Just around the corner in Streatham
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                Get Instant Quote
              </a>
              <a href="tel:02012345678" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition border-2 border-green-400">
                📞 Call Local Number
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Finding "Builders Near Me"? We're Right Here in SW16!
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4 text-lg">
                When you search for <strong>"builders near me"</strong>, you want a local company you can trust. Upscale Home Builders is based in Streatham SW16, serving your neighborhood and surrounding South London areas. We're not a faceless national company - we're your <strong>local builders</strong> who live and work in the same community.
              </p>
              <p className="mb-4">
                As <strong>builders near you in SW16</strong>, we offer fast response times, competitive local rates, and the personal service that only a truly local building company can provide. Our team can visit your property within 24 hours for urgent projects.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Same-Day Site Visits Available</h3>
                <p className="text-blue-800">
                  Call before 10am and we can visit your property the same day! Perfect for urgent building work or when you need a quick quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Local Builders Near You?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Fast Response</h3>
              <p className="text-gray-600">
                Being local means we can reach you quickly. Emergency repairs, urgent quotes, or same-day visits - we're just minutes away.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">💷</div>
              <h3 className="text-xl font-bold mb-3">Better Prices</h3>
              <p className="text-gray-600">
                No travel costs added to your quote. Local builders offer better value because we don't charge for traveling across London.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Personal Service</h3>
              <p className="text-gray-600">
                We're your neighbors! Our reputation in the local community matters, so we always deliver exceptional service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                We know SW16 properties inside out. Experience with every type of home in Streatham and surrounding areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3">Planning Expertise</h3>
              <p className="text-gray-600">
                Familiar with Lambeth Council planning requirements. We handle all permissions and building regulations for you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Hundreds of completed projects in SW16. Check our local references and see our work in your neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Near You */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Building Services Available Near You in SW16
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900">Loft Conversions Near Me</h3>
              <p className="text-gray-600">Transform your loft into usable space. Local loft conversion specialists.</p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900">Home Extensions Near Me</h3>
              <p className="text-gray-600">Single & double-storey extensions. Expert local extension builders.</p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900">House Renovations Near Me</h3>
              <p className="text-gray-600">Complete house refurbishments. Kitchens, bathrooms, full renovations.</p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900">Building Work Near Me</h3>
              <p className="text-gray-600">All types of building work. From small repairs to major projects.</p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900">Emergency Repairs Near Me</h3>
              <p className="text-gray-600">Fast response to building emergencies. Available 7 days a week.</p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900">New Builds Near Me</h3>
              <p className="text-gray-600">Custom new build homes in SW16. From design to completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Areas Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              We're Local Builders Covering These Areas Near You
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <p className="font-semibold">Streatham SW16</p>
                  <p className="text-sm text-gray-600">Our base</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <p className="font-semibold">Streatham Hill</p>
                  <p className="text-sm text-gray-600">5 mins away</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <p className="font-semibold">West Norwood</p>
                  <p className="text-sm text-gray-600">8 mins away</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <p className="font-semibold">Tooting</p>
                  <p className="text-sm text-gray-600">10 mins away</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-4">Also Covering:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                  <p>✓ Streatham Common</p>
                  <p>✓ Streatham Vale</p>
                  <p>✓ Norbury</p>
                  <p>✓ Balham</p>
                  <p>✓ Brixton</p>
                  <p>✓ Clapham</p>
                  <p>✓ Tulse Hill</p>
                  <p>✓ Crystal Palace</p>
                  <p>✓ Dulwich</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-center text-gray-700">
                  <strong>Coverage radius:</strong> We serve properties within 5 miles of Streatham SW16
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              How to Contact Your Local Builders in SW16
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <a href="tel:02012345678" className="text-green-600 font-semibold text-xl">
                  020 1234 5678
                </a>
                <p className="text-sm text-gray-600 mt-2">Mon-Sat: 8am-6pm</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-3">📧</div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <a href="mailto:info@upscalehomebuilders.co.uk" className="text-blue-600 font-semibold">
                  info@upscalehomebuilders.co.uk
                </a>
                <p className="text-sm text-gray-600 mt-2">24hr response</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-bold text-lg mb-2">Online Quote</h3>
                <a href="/contact" className="text-purple-600 font-semibold">
                  Get Free Quote
                </a>
                <p className="text-sm text-gray-600 mt-2">Same day response</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-500">
              <h3 className="font-bold text-lg mb-2">⚡ Emergency Building Services</h3>
              <p className="text-gray-700">
                Need urgent building work? We offer emergency call-outs for structural issues, water damage, and other urgent repairs. Call <a href="tel:02012345678" className="font-bold text-yellow-700">020 1234 5678</a> for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Your Local Builders Are Ready to Help
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Stop searching for "builders near me" - you've found us! Get your free quote today from your local SW16 building experts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition shadow-lg">
              Request Free Quote
            </a>
            <a href="tel:02012345678" className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition border-2 border-green-400 shadow-lg">
              Call: 020 1234 5678
            </a>
          </div>
          <p className="mt-8 text-green-200">
            📍 Based in Streatham SW16 • Serving South London<br/>
            ⏰ Monday - Saturday: 8am - 6pm • Emergency call-outs available
          </p>
        </div>
      </section>
    </div>
  );
}
