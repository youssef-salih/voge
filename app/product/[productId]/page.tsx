import React from "react";
import EssayerGrat from "@/components/gammePages/gammes/prenezTournant/EssayerGrat";
import Banner from "@/components/productPage/Banner";
import Apropos from "@/components/productPage/aPropos/Apropos";
import Caracteristique from "@/components/productPage/caracteristique/Caracteristique";
import { SubNavLink } from "../../../layout/headerLinkData";
import { usePathname } from "next/navigation";
import Nav from "@/components/productPage/Nav";
import { products } from "@/layout/products";
import SeDeplacer from "@/components/gammePages/gammes/SeDeplacerMoinsPolluer/SeDeplacer";

export async function generateStaticParams() {
  const params = products.map((item) => item.name);
  return params;
}

const Page = ({ params }: { params: { productId: string } }) => {
  const selectedProduct = products.find(
    (item) => item.name === params.productId
  );

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
