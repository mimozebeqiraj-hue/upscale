import { useEffect } from 'react';

export default function ConstructionCompanyStreatham() {
  useEffect(() => {
    document.title = 'Construction Company Streatham SW16 | Professional Building Services | Upscale Home Builders';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading construction company in Streatham SW16. Expert builders for residential & commercial projects. Licensed, insured, guaranteed. Free quotes. Call today!');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Leading Construction Company in Streatham SW16
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Professional construction services for residential and commercial projects
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                Request Quote
              </a>
              <a href="tel:02012345678" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition border-2 border-purple-400">
                Call: 020 1234 5678
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
              Your Trusted Construction Company in Streatham
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Upscale Home Builders is a professional <strong>construction company in Streatham SW16</strong>, specializing in residential and commercial building projects across South London. With over 15 years of experience, we deliver exceptional construction services from initial design through to completion.
              </p>
              <p className="mb-4">
                As a fully licensed and insured <strong>construction company serving Streatham</strong>, we handle projects of all sizes - from small home renovations to large-scale new builds. Our team of experienced construction professionals ensures every project meets the highest standards of quality and safety.
              </p>
              <p className="mb-4">
                Looking for a reliable <strong>construction company near you in SW16</strong>? We're based locally in Streatham and proud to serve the community with honest, transparent building services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Construction Services We Offer in Streatham
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3">New Build Construction</h3>
              <p className="text-gray-600 mb-4">
                Complete new build homes from foundations to finish. Custom designs tailored to your needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Site preparation</li>
                <li>✓ Foundation work</li>
                <li>✓ Structural building</li>
                <li>✓ Final fit-out</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-bold mb-3">Home Extensions</h3>
              <p className="text-gray-600 mb-4">
                Single and double-storey extensions, wrap-around extensions, and rear extensions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Design & planning</li>
                <li>✓ Building regulations</li>
                <li>✓ Construction work</li>
                <li>✓ Interior finishing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-bold mb-3">Renovations & Refurbishment</h3>
              <p className="text-gray-600 mb-4">
                Complete property renovations, period property restoration, modernization projects.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Full house renovations</li>
                <li>✓ Kitchen & bathroom remodels</li>
                <li>✓ Period property restoration</li>
                <li>✓ Structural alterations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3">Commercial Construction</h3>
              <p className="text-gray-600 mb-4">
                Office fit-outs, retail spaces, commercial renovations, and new commercial builds.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Office spaces</li>
                <li>✓ Retail units</li>
                <li>✓ Restaurants & cafes</li>
                <li>✓ Commercial refits</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🪜</div>
              <h3 className="text-xl font-bold mb-3">Loft Conversions</h3>
              <p className="text-gray-600 mb-4">
                Expert loft conversion construction, creating valuable additional living space.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Dormer loft conversions</li>
                <li>✓ Hip-to-gable conversions</li>
                <li>✓ Mansard loft conversions</li>
                <li>✓ Velux loft conversions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Structural Work</h3>
              <p className="text-gray-600 mb-4">
                Structural alterations, beam installation, underpinning, and foundation work.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Steel beam installation</li>
                <li>✓ Load-bearing walls</li>
                <li>✓ Foundation repairs</li>
                <li>✓ Structural surveys</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Construction Company */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Construction Company?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📜</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Licensed</h3>
              <p className="text-gray-600">
                All necessary licenses, certifications, and insurance coverage for complete peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">
                Over 15 years serving Streatham and South London with quality construction services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                Clear, detailed quotes with no hidden costs. You'll know exactly what you're paying for.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">10-Year Guarantee</h3>
              <p className="text-gray-600">
                All structural work comes with our comprehensive 10-year guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Construction Process
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    Free site visit to discuss your project requirements, budget, and timeline. We'll answer all your questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design & Planning</h3>
                  <p className="text-gray-600">
                    Our architects create detailed plans. We handle all planning permissions and building regulations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Detailed Quotation</h3>
                  <p className="text-gray-600">
                    Comprehensive quote with full breakdown of costs. No hidden fees, no surprises.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Construction Phase</h3>
                  <p className="text-gray-600">
                    Skilled team carries out the work to the highest standards. Regular updates throughout.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Inspection & Handover</h3>
                  <p className="text-gray-600">
                    Thorough inspection to ensure everything meets our high standards before final handover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Accredited Construction Company
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're proud members of leading construction industry bodies
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-bold">FMB Member</p>
              <p className="text-sm text-gray-600">Federation of Master Builders</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-bold">NHBC Registered</p>
              <p className="text-sm text-gray-600">National House Building Council</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-bold">Trustmark</p>
              <p className="text-sm text-gray-600">Government Endorsed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Contact our expert construction team in Streatham SW16 for a free consultation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition shadow-lg">
              Get Free Quote
            </a>
            <a href="tel:02012345678" className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition border-2 border-purple-400 shadow-lg">
              Call: 020 1234 5678
            </a>
          </div>
          <p className="mt-8 text-purple-200">
            📍 Construction Company serving Streatham SW16<br/>
            📧 info@upscalehomebuilders.co.uk<br/>
            ⏰ Monday - Saturday: 8am - 6pm
          </p>
        </div>
      </section>
    </div>
  );
}
