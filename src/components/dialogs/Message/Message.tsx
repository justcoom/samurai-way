import s from "../dialogs.module.css";

type MessagePropsType = {
    message: string
    id: string
}

export const Message = (props: MessagePropsType) => {
    return <div className={s.message}> {props.message} </div>
}