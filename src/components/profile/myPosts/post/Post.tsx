import s from "./post.module.css";

type PostPropsType = {
    message: string
    src?: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg?semt=ais_hybrid" alt=""/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
};