import s from './dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem.tsx";
import {Message} from "./Message/Message.tsx";
import {useRef} from "react";
import {MessagePageType} from "../../redux/state.ts";

type DialogPropsType = {
    state: MessagePageType
    // updateMessageText: (newMessageText: string) => void
    // addMessage: () => void
    dispatch: (action: {type: string, payload?: {newPostText?: string, newMessageText?: string}}) => void
}

export const Dialogs = ({state, dispatch}: DialogPropsType) => {

    const newMessageItem = useRef<HTMLTextAreaElement>(null)

    const addMessageButton = () => {
        dispatch({type: 'messages/addMessage'})
    }

    const addMessageOnChange = () => {
        if (newMessageItem.current) {
            dispatch({type: 'messages/updateMessageText', payload: {newMessageText: newMessageItem.current.value}})
        }
    }

    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
                </div>
                <div className={s.messages}>
                    {state.messages.map(m => <Message message={m.message} id={m.id}/>)}
                    <textarea
                        ref={newMessageItem}
                        value={state.newMessageText}
                        onChange={addMessageOnChange}
                    />
                    <button onClick={addMessageButton}>Send Message</button>
                </div>
            </div>
        </div>
    );
};