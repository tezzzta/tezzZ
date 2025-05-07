import styles from "./Astro.module.css"
import {motion} from "framer-motion"



const Astro = () => {
  return (

   <div>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, delay: 0.25 }}
    className=" overflow-hidden"
    >
    <div className={styles.boxofstar1}>
    <div className={`${styles.star} ${styles.starposition1}`}></div>
    <div className={`${styles.star} ${styles.starposition2}`}></div>
    <div className={`${styles.star} ${styles.starposition3}`}></div>
    <div className={`${styles.star} ${styles.starposition4}`}></div>
    <div className={`${styles.star} ${styles.starposition5}`}></div>
    <div className={`${styles.star} ${styles.starposition6}`}></div>
    <div className={`${styles.star} ${styles.starposition7}`}></div>
  
      </div>
      <div className={styles.boxofstar2}>
      <div className={`${styles.star} ${styles.starposition1}`}></div>
    <div className={`${styles.star} ${styles.starposition2}`}></div>
    <div className={`${styles.star} ${styles.starposition3}`}></div>
    <div className={`${styles.star} ${styles.starposition4}`}></div>
    <div className={`${styles.star} ${styles.starposition5}`}></div>
    <div className={`${styles.star} ${styles.starposition6}`}></div>
    <div className={`${styles.star} ${styles.starposition7}`}></div>
      </div>
      <div className={styles.boxofstar3}>
      <div className={`${styles.star} ${styles.starposition1}`}></div>
    <div className={`${styles.star} ${styles.starposition2}`}></div>
    <div className={`${styles.star} ${styles.starposition3}`}></div>
    <div className={`${styles.star} ${styles.starposition4}`}></div>
    <div className={`${styles.star} ${styles.starposition5}`}></div>
    <div className={`${styles.star} ${styles.starposition6}`}></div>
    <div className={`${styles.star} ${styles.starposition7}`}></div>
      </div>
      <div className={styles.boxofstar4}>
      <div className={styles.starposition1}></div>
      <div className={`${styles.star} ${styles.starposition1}`}></div>
    <div className={`${styles.star} ${styles.starposition2}`}></div>
    <div className={`${styles.star} ${styles.starposition3}`}></div>
    <div className={`${styles.star} ${styles.starposition4}`}></div>
    <div className={`${styles.star} ${styles.starposition5}`}></div>
    <div className={`${styles.star} ${styles.starposition6}`}></div>
    <div className={`${styles.star} ${styles.starposition7}`}></div>
      </div>
     </motion.div> 
     {/* el astronuata mi bro */}
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.25 }}
      >
      <div data-js="astro" className={styles.astronaut}>
        <div className={styles.head}></div>
        <div className={`${styles.arm} ${styles.armleft}`}></div>
        <div className={`${styles.arm} ${styles.armright}`}></div>
        <div className={styles.body}>
          <div className={styles.panel}></div>
        </div>
        <div className={`${styles.leg} ${styles.legleft}`}></div>
        <div className={`${styles.leg} ${styles.legright}`}></div>
        <div className={styles.schoolbag}></div>
      </div>
      </motion.div>
   </div> 

  )
}
//{`${styles.leg} ${styles.legright}`}

export default Astro
