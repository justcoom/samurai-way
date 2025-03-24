import './App.css'
import {Profile} from "./components/profile/Profile.tsx";
import {Dialogs} from "./components/dialogs/Dialogs.tsx";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header.tsx";
import {NavBar} from "./components/Navbar/NavBar.tsx";
import {RootStateType} from "./redux/state.ts";
import {AddPostActionType, UpdatePostTextActionType} from "./redux/profile-reducer.ts";
import {AddMessageActionType, UpdateMessageActionType} from "./redux/dialogs-reducer.ts";
import {RootReducerType} from "./redux/redux-store.ts";

export type AppPropsType = {
    state: RootStateType
    dispatch: (action: UpdatePostTextActionType | AddPostActionType | AddMessageActionType | UpdateMessageActionType) => void
    store: RootReducerType
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
                            state={state.profilePage}
                            dispatch={dispatch}
                        />
                    }/>
                    <Route path={'/dialogs/*'} element={
                        <Dialogs
                            state={state.messagePage}
                            dispatch={dispatch}
                        />
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default App
