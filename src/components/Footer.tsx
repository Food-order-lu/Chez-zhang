import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.section}>
                        <h3 className={styles.logo}>CHEZ ZHANG</h3>
                        <p className={styles.tagline}>Restaurant Chinois & Thaï à Bereldange</p>
                        <p className={styles.text}>
                            Cuisine authentique chinoise et thaïlandaise depuis toujours.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Contact</h4>
                        <ul className={styles.list}>
                            <li>
                                <a href="tel:+35226331710" className={styles.link}>
                                    📞 +352 26 33 17 10
                                </a>
                            </li>
                            <li className={styles.text}>
                                📍 2 rue de bridel<br />L-7217 Bereldange Walferdange
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Horaires</h4>
                        <ul className={styles.list}>
                            <li className={styles.text}>
                                <strong>Tous les jours:</strong>
                            </li>
                            <li className={styles.text}>Midi: 11h45 - 14h30</li>
                            <li className={styles.text}>Soir: 18h00 - 22h30</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Services</h4>
                        <ul className={styles.list}>
                            <li className={styles.text}>🍽️ Sur place</li>
                            <li className={styles.text}>📦 À emporter</li>
                            <li className={styles.text}>🚀 Livraison à domicile</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Chez Zhang. Tous droits réservés.
                    </p>
                    <p className={styles.credit}>
                        Site créé avec ❤️ pour Chez Zhang
                    </p>
                </div>
            </div>
        </footer>
    );
}
