// src/data/cardsData.ts
import accessImg from "../assets/access.jpg";
import concrochet from "../assets/concrochet.jpeg";

export interface CarousData {
    id: number;
    title: string;
    text: string;
    img: string;
    label: string[];
    github: string;
    link?: string;
  }
  


  

  
  export const Data: CarousData[] = [
  {
    id: 1,
    title: "Accest Fast",
    text: "Una aplicacion de Android con soporte para web para gestionar el acceso rápido a sitios privados, automatizando la recolección de información y asimismo brindando herramientas de chequeo al administrador del sitio.",
    img: accessImg,
    label: [ "Expo", "React Native", "Zustand", "Supabase", "NativeWind", "TypeScript"],
    github: "https://github.com/tezzzta/codeAcces",
    link: "https://access-fast.vercel.app/login"
  },
  {
    id: 2,
    title: "ConCrochet",
    text: "Plantilla de Astro, usando componentes en React para un ecommerce de productos de crochet hechos a mano. Usando herramientas como Zustand para manejar estados y TailwindCSS para el diseño.",
    img: concrochet,
    label: ["TypeScript", "Zustand", "Astro", "React", "TailwindCSS"], 
    github: "https://github.com/CarlDesigner/ConCrochet",
    link: "https://con-crochet.vercel.app/"


  },
  // {
  //   id: 3,
  //   title: "Bosque Encantado",
  //   text: "Adéntrate en un bosque mágico y descubre su encanto.",
  //   img: "https://picsum.photos/600/450?random=3",     
  //   label: ["TypeScript", "Express", "Python", "React", "Node.js"],
  //   github: "https://github.com/tezzzta"


  // },
  // {
  //   id: 4,
  //   title: "Ciudad Moderna",
  //   text: "Vive la experiencia urbana en una ciudad moderna y vibrante.",
  //   img: "https://picsum.photos/600/400?random=4",
  //   label: ["TypeScript", "Express", "React", "Node.js"],
  //   github: "https://github.com/tezzzta"

  // }
];

