import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Education } from './components/Education/Education';
import { Techstack } from './components/Techstack/Techstack';
import { CodingProfiles } from './components/profiles/CodingProfiles';
import { Projects } from './components/project/projects';
import { Achievements } from './components/Achievements/Achievements';
import { Document } from './components/Documents/Document';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { BlogPage } from './components/BlogPage/BlogPage';
import { BlogsPage } from './components/BlogsPage/BlogsPage';
import { InteractiveGrid } from './components/InteractiveGrid/InteractiveGrid';
import { FloatingBackdrop } from './components/FloatingBackdrop/FloatingBackdrop';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Techstack />
      <CodingProfiles />
      <Projects />
      <Achievements />
      <Document />
      <Contact />
    </main>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <BrowserRouter>
      <InteractiveGrid />
      <FloatingBackdrop />
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className={`app-content${!showSplash ? ' app-content--visible' : ''}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
