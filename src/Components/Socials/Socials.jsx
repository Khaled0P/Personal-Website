import linkedin from '../../assets/linkedin.svg';
import linkedinColor from '../../assets/linkedinColor.svg';
import github from '../../assets/github.svg';
import githubColor from '../../assets/githubColor.svg';
import styles from './Socials.module.css';

export default function Socials() {
  return (
    <div className={styles.contacts}>
      <a href="https://github.com/Khaled0P" target="blank">
        {' '}
        <img src={github} alt="Linkedin" className={styles.linkedin} />
        <img src={githubColor} alt="Linkedin" className={styles.iconColor} />
      </a>
      <a
        href="https://www.linkedin.com/in/khaled-abdelrhem-1653a224a/"
        target="blank"
      >
        {' '}
        <img src={linkedin} alt="Linkedin" className={styles.linkedin} />
        <img src={linkedinColor} alt="Linkedin" className={styles.iconColor} />
      </a>
    </div>
  );
}
