import styles from "./Base.module.css";
import {GitHubBadge} from "./GitHubBadge";
import {LoginButtonGroup} from "./LoginButtonGroup";

export const Base = (props) => {
    return (<div className={styles["container"]}>
        <div className={styles["top-bar"]}>
            <div className={styles["github-badge-wrapper"]} onClick={() => {
                window.open(props.githubRepoURL);
            }}>
                <GitHubBadge />
            </div>
            {props.showLoginButtonGroup && LoginButtonGroup(props.loginButtonGroupProps)}
        </div>
        <div className={styles["main"]}>
            {props.mainComponent(props.mainComponentProps)}
        </div>
        <div className={styles["footer"]}>
            <span>Powered by the <a href={props.githubRepoURL} className={styles["anchor"]}>Acchord Server</a></span>
        </div>
    </div>);
};
