import styles from './about.module.css';

export const metadata = {
    title: 'About Us | Immunity Yoga and Gym Studio',
    description: 'Learn about our mission, our story, and our expert instructor dedicated to your fitness journey.',
};

export default function About() {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.hero}>
                <div className={`${styles.container} animate-fade-in`}>
                    <h1 className={styles.title}>Our Story</h1>
                    <p className={styles.subtitle}>A safe, empowering space for women and children since 2025.</p>
                </div>
            </section>

            <section className={styles.mission}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.content}>
                            <h2>Mission & Vision</h2>
                            <p>
                                At Immunity Yoga and Gym Studio, we believe in creating a nurturing and empowering environment
                                exclusively for <strong>women and children</strong>. Our mission is to provide a sanctuary
                                where every woman can challenge her limits, find inner peace, and build lasting strength —
                                in a space that truly feels like her own.
                            </p>
                            <p>
                                Founded and led personally by <strong>Rachna Arora</strong>, our studio blends ancient
                                yoga wisdom with modern fitness science to deliver a truly holistic wellness experience.
                            </p>
                        </div>
                        <div className={styles.imageWrapper}>
                            <div
                                className={styles.placeholderImage}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(47,82,51,0.12), rgba(80,125,85,0.08))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#507D55',
                                    fontSize: '3rem',
                                }}
                            >🧘‍♀️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Women-Only */}
            <section style={{ padding: '4rem 0', background: 'var(--color-surface)' }}>
                <div className={styles.container}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                        Why Women-Only?
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', maxWidth: '680px', lineHeight: 1.8 }}>
                        We understand that many women prefer a comfortable, judgment-free environment to exercise and practise yoga.
                        Our women-only space allows every member — from homemakers to working professionals — to focus entirely on
                        their well-being without hesitation. Children are always welcome, making it easy for mothers to bring their
                        little ones along.
                    </p>
                </div>
            </section>

            <section className={styles.team}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Meet Your Instructor</h2>
                    <div className={styles.teamGrid} style={{ justifyContent: 'center' }}>
                        <div className={styles.teamCard} style={{ maxWidth: '320px', margin: '0 auto' }}>
                            <div
                                className={styles.teamImage}
                                style={{
                                    background: 'linear-gradient(135deg, #2F5233, #507D55)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '3.5rem',
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: '700',
                                    letterSpacing: '-0.02em',
                                }}
                            >RA</div>
                            <h3 style={{ marginTop: '1rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontSize: '1.35rem' }}>Rachna Arora</h3>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', marginTop: '0.35rem' }}>Founder & Lead Instructor</p>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
                                Certified yoga and fitness expert with a passion for empowering women through movement,
                                mindfulness, and holistic wellness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
