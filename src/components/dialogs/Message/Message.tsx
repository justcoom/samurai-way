import styles from "./Message.module.css";

type MessagePropsType = {
    message: string
    id: string
}

export const Message = (props: MessagePropsType) => {
    return <div className={styles.message}> {props.message} </div>
}