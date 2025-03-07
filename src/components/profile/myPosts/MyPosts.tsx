import styles from './myPosts.module.css'
import {Post} from "./post/Post.tsx";

export const MyPosts = () => {
    return (
        <div className={styles.myPostBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={styles.posts}>
                <Post message={'Hi, how are you'} likeCount={15}/>
                <Post message={'It`s my first post'} likeCount={10}/>
            </div>
        </div>
    );
};