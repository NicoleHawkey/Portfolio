import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <div className={styles.layout}>
        <h1 className={styles.h1}>Thanks for <br /> stopping by</h1>
        <div className={styles.frame}>
            <h2 className={styles.h2}>But let's <a href="mailto:nicolehawkey0@gmail.com"  className={styles.underline}>stay in touch.</a></h2>
            <a href="https://www.linkedin.com/in/nicole-hawkey123" target="_blank" rel="noopener noreferrer" className={`${styles.a} ${styles.icon}`}>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    </div>
);

export default Footer; 