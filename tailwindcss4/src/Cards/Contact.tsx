import styles from "./Contact.module.css"
import Buffon from "./Buffon";
const FirstCard = () => {
    return(
        <div className={styles.texto}>
            <h1 className={styles.ryan}>
                Contacto
            </h1>
            <p className={styles.pablo}> ¡Envíame un email si quieres conectar conmigo! Tambien puedes encontrarme en LinkedIn y contactarme mucho más rápido</p>
            <p className={styles.yunikua}> a.s.testa.c@outlook.com</p>
        </div>
    )
}


const ContactMe = () => {
    return(
        <div >
            <div className={styles.background}>
                <FirstCard/>
                
                
            </div>
            <div className="bg-[#111111] display flex justify-center items-center h-screen mt-10 ">
                <Buffon/>
                </div>
        </div>
    )
}


export default ContactMe;
