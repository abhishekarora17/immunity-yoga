import styles from './contact.module.css';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { LOCAL_BUSINESS_SCHEMA } from '@/components/seo/LocalBusinessSchema';

export const metadata = {
    title: 'Contact Us | Immunity Yoga and Gym Studio',
    description: 'Get in touch with us for inquiries, class bookings, or membership details.',
};

export default function Contact() {
    const { address, geo, telephone } = LOCAL_BUSINESS_SCHEMA;
    const mapSrc = `https://www.google.com/maps?q=${geo.latitude},${geo.longitude}&z=17&output=embed`;
    const fullAddress = `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`;

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>We would love to hear from you. Visit us, call us, or send a message.</p>
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
                                <p>{fullAddress}</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3>Call Us</h3>
                                <p>{telephone}</p>
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
                                src={mapSrc}
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
