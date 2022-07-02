import {useNavigate} from "react-router-dom";

import {EmailPasswordBox} from "./EmailPasswordBox";
import styles from "./SignUpWithEmailFragment.module.css";

export const SignUpWithEmailFragment = () => {
    const navigate = useNavigate();
    return (
        <div className={styles["container"]}>
            <EmailPasswordBox buttonText="Sign Up" submitHandler={(e) => {
                e.preventDefault();
                alert("This should create a new account, but since it's a static site, it will return to the homepage directly");
                navigate("/");
            }} />
        </div>
    );
};
