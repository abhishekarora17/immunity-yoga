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
            <div className={styles.developer}>
                <span>Site developed by Abhishek Arora.</span>
                <span>
                    Contact me:
                    {' '}
                    <a href="https://www.linkedin.com/in/abhishek-arora-818942221" target="_blank" rel="noreferrer">LinkedIn</a>
                    {' '}|{' '}
                    <a href="https://wa.me/917355874070?text=Hi%20Abhishek%20%F0%9F%91%8B%0AI%20came%20across%20your%20Immunity%20Yoga%20and%20Gym%20Studio%20website%20and%20am%20interested%20in%20learning%20more%20and%20would%20love%20to%20connect%20with%20you." target="_blank" rel="noreferrer">WhatsApp</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
