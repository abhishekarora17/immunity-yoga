import styles from './about.module.css';
import Image from 'next/image';

export const metadata = {
    title: 'About Us | Immunity Yoga and Gym Studio',
    description: 'Learn about our mission, our story, and the expert trainers dedicated to your fitness journey.',
};

export default function About() {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.hero}>
                <div className={`${styles.container} animate-fade-in`}>
                    <h1 className={styles.title}>Our Story</h1>
                    <p className={styles.subtitle}>Empowering lives through movement and mindfulness since 2025.</p>
                </div>
            </section>

            <section className={styles.mission}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.content}>
                            <h2>Mission & Vision</h2>
                            <p>
                                At Immunity Yoga and Gym Studio, we believe that true health is a harmony of body, mind, and spirit.
                                Our mission is to provide a sanctuary where you can challenge your physical limits while finding inner peace.
                            </p>
                            <p>
                                Founded by yoga master Aarav Patel and fitness expert Sarah Jones, we combine ancient wisdom with modern science
                                to offer a holistic approach to wellness.
                            </p>
                        </div>
                        <div className={styles.imageWrapper}>
                            {/* In a real app, use a local image or optimized asset */}
                            <div className={styles.placeholderImage}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.team}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Meet Our Trainers</h2>
                    <div className={styles.teamGrid}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={styles.teamCard}>
                                <div className={styles.teamImage}></div>
                                <h3>Trainer {i}</h3>
                                <p>Specialist in Yoga & HIIT</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
