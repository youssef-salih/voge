import React from "react";
import EssayerGrat from "@/components/gammePages/gammes/prenezTournant/EssayerGrat";
import Banner from "@/components/productPage/Banner";
import Apropos from "@/components/productPage/aPropos/Apropos";
import Caracteristique from "@/components/productPage/caracteristique/Caracteristique";
import { SubNavLink } from "../../../layout/headerLinkData";

import Nav from "@/components/productPage/Nav";
import { products } from "@/layout/products";
import SeDeplacer from "@/components/gammePages/gammes/SeDeplacerMoinsPolluer/SeDeplacer";

const Page = ({ params }: { params: { productId: string } }) => {
  const selectedProduct = products.find(
    (item) => item.name === params.productId
  );

  // console.log(params.productId);
  // get the path

  return (
    <>
      <Nav sublinks={SubNavLink} params={params.productId} />
      {selectedProduct ? (
        <>
          <Banner product={selectedProduct} />
          <Apropos product={selectedProduct} />
          <Caracteristique product={selectedProduct} />
          <EssayerGrat />
          <SeDeplacer />
          {/* <CeDeplacer /> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Page;
