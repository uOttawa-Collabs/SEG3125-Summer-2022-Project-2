import {useNavigate} from "react-router-dom";
import styles from "./Base.module.css";
import {GitHubBadge} from "./GitHubBadge";
import {LoginButtonGroup} from "./LoginButtonGroup";

export const Base = (props) => {
    const githubRepoURL = "https://github.com/uOttawa-Collabs/SEG3125-Summer-2022-Project-2";
    const navigate = useNavigate();

    const signUpAction = () => {
        navigate("/wizard/sign-up");
    };

    const signInAction = () => {
        navigate("/wizard/sign-in");
    };

    return (<div className={styles["container"]}>
        <div className={styles["top-bar"]}>
            <div className={styles["github-badge-wrapper"]} onClick={() => {
                window.open(githubRepoURL);
            }}>
                <GitHubBadge />
            </div>
            {props.showLoginButtonGroup && <LoginButtonGroup signUpAction={signUpAction} signInAction={signInAction} />}
        </div>
        <div className={styles["main"]}>
            <props.mainComponent {...props.mainComponentProps} />
        </div>
        <div className={styles["footer"]}>
            <span>Powered by the <a href={githubRepoURL} className={styles["anchor"]} target="_blank"
                                    rel="noreferrer">Acchord Server</a></span>
        </div>
    </div>);
};
