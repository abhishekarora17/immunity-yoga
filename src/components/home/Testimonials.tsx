import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: 'Simran Bhatia',
        role: 'Yoga Member, Ludhiana',
        quote: 'The women-only environment is exactly what I needed. Rachna ji is an incredible teacher — I feel stronger and more confident every week!',
    },
    {
        name: 'Gurpreet Kaur',
        role: 'Gym Member, Jamalpur',
        quote: "I love that I can bring my kids along. The facilities are great and Rachna ma'am ensures every session is personalised. Highly recommend!",
    },
    {
        name: 'Manpreet Dhillon',
        role: 'Wellness Member',
        quote: 'Finally a studio that feels truly safe and supportive for women. The yoga and fitness combination is life-changing. 100% worth it!',
    },
];

const stars = '★★★★★';

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <span className={styles.eyebrow}>Happy Members</span>
                <h2 className={styles.heading}>What Our Community Says</h2>
                <div className={styles.grid}>
                    {testimonials.map((t, index) => (
                        <div key={index} className={`${styles.card} animate-fade-in`} style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className={styles.stars}>{stars}</div>
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
