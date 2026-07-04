import Image from "next/image";
import { MoveRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string;
  image: string;
  link: string;
  inProgress?: boolean;
}

const projects = [
   {
    title: "Education Analytics Dashboard",
    description: "Role-based SaaS dashboard helping Nigerian universities track student performance, monitor enrollment trends, and manage lecturer workload — all in one place.",
    link: "#", 
    stack: "Next.js, TypeScript, Supabase",
    image: "/lectico.png",
    inProgress: true,
  },

  {
    title: "RGL Farms",
    description: "Landing page for a farm-fresh chicken delivery brand — clean product showcase built to drive WhatsApp and call orders.",
    link: "https://rgl-farms.pxxl.click", 
    stack: "React.js, Tailwindcss",
    image: "/rgl-farms.png",
    inProgress: false

  },
 
  {
    title: "The Fitclub",
    description: "Fitness club website with animated UI, testimonials, and automated email sign-up flow.",
    link: "https://fitclub-eta-ten.vercel.app", 
    stack: "React.js, Tailwindcss, Framer-motion",
    image: "/fitclub.png",
    inProgress: false
  },

  {
    title: "Served-Hot",
    description: "Restaurant landing page designed to highlight a food brand's personality, with a bold, appetite-driving hero section.",
    link: "https://served-hot.vercel.app", 
    stack: "React.js, Tailwindcss",
    image: "/served-hot.png",
    inProgress: false
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="relative top-24 flex flex-col items-center justify-between bg-slate-900 rounded-2xl p-4 mb-6 overflow-hidden"
    >


      {/* Left: text */}

            {/* Right: screenshot, overflows the card */}
      <div className="relative w-full rounded-l-xl overflow-hidden">
        <Image
        width={600}
        height={400}
          src={project.image}
          alt={project.title}
          className="w-full"
        />
              {project.inProgress && (
      <span className="absolute bottom-3 right-3 bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-500/30 flex items-center gap-1 z-10">
        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
        In Progress
      </span>
    )}
      </div>


      <div className=" z-10 w-full pt-5">
        <h3 className="text-blue-400 text-2xl font-semibold mb-3">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-2">
          {project.description}
        </p>
        <p className="text-gray-400 text-md font-semibold mb-6">
          <span className="font-bold text-blue-400 ">Tech stack:</span> {project.stack}
        </p>
        <div className="flex justify-end items-end gap-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer"  className="bg-white text-black p-2 text-sm flex items-center rounded-xl gap-1 hover:text-blue-400 transition">
            View Project ↗
          </a>

        </div>
      </div>


    </div>
  );
}   

export default function Projects() {
  return (
    <section className=" w-full px-8 pt-24 mb-40" id="work">
      <div className="lg:mx-10 md:mx-20">
      <h2 className="text-white md:text-6xl text-5xl font-bold uppercase ">Projects</h2>
      <div className="relative grid md:grid-cols-2 grid-cols-1 gap-6 md:-mt-0 -mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
      <div className=" mt-30 flex items-center justify-center" >
      <button className=" bg-white text-black px-5 py-2 flex items-center justify-center gap-3 cursor-pointer rounded-3xl text-xl">  <a href="https://github.com/Nasiru0001" target="_blank" rel="noopener noreferrer" >View All</a>  <MoveRight /> </button>
      </div>
      </div>
    </section>
  );
}
