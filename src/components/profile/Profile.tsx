import s from './profile.module.css'
import {MyPosts} from "./myPosts/MyPosts.tsx";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo.tsx";
import {PostType} from "../../App.tsx";

type PropsType = {
    state: {posts: PostType[]}
}

export const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
};