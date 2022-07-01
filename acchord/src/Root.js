import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const Root = () => {
    // Jump to the wizard for now...
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/wizard/welcome");
    });
};
