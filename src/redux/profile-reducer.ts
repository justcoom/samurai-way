import {PostType, ProfilePageType} from "./state.ts";

const addPost = 'posts/addPost';
const updatePostText = 'posts/updatePostText'

const initialState = {
    posts: [
        {message: 'Hi, how are you', id: "1", likesCount: 12},
        {message: 'It`s my first post', id: "2", likesCount: 20},
        {message: 'It`s my second post', id: "3", likesCount: 3},
    ],
    newPostText: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case addPost: {
            const newPost: PostType = {id: '5', message: state.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = ''
            return state
        }
        case updatePostText:
            state.newPostText = action.payload.newPostText
            return state
        default:
            return state
    }
}

export const addPostAC = () => {
    return {type: addPost} as const
}
export const updatePostTextAC = (text: string) => {
    return {type: updatePostText, payload: {newPostText: text}} as const
}

export type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>
export type AddPostActionType = ReturnType<typeof addPostAC>

export type ProfileActionType = UpdatePostTextActionType | AddPostActionType