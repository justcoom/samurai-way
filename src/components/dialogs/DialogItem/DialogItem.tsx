import s from "../dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}