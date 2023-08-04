import styles from "../styles/projects.module.css";

const Projects = () => (
    <div className={styles.layout}>
        <h1 className={styles.h1}>Project examples</h1>
        <div className={styles.projects}>
            <div className={styles.project}>
                <h2 className={styles.h2}>Facial Recognition - Front End</h2>
                <a href="https://github.com/NicoleHawkey/face-recognition-brain-front-end">
                    <img src="Frontend.png" alt="Facial Recognition" className={styles.img}/>
                </a>
            </div>
            <div className={styles.project}>
                <h2 className={styles.h2}>Facial Recognition - Back End</h2>
                <a href="https://github.com/NicoleHawkey/smart-brain-api-back-end">
                    <img src="backend.png" alt="Facial Recognition" className={styles.img}/>
                </a>
            </div>
            <div className={styles.project}>
                <h2 className={styles.h2}>Robofriends</h2>
                <a href="https://github.com/NicoleHawkey/Robofriends">
                    <img src="Robofriends.png" alt="Facial Recognition" className={styles.img}/>
                </a>
            </div>
        </div>
    </div>
);

export default Projects;