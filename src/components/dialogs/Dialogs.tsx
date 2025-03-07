import s from './dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem.tsx";
import {Message} from "./Message/Message.tsx";
import {DialogType, MessageType} from "../../App.tsx";

type DialogPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export const Dialogs = ({dialogs, messages}: DialogPropsType) => {


    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
                </div>
                <div className={s.messages}>
                    {messages.map(m => <Message message={m.message} id={m.id}/>)}
                </div>
            </div>
        </div>
    );
};