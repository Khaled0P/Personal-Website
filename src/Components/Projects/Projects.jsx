import styles from './Projects.module.css';
import PropTypes from 'prop-types';
import githubColor from '../../assets/githubColor.svg';
import openInNewIcon from '../../assets/open-in-new.svg';
import { projects } from './projectsData';

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <img src={project.preview} alt={project.name} />
      <div className={styles.cardBody}>
        <div className={styles.header}>
          <h1>{project.name}</h1>
          <div className={styles.icons}>
            <a href={project.github} target="blank">
              <img src={githubColor} alt="Linkedin" />
            </a>
            <a href={project.live} target="blank">
              <img src={openInNewIcon} alt="open in new tab" />
            </a>
          </div>
        </div>
        <p className={styles.description}>{project.description}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h1 className={styles.projectsHeader}>Featured Projects</h1>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
