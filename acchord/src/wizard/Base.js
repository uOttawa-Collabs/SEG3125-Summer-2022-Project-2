import {useState} from "react";
import {ListGroup, Modal} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import styles from "./Base.module.css";
import {GitHubBadge} from "./GitHubBadge";
import {TopBarButtonGroup} from "./TopBarButtonGroup";

export const Base = (props) => {
    const githubRepoURL = "https://github.com/uOttawa-Collabs/SEG3125-Summer-2022-Project-2";
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();

    const [showChangeLanguageModal, setShowChangeLanguageModal] = useState(false);

    const signUpAction = () => {
        navigate("/wizard/sign-up");
    };

    const signInAction = () => {
        navigate("/wizard/sign-in");
    };

    return (<div className={styles["container"]}>
        <div className={styles["top-bar"]}>
            <div className={styles["github-badge-wrapper"]} onClick={() =>
                window.open(githubRepoURL)
            }>
                <GitHubBadge />
            </div>
            {props.showLoginButtonGroup &&
                <TopBarButtonGroup signUpAction={signUpAction} signInAction={signInAction}
                                   signUpButtonText={t("Base.buttonSignUp")}
                                   signInButtonText={t("Base.buttonSignIn")}
                                   changeLanguageAction={() => setShowChangeLanguageModal(true)} />}
        </div>
        <div className={styles["main"]}>
            <props.mainComponent {...props.mainComponentProps} />
        </div>
        <div className={styles["footer"]}>
            <span>Powered by the <a href={githubRepoURL} className={styles["anchor"]} target="_blank"
                                    rel="noreferrer">Acchord Server</a></span>
        </div>
        <Modal show={showChangeLanguageModal} onHide={() => setShowChangeLanguageModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>{t("Base.languageChooseTitle")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    <ListGroup.Item action onClick={() => i18n.changeLanguage("en")}>
                        English
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => i18n.changeLanguage("zh")}>
                        中文
                    </ListGroup.Item>
                </ListGroup>
            </Modal.Body>
        </Modal>
    </div>);
};
