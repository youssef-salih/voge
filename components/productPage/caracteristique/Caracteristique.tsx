import React, { FC } from "react";
import Video from "./Video";
import Garantie from "./Garantie";
import Gallery from "./Gallery";
import { ProProps } from "@/types/tProduct";

const Caracteristique: FC<ProProps> = ({ product }) => {
  return (
    <>
      <Video />
      <div className="bg-[#202020] text-white">
        <div className="container mx-auto py-10 ">
          <div className="w-1/2 flex flex-col">
            <p className="font-extrabold text-gray-300 text-2xl uppercase">
              {product.name}
            </p>
            <div className="flex flex-col gap-5 mb-5">
              <h1 className="font-bold text-3xl text-white">Caracteristique</h1>
            </div>
          </div>
          <table className="cContainer mx-auto text-left my-8">
            <tbody className="flex flex-col  lg:flex-row flex-wrap justify-between gap-y-5">
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Weight</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.weight} KG
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Dimensions</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.dimension} mm
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Moteur</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.moteur}
                </td>
              </tr>

              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Cylindrée</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.cylindre} cm3
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Alesage x Course (mm)</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.alesage}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Taux de compression</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.taux_deC}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Puissance max</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.puissance_max}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Couple max</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.couple_max}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Démarreur</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.demarreur}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Injection</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.injection}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Boite de vitesse</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.boite_vitesse}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Transmission finale</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.transmission_finale}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Frein avant</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.frain_avant}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Frein arrière</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.frain_arriere}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Pneu avant</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.pneu_avant}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Pneu arrière</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.pneu_arriere}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Volume réservoir</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.volume_reservoir}
                </td>
              </tr>
              <tr className="w-full lg:w-1/2 flex font-thin">
                <th className="w-[40%]">Couleur</th>
                <td className="w-[60%] font-thin text-gray-300">
                  {product.couleur}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <button className="p-4 bg-yellow-400 text-sm cContainer w-max font-bold md:text-xl">
              TÉLÉCHARGER LE MANUEL
            </button>
          </div>

          <Garantie product={product} />
          <Gallery product={product} />
        </div>
      </div>
    </>
  );
};

export default Caracteristique;
