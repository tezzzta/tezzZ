import styles from "./Principal.module.css"
import Astro from "./Astronauta";
import {motion} from "framer-motion"

import { useEffect, useState,useRef } from "react"


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
  };
  
  
  




  const Texto = () => {
    const { ref, isVisible } = useIsVisible();
    
    return (
      <div
        ref={ref}
        className={styles.eldiv}
      >
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 0}} // Inicialmente invisible
            animate={{ opacity: 1, y: ["7px", "-15px", "-1px"] }} // Cambia la opacidad cuando es visible
            transition={{ duration: 1, delay: 5 }} // Duración de la animación
          >
            <div className={styles.snt}>
              <h2> Sigue bajando para ver más </h2>
              <div className="text-4xl">▼</div>
  
            </div>
          </motion.div>
        ) : null}
      </div>
    )
  }




const Componente = () =>{
    return(
        <div className={styles.background}>
          <Astro/>  
          <Texto/>
        </div>
    )
}


export default Componente;