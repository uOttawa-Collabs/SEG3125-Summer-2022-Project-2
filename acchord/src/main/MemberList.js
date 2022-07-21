import {useEffect, useState} from "react";
import {Card, ListGroup} from "react-bootstrap";
import styles from "./MemberList.module.css";
import {MemberListItem} from "./MemberListItem";

export const MemberList = () => {
    const [list, setList] = useState();

    useEffect(() => {
        fetch("/data/room-users.json")
            .then(response => response.json())
            .then(data => {
                let items = [];
                for (let i in data) {
                    items.push(((name, group) =>
                        <MemberListItem key={i} name={name} group={group} />)(data[i].name, data[i].group));
                }
                setList(items);
            });
    }, [setList]);

    return (
        <div className={styles["container"]}>
            <div className={styles["top-bar"]}>
                <span>Now in Room</span>
            </div>
            <Card className={styles["list"]}>
                <ListGroup variant="flush">
                    {list}
                </ListGroup>
            </Card>
        </div>
    );
};
