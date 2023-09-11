"use client";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import { sublinks } from "@/types/tGamme";
import Link from "next/link";

const NavGammes: FC<sublinks> = ({ sublinks }) => {
  const pathname = usePathname();
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
                      pathname === url.path ? "bg-[#202020]" : ""
                    } p-4 hover:bg-[#161616] uppercase `}
                  >
                    <Link href={url.path}>{url.name}</Link>
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
