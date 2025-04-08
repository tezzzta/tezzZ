// src/data/cardsData.ts
export interface CarousData {
    id: number;
    title: string;
    text: string;
    img: string;
  }
  


  

  
  export const cardsData: CarousData[] = [
    {
      id: 1,
      title: "Montañas Nevadas",
      text: "Explora la belleza de las montañas cubiertas de nieve.",
      img: "https://picsum.photos/400/200?random=1",
    },
    {
      id: 2,
      title: "Playa Tropical",
      text: "Disfruta del sol y la arena en una playa paradisíaca.",
      img: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      title: "Bosque Encantado",
      text: "Adéntrate en un bosque mágico y descubre su encanto.",
      img: "https://picsum.photos/400/250?random=3",
    },
    {
      id: 4,
      title: "Ciudad Moderna",
      text: "Vive la experiencia urbana en una ciudad moderna y vibrante.",
      img: "https://picsum.photos/400/300?random=4",
    },
]