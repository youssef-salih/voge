import Image from "next/image";
import React from "react";

const Catalogue = () => {
  return (
    <section className="catalogue">
      <div className="container">
        <h2 className="underline text-2xl font-bold">CATALOGUE</h2>
        <h1 className="compo-bgold text-4xl font-extrabold  ">
          NOS <span>GAMMES</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quam
          recusandae perferendis, corporis blanditiis sint, quod harum libero
          amet odit quibusdam obcaecati ratione esse? Eaque sapiente molestiae
          ea magni accusantium adipisci illum a possimus, animi ut architecto
          tenetur doloribus earum?
        </p>
        <div className="images">
          <div className="box mx-auto">
            <Image
              src="/moto1.png"
              alt="moto"
              width={260}
              height={0}
              loading="lazy"
            />
            <div className="descibe">
              <h2>NAKED R</h2>
              <a href="#">VOIR LA GAMME</a>
            </div>
          </div>
          <div className="box mx-auto">
            <div className="active">
              <Image
                src="/moto2.png"
                alt="moto"
                width={260}
                height={0}
                loading="lazy"
              />
            </div>
            <div className="descibe">
              <h2>NAKED R</h2>
              <a href="#">VOIR LA GAMME</a>
            </div>
          </div>
          <div className="box mx-auto">
            <Image
              src="/moto3.png"
              alt="moto"
              width={260}
              height={0}
              loading="lazy"
            />
            <div className="descibe">
              <h2>NAKED R</h2>
              <a href="#">VOIR LA GAMME</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
