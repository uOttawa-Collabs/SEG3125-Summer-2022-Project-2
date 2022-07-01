import Button from "react-bootstrap/Button";
import styles from "./LoginButtonGroup.module.css";

export const LoginButtonGroup = (props) => {
    return (
        <div className={styles["container"]}>
            <Button className={styles["button"]} variant="primary" onClick={props.signUpAction}>Sign Up</Button>
            <Button className={styles["button"]} variant="outline-primary" onClick={props.signInAction}>Sign In</Button>
        </div>
    );
};
