import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="box">
          <Image src="/ADRESSE.svg" alt="adress" width={800} height={0} />
          <div className="text">
            <h2 className=" text-2xl font-bold">ADRESSE</h2>
            <address>68, Bd Omar El Idrissi</address>
            <p>(en face de Venezia Ice 2Mars)</p>
          </div>
        </div>
        <div className="box">
          <Image src="/vogeblack.png" alt="vogeblack" width={800} height={0} />
        </div>
        <div className="box">
          <Image src="/Asset1.svg" alt="vogeblack" width={800} height={0} />
          <div className="text">
            <h2 className="text-2xl font-bold">Phone</h2>
            <span>+212 522 224 222</span>
            <span>+212 664 307 777</span>
            <span>+212 664 122 792 </span>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="text">
          <h2 className="text-2xl font-bold">JOIN OUR NEWSELETTER</h2>
          <p>YOUR EMAIL</p>
        </div>
        <div className="icons">
          <Image src="/facebook.svg" alt="vogeblack" width={10} height={0} />
          <Image src="/Asset1.svg" alt="vogeblack" width={10} height={0} />
          <Image src="/Asset1.svg" alt="vogeblack" width={10} height={0} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
