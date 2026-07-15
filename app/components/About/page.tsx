"use client";
import React from "react";
import {motion}  from "framer-motion";

const About = () => {
  return (
    <section className="md:mb-20 mb-10 overflow-hidden md:mt-0 " id="about" >

      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        // viewport={{ once: true }}
        className="md:mx-20 rounded-2xl flex flex-col justify-center items-left py-20 ">

        <p className="md:mx-20 mx-10 px-4 py-2 w-40 rounded-full text-center bg-[#091928] border-[#1a3448] border text-white ">
          {" "}
          👋 Who am I
        </p>

        <h1 className=" md:mx-20 mx-10 text-left mt-10 mb-5 md:text-6xl text-4xl font-extrabold underline text-white">
          ABOUT ME
        </h1>

        <p className="md:mx-20 mx-10 text-gray-400 md:text-xl text-sm text-justify md:leading-10 leading-7">
          Hi i am Adamu Nasiru, A Nigerian Frontend Developer with a Year
          Experience in 4+ Language. I am a passionate and dedicated Frontend
          Developer with a keen eye for detail and a drive for creating
          seamless, user-centric digital experiences. My journey into web
          development began with a fascination for how design and technology
          intersect, and it has since evolved into a career focused on crafting
          high-quality, responsive websites and applications. I am levelling Up
          day by day. Hire Me!!
        </p>

        <p className="md:mx-20 mx-10 text-gray-400 md:text-xl text-sm text-justify md:leading-10 leading-7">
          With expertise in modern frontend technologies like{" "}
          <span className="text-purple-500">React</span>,{" "}
          <span className="text-purple-500">Tailwind CSS,</span> and{" "}
          <span className="text-purple-500">TypeScript</span>, I thrive on
          turning complex problems into elegant solutions. I believe that every
          project is an opportunity to learn, innovate, and push the boundaries
          of {"what's"} possible on the web.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
