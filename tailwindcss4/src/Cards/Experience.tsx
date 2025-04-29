import styles from './Experience.module.css';

const experiences = [
  {
    company: 'Freelance',
    period: '2024 - 2025',
    role: 'Desarrollador Web',
    location: 'Remoto',
    description: 'Contribuí en el desarrollo de aplicaciones web y recomendaciones de seguridad de la información para clientes. Incluido proyectos OpenSource',
    tech: ['TypeScript', 'WireShark', 'NodeJS', 'GitHub',  'Framer-Motion', 'Python', 'Sherlock' ]
  },
  {
    company: 'Market Mix',
    period: '2023 - Presente',
    role: 'Asesor BPO',
    location: 'Bogotá - Remoto',
    description: 'Asesoría en procesos de BPO, implementación de procesos de calidad y manejo de herramientas ofimáticas.',
    tech: ['Excel', 'Venta Sugestiva', 'Google Drive', 'PowerPoint']
  },

];

export default function Thor() {
  return (
    <div>
      <section className={styles.sectionWrapper} id="experience">
      <div className={styles.sectionHeader}>
        <div className={styles.line}></div>
        <h3>
          <div className={styles.animatedWrapper}>
            <div className={styles.visible}><span className={styles.title}>Experiencia<span></span></span></div>
            <div className={styles.reveal}></div>
          </div>
        </h3>
      </div>
      </section>

      {experiences.map((exp, idx) => (
              <section className={styles.sectionGlob} id="experience">

        <div key={idx} className={styles.experience}>
          <div className={styles.heading}>
            <div className={styles.animatedWrapper}>
              <div className={styles.visible}><span className={styles.company}>{exp.company}</span></div>
              <div className={styles.reveal}></div>
            </div>
            <div className={styles.animatedWrapper}>
              <div className={styles.visible}><span>{exp.period}</span></div>
              <div className={styles.reveal}></div>
            </div>
          </div>

          <div className={styles.heading}>
            <div className={styles.animatedWrapper}>
              <div className={styles.visible}><span className={styles.position}>{exp.role}</span></div>
              <div className={styles.reveal}></div>
            </div>
            <div className={styles.animatedWrapper}>
              <div className={styles.visible}><span>{exp.location}</span></div>
              <div className={styles.reveal}></div>
            </div>
          </div>

          <div className={styles.animatedWrapper}>
            <div className={styles.visible}>
              <p className={styles.description}>{exp.description}</p>
            </div>
            <div className={styles.reveal}></div>
          </div>

          <div className={styles.animatedWrapper}>
            <div className={styles.visible}>
              <div className={styles.tech}>
                {exp.tech.map((t, i) => <span key={i} className={styles.chip}>{t}</span>)}
              </div>
            </div>
            <div className={styles.reveal}></div>
          </div>
        </div>
        </section>

      ))}
    </div>
  );
}
