import React from 'react';
import { cardsData, CardData } from '../Data/Dataexam';
import styles from './Card.module.css';
import Marquee from 'react-fast-marquee';

const getRandomCards = (data: CardData[], count: number): CardData[] => {
  return [...data]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

const Gallery: React.FC = () => {
  const randomCards = getRandomCards(cardsData, 12);

  return ( // 👈 ESTO FALTABA
    <div className={styles.first}>
      <Marquee>
        {randomCards.map((card) => {
          console.log(card.title, card.text); 

          return (
            <div key={card.id} className="grid w-full bg-[#1c1f22]">
              <div className={styles.card}>
                <img src={card.img} alt={card.title} className={styles.cardImg} />
                <div className={styles.content + " text-white "}>
                  <p>{card.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};




export default Gallery;