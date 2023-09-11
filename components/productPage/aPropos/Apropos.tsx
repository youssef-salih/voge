"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import { ProProps } from "@/types/tProduct";

const Apropos: FC<ProProps> = ({ product }) => {
  return (
    <div className="lg:xl:container container mx-auto lg:my-16 my-4 flex flex-col lg:flex-row">
      <div className="lg:w-[40%] flex flex-col">
        <p className="font-extrabold text-gray-300 text-2xl uppercase">
          {product.name}
        </p>
        <div className="flex flex-col gap-5 mb-5">
          <h1 className="font-bold text-3xl">A PROPOS</h1>
          <p className="text-xl font-bold">{product.serie}</p>
          <p className="font-semibold">{product.serie_desc}</p>
        </div>
        <button className="p-4 lg:w-max py-2 capitalize bg-yellow-400  text-white font-bold text-xl">
          Faire un essai
        </button>
      </div>
      <div className="xl:w-[60%] flex flex-col justify-center items-center">
        {product.mesure ? (
          <>
            <div className=" md:max-w-2xl max-w-[16rem]">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper lg:w-[560px] w-[220px] md:w-[400px]"
              >
                {product.swiper?.map((img: any) => (
                  <SwiperSlide>
                    <Image
                      src={img}
                      alt=""
                      width={700}
                      height={200}
                      className="mx-auto lg:w-[600px] md:w-[400px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Image
              src="/Gamme/all-black.png"
              alt=""
              width={200}
              height={200}
              className="w-48"
            />
          </>
        ) : (
          <div className=" md:max-w-2xl  max-w-[16rem]">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper "
            >
              {product.swiper
                ? product.swiper.map((img: any, index: any) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={img}
                        alt=""
                        width={800}
                        height={200}
                        className="mx-auto md:w-[600px]"
                      />
                    </SwiperSlide>
                  ))
                : ""}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apropos;
