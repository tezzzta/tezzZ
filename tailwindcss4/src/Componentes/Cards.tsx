import React from 'react';
import { cardsData, CardData } from '../Data/Dataexam';
import styles from './Card.module.css';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const getRandomCards = (data: CardData[], count: number): CardData[] => {
  return [...data]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

const Gallery: React.FC = () => {
  const randomCards = getRandomCards(cardsData, 12);

  return ( 
    <div className={styles.first}>
      <Marquee
      speed={60}
      direction="right"
      pauseOnHover={true}
      gradient={false}
      >
        {randomCards.map((card) => {
          console.log(card.title, card.text); 

          return (
            <div key={card.id} className="grid h-55 w-full py-1 bg-[#101113]">
              <Link to='/project'>
              <div className="h-[95%] w-[95%] bg-[#0f0f0f] border-2 border-[#1a1919]  rounded hover:border-[#5f499c]">
                <img src={card.img} alt={card.title} className="h-[150px] w-[200px] px-8" />
                <div className= " text-white font-semibold">
                  <p>{card.title}</p>
                </div>
              </div>
              </Link>

            </div>
          );
        })}
      </Marquee>
    </div>
  );
};




export default Gallery;