import styles from "./Contact.module.css"

const FirstCard = () => {
    return(
        <div className={styles.texto}>
            <h1 className={styles.h1}>
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
        </div>
    )
}


export default ContactMe;