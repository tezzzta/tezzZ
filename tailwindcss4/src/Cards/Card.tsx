import React from "react";
import styles from "./Card.module.css";



const projects: Valhala[] =[
    {
        title: "B-Train ",
        subtitle: " React, ExpressJs, SQL, Framer-Motion, TypeScript",
        description: "Un Foro eduactivo interactivo, que propone una solución interactiva y con asistencia de IA para la creación de formularios y evaluaciones, se encuentra en desarrollo pero puedes revisarlo acá.",
        imageUrl: "/Photos/B-train.jpeg", 
        github: "https://github.com/tomas223-gr/Foro-educativo",
      },
      {
        title: "Sanatización y Validación  ",
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
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline"
        >
          Revisa repositorio
        </a>.

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

             <div className={styles.cardsContainer}>
                {projects.map((projects, index)  => (
                    <ProjectImage key={index} {...projects} />
                ))}
            </div>
           </div>
        )

}


export default Porta;
