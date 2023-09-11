import React from "react";

const EssayerGrat = () => {
  return (
    <div className="  bg-yellow-400 md:flex flex-col justify-center items-start md:p-16 p-8 gap-5 text-white">
      <div className="container">
        <h1 className="text-black md:text-2xl text-base font-extrabold uppercase">
          PRENEZ UN NOUVEAU TOURNANT
        </h1>
        <p className="md:text-5xl text-lg font-extrabold">
          ESSAYEZ GRATUITEMENT NOS MOTOS
        </p>
      </div>

      <div className="container md:justify-start flex justify-center">
        <button className="relative mr-[50px]  p-[18px] rounded-[7px]  w-[149px] bg-transparent h-[49px] border  border-black">
          <span className=" absolute top-[5px] right-0 p-[18px] rounded-[7px] h-[49px] font-bold text-white  bg-black">
            FAIRE UN ESSAI
          </span>
        </button>
      </div>
    </div>
  );
};

export default EssayerGrat;
