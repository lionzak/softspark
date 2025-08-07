import Link from 'next/link';
import styles from '@/app/Footer.module.css';
import { FaWhatsapp } from "react-icons/fa";

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
          <Link href="mailto:softspark.software@gmail.com">
            <p className='border-b border-transparent hover:border-b hover:border-white transition-colors duration-300'>softspark.software@gmail.com</p>
          </Link>
        </div>
        <div className={styles.copyright}>
          &copy; {currentYear} SoftSpark. All rights reserved.
        </div>
      </div>
      <a
        href="https://wa.me/+201224213669"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </footer>
  );
};

export default Footer;