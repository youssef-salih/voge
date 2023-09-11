import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Model = () => {
  return (
    <>
      <section className="model">
        <div className="container">
          <h1 className="compo-bgold  text-2xl font-bold">
            ESSAYEZ NOS MODELES <span>GRATUITEMENT</span>
          </h1>
          <div className="box">
            <Image src="/vogemoto.png" alt="moto" width={800} height={0} />
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                sequi a velit nisi itaque commodi eligendi ratione delectus
                maiores vel minus dignissimos dolore! Nostrum odit obcaecati
                culpa illum voluptatem ipsum!
              </p>
              <button className="btn text-black">
                <span> FAIRE UN ESSAI </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="histoire">
        <div className="container">
          <div className="content">
            <h2 className="underline  text-2xl font-bold">VOGE</h2>
            <h1 className="compo-bgold  text-2xl font-bold">
              HISTOIRE DE <span>LA MARQUE</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              necessitatibus?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              reprehenderit aliquid dolor perspiciatis similique? Reiciendis
              blanditiis asperiores voluptatum harum velit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              tempore quis modi nemo consequuntur possimus at expedita corrupti
              vel illo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem
              voluptatibus molestiae possimus consequuntur cum harum, illo
              exercitationem et sint? Ab error ipsum laborum. Numquam quia
              deserunt mollitia molestiae ut?
            </p>
          </div>
        </div>
      </section>
      <div className="photos">
        <div className="container">
          <div className="hold">
            <p>
              <span>SUIVEZ NOUS</span>
              <span>VOGE_MAROC@</span>
            </p>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
          <div className="images">
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
            <Image src="/vogeimg.jpg" alt="" width={800} height={0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
