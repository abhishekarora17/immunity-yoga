import styles from './classes.module.css';

export const metadata = {
    title: 'Classes & Schedule | Immunity Yoga and Gym Studio',
    description: 'Explore our diverse range of yoga and fitness classes designed for all levels.',
};

const classTypes = [
    {
        title: 'Hatha Yoga',
        time: '60 min',
        intensity: 'Low',
        description: 'A gentle introduction to basic yoga postures. Focuses on alignment and breathing.',
    },
    {
        title: 'Vinyasa Flow',
        time: '75 min',
        intensity: 'Medium',
        description: 'Dynamic sequence of poses that synchronizes breath with movement.',
    },
    {
        title: 'Power Yoga',
        time: '60 min',
        intensity: 'High',
        description: 'A vigorous fitness-based approach to vinyasa-style yoga.',
    },
    {
        title: 'HIIT Cardio',
        time: '45 min',
        intensity: 'High',
        description: 'High-Intensity Interval Training to boost endurance and burn calories.',
    },
    {
        title: 'Strength Training',
        time: '60 min',
        intensity: 'Medium/High',
        description: 'Build muscle and strength using free weights and resistance machines.',
    },
    {
        title: 'Meditation',
        time: '30 min',
        intensity: 'Low',
        description: 'Guided mindfulness practice to reduce stress and improve mental clarity.',
    },
];

export default function Classes() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Our Classes</h1>
                    <p className={styles.subtitle}>Find the perfect class to match your goals and energy level.</p>
                </div>
            </header>

            <section className={styles.classList}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {classTypes.map((cls, index) => (
                            <div key={index} className={`${styles.card} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className={styles.cardHeader}>
                                    <h3>{cls.title}</h3>
                                    <span className={`${styles.badge} ${styles[cls.intensity.toLowerCase()]}`}>{cls.intensity}</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <p className={styles.time}>{cls.time}</p>
                                    <p className={styles.description}>{cls.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.schedule}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Weekly Schedule</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Wednesday</th>
                                    <th>Friday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>07:00 AM</td>
                                    <td>Hatha Yoga</td>
                                    <td>Vinyasa Flow</td>
                                    <td>Hatha Yoga</td>
                                </tr>
                                <tr>
                                    <td>09:00 AM</td>
                                    <td>HIIT Cardio</td>
                                    <td>Strength Training</td>
                                    <td>HIIT Cardio</td>
                                </tr>
                                <tr>
                                    <td>06:00 PM</td>
                                    <td>Power Yoga</td>
                                    <td>Meditation</td>
                                    <td>Power Yoga</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
