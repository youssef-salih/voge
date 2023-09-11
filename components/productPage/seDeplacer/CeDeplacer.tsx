import React from "react";

const CeDeplacer = () => {
  return (
    <div className="bg-[#202020] flex flex-col justify-center items-center  gap-5 text-white">
      <div className="container mt-8">
        <h1 className="font-bold text-2xl my-4">¹ INFORMATION LOA</h1>
        <h2 className="font-bold text-2xl my-4">
          LOCATION AVEC OPTION D&apos;ACHAT
        </h2>
        <p className="  my-4">
          <span className="font-bold text-xl mr-2">Exemple:</span>
          Pour une Location avec Option d&apos;Achat, pour une Voge 300 R d&apos;un
          montant de 4 250,00 € TTC sur 37 mois, après paiement à la livraison
          d&apos;un premier loyer majoré de 850,00 €, vous remboursez 36 loyers de
          64,66 €, hors assurance facultative. Le montant total dû hors option
          d&apos;achat est de 3 177,76 €. Option d&apos;achat de 1 700,00 € soit un
          montant total dû option d&apos;achat incluse de 4 877,76 €. Le coût mensuel
          de l&apos;assurance Sécurivie facultative est de 4,68 € et s&apos;ajoute aux
          loyers ci-dessus. Le montant total dû au titre de l&apos;assurance
          facultative est de 173,16 €.
        </p>
        <p className=" text-gray-400">
          Offre de location avec option dachat réservée aux particuliers, sous
          réserve dacceptation par CA Consumer Finance, bailleur dont Sofinco
          est une marque, SA au capital de 554 482 422€, 1 Rue Victor Basch - CS
          70001 - 91068 MASSY Cedex, 542 097 522 RCS Evry. Intermédiaire
          dassurance inscrit à lORIAS sous le N° 07 008 079 (www.orias.fr).
          Assurances facultatives souscrites auprès de CACI LIFE Dac (Décès),
          CACI NON LIFE Dac (Perte Totale et Irréversible dAutonomie, Invalidité
          Permanente et Totale, Invalidité Temporaire Totale de Travail). Vous
          disposez dun droit légal de rétractation. Cette publicité est diffusée
          par DIP SAS, 117 Traverse de la Montre 13011 Marseille, capital : 152
          449,02€, numéro RCS 069 802 296 Marseille qui agit en tant
          quintermédiaire de crédit non exclusif de CA Consumer Finance et
          apporte son concours à la réalisation dopérations de crédit à la
          consommation sans agir en qualité de bailleur
        </p>
      </div>
      <div className="container text-center flex flex-col  justify-end items-center  pt-12 pb-2">
        <h1 className="text-xl font-bold uppercase">
          Pour les trajets courts, privilégiez la marche ou le vélo.
        </h1>
        <p className="text-lg font-extrabold">#SeDéplacerMoinsPolluer</p>
      </div>
    </div>
  );
};

export default CeDeplacer;
