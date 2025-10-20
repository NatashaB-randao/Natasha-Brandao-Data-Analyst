import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { IndividualServices } from './components/IndividualServices';
import { Methodology } from './components/Methodology';
import { Projects } from './components/Projects';
import { Packages } from './components/Packages';
import { Differentials } from './components/Differentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <IndividualServices />
      <Methodology />
      <Projects />
      <Packages />
      <Differentials />
      <Contact />
      <Footer />
    </div>
  );
}
