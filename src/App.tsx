import './App.css'
import {Header} from "./components/Header.tsx";
import {NavBar} from "./components/NavBar.tsx";
import {Profile} from "./components/Profile.tsx";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    )
}

export default App
