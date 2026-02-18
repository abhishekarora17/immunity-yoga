import styles from './contact.module.css';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
    title: 'Contact Us | Immunity Yoga and Gym Studio',
    description: 'Get in touch with us for inquiries, class bookings, or membership details.',
};

export default function Contact() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>We'd love to hear from you. Visit us, call us, or send a message.</p>
                </div>
            </header>

            <div className={styles.container}>
                <div className={`${styles.grid} animate-fade-in`}>
                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3>Visit Us</h3>
                                <p> H. No 1134, New Jyoti Colony, Street No. 14, near Dream park, Urban Estate Phase 1, Jamalpur, Ludhiana, Punjab 141003</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3>Call Us</h3>
                                <p>+91 9815603036</p>
                                <p>Mon-Fri: 6am - 9pm</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3>Email Us</h3>
                                <p>hello@immunityyoga.com</p>
                            </div>
                        </div>

                        <div className={styles.map}>
                            {/* Placement for map integration */}
                            <div className={styles.mapPlaceholder}>
                                Interactive Map Coming Soon
                            </div>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <h2>Send a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
