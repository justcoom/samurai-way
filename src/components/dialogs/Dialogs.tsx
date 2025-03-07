import s from './dialogs.module.css'
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

type PropsType = {
    message: string
}

export const Message = (props: PropsType) => {
    return <div className={s.message}> {props.message} </div>
}

export const Dialogs = () => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={'Dimych'} id={'1'}/>
                    <DialogItem name={'Maksim'} id={'2'}/>
                    <DialogItem name={'Viktor'} id={'3'}/>
                    <DialogItem name={'Katya'} id={'4'}/>
                    <DialogItem name={'Petya'} id={'5'}/>
                </div>
                <div className={s.messages}>
                    <Message message={'Hi'}/>
                    <Message message={'How are you?'}/>
                    <Message message={'Very good!'}/>
                </div>
            </div>
        </div>
    );
};