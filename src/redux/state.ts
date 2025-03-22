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

export const store = {
    _callSubscriber(state: RootStateType) {
        console.log(`${state} changed`)
    },
    _state: {
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
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {message: 'Hi, how are you', id: "1", likesCount: 12},
                {message: 'It`s my first post', id: "2", likesCount: 20},
                {message: 'It`s my second post', id: "3", likesCount: 3},
            ],
            newPostText: '',
        },
        sidebar: [
            {
                id: '1',
                avatar: 'https://i.pinimg.com/736x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg',
                name: 'Andrew'
            },
            {
                id: '2',
                avatar: 'https://i.pinimg.com/736x/d0/6b/43/d06b43ef4fc9ed6d78ac7a925923b303.jpg',
                name: 'Maksim'
            },
            {id: '3', avatar: 'https://i.pinimg.com/736x/d3/fa/73/d3fa73954491aef4d06db87fc2099221.jpg', name: 'Sveta'},
        ]
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: {type: string, payload?: {newPostText?: string, newMessageText?: string}}) {
        if (action.type === 'posts/addPost') {
            const newPost: PostType = {id: '5', message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'posts/updatePostText') {
            this._state.profilePage.newPostText = action.payload.newPostText
            this._callSubscriber(this._state)
        } else if (action.type === 'messages/addMessage') {
            const newMessage: MessageType = {message: this._state.messagePage.newMessageText, id: '5'}
            this._state.messagePage.messages.push(newMessage)
            this._state.messagePage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'messages/updateMessageText') {
            this._state.messagePage.newMessageText = action.payload.newMessageText
            this._callSubscriber(this._state)
        }
    },
}
