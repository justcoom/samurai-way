export const state = {
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
    },
    profilePage: {
        posts: [
            {message: 'Hi, how are you', id: "1", likesCount: 12},
            {message: 'It`s my first post', id: "2", likesCount: 20},
            {message: 'It`s my second post', id: "3", likesCount: 3},
        ],
    },
}