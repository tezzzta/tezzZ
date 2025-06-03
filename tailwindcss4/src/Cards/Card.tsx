import React from "react";
import styles from "./Card.module.css";


//acá aremos un buttom, pos YoeCode dijo que asi se ve mejor 
import styled from 'styled-components';

const Button: React.FC<Odin> = ({github}) => {
  const handleClick = () => {
    window.open(github, "_blank"); // abre en una nueva pestaña
  };
  return (

    <StyledWrapper>
      <button onClick={handleClick} className="Btn">
        <span className="svgContainer">
          <svg fill="white" viewBox="0 0 496 512" height="2em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
        </span>
        <span className="BG" />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Btn {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    /* overflow: hidden; */
    border-radius: 6px;
    cursor: pointer;
    transition: all .3s;
  }

  .svgContainer {
    width: 180%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(0px);
    letter-spacing: 0.8px;
    border-radius: 15px;
    transition: all .3s;
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #181818;
    z-index: -1;
    border-radius: 10px;
    pointer-events: none;
    transition: all .3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
    backdrop-filter: blur(4px);
  }`;




  ///
  //
  //
  //
  //acá empieza el componente de los proyectos 
  //
  //
  //
  //
  //


const projects: Valhala[] =[
    {
        title: "B-Trained ",
        subtitle: " React, ExpressJs, SQL, Framer-Motion, TypeScript",
        description: "Un Foro eduactivo interactivo, que propone una solución interactiva y con asistencia de IA para la creación de formularios y evaluaciones, se encuentra en desarrollo pero puedes revisarlo acá.",
        imageUrl: "/Photos/B-train.jpeg", 
        github: "https://github.com/tomas223-gr/Foro-educativo",
      },
      {
        title: "Validación de entradas",
        subtitle: "Node.JS, JavasScript, SQL, JSONWebToken",
        description: "Se implementa Sanitización y Validación de un sitio web en desarrollo, para evitar ataques de inyección SQL y XSS, se encuentra en desarrollo pero puedes revisarlo acá.",
        imageUrl: "/Photos/Back.jpeg",
        github: "https://github.com/tomas223-gr/Foro-educativo",
      },
      
]



// 
interface Valhala {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    github?: string;
}


interface Odin{
  github?: string;

}


const ProjectImage: React.FC<Valhala> = ({title, subtitle, description, imageUrl, github }) => {
  return (


        <div>
<div className={styles.back}>
        <div className={styles.fondo}>
        <div className={styles.projectImage}>
      <img 
        src={imageUrl} 
        alt={title}
        className={styles.image}
      />
      
    </div>
        </div> 
      <div>
        <h2 className={styles.projects_title__J6lF1}>{title}</h2>
        <p className={styles.projects_subtitle__2c1g0}>{subtitle}</p>
        <p className={styles.projectsdescriptionW9r7B}>{description}</p>
        <div>
        <Button github={github} />
        </div>
        </div>
</div>
        </div>
  );
};







const Porta = () => {
        return(
           <div>
            <div >
                <h1 className={styles.TitleContainer}> Proyectos </h1>
            </div>

             <div className={styles.cardsContainer + ""}>
                {projects.map((projects, index)  => (
                    <ProjectImage key={index} {...projects} />
                ))}
            </div>
           </div>
        )

}


export default Porta;
