import {useNavigate} from "react-router-dom";
import {OAuthChooser} from "./OAuthChooser";
import {OAuthOptionList} from "./OAuthOptionList";
import styles from "./SignInFragment.module.css";

export const SignInFragment = (props) => {
    const navigate = useNavigate();

    const returnToHome = () => {
        alert("This should bring the user to the oAuth page, but since it's a static site, it will return to the homepage directly");
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
            <OAuthChooser oAuthOptionList={OAuthOptionList} oAuthHandlerMap={handlerMap} textPrefix="Sign in with " />
        </div>
    );
};
