import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-screen mt-10 ">
      <div className="night md:top-[-20%] md:right-[10%] right-[30%] ">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className="w-50 h-20 rounded-full absolute right-20 top-10  ">
        <Image
          className="rounded-full"
          src="/profile.jpg"
          width={200}
          height={200}
          alt="profile-pic"
        />
      </div>

      <span className="px-4 py-2  rounded-full bg-[#091928] border-[#1a3448] border mb-7">
        Welcome to my world
      </span>

      <h1 className="text-white font-extrabold md:text-6xl text-4xl text-center md:leading-20 leading-15 capitalize mx-7">
        BUILDING AND TURNING IDEAS, <br /> CONCEPTS, DREAMS AND VISIONS <br />{" "}
        INTO REALITY{" "}
      </h1>

      <p className="text-2xl font-bold text-gray-500 text-center md:mt-0 mt-10 mx-7 ">
        HI, <span className="text-purple-500">{` I'm Nasiru or  (Nas)`}</span> a
        Frontend Dev bringing Visons and ideas to Life
      </p>

      <button className=" text-black bg-white px-7 py-3 rounded-full flex items-center gap-4 mt-7 text-xl hover:cursor-pointer hover:scale-x-105 ">
        {" "}
        <a href="" className="font-bold">
          View My Work{" "}
        </a>{" "}
        <MoveRight />
      </button>
    </div>
  );
}
