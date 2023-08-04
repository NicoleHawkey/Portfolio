import styles from "../styles/contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
    <div id="contact" className={styles.layout}>
        <div className={styles.contact}>
            <div className={styles.contactwrapper}>
                <div className={styles.headings}>
                    <h1 className={styles.h1}>Want to work together?</h1>
                    <h2 className={styles.h2}>Feel free to reach out for collaborations or just a friendly hello</h2>
                </div>
                <div className={styles.contactme}>
                    <a href="mailto:nicolehawkey0@gmail.com" className={styles.a}>
                        <button  className={styles.button}>Contact me</button>
                    </a>
                    <a href="https://www.linkedin.com/in/nicole-hawkey123" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>    
            </div>
        </div>
    </div>
); 

export default Contact;