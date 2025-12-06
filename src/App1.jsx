import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BuildersStreatham from './pages/BuildersStreatham';
import BuildersNearMe from './pages/BuildersNearMe';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
           <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* NEW SEO Pages */}
        <Route path="/builders-streatham" element={<BuildersStreatham />} />
        <Route path="/builders-near-me" element={<BuildersNearMe />} />
        <Route path="/construction-company-streatham" element={<ConstructionCompany />} />
        <Route path="/building-contractors-near-me" element={<BuildingContractors />} />
        <Route path="/home-renovation-streatham" element={<HomeRenovation />} />
        <Route path="/house-renovation-sw16" element={<HouseRenovation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;