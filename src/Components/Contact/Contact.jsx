import Socials from '../Socials/Socials';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h1 className={styles.contactHeader}>Contact</h1>
      <div className={styles.contactBody}>
        <p className={styles.text}>Write me an Email at:</p>
        <h1 className={styles.email}>Aa.khaled11@gmail.com</h1>
        <span className={styles.text}>O&nbsp; &nbsp;R</span>
        <p className={styles.text}>Reach me through my social:</p>
        <Socials />
      </div>
    </section>
  );
}
