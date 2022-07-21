import styles from "./BottomBar.module.css";
import {Notification} from "./Notification";
import {PlayControl} from "./PlayControl";
import {ProgressBar} from "./ProgressBar";
import {SongInfo} from "./SongInfo";

export const BottomBar = () => {
    return (
        <div className={styles["container"]}>
            <ProgressBar />
            <div className={styles["horizontal"]}>
                <SongInfo />
                <PlayControl />
                <Notification />
            </div>
        </div>
    );
};
