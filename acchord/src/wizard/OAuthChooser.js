import {Card, Image} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import styles from "./OAuthChooser.module.css";

export const OAuthChooser = (props) => {
    const {t, i18n} = useTranslation();

    return (<div className={styles["container"]}>
        <Card bg="light" border="lightgray">
            <Card.Header as="h5">
                {t("OAuthChooser.title")}
            </Card.Header>
            <Card.Body className={styles["card-body"]}>
                {props.oAuthOptionList.map((element) => (
                    <div key={element.key} className={styles["card-item"]}
                         onClick={props.oAuthHandlerMap.get(element.key)}>
                        <div className={styles["card-item-icon-wrapper"]}>
                            <Image className={styles["card-item-icon"]}
                                   src={element.iconURL} />
                        </div>
                        <div className={styles["card-item-text-wrapper"]}
                             style={{backgroundColor: element.backgroundColor, color: element.textColor}}>
                            <span>{props.textTemplate(element.text)}</span>
                        </div>
                    </div>))}
            </Card.Body>
        </Card>
    </div>);
};
