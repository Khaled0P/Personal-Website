import styles from './Projects.module.css';
import PropTypes from 'prop-types';
import { projects } from './projectsData';
import { useState } from 'react';

function ProjectBody({ project }) {
  const [privateGithub, setPrivateGithub] = useState(false);

  return (
    <div className={styles.project}>
      <img src={project.preview} alt={project.name} />
      <div className={styles.projectBody}>
        <h1 className={styles.projectName}>{project.name}</h1>
        <p className={styles.description}>{project.description}</p>
        {project.tech && (
          <p className={styles.description}>
            {' '}
            <b>Technologies</b>: {project.tech}
          </p>
        )}
        <div className={styles.links}>
          <a
            href={project.github}
            target="blank"
            onClick={(e) => {
              project.github === 'private' && e.preventDefault();
            }}
          >
            <button
              className={
                styles.github + ' ' + (privateGithub ? styles.privateGithub : '')
              }
              onMouseEnter={() =>
                project.github === 'private' && setPrivateGithub(true)
              }
              onMouseLeave={() => setPrivateGithub(false)}
            >
              {privateGithub ? 'Private' : 'Review Code'}
            </button>
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
