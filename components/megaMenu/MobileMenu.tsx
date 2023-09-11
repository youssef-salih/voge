import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MobileMenu = () => {
  return (
    <>
      <section className=" border-y-2 h-[87%] mt-6 ">
        <ul className="h-full text-lg font-bold text-white ">
          <li className="my-5">
            <a href="/">Acceuil</a>
          </li>
          <li className="my-5">
            <a href="/gamme/naked-r">Naked R</a>
          </li>
          <li className="my-5">
            <a href="/gamme/classic">Classic AC</a>
          </li>
          <li className="my-5">
            <a href="/gamme/trail/">Trail DS</a>
          </li>
          {/* <li className="my-5">Electric ER</li>
          <li className="my-5"> Scooter</li> */}
          <li className="my-5">Contact</li>
          <li className="my-5">Revendeurs</li>
          <li className="my-5">Devenir revendeur</li>
          <li className="my-5">Faire un essai</li>
        </ul>
      </section>
    </>
  );
};

export default MobileMenu;
