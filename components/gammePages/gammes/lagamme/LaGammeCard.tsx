import { FC } from "react";
import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  model: string;
  price: string;
}

const LaGammeCard: FC<Props> = ({ image, model, price }) => {
  return (
    <div className="w-fit  ">
      <div className="">
        <Image
          src={image}
          alt={model}
          width={800}
          height={800}
          className="w-[307px] object-contain min-h-[307px]"
        />
        <p className="text-center text-yellow-400 text-4xl font-extrabold my-4">
          {model}
        </p>
        <p className="text-center text-sm">
          Tarif TTC conseillé :
          <span className="text-base font-bold">{price} DHs</span>
        </p>
      </div>
    </div>
  );
};

export default LaGammeCard;
