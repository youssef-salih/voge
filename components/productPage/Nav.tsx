"use client";
import React, { FC } from "react";
import type { sublinks } from "@/types/tGamme";
import { usePathname } from "next/navigation";

const Nav: FC<sublinks> = ({ sublinks, params }) => {
  const pathname = usePathname();
  console.log(sublinks);
  return (
    <div className="bg-yellow-300 text-white hidden md:flex">
      <div className="container">
        <div className="flex justify-center w-full items-center p-15">
          <ul className="flex font-medium md:text-xl text-sm">
            {sublinks.map((gamme: any) => {
              if (gamme.models) {
                const foundModel = gamme.models.find(
                  (model: any) => model.name === params
                );

                if (foundModel) {
                  return gamme.urls.map((url: any) => (
                    <li
                      key={url.name}
                      className={`${
                        pathname === url.path ? "bg-[#202020]" : ""
                      } p-4 hover:bg-[#161616] uppercase `}
                    >
                      <a href={url.path}>{url.name}</a>
                    </li>
                  ));
                }
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
