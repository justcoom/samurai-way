import styles from './myPosts.module.css'
import {PostType} from "../../../App.tsx";
import {Post} from "./Post/Post.tsx";

type PropsType = {
    posts: PostType[]
}

export const MyPosts = (props: PropsType) => {

    return (
        <div className={styles.myPostBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={styles.posts}>
                {props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} id={p.id}/>)}
            </div>
        </div>
    );
};