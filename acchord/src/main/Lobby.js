import {useLocation} from "react-router-dom";
import {BottomBar} from "./BottomBar";
import {ChatBox} from "./ChatBox";
import styles from "./Lobby.module.css";
import {MemberList} from "./MemberList";
import {Navbar} from "./Navbar";
import {PlayList} from "./PlayList";

export const Lobby = (props) => {
    const {state} = useLocation();
    try {
        // const code = state["code"];
        return (
            <div className={styles["container"]}>
                <Navbar location={"Lobby (" + state.code + ")"} />
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
            </div>
        );
    } catch (e) {
        return (
            <h1>Invalid parameter</h1>
        );
    }
};
