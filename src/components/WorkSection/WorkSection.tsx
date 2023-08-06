import styles from './WorkSection.module.css'

export type BackgroundWorksection = 'blue' | 'orange';

interface WorkSectionProps {
    upperLink: string;
    upperTitle: string;
    title: string;
    background?: BackgroundWorksection;
    children?: React.ReactNode;
}

const WorkSection = ({upperLink, upperTitle, title, children, background = "blue"}: WorkSectionProps) => {
    return (
        <div className={`${styles.githubcontainer} ${background === "orange" ? styles.orange : styles.blue}`}>
            <div className={styles.githubcontent}>
                <div className={styles.content}>
                    <a href={upperLink} className={styles.a}>
                        <button className={styles.btn1}>{upperTitle}</button>
                    </a>
                    <h1 className={styles.h1}>{title}</h1>
                </div>
            </div>
            <div className={styles.github}>
                <div className={styles.screenwrapper}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default WorkSection;