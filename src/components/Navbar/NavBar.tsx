import s from './navBar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends.tsx";

import {Sidebar} from "../../redux/state.ts";

type PropsType = {
    state: Sidebar[]
}

export const NavBar = (props: PropsType) => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to={'/profile'} className={props => props.isActive ? s.active : ''}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className={props => props.isActive ? s.active : ''}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={props => props.isActive ? s.active : ''}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className={props => props.isActive ? s.active : ''}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" className={props => props.isActive ? s.active : ''}>Settings</NavLink>
                </div>
            </nav>
            <Friends state={props.state}/>
        </div>

    )
}