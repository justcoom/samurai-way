import s from './profile.module.css'
import {MyPosts} from "./myPosts/MyPosts.tsx";

export const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s"
                 alt=""/>
            <div>
                <img style={{width: '40px'}}
                     src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                     alt=""/>
                description
            </div>
            <MyPosts/>
        </div>
    );
};