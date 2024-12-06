import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import MasterPage from './components/NavbarDeHomem';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <MasterPage/>
        <main>
          <Hero />
          <Services />
          <Contact />
        </main>
      <Footer />
    </div>
  );
}

export default App;