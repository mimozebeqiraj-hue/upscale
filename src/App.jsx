import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ===== MAIN PAGES =====
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Project from './pages/Projects';
import ProjectDetails from './pages/ProjectDetail';

// ===== LOCATION PAGES =====
// Croydon
import BuildersCroydon from './pages\location\Croydon/BuildersCroydon';

// Streatham (2 files)
import BuildersStreatham from './pages\location\Streatham/BuildersStreatham';
import ConstructionCompanyStreatham from './pages\location\Streatham/ConstructionCompanyStreatham';

// ===== SERVICE PAGES =====
import BuildersNearMe from './pages/services/BuildersNearMe';
import BuildingContractorsNearMe from './pages/services/BuildingContractorsNearMe';

// ===== COMPONENTS =====
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
            {/* ===== MAIN WEBSITE PAGES ===== */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            
            
            {/* ===== LOCATION PAGES ===== */}
            
            {/* Croydon */}
            <Route path="/location/croydon" element={<BuildersCroydon />} />
            <Route path="/location/croydon" element={<BuildersCroydon />} />
            <Route path="/builders-croydon" element={<BuildersCroydon />} />
            
            {/* Streatham - Builders page */}
            <Route path="/location/streatham" element={<BuildersStreatham />} />
            <Route path="/location/streatham" element={<BuildersStreatham />} />
            <Route path="/builders-streatham" element={<BuildersStreatham />} />
            
            {/* Streatham - Construction Company page */}
            <Route path="/location/streatham/construction" element={<ConstructionCompanyStreatham />} />
            <Route path="/construction-company-streatham" element={<ConstructionCompanyStreatham />} />
            
            
            {/* ===== SERVICE PAGES ===== */}
            
            {/* Builders Near Me */}
            <Route path="/services/builders-near-me" element={<BuildersNearMe />} />
            <Route path="/builders-near-me" element={<BuildersNearMe />} />
            <Route path="/local-builders" element={<BuildersNearMe />} />
            
            {/* Building Contractors */}
            <Route path="/services/building-contractors" element={<BuildingContractorsNearMe />} />
            <Route path="/building-contractors-near-me" element={<BuildingContractorsNearMe />} />
            <Route path="/building-contractors" element={<BuildingContractorsNearMe />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
