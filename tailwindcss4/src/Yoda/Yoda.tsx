import Cuarto from "../Componentes/Ucuarto";
import styles from "./CardtoYoda.module.css";


const CardYoda = () => {
    return (
        <section className={styles.background}>
            <div   className={styles.rightSection}>       
                       <Cuarto />        
            </div>      
            
            <div className={styles.leftSection}>

            <img src="/TezzLogo.jpeg" alt="Goku" className={styles.gokuImage} />

            </div>
                    </section>
    );
}

export default CardYoda;