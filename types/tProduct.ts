export interface Product {
  name: string;
  main_image: string;
  model: string;
  prix_mois: string;
  location: string;
  location_date_debut: string;
  location_date_fin: string;
  description: string;
  tarifTTC: string;
  serie: string;
  serie_desc: string;
  weight: string;
  dimension: string;
  moteur: string;
  cylindre: string;
  alesage: string;
  taux_deC: string;
  puissance_max: string;
  couple_max: string;
  demarreur: string;
  injection: string;
  boite_vitesse: string;
  transmission_finale: string;
  frain_avant: string;
  frain_arriere: string;
  pneu_avant: string;
  pneu_arriere: string;
  volume_reservoir: string;
  couleur: string;
  mesure?: string;
  gallery?: string[];
  swiper?: string[];
}
export interface ProProps {
  product: any;
}
