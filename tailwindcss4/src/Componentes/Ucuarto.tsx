import { useEffect, useState,useRef } from "react"
import styles from "./U.module.css"
import {motion} from "framer-motion"
import Buffon from "../Cards/Buffon"



const Cuarto = () => {



    return(


        <div
        className={styles.backg}>


             <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.5, delay: 0.85 }} >
                <h1 className={styles.snt}> ¡Hola! Soy <span className={styles.ryan}>Testa</span></h1>
                <h2 className={styles.h3}> Ciberseguridad | <span style={{ color: "white" }}>Programador FullStack</span>  </h2>
                <p className={styles.ploploplo}>
                Soy un analista de seguridad de la información apasionado por el desarrollo web, el análisis de datos y la computación en la nube. Con más de un año de experiencia en informática y un fuerte deseo de innovar.
                  </p>
                  <p className={styles.ploploplo}>¡Me encantaría que colaboremos juntos!                        </p>

                    </motion.div>
                        
                    <Buffon/>
        </div>

        
    )
}

export default Cuarto;  