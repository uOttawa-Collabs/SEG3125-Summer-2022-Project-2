import {Button, ButtonGroup} from "react-bootstrap";
import {BiPlayCircle, BiSkipNext, BiSkipPrevious} from "react-icons/bi";
import styles from "./PlayControl.module.css";

export const PlayControl = () => {
    return (
        <div className={styles["container"]}>
            <ButtonGroup className={styles["control-button-group"]}>
                <Button>
                    <BiSkipPrevious className={styles["control-button-icon"]} />
                </Button>
                <Button>
                    <BiPlayCircle className={styles["control-button-icon"]} />
                </Button>
                <Button>
                    <BiSkipNext className={styles["control-button-icon"]} />
                </Button>
            </ButtonGroup>
        </div>
    );
};
