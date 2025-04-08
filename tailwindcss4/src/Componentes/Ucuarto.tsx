import { useEffect, useState,useRef } from "react"
import styles from "./U.module.css"
import {motion} from "framer-motion"


const useIsVisible = (options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isVisible };

}


const Cuarto = () => {
    const { ref, isVisible } = useIsVisible();



    return(


        <div ref={ref}
        className={styles.backg}>


        {isVisible ?    (   <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.5, delay: 0.85 }} ><h1 className={styles.snt}> Hola! Soy Testa</h1>
                <h2 className={styles.h3}> Seguridad de la Información | <span style={{ color: "purple" }}>Desarrollo Web</span>  </h2>
                <p className={styles.ploploplo}>
                Soy un analista de seguridad de la información apasionado por el desarrollo web, el análisis de datos y la computación en la nube. Con más de un año de experiencia en informática y un fuerte deseo de innovar, me encantaría que colaboremos juntos.              
                  </p>

                    </motion.div>)
                        : null}

        </div>

        
    )
}

export default Cuarto;  