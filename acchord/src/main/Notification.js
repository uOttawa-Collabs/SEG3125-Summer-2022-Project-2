import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";
import {IoMdNotifications} from "react-icons/io";
import styles from "./Notification.module.css";

export const Notification = () => {
    const [t, i18n] = useTranslation();

    return (
        <div className={styles["container"]}>
            <Button className={styles["notification-button"]}>
                <span className={styles["text-wrapper"]}>
                    <IoMdNotifications className={styles["notification-icon"]} />
                    <span className={styles["notification-text"]}>{t("Notification.textNotification")}</span>
                </span>
            </Button>
        </div>
    );
};
