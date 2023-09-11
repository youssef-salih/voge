"use client";
import React, { FC, useEffect, useState } from "react";
import LaGammeCard from "./LaGammeCard";
import { sublinks } from "@/types/tGamme";

import { Product } from "@/types/tProduct";
import { products } from "@/layout/products";

const LaGamme: FC<sublinks> = ({ sublinks, router }) => {
  const [finalProducts, setFinalProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (sublinks) {
      const filteredProducts = products.filter(
        (product) =>
          product.model.toLowerCase() === sublinks.slogan.toLowerCase()
      );

      setFinalProducts(filteredProducts);
    }
  }, [sublinks]);

  console.log(finalProducts);

  return (
    <>
      {sublinks ? (
        <div className="xl:container container md:my-16 my-8">
          <div className="">
            <h3 className="uppercase font-bold text-lg text-yellow-300">
              la gamme
            </h3>
            <h1 className="uppercase font-extrabold md:text-4xl text-xl">
              Les Modéles {sublinks.slogan}
            </h1>
            <p className="font-medium">
              Vous recherchez une moto naked stylée et fiable ? Faites votre
              choix parmi la Voge 125R, la Voge 300R ou la Voge 500R
            </p>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row items-center justify-center lg:justify-start gap-8 ">
            {finalProducts
              ? finalProducts.map((item, index) => (
                  <a href={`/product/${item.name}`} key={index}>
                    <LaGammeCard
                      price={item.tarifTTC}
                      model={item.name}
                      image={item.main_image}
                    />
                  </a>
                ))
              : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LaGamme;
