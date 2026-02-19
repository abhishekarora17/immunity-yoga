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
                                <p>immunityyogaandgymstudio@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.map}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.837332212662!2d75.9189445!3d30.8906969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a830d6f9a0d85%3A0x6b4f7b6b8b8b8b8b!2sUrban%20Estate%20Phase%201%2C%20Jamalpur%2C%20Ludhiana%2C%20Punjab%20141010!5e0!3m2!1sen!2sin!4v1708430000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map of Immunity Yoga and Gym Studio"
                            ></iframe>
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
