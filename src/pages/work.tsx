import WorkSection from "@/components/WorkSection/WorkSection";
import styles from "../styles/work.module.css";

const workItems = [
    {
        id: 'code',
        upperTitle: 'CODE EXAMPLES',
        title: 'Check out my GitHub',
        children: <div className={styles.githubContainer}>
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
    },
    {
        id: 'connect',
        upperTitle: 'Connect with me',
        title: 'Say hi on LinkedIn',
        background: "orange",
        children : <div className={styles.linkedinimagecontainer}>
        <img src="/linkedin.png" alt="" className={styles.linkedinimage}/>
    </div>
    }
]

const Work = () => (
    <div id="work" className={styles.layout}>
        {workItems.map(item => (
            <WorkSection key={item.id} upperLink="/" upperTitle={item.upperTitle} title={item.title} background={item.background}>
                {item.children}
            </WorkSection>
        ))}
        <div className={styles.ellipse}></div>
    </div>
);

export default Work;