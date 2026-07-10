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

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;