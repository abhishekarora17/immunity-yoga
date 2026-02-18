import styles from './Hero.module.css';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>Strengthen Your Body, <br />Calm Your Mind</h1>
                <p className={styles.subtitle}>Join Immunity Yoga and Gym Studio to experience a holistic approach to fitness and well-being.</p>
                <div className={styles.actions}>
                    <Button href="/membership" variant="primary">Start Your Journey</Button>
                    <Button href="/classes" variant="outline">View Classes</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
