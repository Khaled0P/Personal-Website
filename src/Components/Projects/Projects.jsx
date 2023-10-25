import styles from './Projects.module.css';
import PropTypes from 'prop-types';
import { projects } from './projectsData';

function ProjectBody({ project }) {
  return (
    <div className={styles.project}>
      <img src={project.preview} alt={project.name} />
      <div className={styles.projectBody}>
        <h1 className={styles.projectName}>{project.name}</h1>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.links}>
          <a href={project.github} target="blank">
            <button className={styles.github}>Review Code</button>
          </a>
          <a href={project.live} target="blank">
            <button className={styles.live}>See it Live</button>
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectBody.propTypes = {
  project: PropTypes.object,
};

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h1 className={styles.projectsHeader}>Featured Projects</h1>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectBody key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
