import { House } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Grid2x2 } from "lucide-react";
import { BookImage } from "lucide-react";
import { Sun } from "lucide-react";

export default function Navbar() {
  // const navItem = [
  //   {id: 'Home', icon: House , label: ''}
  // ]

  return (
    <nav className="fixed top-0  lg:max-w-1/3 md:max-w-1/2 w-[75%]">
      {/* <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-full w-full rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> */}
      {/* <div className="absolute bottom-0 right-[-20%] top-[-10%] h-full w-full rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> */}

      <div className="flex items-center justify-center mx-auto md:px-2 px-5 py-2 bg-black md:space-x-7 space-x-3  mt-5 rounded-full">
        <span className="flex items-center gap-2 ">
          <span className="bg-gray-400 rounded-full px-2 py-1 ">
            <House className="md:w-4 w-3.5" />
          </span>
          |
        </span>

        <span className="flex items-center md:gap-2 gap-1 text-xs cursor-pointer">
          <CircleUserRound className="md:w-4 w-3.5" />
          <a href="#about">About</a>
        </span>

        <span className="flex items-center md:gap-2 gap-1 text-xs">
          <Grid2x2 className="md:w-4 w-3.5" />
          <a href="#about" className="md:block hidden">
            Work
          </a>
        </span>

        <span className="flex items-center md:gap-2 gap-1 text-xs">
          <BookImage className="md:w-4 w-3.5" />
          <span className="md:block hidden">Gallery</span>
        </span>

        <span className="flex items-center md:gap-2 gap-1 text-xs">
          | <Sun className="md:w-4 w-3.5" />
        </span>
      </div>
      {/* Star Animation */}
    </nav>
  );
}
