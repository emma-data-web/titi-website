import React from "react";
import Computer from "../../assets/computer.png";
import Angela from "../../assets/angela.png";

const Download = () => {
  return (
    <div className="pt-20">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center text-[#d84136] translate-y-15">
          <h1 className="text-8xl">FREE</h1>
          <h1 className="text-8xl">DOWNLOAD</h1>
        </div>

        <img src={Computer} className="w-[65%] h-[30rem] object-cover" />

        <div className="pt-15 flex flex-col items-center justify-center space-y-5 text-[#2e2c35]">
          <h1 className="text-xl ">30 BIBLICAL AFFIRMATIONS</h1>
          <p className="w-[50rem] text-center">
            Grab your 13 page guide and renew your mind to the truth of God's
            word through biblical affirmations. Learn to see yourself the way
            God does so you can live an empowered life and activate your
            God-given purpose.
          </p>
          <button className="bg-[#d84136] py-3 w-60 rounded-lg text-white text-sm">
            DOWNLOAD NOW
          </button>
        </div>
      </div>


      <div className="relative pt-10">
        <img src={Angela} className="h-[15rem] w-[20%] object-cover absolute top-0 right-[10rem]" />
      </div>
    </div>
  );
};

export default Download;
