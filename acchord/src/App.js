import {Route, Routes, useNavigate} from "react-router-dom";
import {Lobby} from "./Lobby";
import {Root} from "./Root";
import {Base} from "./wizard/Base";
import {CreateRoomFragment} from "./wizard/CreateRoomFragment";
import {JoinRoomFragment} from "./wizard/JoinRoomFragment";
import {MainFragment} from "./wizard/MainFragment";
import {SignInFragment} from "./wizard/SignInFragment";
import {SignUpFragment} from "./wizard/SignUpFragment";

const App = () => {
    const navigate = useNavigate();

    const createRoomAction = () => {
        navigate("/wizard/create-room");
    };

    const joinRoomAction = () => {
        navigate("/wizard/join-room");
    };

    const copyCodeAction = (code) => {
        navigator.clipboard.writeText(code);
    };

    const enterRoomAction = (code) => {
        navigate("/lobby", {state: {code: code}});
    };

    return (<Routes>
        <Route exact path="/" element={<Root />} />
        <Route path="/wizard/welcome" element={<Base
            mainComponent={MainFragment}
            mainComponentProps={{
                createRoomAction: createRoomAction, joinRoomAction: joinRoomAction
            }}
            showLoginButtonGroup={true} />}
        />
        <Route path="/wizard/create-room" element={<Base
            mainComponent={CreateRoomFragment}
            mainComponentProps={{
                copyCodeAction: copyCodeAction, enterRoomAction: enterRoomAction
            }}
            showLoginButtonGroup={true} />}
        />
        <Route path="/wizard/join-room" element={<Base
            mainComponent={JoinRoomFragment}
            mainComponentProps={{
                enterRoomAction: enterRoomAction
            }}
            showLoginButtonGroup={true} />}
        />
        <Route path="/wizard/sign-in" element={<Base
            mainComponent={SignInFragment}
            mainComponentProps={{}}
            showLoginButtonGroup={false} />}
        />
        <Route path="/wizard/sign-up" element={<Base
            mainComponent={SignUpFragment}
            mainComponentProps={{}}
            showLoginButtonGroup={false} />}
        />
        <Route path="/lobby" element={<Lobby />} />
    </Routes>);
};

export default App;
