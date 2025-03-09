import styles from './myPosts.module.css'
import {Post} from "./Post/Post.tsx";
import {useRef} from "react";
import {PostType} from "../../../redux/state.ts";

type PropsType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updatePostText: (newPostText: string) => void
}

export const MyPosts = (props: PropsType) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPostHandler = () => {
        props.addPost()

    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updatePostText(newPostElement.current.value)
        }
    }

    return (
        <div className={styles.myPostBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    ref={newPostElement}
                    placeholder={'Post text...'}
                    value={props.newPostText}
                    onChange={onPostChange}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={styles.posts}>
                {props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} id={p.id}/>)}
            </div>
        </div>
    );
};