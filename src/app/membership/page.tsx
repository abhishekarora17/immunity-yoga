import styles from './membership.module.css';
import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';

export const metadata = {
    title: 'Membership & Pricing | Immunity Yoga and Gym Studio',
    description: 'Choose the perfect membership plan for your fitness journey.',
};

const plans = [
    {
        name: 'Drop-In',
        price: 'Rs 50',
        period: '/ class',
        features: [
            'Access to any single class',
            'Mat rental included',
            'Locker room access',
        ],
        recommended: false,
    },
    {
        name: 'Monthly Unlimited',
        price: 'Rs 800',
        period: '/ month',
        features: [
            'Unlimited yoga & gym access',
            'Free mat storage',
            '1 Guest pass per month',
            'Cancel anytime',
        ],
        recommended: true,
    },
    {
        name: 'Annual Membership',
        price: 'Rs 10k',
        period: '/ year',
        features: [
            'All Monthly benefits',
            '2 Months free',
            'Free Immunity Yoga merch'
        ],
        recommended: false,
    },
];

export default function Membership() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Membership Plans</h1>
                    <p className={styles.subtitle}>Invest in your health with our flexible pricing options.</p>
                </div>
            </header>

            <section className={styles.pricing}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`${styles.card} ${plan.recommended ? styles.recommended : ''} animate-fade-in`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {plan.recommended && <div className={styles.badge}>Most Popular</div>}
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <div className={styles.priceWrapper}>
                                    <span className={styles.price}>{plan.price}</span>
                                    <span className={styles.period}>{plan.period}</span>
                                </div>
                                <ul className={styles.features}>
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>
                                            <Check size={20} className={styles.checkIcon} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    href="/contact"
                                    variant={plan.recommended ? 'primary' : 'outline'}
                                    className={styles.button}
                                >
                                    Choose {plan.name}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.faq}>
                <div className={styles.container}>
                    <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>Do I need to sign a contract?</h3>
                            <p>Our Monthly Unlimited plan is month-to-month with no long-term commitment. The Annual plan is a one-year commitment.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can I freeze my membership?</h3>
                            <p>Yes, annual members can freeze their membership for up to 3 months for medical or travel reasons.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do you offer student discounts?</h3>
                            <p>Yes! Students getting 15% off any plan with a valid student ID.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What if I've never done yoga before?</h3>
                            <p>No problem! We have beginner-friendly classes like Hatha Yoga and introduction workshops.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
