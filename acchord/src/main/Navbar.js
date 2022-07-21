import Hamburger from "hamburger-react";
import {Button, Navbar as ReactNavbar, NavbarBrand} from "react-bootstrap";
import {FaUserCircle} from "react-icons/fa";
import {IoMdExit} from "react-icons/io";
import styles from "./Navbar.module.css";

export const Navbar = (props) => {
    return (
        <ReactNavbar className={styles["nav"]} as="nav" bg="primary" variant="dark">
            <div className={styles["justify-left"]}>
                <div className={styles["hamburger"]}>
                    <Hamburger color="white" />
                </div>
                <NavbarBrand className={styles["brand"]}>
                    Accord
                </NavbarBrand>
                <div className={styles["location-indicator"]}>
                    <span>{props.location}</span>
                </div>
            </div>
            <div className={styles["justify-right"]}>
                <Button className={styles["leave-room-button"]}>
                    <IoMdExit className={styles["leave-room-icon"]} />
                    <span>Leave Room</span>
                </Button>
                <Button className={styles["user-icon-button"]}>
                    <FaUserCircle className={styles["user-icon"]} />
                </Button>
            </div>
        </ReactNavbar>
    );
};
