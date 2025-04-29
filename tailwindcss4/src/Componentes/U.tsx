import { useEffect, useState,useRef } from "react"
import Gallery from "./Cards"
import styles from "./Ucuarto.module.css"
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


const Tercero = () => {
    const { ref, isVisible } = useIsVisible();



    return(
      

        <div ref={ref}
        className={styles.backg}>
         

        <h1 className={styles.snt}> Tech Stack</h1>
                <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.2, delay: 0.95 }} >
                       <Gallery/>

                    </motion.div>
                 
                 
       
        </div>
        
      
    )
}

export default Tercero;  