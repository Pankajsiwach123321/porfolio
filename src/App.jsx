import "./App.css";
import About from "./components/About";
import ClientsSays from "./components/ClientsSays";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import MyPortfolio from "./components/MyPortfolio";
import MyService from "./components/MyService";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skill />
      <MyService />
      <MyPortfolio />
      <ClientsSays />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
