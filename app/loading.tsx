import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="bg-gray-300 w-full h-full absolute top-0 left-0 flex items-center justify-center z-50">
      <Image
        src="/dots-loader.gif"
        alt="Loading..."
        width={200}
        height={300}
        className=" "
      />
    </div>
  );
};

export default loading;
