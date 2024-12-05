import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Magazine from "./components/magazine/Magazine";
import Enrollment from "./components/enrollment/Enrollment";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Magazine />
        <Enrollment />
      </div>
    </>
  );
}

export default App;
