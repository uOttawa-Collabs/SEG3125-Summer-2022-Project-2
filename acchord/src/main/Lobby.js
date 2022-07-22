import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";
import {BottomBar} from "./BottomBar";
import {ChatBox} from "./ChatBox";
import {Drawer} from "./Drawer";
import styles from "./Lobby.module.css";
import {MemberList} from "./MemberList";
import {Navbar} from "./Navbar";
import {PlayList} from "./PlayList";

export const Lobby = (props) => {
    const {state} = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [t, i18n] = useTranslation();

    try {
        return (
            <div className={styles["container"]}>
                <Navbar location={`${t("Lobby.textLobby")} (` + state.code + ")"} drawerOpen={drawerOpen}
                        setDrawerOpen={setDrawerOpen} />
                <div className={styles["main"]}>
                    <div className={styles["main-left"]}>
                        <div className={styles["main-left-top"]}>
                            <MemberList />
                        </div>
                        <div className={styles["main-left-bottom"]}>
                            <ChatBox />
                        </div>
                    </div>
                    <div className={styles["main-right"]}>
                        <PlayList />
                    </div>
                </div>
                <BottomBar />

                <Drawer open={drawerOpen} items={[
                    {
                        text: t("Lobby.textDrawerPlaylistHistory")
                    }
                ]} />
            </div>
        );
    } catch (e) {
        return (
            <h1>Invalid parameter</h1>
        );
    }
};
