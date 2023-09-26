import styles from "../styles/projects.module.css";

const projectItems = [
    {
        title: "Facial Recognition - Front End",
        link: "https://github.com/NicoleHawkey/face-recognition-brain-front-end",
        imgSrc: "Frontend.png",
        altText: "Facial Recognition"
    },
    {
        title: "Facial Recognition - Back End",
        link: "https://github.com/NicoleHawkey/smart-brain-api-back-end",
        imgSrc: "backend.png",
        altText: "Facial Recognition"
    },
    {
        title: "Robofriends",
        link: "https://github.com/NicoleHawkey/Robofriends",
        imgSrc: "Robofriends.png",
        altText: "Robofriends"
    },
    {
        title: "CRWN-Clothing",
        link: "https://github.com/NicoleHawkey/Clothing-Shop-CRWN",
        imgSrc: "crwn-clothing1.png",
        altText: "CRWN-Clothing"
    },
    {
        title: "Github Profile Searcher",
        link: "https://github.com/NicoleHawkey/Github-Profile-Searcher",
        imgSrc: "githubprofile-searcher.png",
        altText: "Github Profile Searcher"
    },
    {
        title: "Custom Countdown",
        link: "https://github.com/NicoleHawkey/custom-countdown",
        imgSrc: "countdown.png",
        altText: "Custom Countdown"
    },
    {
        title: "Movie Finder",
        link: "https://github.com/NicoleHawkey/Movie-Finder",
        imgSrc: "movie.png",
        altText: "Movie Finder"
    },
];

const Projects = () => (    
    <div className={styles.layout}>
        <h1 className={styles.h1}>Project examples</h1>
        <div className={styles.projects}>
            {projectItems.map((project, index) => (
                <div key={index} className={styles.projectcard}>
                    <h2 className={styles.h2}>{project.title}</h2>
                    <a href={project.link}>
                    <img src={project.imgSrc} alt={project.altText} className={styles.img}/>
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default Projects;