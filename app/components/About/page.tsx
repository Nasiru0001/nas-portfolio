import React from "react";

const About = () => {
  return (
    <section className="mb-20 h-screen">
      <div className="mx-40 rounded-2xl flex flex-col justify-center items-left py-20 ">
        <p className=" mx-20 px-4 py-2 w-40 rounded-full text-center bg-[#091928] border-[#1a3448] border ">
          {" "}
          👋 Who am I
        </p>
        <h1 className=" mx-20 text-left mt-10 mb-5 text-6xl font-extrabold underline">
          ABOUT ME
        </h1>
        <p className="mx-20 text-gray-400 text-xl text-justify leading-10">
          Hi i am Adamu Nasiru, A Nigerian Frontend Developer with a Year
          Experience in 4+ Language. I am a passionate and dedicated Frontend
          Developer with a keen eye for detail and a drive for creating
          seamless, user-centric digital experiences. My journey into web
          development began with a fascination for how design and technology
          intersect, and it has since evolved into a career focused on crafting
          high-quality, responsive websites and applications. I am levelling Up
          day by day. Hire Me!!
        </p>

        <p className="mx-20 mt-5 text-gray-400 text-xl text-justify leading-10">
          With expertise in modern frontend technologies like{" "}
          <span className="text-purple-500">React</span>,{" "}
          <span className="text-purple-500">Tailwind CSS,</span> and{" "}
          <span className="text-purple-500">TypeScript</span>, I thrive on
          turning complex problems into elegant solutions. I believe that every
          project is an opportunity to learn, innovate, and push the boundaries
          of what`/s possible on the web.
        </p>
      </div>
    </section>
  );
};

export default About;
