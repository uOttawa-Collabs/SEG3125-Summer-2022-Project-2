import {Button} from "react-bootstrap";
import styles from "./MainFragment.module.css";

export const MainFragment = (props) => {
    return (<div className={styles["container"]}>
        <div className={styles["title"]}>
            <h1>Acchord</h1>
            <h5>Enjoy the music, with anyone, from anywhere, at anytime</h5>
        </div>
        <div className={styles["button-group-wrapper"]}>
            <div className={styles["button-group"]}>
                <Button variant="primary" onClick={props.createRoomAction}>Create a Room</Button>
                <Button variant="outline-primary" onClick={props.joinRoomAction}>Join in a Room</Button>
            </div>
        </div>
    </div>);
};
