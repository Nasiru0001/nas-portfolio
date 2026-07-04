"use client";
import {navLink} from "@/app/constants/navLinks"
import { useState } from "react"; 

export default function Navbar() {
    const [active, setActive] = useState("House")

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[70%] md:w-auto overflow-x-auto">
      <div className="flex items-center justify-center mx-auto md:px-7 px-5 py-4 bg-slate-900/60 backdrop-blur-md text-white md:space-x-7 space-x-3 mt-2 rounded-full">
            {navLink.map(({label, name, href, icon: Icon})=>{
                return (
                  <div key={href}>
                    <a href={href} onClick={() => setActive(label)} className="flex items-center md:gap-2 gap-1 text-xs cursor-pointer hover:text-red-300 ">
                      <span className={`rounded-full px-2 py-1 ${active == label ? "bg-gray-400" : "bg-transparent" }` }>
                      <Icon  className="md:w-4 w-3.5  " />
                      </span>
                        {name}  
                     </a>
                  </  div>
                ) 
})}
      </div>
      {/* Star Animation */}
    </nav>
  );
}