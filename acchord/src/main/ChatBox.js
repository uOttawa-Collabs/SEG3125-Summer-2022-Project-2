import {useEffect, useState} from "react";
import {Button, Card, Form, InputGroup, ListGroup} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {Chat} from "./Chat";
import styles from "./ChatBox.module.css";

export const ChatBox = () => {
    const [t, i18n] = useTranslation();
    const sendMessageAction = () => {
        if (message !== "") {
            setList(list => [...list, <Chat key={list.length} name="Me" message={message} />]);
        }
    };

    const [list, setList] = useState();
    const [message, setMessage] = useState();

    useEffect(() => {
        fetch("/data/room-chats.json")
            .then(response => response.json())
            .then(data => {
                let items = [];
                for (let i in data) {
                    items.push(((name, message) =>
                        <Chat key={i} name={name} message={message} />)(data[i].name, data[i].message));
                }
                setList(items);
            });
    }, [setList]);

    return (
        <div className={styles["container"]}>
            <div className={styles["top-bar"]}>
                <span>{t("ChatBox.textChats")}</span>
            </div>
            <Card className={styles["list"]}>
                <ListGroup variant="flush">
                    {list}
                </ListGroup>
            </Card>
            <div className={styles["input-bar"]}>
                <InputGroup>
                    <Form.Control
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder={t("ChatBox.textSendAMessage")}
                        aria-label="Send a message"
                    />
                    <Button variant="primary" onClick={sendMessageAction}>
                        {t("ChatBox.buttonSend")}
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};
