"use client";

import Acheter from "@/components/acheter/Acheter";
import Actualite from "@/components/actualite/Actualite";

import Catalogue from "@/components/catalogue/Catalogue";

import Model from "@/components/model/Model";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="landing">
        <div className="image">
          <Image src="/vogue-landingcrop.jpg" alt="" width={1400} height={0} />
        </div >
      </div>
      <Catalogue />
      <Actualite />
      <Acheter />
      <Model />
    </>
  );
}
