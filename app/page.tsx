import Navbar from "./components/Navbar/page";
import HomePage from "./components/HomePage/page";
import About from "./components/About/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <Navbar />
      <HomePage />
      <section id="about" className="scroll-mt-24 w-full">
        <About />
      </section>
    </div>
  );
}
