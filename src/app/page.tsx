'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import GloriaFoodWidget from '@/components/GloriaFoodWidget';
import styles from './page.module.css';

export default function Home() {
    useEffect(() => {
        // Charger le script GloriaFood
        const script = document.createElement('script');
        script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <main className={styles.main}>
            <Hero />

            {/* About Section */}
            <section className={styles.section} id="about">
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionTitle}>Bienvenue au Restaurant Chez Zhang</h2>
                        <p className={styles.sectionSubtitle}>
                            Une expérience culinaire asiatique authentique à Bereldange
                        </p>
                    </div>

                    <div className={styles.aboutContent}>
                        <div className={styles.aboutText}>
                            <p>
                                Bienvenue au <strong>Restaurant Chez Zhang</strong>, situé à Bereldange, où nous vous
                                accueillons tous les jours dans une ambiance chaleureuse et conviviale.
                            </p>
                            <p>
                                Notre établissement propose une <strong>cuisine authentique chinoise et thaïlandaise</strong>,
                                préparée avec des ingrédients frais et de qualité. Que ce soit pour un déjeuner rapide, un dîner
                                en famille ou entre amis, nous nous engageons à vous offrir une expérience culinaire mémorable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.sectionDark} id="services">
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionTitleLight}>Nos Services</h2>
                        <p className={styles.sectionSubtitleLight}>
                            Flexibilité et qualité pour votre plus grand plaisir
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <ServiceCard
                            icon="🍽️"
                            title="Sur Place"
                            description="Profitez d'une ambiance cosy et conviviale dans notre restaurant chaleureux"
                        />
                        <ServiceCard
                            icon="📦"
                            title="À Emporter"
                            description="Commandez vos plats préférés et venez les chercher à votre convenance"
                        />
                        <ServiceCard
                            icon="🚀"
                            title="Livraison"
                            description="Profitez de notre service de livraison rapide et fiable à domicile"
                        />
                    </div>
                </div>
            </section>

            {/* Commander en Ligne Section - GloriaFood */}
            <section className={styles.orderSection}>
                <div className={styles.container}>
                    <div className={styles.orderContent}>
                        <div className={styles.orderTextBox}>
                            <h2>Commander en Ligne</h2>
                            <p>
                                Commandez directement en ligne via GloriaFood pour la livraison à domicile ou le retrait au restaurant.
                                Menu complet disponible !
                            </p>
                        </div>
                        <GloriaFoodWidget
                            showOrderButton={true}
                            showReservationButton={true}
                        />
                    </div>
                </div>
            </section>

            {/* Specialties Section */}
            <section className={styles.section} id="specialties">
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionTitle}>Nos Spécialités</h2>
                        <p className={styles.sectionSubtitle}>
                            Un large choix pour ravir tous les palais
                        </p>
                    </div>

                    <div className={styles.specialtiesGrid}>
                        <div className={styles.specialtyCard}>
                            <div className={styles.specialtyImage} style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80)'
                            }}></div>
                            <div className={styles.specialtyContent}>
                                <h3>Canard Laqué de Pékin</h3>
                                <p>
                                    Croustillant et fondant, servi avec ses crêpes fines et sauce hoisin. Un classique de la cuisine chinoise.
                                </p>
                            </div>
                        </div>

                        <div className={styles.specialtyCard}>
                            <div className={styles.specialtyImage} style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80)'
                            }}></div>
                            <div className={styles.specialtyContent}>
                                <h3>Pad Thaï Royal</h3>
                                <p>
                                    Nouilles de riz sautées aux crevettes tigrées, tofu, oeuf et cacahuètes. Parfait équilibre de saveurs.
                                </p>
                            </div>
                        </div>

                        <div className={styles.specialtyCard}>
                            <div className={styles.specialtyImage} style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1496116218417-1a781b1c423c?w=800&q=80)'
                            }}></div>
                            <div className={styles.specialtyContent}>
                                <h3>Dim Sum Maison</h3>
                                <p>
                                    Assortiment de vapeurs faits main chaque matin. Dumplings aux crevettes, porc et légumes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.sectionDark} id="contact">
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h2 className={styles.sectionTitleLight}>Nous Contacter</h2>
                            <p className={styles.contactText}>
                                N&apos;hésitez pas à nous contacter pour toute question ou pour réserver votre table.
                            </p>

                            <div className={styles.contactDetails}>
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIcon}>📞</div>
                                    <div>
                                        <h4>Téléphone</h4>
                                        <a href="tel:+35226331710">+352 26 33 17 10</a>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactIcon}>📍</div>
                                    <div>
                                        <h4>Adresse</h4>
                                        <p>2 rue de bridel<br />L-7217 Bereldange Walferdange</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cta}>
                                <a href="tel:+35226331710" className={styles.btnPrimary}>
                                    Réserver une Table
                                </a>
                                <a href="/menu" className={styles.btnOutline}>
                                    Voir le Menu
                                </a>
                            </div>
                        </div>

                        <div className={styles.hoursCard}>
                            <h3>Horaires d&apos;Ouverture</h3>
                            <div className={styles.hoursList}>
                                <div className={styles.hourItem}>
                                    <span className={styles.day}>Tous les jours</span>
                                    <span className={styles.time}></span>
                                </div>
                                <div className={styles.hourItem}>
                                    <span className={styles.day}>Midi</span>
                                    <span className={styles.time}>11h45 - 14h30</span>
                                </div>
                                <div className={styles.hourItem}>
                                    <span className={styles.day}>Soir</span>
                                    <span className={styles.time}>18h00 - 22h30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
