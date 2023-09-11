import React from "react";

const Video = () => {
  return (
    <div className="relative">
      <div className="bg-[#202020] pb-[100vw] h-max absolute left-0 top-20 w-full -z-10"></div>
      <div className=" cContainer mx-auto text-center z-20 ">
        <video
          className=" "
          src="https://www.vogefrance.fr/wp-content/uploads/2022/04/voge-500r-500ds_vEBn9ck6.mp4"
          preload="metadata"
          controls
          controlsList="nodownload"
        ></video>
      </div>
    </div>
  );
};

export default Video;
