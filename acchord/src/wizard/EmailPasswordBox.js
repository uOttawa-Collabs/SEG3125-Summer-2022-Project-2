import HCaptcha from "@hcaptcha/react-hcaptcha";
import {useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import styles from "./EmailPasswordBox.module.css";

export const EmailPasswordBox = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);
    let captchaVerified = false;

    const verifyEmailPassword = (email, password) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{8,16}$/;
        return email.match(emailRegex) && password.match(passwordRegex);
    };

    const verifyHandler = () => {
        if (verifyEmailPassword(email, password) && captchaVerified) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        verifyHandler();
    };

    const passwordHandler = (e) => {
        if (e.target.value.length === 0 || e.target.value.length <= 16) {
            setPassword(e.target.value);
            verifyHandler();
        }
    };

    return (
        <div className={styles["container"]}>
            <Card bg="light" border="lightgray" className={styles["card"]}>
                <Card.Body className={styles["card-body"]}>
                    <Form onSubmit={props.submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="someone@example.com" value={email}
                                          onChange={emailHandler} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Your Password" value={password}
                                          onChange={passwordHandler} />
                        </Form.Group>
                        <div className={styles["center-wrapper"]}>
                            <HCaptcha
                                sitekey="99045d23-9956-44d8-bf8d-e6b5731cbab5"
                                onVerify={() => {
                                    captchaVerified = true;
                                    verifyHandler();
                                }} />
                        </div>
                        <div className={styles["center-wrapper"]}>
                            <Button variant="primary" type="submit" disabled={buttonDisabled}>
                                {props.buttonText}
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};
