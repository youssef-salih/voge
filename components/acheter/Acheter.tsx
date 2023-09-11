import Image from "next/image";

const Acheter = () => {
  return (
    <section className="acheter">
      <div className="container mx-auto">
        <div className="holder">
          <h2 className="underline  text-2xl font-bold">ACTUALITE</h2>
          <h1 className="compo-bgold  text-2xl font-bold">
            EN CE <span>MOMENT</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eius
            et nam sed reiciendis exercitationem perferendis corporis dicta?
            Veritatis deserunt, a quis consectetur beatae error!
          </p>
          <a href="">Trouver un revendeur</a>
        </div>
        <div className="images">
          <div className="image">
            <Image src="/Voge-achtez.jpg" width={800} height={0} alt="voge" />
            <Image src="/voge-achtez2.jpeg" width={800} height={0} alt="voge" />
          </div>
          <div className="image">
            <Image src="/voge-achtez2.jpeg" width={800} height={0} alt="voge" />
            <Image src="/Voge-achtez.jpg" width={800} height={0} alt="voge" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acheter;
