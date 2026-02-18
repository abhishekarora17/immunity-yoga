import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Immunity Yoga & Gym Studio
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/" className={styles.navLink}>Home</Link></li>
                        <li><Link href="/about" className={styles.navLink}>About</Link></li>
                        <li><Link href="/classes" className={styles.navLink}>Classes</Link></li>
                        <li><Link href="/membership" className={styles.navLink}>Membership</Link></li>
                        <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
                    </ul>
                </nav>
                <Link href="/membership" className={styles.ctaButton}>
                    Join Now
                </Link>
            </div>
        </header>
    );
};

export default Header;
