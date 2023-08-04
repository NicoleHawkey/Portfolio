import styles from "../styles/about.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutMeSection = () => (
    <div id="about" className={styles.layout}>
        <div className={styles.profile}>
            <div className={styles.intro}>
                <img src="/Profilephoto.png" alt="Profile Photo"></img>
                <h1>Hey, I'm Nicole, a junior full-stack developer.</h1>
            </div>
            <div  className={styles.p}>
                <p>As a Junior Fullstack Developer with a nursing background, I bring precision and empathy to my role. My experience in healthcare has honed my detail-oriented approach to coding and fostered strong communication skills.</p>
            </div>
            <div className={styles.contact}>
                <a href="mailto:nicolehawkey0@gmail.com"  className={styles.button}>
                    <button  className={styles.button}>Contact Me</button>
                </a>
                <a href="https://www.linkedin.com/in/nicole-hawkey123" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
        <div className={styles.frameImage}>
            <img src="/Frame.png" alt="Frame"></img>
        </div>
    </div>
);

export default AboutMeSection;