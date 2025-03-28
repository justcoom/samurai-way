import styles from './myPosts.module.css'
import {Post} from "./Post/Post.tsx";
import {useRef} from "react";
import {PostType} from "../../../redux/state.ts";
import {addPostAC, ProfileActionType, updatePostTextAC} from "../../../redux/profile-reducer.ts";

type PropsType = {
    posts: PostType[]
    // addPost: () => void
    newPostText: string
    // updatePostText: (newPostText: string) => void
    dispatch: (action: ProfileActionType) => void
}

export const MyPosts = (props: PropsType) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPostHandler = () => {
        props.dispatch(addPostAC())

    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch(updatePostTextAC(newPostElement.current.value))
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
                {props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount} id={p.id}/>)}
            </div>
        </div>
    );
};