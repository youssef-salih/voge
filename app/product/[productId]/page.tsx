"use client";
import React, { useEffect, useState } from "react";
import EssayerGrat from "@/components/gammePages/gammes/prenezTournant/EssayerGrat";
import Banner from "@/components/productPage/Banner";
import Apropos from "@/components/productPage/aPropos/Apropos";
import Caracteristique from "@/components/productPage/caracteristique/Caracteristique";
import CeDeplacer from "@/components/productPage/seDeplacer/CeDeplacer";
import { SubNavLink } from "../../../layout/headerLinkData";
import { usePathname } from "next/navigation";
import Nav from "@/components/productPage/Nav";
import { products } from "@/layout/products";
import SeDeplacer from "@/components/gammePages/gammes/SeDeplacerMoinsPolluer/SeDeplacer";

const Page = ({ params }: { params: { productId: string } }) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    const foundProduct = products.find(
      (item) => item.name === params.productId
    );

    if (foundProduct) {
      setSelectedProduct(foundProduct);
    } else {
      console.error(`Product with name '${params.productId}' not found.`);
    }
  }, [params.productId]);

  // console.log(params.productId);
  // get the path
  const pathname = usePathname();
  return (
    <>
      <Nav router={pathname} sublinks={SubNavLink} params={params.productId} />
      {selectedProduct ? (
        <>
          <Banner product={selectedProduct} />
          <Apropos product={selectedProduct} />
          <Caracteristique product={selectedProduct} />
          <EssayerGrat />
          <SeDeplacer/>
          {/* <CeDeplacer /> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Page;
