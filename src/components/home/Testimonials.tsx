import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Yoga Enthusiast',
        quote: 'Immunity Yoga has completely transformed my flexibility and mental clarity. The instructors are amazing!',
    },
    {
        name: 'Mike Ross',
        role: 'Gym Member',
        quote: 'The equipment is top-notch and the atmosphere is very motivating. Highly recommend!',
    },
    {
        name: 'Emily Chen',
        role: 'Wellness Advocate',
        quote: 'A perfect balance of strength and serenity. I love coming here after a long work day.',
    },
];

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <h2 className={styles.heading}>What Our Members Say</h2>
                <div className={styles.grid}>
                    {testimonials.map((t, index) => (
                        <div key={index} className={`${styles.card} animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                            <p className={styles.quote}>"{t.quote}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                                <div>
                                    <h4 className={styles.name}>{t.name}</h4>
                                    <span className={styles.role}>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
