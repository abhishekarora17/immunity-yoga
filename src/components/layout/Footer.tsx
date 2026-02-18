import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Immunity Yoga</h3>
                    <p>Empowering you to live a healthier, stronger life through yoga and fitness.</p>
                </div>
                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/classes">Classes</Link></li>
                        <li><Link href="/membership">Membership</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Contact Us</h3>
                    <ul>
                        <li> H. No 1134, New Jyoti Colony, Street No. 14, near Dream park, Urban Estate Phase 1, Jamalpur, Ludhiana, Punjab 141003</li>
                        <li>immunityyogaandgymstudio@gmail.com</li>
                        <li>+91 9815603036</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.instagram.com/immunity_yoga_and_gym/" target="_blank">Instagram</a></li>
                        <li><a href="https://www.youtube.com/@immunityyogaandgymstudio" target="_blank">Youtube</a></li>
                        <li><a href="https://www.facebook.com/immunityyogastudio/" target="_blank">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Immunity Yoga. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
