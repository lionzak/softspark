import Link from 'next/link';
import styles from '@/app/Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/services">Services </Link>
        </div>
        <div className={styles.copyright}>
          &copy; {currentYear} DevSoft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;