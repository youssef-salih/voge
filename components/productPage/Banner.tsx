import React from "react";
import Image from "next/image";

import { FC } from "react";
import { ProProps } from "@/types/tProduct";
import { truncate } from "@/layout/products";

const Banner: FC<ProProps> = ({ product }) => {
  console.log(product);

  return (
    <>
      <div className="h-max text-white relative ">
        <div className="bg-[#202020] w-screen h-full absolute top-0 left-0 origin-bottom-left -skew-y-1 -z-20" />
        <div className="bg-gray-400 w-screen h-full absolute top-0 left-0 origin-bottom-left skew-y-1 -z-40" />
        <div className="bg-gray-300 w-screen h-full absolute top-0 left-0 origin-bottom-left  -z-30 " />
        <div className="xl:container container mx-auto md:flex flex-col md lg:flex-row md:  ">
          <div className="lg:w-1/2 ">
            <Image
              src={product.main_image}
              alt={product.name}
              width={800}
              height={1400}
              className="w-full mx-auto max-w-3xl"
            />
          </div>
          <div className="lg:w-1/2 lg:p-16 p-4">
            <p className="capitalize">
              Home / {product.model}/ {product.name}
            </p>
            <div className="flex flex-col gap-4 my-5 mb-2">
              <h1 className="text-4xl font-extrabold uppercase">
                {product.model}
              </h1>
              <h1 className="text-4xl font-extrabold uppercase">
                {product.name}
              </h1>
            </div>
            <div>
              <p className="text-base font-medium uppercase mb-8">
                Un crédit vous engage et doit être remboursé. Vérifiez vos
                capacités de remboursement avant de vous engager.
              </p>
              <p className="text-xl font-bold my-2">
                À partir de {product.prix_mois}€ par mois¹
              </p>
              <p className="text-sm font-extralight mb-5">
                Location avec option d&apos;xachat après un 1er loyer majoré d&apos;xun
                montant de {product.location} € offre disponible du{" "}
                {product.location_date_debut}
                au {product.location_date_fin}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 my-5">
              <button className="p-4 py-2 capitalize bg-yellow-400  font-bold lg:text-xl">
                faire un essai
              </button>
              <button className="p-4 py-2 capitalize text-black bg-white font-bold lg:text-xl">
                trouver un revendeur
              </button>
            </div>
            <div className="flex flex-col gap-4 mb-3">
              <p className="font-bold">{truncate(product.description)}</p>
              <p className="text-base font-extralight text-gray-400 flex flex-col lg:flex-row items-center">
                Tarif TTC public conseillé :
                <span className=" ml-2 text-2xl font-bold text-white">
                  {product.tarifTTC} DHs *
                </span>
              </p>
              <p className="text-sm text-white text-center lg:text-left">
                *Frais de mise en service et d&apos;immatriculation non inclus
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
