import {Sidebar,} from "./state.ts";

// const addMessage = 'messages/addMessage';
// const updateMessageText = 'messages/updateMessageText'

const initialState = [
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
    {
        id: '3',
        avatar: 'https://i.pinimg.com/736x/d3/fa/73/d3fa73954491aef4d06db87fc2099221.jpg',
        name: 'Sveta'
    },
]

export const sidebarReducer = (state: Sidebar[] = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

// export const addMessageAC = () => {
//     return {type: addMessage} as const
// }
// export const updateMessageTextAC = (text: string) => {
//     return {type: updateMessageText, payload: {newMessageText: text}} as const
// }
//
//
// export type UpdateMessageActionType = ReturnType<typeof addMessageAC>
// export type AddMessageActionType = ReturnType<typeof updateMessageTextAC>
//
// export type DialogActionType = UpdateMessageActionType | AddMessageActionType