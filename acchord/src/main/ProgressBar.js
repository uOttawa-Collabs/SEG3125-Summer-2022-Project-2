import {Form} from "react-bootstrap";
import styles from "./ProgressBar.module.css";

export const ProgressBar = (props) => {
    return (
        <Form.Range className={styles["container"]} />
    );
};
