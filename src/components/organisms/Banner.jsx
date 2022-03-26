import React from "react";
import image1 from "../atoms/image1.png";

const Banner = () => {
  return (
    <div className="mt-0 lg:mt-8">
      <img src={image1} alt="image1" className="w-[100%]" />
    </div>
  );
};

export default Banner;
