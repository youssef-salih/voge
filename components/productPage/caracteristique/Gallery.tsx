import { ProProps } from "@/types/tProduct";
import Image from "next/image";
import { FC } from "react";

const Gallery: FC<ProProps> = ({ product }) => {
  return (
    <div className="cContainer mx-auto py-10 ">
      <div className="w-1/2 flex flex-col">
        <p className="font-extrabold text-gray-300 text-2xl uppercase">
          {product.name}
        </p>
        <div className="flex flex-col gap-5 mb-5">
          <h1 className="font-bold text-3xl text-white">GALERIE PHOTOS</h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
        {product.gallery
          ? product.gallery.map((img: any, index: any) => (
              <div className="min-h-64" key={index}>
                <Image
                  src={img}
                  alt=""
                  width={350}
                  height={800}
                  className="max-h-48 object-fill"
                />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Gallery;
