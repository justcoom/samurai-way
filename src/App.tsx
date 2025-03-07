import './App.css'
import {Profile} from "./components/profile/Profile.tsx";
import {Dialogs} from "./components/dialogs/Dialogs.tsx";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header.tsx";
import {NavBar} from "./components/Navbar/NavBar.tsx";

type Props = {
    posts: PostType[]
    messages: MessageType[]
    dialogs: DialogType[]
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

function App({messages, dialogs, posts}: Props) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Profile posts={posts}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs messages={messages} dialogs={dialogs}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
