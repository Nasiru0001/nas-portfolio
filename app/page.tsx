import Navbar from "./components/Navbar/page";
import HomePage from "./components/HomePage/page";
import About from "./components/About/page";
import Projects from "./components/Projects/page";
import TechStack from "./components/TechStack/page";
import Contact  from "./components/Contact/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full overflow-hidden ">
      <Navbar />
      <HomePage />
      <About />
      <TechStack  />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
