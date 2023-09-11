"use client";
import React, { useState } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import MobileMenu from "@/components/megaMenu/MobileMenu";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  return (
    <header>
      {isOpenMobile ? (
        <div className="absolute top-0 -left-0 h-screen z-50 bg-black bg-opacity-90 p-5 w-screen">
          <div className="mb-6">
            <FontAwesomeIcon
              icon={faXmark}
              className=" float-right mr-2 text-yellow-200 font-extrabold text-2xl mb-4"
              onClick={() => setIsOpenMobile(!isOpenMobile)}
            />
          </div>
          <div className="h-screen mt-10">
            <MobileMenu />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="image container">
        <Image src="/voge-logo.png" alt="logo" width={80} height={80} />
      </div>
      <div className="holder">
        <ul className="links w-[45rem]">
          <Navlinks />
        </ul>

        <button className="btn">
          <span> FAIRE UN ESSAI </span>
        </button>
        <div className="icons lg:flex hidden ">
          <a href="">
            {" "}
            <FontAwesomeIcon icon={faFacebookF} className="mr-3" />
          </a>

          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <button className="navbar">
        <FontAwesomeIcon
          icon={faBars}
          onMouseOver={() => setIsOpenMobile(!isOpenMobile)}
        />
      </button>
    </header>
  );
};

export default Navbar;
