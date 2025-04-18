import Socials from '../Socials/Socials';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <h1>Khaled AbdRahem</h1>
        <h2>Front-End Developer</h2>
        <Socials />
      </div>
      <div className={styles.about}>
        <h1 className={styles.aboutHeader}>About</h1>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; With several years of professional experience in web development, My
          work spans fully custom Shopify themes, advanced Liquid logic, and
          modern React/Next.js applications, with a strong emphasis on
          performance and user experience. I’m always exploring new tools and
          workflows, driven by a firm belief in lifelong learning and continuous
          improvement.
        </p>
      </div>
      <svg className={styles.arrows}>
        <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
        <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
        <path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
      </svg>
    </header>
  );
}
