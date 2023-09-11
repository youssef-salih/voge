"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/gammePages/gammes/Banner";
import NavGammes from "@/layout/NavGammes";
import SeDeplacer from "@/components/gammePages/gammes/SeDeplacerMoinsPolluer/SeDeplacer";
import Essayer from "@/components/gammePages/gammes/essayer/Essayer";
import LaGamme from "@/components/gammePages/gammes/lagamme/LaGamme";
import EssayerGrat from "@/components/gammePages/gammes/prenezTournant/EssayerGrat";
import Serie from "@/components/gammePages/gammes/serie/Serie";
import { SubNavLink } from "@/layout/headerLinkData";
import { usePathname } from "next/navigation";
const Page = ({ params }: { params: { gammeId: string } }) => {
  const pathname = usePathname();

  const [selectedGamme, setSelectedGamme] = useState<any>(null);
  useEffect(() => {
    const foundGamme = SubNavLink.find(
      (item: any) => item.name === params.gammeId
    );

    if (foundGamme) {
      setSelectedGamme(foundGamme);
    } else {
      console.error(`Product with name '${params}' not found.`);
    }
  }, [params]);

  return (
    <>
      {/* {params.gammeId} */}
      <NavGammes router={pathname} sublinks={selectedGamme} />
      <Banner sublinks={selectedGamme} />
      <LaGamme sublinks={selectedGamme} />
      <Essayer />
      <Serie />
      <EssayerGrat />
      <SeDeplacer />
    </>
  );
};

export default Page;
