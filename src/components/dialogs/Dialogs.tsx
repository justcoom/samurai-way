import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogsPropsType = {

}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + " " + s.active}>
                        <NavLink to={'/dialogs/1'}>Petya</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/2'}>Maksim</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/3'}>Viktor</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/4'}>Katya</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are you?</div>
                    <div className={s.message}>Very good!</div>
                </div>
            </div>
        </div>
    );
};