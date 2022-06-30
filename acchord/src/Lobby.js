import {useLocation} from "react-router-dom";
import styles from "./Lobby.module.css";

export const Lobby = (props) => {
    const {state} = useLocation();
    try {
        const code = state["code"];
        return (
            <div className={styles["container"]}>
                <h1><code>{code}</code></h1>
                <h1>In construction... </h1>
            </div>
        );
    } catch (e) {
        return (
            <h1>Invalid parameter</h1>
        );
    }
};
