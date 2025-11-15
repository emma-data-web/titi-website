import React from "react";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";

const Mariela = () => {
  return (
    <div className="text-[#2e2c2b]">
      <div className="pt-30 pb-50 relative">
        <div className="flex flex-col justify-center items-center relative">
          <p className="text-7xl absolute top-0 right-[9rem]">MEET</p>
          <h1 className="font-['Playfair Display'] tracking-wider text-[230px]">
            MARIELA
          </h1>
        </div>

        <div className="flex items-center justify-center absolute top-0 right-[20rem]">
          <img src={Img2} className="w-[70%] h-[35rem] opacity-80" />
          <img
            src={Img1}
            className="w-65 h-[28rem] object-cover -translate-x-10 opacity-80"
          />
        </div>

        <div>
          <h1 className="text-5xl absolute top-[25rem] left-[5rem]">
            AUTHOR, COACH,
            <br /> PREACHER AND
            <br /> SPOKEN WORD
            <br /> ARTIST
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5 pb-20">
        <h1 className="text-xl">WHAT'S UP? I'M MARIELA</h1>
        <p className="w-[40%] text-center">
          I'm an author, coach, preacher and spoken word artist who is dedicated
          to helping you be the best version of yourself and walk in your
          God-given purpose.
        </p>
        <button className="bg-[#d84136] w-[15%] rounded-xl py-3">MEET ME</button>
      </div>
    </div>
  );
};

export default Mariela;
