import { Gamme } from "@/types/tGamme";
import { Product } from "@/types/tProduct";

// navbar links
export const NavLink = [
  {
    name: "naked",
    path: "/gamme/naked-r",
    letters: "R",
    image: "/mega/naked.png",
    sublink: true,
    sublinks: [
      {
        name: "la gamme naked",
        path: "/gamme/naked-r",
        new: false,
      },
      {
        name: "300 R",
        path: "/product/300r",
        new: false,
      },
      {
        name: "500 R",
        path: "/product/500r",
        new: false,
      },
      {
        name: "525 R",
        path: "/product/525r",
        new: true,
      },
    ],
  },
  {
    name: "classic",
    path: "/gamme/classic",
    letters: "AC",
    image: "/mega/classic.png",
    sublink: true,
    sublinks: [
      {
        name: "La gamme Classic AC",
        path: "/gamme/classic",
        new: false,
      },
      {
        name: "300AC",
        path: "/product/300ac",
        new: false,
      },
      {
        name: "300ACX",
        path: "/product/300acx",
        new: false,
      },
      {
        name: "500AC",
        path: "/product/500ac",
        new: false,
      },
    ],
  },
  {
    name: "trail",
    path: "/gamme/trail",
    letters: "DS",
    image: "/mega/trail.png",
    sublink: true,
    sublinks: [
      {
        name: "La gamme Trail DS",
        path: "/gamme/trail",
        new: false,
      },
      {
        name: "525dsx",
        path: "/product/525dsx",
        new: false,
      },
      {
        name: "650dsx",
        path: "/product/650dsx",
        new: false,
      },
      {
        name: "300ds",
        path: "/product/300ds",
        new: false,
      },

      {
        name: "650ds",
        path: "/product/650ds",
        new: false,
      },
      {
        name: "300 rally",
        path: "/product/300rally",
        new: false,
      },
    ],
  },
  // {
  //   name: "electric",
  //   letters: "er",
  //   path: "/gamme/electric",

  //   new: false,
  //   image: "/mega/electric.png",
  //   sublink: true,
  //   sublinks: [
  //     {
  //       name: "La gamme Electric ER",
  //       path: "/gamme/electric",
  //       new: false,
  //     },
  //     {
  //       name: "500d",
  //       path: "/",
  //       new: false,
  //     },
  //   ],
  // },
  // {
  //   name: "scooter",
  //   path: "/gamme/scooter",

  //   image: "/mega/scooter.png",
  //   sublink: true,
  //   sublinks: [
  //     {
  //       name: "la gamme naked",
  //       path: "/",
  //       new: false,
  //     },
  //     {
  //       name: "500d",
  //       path: "/",
  //       new: false,
  //     },
  //     {
  //       name: "600d",
  //       path: "/",
  //       new: false,
  //     },
  //     {
  //       name: "700d",
  //       path: "/",
  //       new: false,
  //     },
  //   ],
  // },
  {
    name: "Revendus",
    path: "/",
  },
  {
    name: "A propos",
    path: "/",
  },
  {
    name: "Contact",
    path: "/",
  },
];
// small navbar
export const SubNavLink: Gamme[] = [
  {
    name: "naked-r",
    path: "/gamme/naked-r",
    slogan: "Naked R",
    // urls showed in the nav
    urls: [
      { name: "naked-r", path: "/gamme/naked-r" },
      { name: "300 R", path: "/product/300r" },
      { name: "500 R", path: "/product/500r" },
    ],
    //all your motors for this models
    models: [
      { name: "125r" },
      { name: "300r" },
      { name: "500r" },
      { name: "525r" },
    ],
  },
  {
    name: "classic",
    path: "/gamme/classic",
    slogan: "classic AC",
    urls: [
      { name: "GAMME CLASSIC AC", path: "/gamme/classic" },
      { name: "300AC", path: "/product/300ac" },
      { name: "300ACX", path: "/product/300acx" },
      { name: "500AC", path: "/product/500ac" },
    ],
    //all your motors for this models
    models: [{ name: "300ac" }, { name: "300acx" }, { name: "500ac" }],
  },
  {
    name: "trail",
    path: "/gamme/trail",
    slogan: "trail ds",
    urls: [
      { name: "GAMME TRAIL DS", path: "/gamme/trail" },
      { name: "300 RALLY", path: "/product/300rally" },
      { name: "300DS", path: "/product/300ds" },
      { name: "525DSX", path: "/product/525dsx" },
      { name: "650DS", path: "/product/650ds" },
    ],
    //all your motors for this models
    models: [
      { name: "300rally" },
      { name: "300ds" },
      { name: "525dsx" },
      { name: "650ds" },
      { name: "650dsx" },
    ],
  },
  // {
  //   name: "electric",
  //   path: "/gamme/electric",
  //   slogan: "",
  //   urls: [
  //     { name: "GAMME ELECTRIC ER", path: "/gamme/electric" },
  //     { name: "ER10", path: "" },
  //   ],
  //   //all your motors for this models
  //   models: [{ name: "ER10" }],
  // },
  // {
  //   name: "scooter",
  //   path: "/gamme/scooter",
  //   slogan: "",
  // },
];
