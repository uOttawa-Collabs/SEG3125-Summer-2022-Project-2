import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const Root = () => {
    // Jump to the wizard for now...
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/wizard/welcome");
    });
}
