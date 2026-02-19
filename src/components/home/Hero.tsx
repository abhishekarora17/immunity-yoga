import styles from './Hero.module.css';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <span className={styles.eyebrow}>Ludhiana's Finest Women's Wellness Studio</span>
                <h1 className={styles.title}>Strengthen Your Body, <br />Calm Your Mind</h1>
                <p className={styles.subtitle}>Immunity Yoga & Gym Studio — a safe, empowering space exclusively for women and children to thrive through yoga and fitness.</p>
                <div className={styles.actions}>
                    <Button href="/membership" variant="primary">Start Your Journey</Button>
                    <Button href="/classes" variant="outline">View Classes</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
