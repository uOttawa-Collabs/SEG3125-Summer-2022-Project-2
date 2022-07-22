import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import styles from "./JoinRoomFragment.module.css";

const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

export const JoinRoomFragment = (props) => {
    const {t, i18n} = useTranslation();
    const [code, setCode] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const codeBoxHandler = (e) => {
        if (e.target.value.length <= 6 && (isNumeric(e.target.value) || e.target.value.length === 0)) {
            setCode(e.target.value);
        }

        if (e.target.value.length >= 6) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    };

    return (
        <div className={styles["container"]}>
            <h1>{t("JoinRoomFragment.title")}</h1>
            <div className={styles["code-box"]}>
                <Form.Control className={styles["code-box-input"]} type="text" placeholder="000000"
                              value={code} onChange={codeBoxHandler}>
                </Form.Control>
            </div>
            <div className={styles["button-group"]}>
                <Button
                    variant="primary"
                    onClick={() => {
                        props.enterRoomAction(code);
                    }}
                    disabled={buttonDisabled}>
                    {t("JoinRoomFragment.buttonJoin")}
                </Button>
            </div>
        </div>
    );
};
