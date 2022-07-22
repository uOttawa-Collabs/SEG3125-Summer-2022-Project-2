import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {OAuthChooser} from "./OAuthChooser";
import {OAuthOptionList} from "./OAuthOptionList";
import styles from "./SignInFragment.module.css";

export const SignInFragment = () => {
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();

    const returnToHome = () => {
        alert("This should bring the user to the OAuth page, but since it's a static site, it will return to the homepage directly");
        navigate("/");
    };

    const handlerMap = new Map([["google", () => {
        returnToHome();
    }], ["apple", () => {
        returnToHome();
    }], ["github", () => {
        returnToHome();
    }], ["email", () => {
        navigate("/wizard/sign-in/email");
    }]]);

    return (
        <div className={styles["container"]}>
            <OAuthChooser oAuthOptionList={OAuthOptionList} oAuthHandlerMap={handlerMap}
                          textTemplate={(text) => t("SignInFragment.templateTextSignUpWith").replace("%s", text)} />
        </div>
    );
};
