import {Button} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import styles from "./MainFragment.module.css";

export const MainFragment = (props) => {
    const {t, i18n} = useTranslation();

    return (<div className={styles["container"]}>
        <div className={styles["title"]}>
            <h1>Acchord</h1>
            <h5>{t("MainFragment.title")}</h5>
        </div>
        <div className={styles["button-group-wrapper"]}>
            <div className={styles["button-group"]}>
                <Button variant="primary" onClick={props.createRoomAction}>{t("MainFragment.buttonCreateRoom")}</Button>
                <Button variant="outline-primary"
                        onClick={props.joinRoomAction}>{t("MainFragment.buttonJoinRoom")}</Button>
            </div>
        </div>
    </div>);
};
