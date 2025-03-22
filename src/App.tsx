import './App.css'
import {Profile} from "./components/profile/Profile.tsx";
import {Dialogs} from "./components/dialogs/Dialogs.tsx";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header.tsx";
import {NavBar} from "./components/Navbar/NavBar.tsx";
import {RootStateType} from "./redux/state.ts";

export type AppPropsType = {
    state: RootStateType
    // addPost: () => void
    // updatePostText: (newPostText: string) => void
    // updateMessageText: (newMessageText: string) => void
    // addMessage: () => void
    dispatch: (action: {type: string, payload?: {newPostText?: string, newMessageText?: string}}) => void
}

function App({state, dispatch}: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar state={state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={
                        <Profile
                            // addPost={addPost}
                            state={state.profilePage}
                            // updatePostText={updatePostText}
                            dispatch={dispatch}
                        />
                    }/>
                    <Route path={'/dialogs/*'} element={
                        <Dialogs
                            state={state.messagePage}
                            // updateMessageText={updateMessageText}
                            // addMessage={addMessage}
                            dispatch={dispatch}
                        />
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default App
