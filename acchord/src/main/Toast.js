import {Toast, ToastContainer} from "react-bootstrap";
import styles from "./Toast.module.css";

export const DismissibleToast = (props) => {
    return (
        <ToastContainer className={styles["container"]}>
            <Toast autohide={true}>
                <Toast.Body>
                    {props.text}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export const toast = (container, header, body, autoHide, delay) => {
};
