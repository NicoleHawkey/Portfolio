import Navigation from "../components/navigation";
import AboutMeSection from "./about";
import Quote from "../components/quote";
import Work from "./work";
import Projects from "../components/projects";
import Contact from "./contact";
import Footer from "../components/footer";

const Index: React.FC = () => {
  const toggleLanguage = () => {
    // Code to toggle language
  };

  return (
    <div id="home">
      <Navigation onToggleLanguage={toggleLanguage} />
      <AboutMeSection />
      <Quote />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;