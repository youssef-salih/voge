export interface Gamme {
  name: string;
  path: string;
  slogan: string;
  urls?: {
    name: string;
    path: string;
  }[];
  models?: { name: string }[];
}
export interface sublinks {
  sublinks: any;
  params?: any;
  router?: any;
}
