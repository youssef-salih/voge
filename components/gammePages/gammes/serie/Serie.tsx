import Image from "next/image";
import React from "react";

const Serie = () => {
  return (
    <div className="bg-[#202020] text-white py-4 md:py-16">
      <div className="container lg:mt-5 ">
        <video
          className="elementor-video"
          src="https://www.vogefrance.fr/wp-content/uploads/2022/04/voge-500r-500ds_vEBn9ck6.mp4"
          preload="metadata"
          controls
          controlsList="nodownload"
        ></video>
      </div>
    </div>
  );
};

export default Serie;
