import s from './profile.module.css'
import {MyPosts} from "./myPosts/MyPosts.tsx";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo.tsx";

import {ProfilePageType} from "../../redux/state.ts";

type PropsType = {
    state: ProfilePageType
    // addPost: () => void
    // updatePostText: (newPostText: string) => void
    dispatch: (action: {type: string, payload?: {newPostText: string, newMessageText: string}}) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                // addPost={props.addPost}
                posts={props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
                // updatePostText={props.updatePostText}
            />
        </div>
    );
};