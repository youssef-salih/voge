import { ProProps } from "@/types/tProduct";
import Image from "next/image";
import { FC } from "react";

const Garantie: FC<ProProps> = ({ product }) => {
  console.log(product);
  return (
    <div className="cContainer flex justify-around mx-auto my-16">
      <Image
        src="/product/permi.png"
        alt=""
        width={800}
        height={200}
        className="lg:w-48 w-20"
      />
      <Image
        src="/product/norme.png"
        alt=""
        width={800}
        height={200}
        className="lg:w-48 w-20"
      />
    </div>
  );
};

export default Garantie;
