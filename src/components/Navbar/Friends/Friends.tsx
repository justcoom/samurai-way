import {Sidebar} from "../../../App.tsx";
import styles from './Friends.module.css'

type Props = {
    state: Sidebar[]
}

export const Friends = (props: Props) => {
    return (
        <div className={styles.friendBlock}>
            <h3>Friends</h3>
            <div className={styles.friends}>
                {props.state.map(f => {
                    return (
                        <div key={f.id} className={styles.friend}>
                            <img src={f.avatar} alt=""/>
                            <span>{f.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};