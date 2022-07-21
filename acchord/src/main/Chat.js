import {ListGroupItem} from "react-bootstrap";
import {FaUserCircle} from "react-icons/fa";
import styles from "./Chat.module.css";

export const Chat = (props) => {
    return (
        <ListGroupItem className={styles["container"]}>
            <div className={styles["top-bar"]}>
                <FaUserCircle className={styles["list-icons"]} />
                <span>{props.name}</span>
            </div>
            <div className={styles["messages"]}>
                <span>{props.message}</span>
            </div>
        </ListGroupItem>
    );
};
