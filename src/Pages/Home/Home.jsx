import React from "react";
import Woman from "../../assets/woman.png";
import Woman2 from "../../assets/woman2.png";
import Speak from "../../assets/speaks.png";
import Voice from "./Voice";
import Mariela from "./Mariela";
import Download from "./Download"
import Move from "./Move"

const Home = () => {
  return (
    <div className="bg-[#dcd3ca]">
      <div className="min-h-screen relative overflow-hidden pb-50">
        <nav className="absolute top-10 right-6 flex gap-5 mb-10 text-[12px] text-[#d84136]">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">VOICE</a>
          <a href="#">BOOK</a>
          <a href="#">SHOP</a>
          <a href="#">CONTACT</a>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <img src={Speak} className="absolute top-10 w-[25%] left-10" />

            <img
              src={Woman}
              className="w-[90%] h-[100vh] object-cover"
              alt=""
            />

            <h1 className="absolute top-[40%] left-100 font-[Bebas Neue] text-[#d84136] text-8xl">
              IGNITING
              <br />
              <span className="inline-block ml-25">PURPOSE</span>
            </h1>
          </div>

          <div>
            <h1 className="absolute top-25 left-[50rem] font-[Bebas Neue] text-lg">
              GOSPEL-CENTERED MOVEMENT
              <br />
              <span className="inline-block ml-25">COMMUNITY+MINITRY</span>
            </h1>

            <div className="flex items-center justify-center h-screen">
              <img
                src={Woman2}
                className="w-[50%] h-[500px] object-cover mt-60 rounded-xl"
              />
            </div>
          </div>
        </div>

        <h1 className="transform rotate-90 absolute top-[40rem] right-[30rem] font-[Bebas Neue] text-xl text-[#2e2c2b]">
          WITH AUTHOR, SPEAKER AND
          <br />
          <span className="inline-block ml-25">COACH MARIELA ROSARIO</span>
        </h1>
      </div>

      <Voice />
      <Mariela />
      <Download />
      <Home />
    </div>
  );
};

export default Home;
