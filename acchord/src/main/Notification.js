import Button from "react-bootstrap/Button";
import {IoMdNotifications} from "react-icons/io";
import styles from "./Notification.module.css";

export const Notification = () => {
    return (
        <div className={styles["container"]}>
            <Button className={styles["notification-button"]}>
                <span className={styles["text-wrapper"]}>
                    <IoMdNotifications className={styles["notification-icon"]} />
                    <span className={styles["notification-text"]}>Notifications</span>
                </span>
            </Button>
        </div>
    );
};
