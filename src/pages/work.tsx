import styles from "../styles/work.module.css";

const Work = () => (
    <div id="work" className={styles.layout}>
        <div className={styles.githubcontainer}>
            <div className={styles.githubcontent}>
                <div className={styles.content}>
                    <a href="https://github.com/NicoleHawkey" className={styles.a}>
                        <button className={styles.btn1}>CODE EXAMPLES</button>
                    </a>
                    <h1 className={styles.h1}>Check out my GitHub</h1>
                </div>
            </div>
            <div className={styles.github}>
                <img src="./blackScreen.png" className={styles.screen} alt="blackscreen"/>
                <h2 className={styles.h2}>GitHub</h2>
                    <div className={styles.littlecontainer}>
                        <img src="./githubicon.png" className={styles.icon} alt="github icon" />
                            <a href="https://github.com/NicoleHawkey" className={styles.a}>    
                                <button className={styles.btn2}>
                                    <img src="./heartvector.png" alt="heart vector" className={styles.heart} />
                                    <h3 className={styles.h3}>Nicole Hawkey</h3>    
                                </button>
                            </a> 
                    </div> 
                
            </div>
        </div>
        <div className={styles.ellipse}></div>
        <div className={styles.linkedin}>
            <div className={styles.sayhi}>
                <div className={styles.content}>
                    <a href="https://www.linkedin.com/in/nicole-hawkey123" className={styles.a}>
                        <button className={styles.btn3}>CONNECT WITH ME</button>
                    </a>
                        <h1 className={styles.h1}>Say hi on LinkedIn</h1>
                </div>
            </div>
            <div className={styles.linkedinimagecontainer}>
                <img src="/linkedin.png" alt="" className={styles.linkedinimage}/>
            </div>
        </div>
    </div>
);

export default Work;