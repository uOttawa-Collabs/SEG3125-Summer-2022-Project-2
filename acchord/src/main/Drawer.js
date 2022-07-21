import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import styles from "./Drawer.module.css";

export const Drawer = (props) => {
    const [list, setList] = useState();
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        let list = [];
        if (props.items) {
            props.items.forEach((e, i) => {
                list.push(<Item key={i} text={e.text} onClick={e.action} />);
            });
        }
        setList(list);
    }, [setList]);

    useEffect(() => {
        if (props.open) {
            setToggled(true);
        }
    }, [props, setToggled]);

    return (
        <div
            className={`${styles["container"]} ${props.open ? styles["slide-in"] : (toggled ? styles["slide-out"] : "")}`}>
            {list}
        </div>
    );
};

const Item = (props) => {
    return (<Button className={styles["items"]} onClick={props.onClick}>
        <span className={styles["text"]}>{props.text}</span>
    </Button>);
};
