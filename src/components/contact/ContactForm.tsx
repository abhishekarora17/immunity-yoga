'use client';

import styles from '@/app/contact/contact.module.css';
import Button from '@/components/ui/Button';

export default function ContactForm() {
    return (
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership</option>
                    <option value="classes">Classes</option>
                    <option value="feedback">Feedback</option>
                </select>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="How can we help you?" required></textarea>
            </div>
            <Button onClick={() => alert('Thanks for your message! (Demo)')} className={styles.submitButton}>
                Send Message
            </Button>
        </form>
    );
}
