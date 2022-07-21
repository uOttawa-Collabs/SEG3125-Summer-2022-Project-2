import {FaMusic} from "react-icons/fa";
import styles from "./SongInfo.module.css";

export const SongInfo = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["album-icon-wrapper"]}>
                <FaMusic className={styles["album-icon-placeholder"]} />
            </div>
            <div className={styles["song-info-text-box"]}>
                <span className={styles["song-title"]}>Hello world</span>
                <span className={styles["song-artist"]}>Mr. Nobody</span>
            </div>
        </div>
    );
};
