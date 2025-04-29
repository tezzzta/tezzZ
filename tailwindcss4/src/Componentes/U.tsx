import Gallery from "./Cards"
import styles from "./Ucuarto.module.css"
import {motion} from "framer-motion"




const Tercero = () => {



    return(
      

        <div 
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