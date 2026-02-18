import styles from './Features.module.css';
import { Dumbbell, Flower2, Users } from 'lucide-react';

const features = [
    {
        icon: <Users size={40} />,
        title: 'Expert Trainers',
        description: 'Certified professionals dedicated to guiding your fitness journey.',
    },
    {
        icon: <Dumbbell size={40} />,
        title: 'Modern Equipment',
        description: 'State-of-the-art gym facilities for all your workout needs.',
    },
    {
        icon: <Flower2 size={40} />,
        title: 'Serene Yoga Studio',
        description: 'A peaceful environment to reconnect with your inner self.',
    },
];

const Features = () => {
    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Why Choose Updates</h2>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={`${styles.card} animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
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
