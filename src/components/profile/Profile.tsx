import s from './profile.module.css'
import {MyPosts} from "./myPosts/MyPosts.tsx";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo.tsx";

export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};