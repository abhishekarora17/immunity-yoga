'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Immunity Yoga & Gym Studio
                </Link>

                <nav className={styles.nav} aria-label="Primary">
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

                <button
                    type="button"
                    className={styles.menuButton}
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-site-nav"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {isMenuOpen && (
                <nav id="mobile-site-nav" className={styles.mobileNav} aria-label="Mobile primary">
                    <ul className={styles.mobileNavLinks}>
                        <li><Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Home</Link></li>
                        <li><Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>About</Link></li>
                        <li><Link href="/classes" className={styles.mobileNavLink} onClick={closeMenu}>Classes</Link></li>
                        <li><Link href="/membership" className={styles.mobileNavLink} onClick={closeMenu}>Membership</Link></li>
                        <li><Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
