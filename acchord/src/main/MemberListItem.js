import {ListGroupItem} from "react-bootstrap";
import {FaBalanceScale, FaCrown, FaUser, FaUserCircle} from "react-icons/fa";
import styles from "./MemberListItem.module.css";

export const MemberListItem = (props) => {
    return (
        <ListGroupItem className={styles["container"]}>
            <div className={styles["left"]}>
                <FaUserCircle className={styles["list-icons"]} />
                <span>{props.name}</span>
            </div>
            <div className={styles["right"]}>
                {(() => {
                    switch (props.group) {
                        case "Owner":
                            return <FaCrown className={styles["list-icons"]} />;
                        case "Moderator":
                            return <FaBalanceScale className={styles["list-icons"]} />;
                        default:
                            return <FaUser className={styles["list-icons"]} />;
                    }
                })()}
                <span>{props.group}</span>
            </div>
        </ListGroupItem>
    );
};
