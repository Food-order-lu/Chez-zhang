import styles from './GloriaFoodWidget.module.css';

interface GloriaFoodWidgetProps {
    showOrderButton?: boolean;
    showReservationButton?: boolean;
}

export default function GloriaFoodWidget({
    showOrderButton = true,
    showReservationButton = true,
}: GloriaFoodWidgetProps) {
    const cuid = "51bac733-bb04-42fd-be77-8ed7c9d2d231";
    const ruid = "fbb37f86-ac13-4234-976f-a21462001e16";

    return (
        <div className={styles.widgetContainer}>
            {showOrderButton && (
                <span
                    className="glf-button"
                    data-glf-cuid={cuid}
                    data-glf-ruid={ruid}
                >
                    Voir Menu & Commander
                </span>
            )}
            {showReservationButton && (
                <span
                    className="glf-button reservation"
                    data-glf-cuid={cuid}
                    data-glf-ruid={ruid}
                    data-glf-reservation="true"
                >
                    Réserver une Table
                </span>
            )}
        </div>
    );
}
