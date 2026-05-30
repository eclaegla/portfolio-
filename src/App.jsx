import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
//import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
//import Exper {/ience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
       <Footer />
      {/* <About />
     
      
      <Experience />
      <Contact />
       */}
    </div>
  );
};

export default App;