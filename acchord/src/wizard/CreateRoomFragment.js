import {useEffect, useState} from "react";
import {Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import styles from "./CreateRoomFragment.module.css";

export const CreateRoomFragment = (props) => {
    const [code, setCode] = useState("000000");
    useEffect(() => {
        setCode(addLeadingZeros(randomBetween(1, 999999), 6));
    }, [setCode]);

    const randomBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const addLeadingZeros = (n, size) => {
        n = n.toString();
        while (n.length < size) {
            n = "0" + n;
        }
        return n;
    };

    return (<div className={styles["container"]}>
        <h1>Share the code to your friend!</h1>
        <div className={styles["code-box"]}>
            <Form.Control className={styles["code-box-input"]} type="text" readOnly placeholder="000000"
                          value={code}>
            </Form.Control>
        </div>
        <div className={styles["button-group"]}>
            <Button
                variant="outline-primary"
                onClick={() => {
                    navigator.clipboard.writeText(code).then(() => {
                        alert("Copied to clipboard!");
                    }, () => {
                        alert("Sorry, your browser seems to be blocking the functionality.\nPlease copy it from the text box above manually.");
                    });
                }}>
                Copy Code
            </Button>
            <OverlayTrigger
                overlay={(props) => (<Tooltip id="button-tooltip" {...props}>
                    <span>Don't worry, the code is still available for the room at any time :)</span>
                </Tooltip>)}
                placement="auto">
                <Button variant="primary" onClick={() => {
                    props.enterRoomAction(code);
                }}>Head to the Room</Button>
            </OverlayTrigger>
        </div>
    </div>);
};
