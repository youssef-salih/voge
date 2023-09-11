import {
  faChevronRight,
  faGasPump,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import Link from "next/link";

type MegamenuProps = {
  links: {
    name?: string;
    image?: string;
    letters?: string;
    sublink?: boolean;
    sublinks?: Array<{
      name?: string;
      path?: string;
      new?: boolean;
    }>;
  }[];
  hoveredLink: string;
  setIsOpen: any;
  isOpen?: boolean;
};

const Megamenu: React.FC<MegamenuProps> = (props) => {
  const { links, hoveredLink, setIsOpen } = props;
  const hoveredNavLink = links.find((link) => link.name === hoveredLink);
  if (!hoveredNavLink || !hoveredNavLink.sublinks) {
    return null;
  }

  return (
    <>
      <div
        className="bg-black  absolute h-max w-full bg-opacity-60 top-[86px] z-50 left-0"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <section className="container flex mx-auto">
          <div className="w-full ">
            {hoveredNavLink.image && ( // Check if hoveredNavLink.image is defined
              <Image
                src={hoveredNavLink.image}
                width={800}
                height={800}
                alt={hoveredNavLink.image}
              />
            )}
          </div>
          <div className="w-full">
            <h2 className="text-white text-3xl font-bold mt-16  mb-3 uppercase">
              {hoveredNavLink.name}
              <span className="text-yellow-300 ml-3">
                {hoveredNavLink.letters}
              </span>
            </h2>
            <ul className="flex flex-col text-white pb-5 ">
              {/* mega integrated links */}
              {hoveredNavLink.sublinks.map((link, index) => (
                <li className="my-2" key={index}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`text-xs mr-3 text-yellow-300`}
                  />

                  <Link
                    href={link.path || "#"}
                    className="text-l font-semibold"
                  >
                    {link.name} {link.new ? "(Nouvauté)" : ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full ">
            <h2 className="text-white text-3xl font-bold mt-16 uppercase  mb-3">
              à propos
            </h2>
            <ul className="flex flex-col text-white ">
              <li className="my-2 flex ">
                <FontAwesomeIcon
                  icon={faGasPump}
                  className="text-xs  m-1  mr-4  text-yellow-300"
                />
                <p className="font-semibold">Essence</p>
              </li>
              <li className="my-2 flex">
                <FontAwesomeIcon
                  icon={faGears}
                  className=" text-xs mr-4  m-1 text-yellow-300"
                />
                <p className="font-semibold">De 125cc de 500cc</p>
              </li>
            </ul>
            <button className="bg-yellow-300 p-5 text-xl  w-1/2 font-semibold mt-4 uppercase text-white">
              faire un essai
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Megamenu;
