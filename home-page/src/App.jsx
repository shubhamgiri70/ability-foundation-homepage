import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Magazine from "./components/magazine/Magazine";
import Enrollment from "./components/enrollment/Enrollment";
import Events from "./components/events/Events";
import Articles from "./components/articles/Articles";
import EmploymentWing from "./components/employmentwing/EmploymentWing";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Magazine />
        <Enrollment />
        <Events />
        <EmploymentWing />
        <Articles />
      </div>
    </>
  );
}

export default App;
