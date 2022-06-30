import styles from "./GitHubBadge.module.css";

export const GitHubBadge = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["wrapper"]}>
                <img alt="GitHub Logo" id={styles["github-logo"]} src={process.env.PUBLIC_URL + "/assets/images/github-logo.png"} />
            </div>
            <div className={styles["wrapper"]}>
                <span>Follow us on GitHub!</span>
            </div>
        </div>
    );
}
