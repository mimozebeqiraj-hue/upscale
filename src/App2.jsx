import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your existing pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// NOTE: If you have Services.jsx, uncomment the line below:
// import Services from './pages/Services';

// Import NEW SEO pages
import BuildersStreatham from './pages/BuildersStreatham';
import BuildersNearMe from './pages/BuildersNearMe';
import ConstructionCompanyStreatham from './pages/ConstructionCompanyStreatham';
import BuildingContractorsNearMe from './pages/BuildingContractorsNearMe';

// Import your Header and Footer components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* ===== EXISTING PAGES ===== */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Services route - Uncomment if you have Services.jsx */}
            {/* <Route path="/services" element={<Services />} /> */}
            
            {/* ===== NEW SEO PAGES ===== */}
            
            {/* Builders Pages */}
            <Route path="/builders-streatham" element={<BuildersStreatham />} />
            <Route path="/builders-streatham-sw16" element={<BuildersStreatham />} />
            <Route path="/builders-near-me" element={<BuildersNearMe />} />
            <Route path="/local-builders-sw16" element={<BuildersNearMe />} />
            
            {/* Construction Company Pages */}
            <Route path="/construction-company-streatham" element={<ConstructionCompanyStreatham />} />
            <Route path="/construction-company-sw16" element={<ConstructionCompanyStreatham />} />
            
            {/* Building Contractors Pages */}
            <Route path="/building-contractors-near-me" element={<BuildingContractorsNearMe />} />
            <Route path="/building-contractors-streatham" element={<BuildingContractorsNearMe />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
