import {rerenderEntireThree} from "../render.tsx";

export type PostType = {
    message: string
    id: string
    likesCount: number
}
export type MessageType = {
    message: string
    id: string
}
export type DialogType = {
    name: string
    id: string
}
export type Sidebar = {
    avatar: string
    name: string
    id: string
}
export type RootStateType = {
    messagePage: MessagePageType
    profilePage: ProfilePageType
    sidebar: Sidebar[]
}
export type MessagePageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}


export const state: RootStateType = {
    messagePage: {
        dialogs: [
            {name: "Dimych", id: '1'},
            {name: "Maksim", id: '2'},
            {name: "Viktor", id: '3'},
            {name: "Katya", id: '4'},
            {name: "Petya", id: '5'},
        ],
        messages: [
            {message: "Hi!", id: "1"},
            {message: 'How are you?', id: "2"},
            {message: "Very good!", id: "3"},
            {message: "Yo", id: "4"},
        ],
        newMessageText: 'Hi!'
    },
    profilePage: {
        posts: [
            {message: 'Hi, how are you', id: "1", likesCount: 12},
            {message: 'It`s my first post', id: "2", likesCount: 20},
            {message: 'It`s my second post', id: "3", likesCount: 3},
        ],
        newPostText: 'it-kama',
    },
    sidebar: [
        {id: '1', avatar: 'https://i.pinimg.com/736x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg', name: 'Andrew'},
        {id: '2', avatar: 'https://i.pinimg.com/736x/d0/6b/43/d06b43ef4fc9ed6d78ac7a925923b303.jpg', name: 'Maksim'},
        {id: '3', avatar: 'https://i.pinimg.com/736x/d3/fa/73/d3fa73954491aef4d06db87fc2099221.jpg', name: 'Sveta'},
    ]
}

export const addPost = () => {
    const newPost = {id: '5', message: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireThree(state)
}

export const updatePostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireThree(state)
}

export const addMessage = () => {
    const newMessage: MessageType = {message: state.messagePage.newMessageText, id: '5'}
    state.messagePage.messages.push(newMessage)
    state.messagePage.newMessageText = ''
    rerenderEntireThree(state)
}

export const updateMessageText = (newMessageText: string) => {
    state.messagePage.newMessageText = newMessageText
    rerenderEntireThree(state)
}

