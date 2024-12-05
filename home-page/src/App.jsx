import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Magazine from "./components/magazine/Magazine";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Magazine />
      </div>
    </>
  );
}

export default App;
