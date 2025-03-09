import './App.css'
import {Profile} from "./components/profile/Profile.tsx";
import {Dialogs} from "./components/dialogs/Dialogs.tsx";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header.tsx";
import {NavBar} from "./components/Navbar/NavBar.tsx";
import {RootStateType} from "./redux/state.ts";

export type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updatePostText: (newPostText: string) => void
    updateMessageText: (newMessageText: string) => void
    addMessage: () => void
}

function App({state, updatePostText, addPost, updateMessageText, addMessage}: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar state={state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={
                        <Profile
                            addPost={addPost}
                            state={state.profilePage}
                            updatePostText={updatePostText}
                        />
                    }/>
                    <Route path={'/dialogs/*'} element={
                        <Dialogs
                            state={state.messagePage}
                            updateMessageText={updateMessageText}
                            addMessage={addMessage}
                            newMessageText={state.messagePage.newMessageText}
                        />
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default App
