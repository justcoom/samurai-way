import s from './profile.module.css'
import {MyPosts} from "./myPosts/MyPosts.tsx";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo.tsx";

import {ProfilePageType} from "../../redux/state.ts";
import {ProfileActionType} from "../../redux/profile-reducer.ts";

type PropsType = {
    state: ProfilePageType
    dispatch: (action: ProfileActionType) => void
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