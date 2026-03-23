import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyLearn from "./components/WhyLearn";
import FreeTutorials from "./components/FreeTutorials";
import PremiumVideos from "./components/PremiumVideos";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyLearn />
      <FreeTutorials />
      <PremiumVideos />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
