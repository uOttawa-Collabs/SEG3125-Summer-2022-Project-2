import {useNavigate} from "react-router-dom";

import {EmailPasswordBox} from "./EmailPasswordBox";
import styles from "./SignInWithEmailFragment.module.css";

export const SignInWithEmailFragment = () => {
    const navigate = useNavigate();
    return (
        <div className={styles["container"]}>
            <EmailPasswordBox buttonText="Sign In" submitHandler={(e) => {
                e.preventDefault();
                alert("This should log in the user, but since it's a static site, it will return to the homepage directly");
                navigate("/");
            }} />
        </div>
    );
};
