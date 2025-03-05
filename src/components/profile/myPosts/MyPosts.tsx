import s from './myPosts.module.css'
import {Post} from "./post/Post.tsx";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <textarea></textarea>
            <button>add post</button>
            <div className={s.posts}>
                <Post message={'Hi, how are you'}/>
                <Post message={'It`s my first post'}/>
            </div>
        </div>
    );
};