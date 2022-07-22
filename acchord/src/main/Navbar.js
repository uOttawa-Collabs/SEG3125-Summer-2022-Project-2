import Hamburger from "hamburger-react";
import {Button, Navbar as ReactNavbar, NavbarBrand} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {FaUserCircle} from "react-icons/fa";
import {IoMdExit} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = (props) => {
    const navigate = useNavigate();
    const [t, i18n] = useTranslation();

    const leaveRoomAction = () => {
        navigate("/");
    };

    return (
        <ReactNavbar className={styles["nav"]} as="nav" bg="primary" variant="dark">
            <div className={styles["justify-left"]}>
                <div className={styles["hamburger"]}>
                    <Hamburger color="white" toggled={props.drawerOpen} toggle={props.setDrawerOpen} />
                </div>
                <NavbarBrand className={styles["brand"]}>
                    Accord
                </NavbarBrand>
                <div className={styles["location-indicator"]}>
                    <span>{props.location}</span>
                </div>
            </div>
            <div className={styles["justify-right"]}>
                <Button className={styles["leave-room-button"]} onClick={leaveRoomAction}>
                    <IoMdExit className={styles["leave-room-icon"]} />
                    <span>{t("Navbar.buttonLeaveRoom")}</span>
                </Button>
                <Button className={styles["user-icon-button"]}>
                    <FaUserCircle className={styles["user-icon"]} />
                </Button>
            </div>
        </ReactNavbar>
    );
};
