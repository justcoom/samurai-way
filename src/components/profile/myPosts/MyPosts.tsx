import s from './myPosts.module.css'
import {Post} from "./post/Post.tsx";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <textarea></textarea>
            <button>add post</button>
            <div className={s.posts}>
                <Post message={'Hi, how are you'} likeCount={15}/>
                <Post message={'It`s my first post'} likeCount={10}/>
            </div>
        </div>
    );
};