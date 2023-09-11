"use client";
import React, { FC, useEffect, useState } from "react";
import { sublinks } from "@/types/tGamme";

const NavGammes: FC<sublinks> = ({ sublinks, router }) => {
  return (
    <div className="bg-yellow-300 text-white hidden md:flex ">
      <div className="container">
        <div className="flex justify-center w-full items-center p-15">
          <ul className="flex  font-medium  md:text-xl text-sm ">
            {sublinks && sublinks.urls
              ? sublinks.urls.map((url: any, index: any) => (
                  <li
                    key={index}
                    className={`${
                      router === url.path ? "bg-[#202020]" : ""
                    } p-4 hover:bg-[#161616] uppercase `}
                  >
                    <a href={url.path}>{url.name}</a>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavGammes;
