import styles from './Features.module.css';
import { Dumbbell, Flower2, Users } from 'lucide-react';

const features = [
    {
        icon: <Users size={36} />,
        title: 'Expert Instructor',
        description: 'Led personally by certified instructor Rachna Arora — dedicated to your unique wellness journey.',
    },
    {
        icon: <Dumbbell size={36} />,
        title: 'Women-First Equipment',
        description: "Gym facilities thoughtfully curated for women's strength, fitness and comfort.",
    },
    {
        icon: <Flower2 size={36} />,
        title: 'Serene Yoga Studio',
        description: 'A calm, welcoming space for women and children to reconnect with their breath and inner strength.',
    },
];

const Features = () => {
    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <span className={styles.eyebrow}>Why Choose Us</span>
                <h2 className={styles.heading}>Everything You Need to Thrive</h2>
                <p className={styles.subheading}>World-class facilities, expert coaches, and a community that supports you.</p>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={`${styles.card} animate-fade-in`} style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.description}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
