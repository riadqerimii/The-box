import "./App.css";
import logo from "./components/img/icon.png";
import Navigation from "./components/pages/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Reputation from "./components/pages/Reputation";
import Services from "./components/pages/Services";
import Experience from "./components/pages/Experience";
import Consultation from "./components/pages/Consultation";
import Projects from "./components/pages/Projects";
import SignUp from "./components/pages/Subscribe";
import ScrollToTopButton from "./components/pages/Scrollbutton";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Navigation logo={logo} />
      <Home />
      <Reputation />
      <About />
      <Services />
      <Experience />
      <Consultation />
      <Projects />
      <SignUp />
      <Footer />
      {/* <Footer /> */}
      <ScrollToTopButton />
    </>
  );
}

export default App;
