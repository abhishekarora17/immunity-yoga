import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <span className={styles.brandName}>Immunity Yoga & Gym Studio</span>
                    <p>Empowering lives through mindful movement and holistic fitness in the heart of Ludhiana.</p>
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
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.instagram.com/immunity_yoga_and_gym/" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://www.youtube.com/@immunityyogaandgymstudio" target="_blank" rel="noreferrer">Youtube</a></li>
                        <li><a href="https://www.facebook.com/immunityyogastudio/" target="_blank" rel="noreferrer">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <span>&copy; {new Date().getFullYear()} Immunity Yoga & Gym Studio. All rights reserved.</span>
                <span>Ludhiana, Punjab, India</span>
            </div>
        </footer>
    );
};

export default Footer;
