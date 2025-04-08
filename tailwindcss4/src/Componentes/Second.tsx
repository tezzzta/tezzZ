import styles from "./Second.module.css"
import Tercero from "./U"
import CardYoda from "../Yoda/Yoda";
import ProjectImage from "../Cards/Card";
import Taiwan from "../Cards/Valhalla";
import ContactMe from "../Cards/Contact";

const Second = () => {
    return(
      <div>
  <div className={styles.backg}>
        </div>
    
        <CardYoda/>
        

        <Tercero/>
        

        <div className={styles.backg}> 
          <ProjectImage/>
        </div>
        <Taiwan/>
        <ContactMe/>
      </div>
    )  
}

export default Second;  