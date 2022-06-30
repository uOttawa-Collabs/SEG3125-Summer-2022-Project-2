import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const SignInFragment = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        alert("Sorry, this page is currently in development for now");
        navigate(-1);
    }, [navigate]);
};
