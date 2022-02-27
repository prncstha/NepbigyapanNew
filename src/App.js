import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import GoodAt from './Components/GoodAt/GoodAt';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className='font-poppins'>
      <Navbar />
      <Hero />
      <About id='About' />
      <GoodAt id='Services' />
      <Projects id='Projects' />
      <Team id='OurTeam' />
      <Contact id='ContactUs' />
      <Footer />
    </div>
  );
}

export default App;
