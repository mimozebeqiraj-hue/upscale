import { useEffect } from 'react';

export default function BuildingContractorsNearMe() {
  useEffect(() => {
    document.title = 'Building Contractors Near Me SW16 | Local Building Contractors Streatham';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional building contractors near you in SW16 Streatham. Expert contractors for all building projects. Free quotes. Fully insured. Call today!');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Contractors Near Me in Streatham SW16
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Professional building contractors serving your local area
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="bg-white text-orange-900 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
                Get Free Quote
              </a>
              <a href="tel:02012345678" className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition border-2 border-orange-400">
                📞 Call Now
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
              Your Local Building Contractors in SW16
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Searching for <strong>"building contractors near me"</strong>? Look no further! We're professional <strong>building contractors based in Streatham SW16</strong>, providing comprehensive building services throughout South London. Our local team of skilled contractors is available for projects of any size.
              </p>
              <p className="mb-4">
                As experienced <strong>building contractors near you in SW16</strong>, we offer fast response times, competitive local rates, and the reliability you need. We're not a national chain - we're your local contractors who understand Streatham properties and the local community.
              </p>
              <p className="mb-4">
                Whether you need <strong>building contractors for home extensions</strong>, renovations, loft conversions, or new builds, our qualified team delivers exceptional workmanship on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Building Contractor Services Near You
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Home Extensions</h3>
              <p className="text-gray-600 mb-4">
                Expert contractors for single and double-storey extensions. Create the space you need.
              </p>
              <a href="/contact" className="text-orange-600 font-semibold hover:text-orange-800">
                Get Quote →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-bold mb-3">House Renovations</h3>
              <p className="text-gray-600 mb-4">
                Complete house renovation contractors. Full refurbishments and modernization projects.
              </p>
              <a href="/contact" className="text-orange-600 font-semibold hover:text-orange-800">
                Get Quote →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🪜</div>
              <h3 className="text-xl font-bold mb-3">Loft Conversions</h3>
              <p className="text-gray-600 mb-4">
                Specialist loft conversion contractors creating beautiful additional living space.
              </p>
              <a href="/contact" className="text-orange-600 font-semibold hover:text-orange-800">
                Get Quote →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3">New Builds</h3>
              <p className="text-gray-600 mb-4">
                Experienced new build contractors for custom homes from foundations to finish.
              </p>
              <a href="/contact" className="text-orange-600 font-semibold hover:text-orange-800">
                Get Quote →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🚪</div>
              <h3 className="text-xl font-bold mb-3">Kitchen & Bathroom</h3>
              <p className="text-gray-600 mb-4">
                Professional contractors for kitchen and bathroom installations and renovations.
              </p>
              <a href="/contact" className="text-orange-600 font-semibold hover:text-orange-800">
                Get Quote →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🧱</div>
              <h3 className="text-xl font-bold mb-3">Structural Work</h3>
              <p className="text-gray-600 mb-4">
                Qualified structural contractors for load-bearing walls, beams, and foundations.
              </p>
              <a href="/contact" className="text-orange-600 font-semibold hover:text-orange-800">
                Get Quote →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local Contractors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Local Building Contractors
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Being local means we can be on-site quickly for urgent jobs or estimates.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💷</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Better Value</h3>
              <p className="text-gray-600">
                No long-distance travel costs means better prices for you.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Local Knowledge</h3>
              <p className="text-gray-600">
                We know Streatham properties and local building regulations inside out.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Reliable Service</h3>
              <p className="text-gray-600">
                Our reputation in the community matters - we deliver what we promise.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Fully Qualified</h3>
              <p className="text-gray-600">
                All contractors are fully qualified, insured, and experienced.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Proven Track Record</h3>
              <p className="text-gray-600">
                Check our reviews from local customers in SW16 and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Building Contractors Covering Your Area
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-center text-lg text-gray-700 mb-6">
                We're building contractors serving SW16 and the following areas:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded">
                  <p className="font-semibold">Streatham</p>
                  <p className="text-sm text-gray-600">SW16</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <p className="font-semibold">Streatham Hill</p>
                  <p className="text-sm text-gray-600">SW2</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <p className="font-semibold">West Norwood</p>
                  <p className="text-sm text-gray-600">SE27</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <p className="font-semibold">Tooting</p>
                  <p className="text-sm text-gray-600">SW17</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <p className="font-semibold">Balham</p>
                  <p className="text-sm text-gray-600">SW12</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded">
                  <p className="font-semibold">Brixton</p>
                  <p className="text-sm text-gray-600">SW9</p>
                </div>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded">
                <p className="text-gray-700">
                  <strong>Service Radius:</strong> We serve properties within 5 miles of Streatham SW16
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How to Hire Building Contractors Near You
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                  <p className="text-gray-600">
                    Call, email, or fill out our online form to get in touch with our contractors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Free Site Visit</h3>
                  <p className="text-gray-600">
                    One of our contractors visits your property to assess the work needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Detailed Quote</h3>
                  <p className="text-gray-600">
                    Receive a comprehensive, no-obligation quote with full breakdown of costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Work Begins</h3>
                  <p className="text-gray-600">
                    Once approved, our contractors start work at a time convenient for you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Quality Completion</h3>
                  <p className="text-gray-600">
                    Work completed to the highest standards with thorough clean-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Building Contractors? We're Here to Help!
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Professional building contractors near you in SW16. Get your free quote today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition shadow-lg">
              Request Free Quote
            </a>
            <a href="tel:02012345678" className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition border-2 border-orange-400 shadow-lg">
              Call: 020 1234 5678
            </a>
          </div>
          <p className="mt-8 text-orange-200">
            📍 Building Contractors serving Streatham SW16 & South London<br/>
            📧 info@upscalehomebuilders.co.uk<br/>
            ⏰ Monday - Saturday: 8am - 6pm
          </p>
        </div>
      </section>
    </div>
  );
}
