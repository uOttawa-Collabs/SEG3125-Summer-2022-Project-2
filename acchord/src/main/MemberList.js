import {useEffect, useState} from "react";
import {Card, ListGroup} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import styles from "./MemberList.module.css";
import {MemberListItem} from "./MemberListItem";

export const MemberList = () => {
    const [list, setList] = useState();
    const [t, i18n] = useTranslation();

    useEffect(() => {
        fetch("/data/room-users.json")
            .then(response => response.json())
            .then(data => {
                let items = [];
                for (let i in data) {
                    items.push(
                        ((name, group) =>
                            <MemberListItem
                                key={i} name={name}
                                group={group} />)
                        (data[i].name, t("MemberList.text" + data[i].group[0].toUpperCase() + data[i].group.substring(1))));
                }
                setList(items);
            });
    }, [setList]);

    return (
        <div className={styles["container"]}>
            <div className={styles["top-bar"]}>
                <span>{t("MemberList.textNowInRoom")}</span>
            </div>
            <Card className={styles["list"]}>
                <ListGroup variant="flush">
                    {list}
                </ListGroup>
            </Card>
        </div>
    );
};
