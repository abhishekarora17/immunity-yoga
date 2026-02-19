import styles from './classes.module.css';

export const metadata = {
    title: 'Classes & Schedule | Immunity Yoga and Gym Studio',
    description: 'Explore our yoga and fitness classes designed exclusively for women and children in Ludhiana.',
};

const classTypes = [
    {
        title: 'Hatha Yoga',
        time: '60 min',
        intensity: 'Low',
        description: 'A gentle, beginner-friendly introduction to yoga postures. Perfect for women of all ages.',
    },
    {
        title: 'Vinyasa Flow',
        time: '75 min',
        intensity: 'Medium',
        description: 'Dynamic sequences that synchronize breath with movement — great for building flow and flexibility.',
    },
    {
        title: 'Power Yoga',
        time: '60 min',
        intensity: 'High',
        description: 'A vigorous fitness-based yoga session to build strength, tone, and stamina.',
    },
    {
        title: 'HIIT Cardio',
        time: '45 min',
        intensity: 'High',
        description: 'High-Intensity Interval Training designed for women to boost endurance and burn calories effectively.',
    },
    {
        title: 'Strength Training',
        time: '60 min',
        intensity: 'Medium/High',
        description: 'Build strength and confidence using free weights and resistance equipment in a women-only zone.',
    },
    {
        title: 'Meditation',
        time: '30 min',
        intensity: 'Low',
        description: 'Guided mindfulness sessions to reduce stress, improve sleep, and restore mental clarity.',
    },
];

export default function Classes() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Our Classes</h1>
                    <p className={styles.subtitle}>Specially designed for women & children — led by Rachna Arora.</p>
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
