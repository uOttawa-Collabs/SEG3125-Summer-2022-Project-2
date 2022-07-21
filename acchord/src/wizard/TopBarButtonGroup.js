import Button from "react-bootstrap/Button";
import {IoLanguage} from "react-icons/io5";
import styles from "./TopBarButtonGroup.module.css";

export const TopBarButtonGroup = (props) => {
    return (
        <div className={styles["container"]}>
            <Button className={styles["button"]} variant="primary"
                    onClick={props.signUpAction}>{props.signUpButtonText}</Button>
            <Button className={styles["button"]} variant="outline-primary"
                    onClick={props.signInAction}>{props.signInButtonText}</Button>
            <Button className={styles["button"]} variant={"outline-primary"} onClick={props.changeLanguageAction}>
                <IoLanguage className={styles["language-icon"]} />
            </Button>
        </div>
    );
};
