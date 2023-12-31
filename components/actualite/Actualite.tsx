import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Actualite = () => {
  return (
    <section className="actualite">
      <button className="arrow-right">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <div className="head">
        <h2 className="underline text-2xl font-bold">ACTUALITE</h2>
        <h1 className="compo-bgold text-3xl font-bold">
          EN CE <span>MOMENT</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          dolorem laudantium labore. Perferendis, sequi alias.
        </p>
        <Link href="#">ACCEDER AU BLOG</Link>
      </div>

      <div className="holder">
        <div className="image">
          <div className="box">
            <h3>L&apos;ATTENTEST TEMINEE</h3>
            <p>DECOUVREZ LES NOUVEALUTES 525CC!</p>
            <Link href="#">EN SAVOIR PLUS</Link>
          </div>
        </div>
      </div>
      <button className="arrow-left">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </section>
  );
};

export default Actualite;
