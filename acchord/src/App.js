import {Route, Routes, useNavigate} from "react-router-dom";
import {Root} from "./Root";
import {MainFragment} from "./wizard/MainFragment";
import {Base} from "./wizard/Base";

const App = () => {
    const githubRepoURL = "https://github.com/uOttawa-Collabs/SEG3125-Summer-2022-Project-2";
    const navigate = useNavigate();

    const createRoomAction = () => {
        navigate("/wizard/create-room");
    };

    const joinRoomAction = () => {
        navigate("/wizard/join-room");
    };

    const signUpAction = () => {
        navigate("/wizard/sign-up");
    };

    const signInAction = () => {
        navigate("/wizard/sign-in");
    };

    return (<Routes>
        <Route exact path="/" element={<Root />} />
        <Route path="/wizard/welcome" element={<Base
            mainComponent={MainFragment}
            mainComponentProps={{
                createRoomAction: createRoomAction, joinRoomAction: joinRoomAction
            }}
            showLoginButtonGroup={true}
            loginButtonGroupProps={{
                signUpAction: signUpAction, signInAction: signInAction
            }}
            githubRepoURL={githubRepoURL} />}
        />
        <Route exact path="/wizard/create-room" element={<Base
            mainComponent={() => ""}
            mainComponentProps={{}}
            showLoginButtonGroup={true}
            loginButtonGroupProps={{
                signUpAction: signUpAction, signInAction: signInAction
            }}
            githubRepoURL={githubRepoURL} />}
        />
        <Route exact path="/wizard/join-room" element={<Base
            mainComponent={() => ""}
            mainComponentProps={{}}
            showLoginButtonGroup={true}
            loginButtonGroupProps={{
                signUpAction: signUpAction, signInAction: signInAction
            }}
            githubRepoURL={githubRepoURL} />}
        />
        <Route exact path="/wizard/sign-in" element={<Base
            mainComponent={() => ""}
            mainComponentProps={{}}
            showLoginButtonGroup={false}
            loginButtonGroupProps={{
                signUpAction: signUpAction, signInAction: signInAction
            }}
            githubRepoURL={githubRepoURL} />}
        />
        <Route exact path="/wizard/sign-up" element={<Base
            mainComponent={() => ""}
            mainComponentProps={{}}
            showLoginButtonGroup={false}
            loginButtonGroupProps={{
                signUpAction: signUpAction, signInAction: signInAction
            }}
            githubRepoURL={githubRepoURL} />}
        />
    </Routes>);
};

export default App;
