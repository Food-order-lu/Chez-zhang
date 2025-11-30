'use client';

import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        Restaurant <span className={styles.highlight}>Chez Zhang</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Cuisine authentique chinoise et thaïlandaise à Bereldange
                    </p>
                    <p className={styles.description}>
                        Découvrez nos spécialités asiatiques préparées avec passion et des ingrédients de qualité.
                    </p>
                    <div className={styles.buttons}>
                        <a
                            href="#menu"
                            className={`glf-button ${styles.btnPrimary}`}
                            data-glf-cuid="51bac733-bb04-42fd-be77-8ed7c9d2d231"
                            data-glf-ruid="fbb37f86-ac13-4234-976f-a21462001e16"
                        >
                            Voir le Menu
                        </a>
                        <a
                            href="#reservation"
                            className={`glf-button reservation ${styles.btnOutline}`}
                            data-glf-cuid="51bac733-bb04-42fd-be77-8ed7c9d2d231"
                            data-glf-ruid="fbb37f86-ac13-4234-976f-a21462001e16"
                            data-glf-reservation="true"
                        >
                            Réserver une Table
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <p>Scroll</p>
            </div>
        </section>
    );
}
