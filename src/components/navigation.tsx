import styles from "../styles/navigation.module.css";

interface NavigationProps {
  onToggleLanguage: () => void;
}

const Navigation = ({onToggleLanguage}:NavigationProps) => (
  <nav className={styles.layout}>
    <div>
      <a className={`${styles.colors} ${styles.name}`}>Nicole<br />Hawkey</a>
    </div>
    <div className={styles.menu}>
        <div className={styles.awc}>
            <a href="#about" className={styles.colors}>About Me</a>
            <a href="#work" className={styles.colors}>Work</a>
            <a href="#contact" className={styles.colors}>Contact</a>
        </div>
        {/* <div className={styles.flexContainer}>
            <img src="/UKflag.png" alt="UK flag" className={styles.flag}></img>
            <button onClick={onToggleLanguage} className={`${styles.colors} ${styles.vector}`}>
                <img src="/Vector.png" alt="Toggle Language"/>
            </button>
            <a>EN</a>
        </div> */}
        
    </div>
  </nav>
);

export default Navigation;