import {useEffect, useState} from "react";
import {Card, Form, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";
import {AiOutlinePlusCircle} from "react-icons/ai";
import styles from "./PlayList.module.css";
import {Song} from "./Song";

export const PlayList = () => {
    const [list, setList] = useState();
    const [filteredList, setFilteredList] = useState();
    const [listLength, setListLength] = useState();
    const [filter, setFilter] = useState("");
    const [t, i18n] = useTranslation();

    useEffect(() => {
        fetch("/data/room-playlist.json")
            .then(response => response.json())
            .then(data => {
                let items = [];
                for (let i in data) {
                    items.push(((name, artist) => <Song key={i} name={name}
                                                        artist={artist} />)(data[i].name, data[i].artist));
                }
                setList(items);
                setListLength(items.length);
            });
    }, [setList]);

    useEffect(() => {
        if (list !== undefined) {
            let items = [];
            list.forEach((e) => {
                console.log(e);
                if (filter.trim() === "" || e.props.name.toLowerCase().includes(filter.trim()) || e.props.artist.toLowerCase().includes(filter.trim())) {
                    items.push(e);
                }
            });
            setFilteredList(items);
        }
    }, [list, filter, setFilteredList]);

    return (<div className={styles["container"]}>
        <div className={styles["top-bar"]}>
            <div className={styles["left"]}>
                <span>{t("PlayList.textRoomPlayList")}</span>
                &nbsp;
                <span>({t("PlayList.templateTextSongCount").replace("%n", listLength)})</span>
                <Button variant="primary" className={styles["button-add"]}>
                    <AiOutlinePlusCircle className={styles["button-add-icon"]} />
                </Button>
            </div>
            <div className={styles["right"]}>
                <InputGroup className={styles["search-bar"]}>
                    <InputGroup.Text>{t("PlayList.textFilter")}</InputGroup.Text>
                    <Form.Control value={filter} onChange={e => {
                        setFilter(e.target.value.toLowerCase());
                    }} placeholder={t("PlayList.textFilterPlaceholder")} aria-label="Song filter" />
                </InputGroup>
            </div>
        </div>
        <Card className={styles["playlist"]}>
            {filteredList}
        </Card>
    </div>);
};
