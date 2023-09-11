import React from "react";

const Essayer = () => {
  return (
    <div className="bg-yellow-400 flex flex-col justify-center items-center md:p-16 p-8 gap-5 text-white">
      <div className="text-center">
        <h1 className="md:text-4xl text-2xl font-bold uppercase">
          ESSAYEZ UN MODÈLE NAKED R GRATUITEMENT
        </h1>
        <p className="md:text-lg text-sm">
          Vous craquez pour la 300R ou pour la 500R ? Faites-vous votre propre
          avis et venez l'essayer !
        </p>
      </div>

      <button className=" relative md:mr-[50px] p-[18px] rounded-[7px]  w-[149px] bg-transparent h-[49px] border  border-white">
        <span className=" absolute top-[5px] right-0 p-[18px] rounded-[7px] h-[49px] font-bold text-yellow-400  bg-white">
          FAIRE UN ESSAI
        </span>
      </button>
    </div>
  );
};

export default Essayer;
