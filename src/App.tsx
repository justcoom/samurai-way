import './App.css'
import {Profile} from "./components/profile/Profile.tsx";
import {Dialogs} from "./components/dialogs/Dialogs.tsx";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header.tsx";
import {NavBar} from "./components/Navbar/NavBar.tsx";


type AppProps = {
    state: {
        messagePage: {dialogs: DialogType[], messages: MessageType[]},
        profilePage: {posts: PostType[]},
        sidebar: Sidebar[]
    }
}

export type PostType = {
    message: string
    id: string
    likesCount: number
}

export type MessageType = {
    message: string
    id: string
}

export type DialogType = {
    name: string
    id: string
}

export type Sidebar = {
    avatar: string
    name: string
    id: string
}

function App({state}: AppProps) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar state={state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Profile state={state.profilePage}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs state={state.messagePage}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
