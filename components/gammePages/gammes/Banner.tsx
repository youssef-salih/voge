"use client";
import { sublinks } from "@/types/tGamme";
import React, { FC, useEffect, useState } from "react";

const Banner: FC<sublinks> = ({ sublinks }) => {
  return (
    <div className="uppercase bg-banner-bg bg-no-repeat bg-cover flex justify-center items-center p-[10%] relative -z-20">
      <div className="">
        <h1 className="capitalize md:text-5xl text-4xl font-bold text-white ">
          {sublinks ? <>voge {sublinks.slogan}</> : ""}
        </h1>
      </div>
      <div className="w-full h-full bg-black absolute top-0 left-0 opacity-30 -z-10 " />
    </div>
  );
};

export default Banner;
