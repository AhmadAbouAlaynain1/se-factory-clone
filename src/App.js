import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnicalTopics from "./components/TechnicalTopics";
import Info from "./components/Info";
import WeeklyBreakdown from "./components/WeeklyBreakdown";
import ProgramFees from "./components/ProgramFees";
import Testimonials from "./components/Testimonials";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";

function App() {
  //State to hide or show NavBar
  const [navVisible, setNavVisible] = useState(true);

  //Setting Nav visibility based on amount user scrolled in page
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < 50) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }
      return () => window.removeEventListener("scroll");
    });
  }, []);

  return (
    <>
      <Navbar visible={navVisible} />
      <Hero />
      <TechnicalTopics />
      <Info />
      <WeeklyBreakdown />
      <ProgramFees />
      <Testimonials />
      <Calendar />
      <Footer />
    </>
  );
}

export default App;
