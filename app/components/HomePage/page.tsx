"use client";
import { useEffect } from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full relative flex flex-col space-y-5 items-center justify-center md:min-h-screen min-h-[60vh]  mt-10 md:mb-0 mb-20 " id="home">
      <div className="md:block hidden night md:top-[-20%] md:right-[10%] right-[30%] pointer-events-none ">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className="w-50 h-20 rounded-full absolute md:right-20 top-10 md:mt-0 mt-10 ">
        <Image
          className="rounded-full"
          src="/profile.jpg"
          width={200}
          height={200}
          alt="profile-pic"
        />
      </div>

      <span className="px-4 py-2  rounded-full bg-[#091928] border-[#1a3448] border mb-7 md:mt-0 mt-80 text-white">
        Welcome to my world
      </span>

      <h1 className="text-white font-extrabold md:text-6xl text-4xl text-center md:leading-20 leading-13 capitalize mx-7">
        BUILDING AND TURNING IDEAS, <br  className="md:block hidden" /> CONCEPTS, <br className="md:hidden block" /> DREAMS AND VISIONS <br />{" "}
        INTO REALITY{" "}
      </h1>

      <p className="md:text-2xl text-xl font-bold text-gray-500 text-center md:mt-0 mt-5 md:mx-20 mx-7 leading-8 ">
        Hi, <span className="text-purple-500">{` I'm Nasiru or  (Nas)`}</span> a frontend developer <br className="md:block hidden" /> who turns rough ideas into clean, fast, and functional web experiences.
      </p>

    <a href="https://github.com/Nasiru0001" target="_blank" rel="noopener noreferrer" className="font-bold text-black bg-white px-7 py-3 rounded-full flex items-center gap-4 md:mt-2 mt-7 text-xl hover:scale-105 transition-transform duration-200 cursor-pointer"
    >
  View My Work
  <MoveRight />
</a>
    </section>
  );
}
