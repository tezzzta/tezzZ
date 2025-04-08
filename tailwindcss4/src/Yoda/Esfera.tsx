import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import styles from "./Yoda.module.css";

const Goku = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const sphere = document.getElementById("sphere");

            if (!sphere) return;

            const rect = sphere.getBoundingClientRect();
            const sphereX = rect.left + rect.width / 2;
            const sphereY = rect.top + rect.height / 2;
            const distanceX = clientX - sphereX;
            const distanceY = clientY - sphereY;
            const distance = Math.sqrt(distanceX ** 1.5 + distanceY ** 1.5);

            if (distance < 180) {  // Distancia de detección ajustada
                const angle = Math.atan2(distanceY, distanceX);
                const moveX = Math.cos(angle) * -25;  // Movimiento más leve (-15px)
                const moveY = Math.sin(angle) * -25;

                controls.start({ x: moveX, y: moveY });
            } else {
                controls.start({ x: 0, y: 0 });
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [controls]);

    return (
        <div>
            <motion.div 
                id="sphere"
                className={styles.sphere}
                animate={controls}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
            />
        </div>
    );
};

export default Goku;
