import {ButtonGroup, ListGroupItem} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";
import {BsMusicNoteList} from "react-icons/bs";
import {FaArrowDown, FaArrowUp, FaTrash, FaUserCircle} from "react-icons/fa";
import styles from "./Song.module.css";

export const Song = (props) => {
    const [t, i18n] = useTranslation();

    return (
        <ListGroupItem className={styles["container"]}>
            <div className={styles["left"]}>
                <div className={styles["album-icon"]}>
                    <BsMusicNoteList className={styles["list-icons"]} />
                </div>
                <div className={styles["song-info-text-box"]}>
                    <span className={styles["song-title"]}>{props.name}</span>
                    <span className={styles["song-artist"]}>{props.artist}</span>
                </div>
            </div>
            <div className={styles["right"]}>
                <div className={styles["control-bar"]}>
                    {!props.isPlaying ?
                        <ButtonGroup>
                            <Button variant="danger">
                                <FaTrash className={styles["control-bar-button-icons"]} />
                                <span>{t("Song.buttonRemove")}</span>
                            </Button>
                            <Button variant="primary">
                                <FaArrowUp className={styles["control-bar-button-icons"]} />
                                <span>{t("Song.buttonAdjustUp")}</span>
                            </Button>
                            <Button variant="primary">
                                <FaArrowDown className={styles["control-bar-button-icons"]} />
                                <span>{t("Song.buttonAdjustDown")}</span>
                            </Button>
                        </ButtonGroup> :
                        <span className={styles["text"]}>{t("Song.textPlayingNow")}</span>}
                </div>
                <div className={styles["source"]}>
                    <span className={styles["text"]}>{t("Song.textFrom")}</span>
                    <FaUserCircle className={styles["list-icons"]} />
                </div>
            </div>
        </ListGroupItem>
    );
};
