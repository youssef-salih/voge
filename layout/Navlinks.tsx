import { useState } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "./headerLinkData";
import Megamenu from "@/components/megaMenu/Megamenu";
import Image from "next/image";

const Navlinks = () => {
  const [hovredLink, setHovredLink] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = (link: string, hasSublinks: boolean) => {
    hasSublinks ? setIsOpen(true) : false;
    setHovredLink(link);
  };

  return (
    <>
      {NavLink.map((link, index) => (
        <li
          key={index}
          className="active flex items-center font-bold text-xs tracking-widest uppercase"
          value={"naked"}
          onMouseOver={() => handleHover(link.name, link.sublink || false)}
        >
          <a href={link.path} className="flex gap-x-2">
            {link.name}
            {link.sublinks ? (
              <Image src="/icons/arrowdown.svg" alt="arrow" width={11} height={11} />
            ) : (
              ""
            )}
          </a>
        </li>
      ))}

      {isOpen ? (
        <Megamenu
          links={NavLink}
          hoveredLink={hovredLink}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Navlinks;
