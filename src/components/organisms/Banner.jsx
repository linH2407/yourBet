import React from "react";
import image1 from "../atoms/image1.png";

const Banner = () => {
  return (
    <div className="mt-5 z-10">
      <img src={image1} alt="image1" className="w-[100%]" />
    </div>
  );
};

export default Banner;
