import styles from './Skills.module.css';
import PropTypes from 'prop-types';
import { skillsData } from './skillsData';

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.skillsHeader}>Tools and Skills</h1>
      <div className={styles.skillsContainer}>
        {skillsData.map((skill) => (
          <SkillCard skill={skill} key={skill.name} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div className={styles.skillCard}>
      <img src={skill.icon} alt={skill.name} />
      <div className={styles.name}>{skill.name}</div>
    </div>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.object,
};
