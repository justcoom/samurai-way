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
    sidebar: [
        {id: '1', avatar: 'https://i.pinimg.com/736x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg', name: 'Andrew'},
        {id: '2', avatar: 'https://i.pinimg.com/736x/d0/6b/43/d06b43ef4fc9ed6d78ac7a925923b303.jpg', name: 'Maksim'},
        {id: '3', avatar: 'https://i.pinimg.com/736x/d3/fa/73/d3fa73954491aef4d06db87fc2099221.jpg', name: 'Sveta'},
    ]
}

