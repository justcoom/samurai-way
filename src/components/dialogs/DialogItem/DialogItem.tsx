import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${props.id}`} className={props => props.isActive ? styles.active : ''}>{props.name}</NavLink>
        </div>
    )
}