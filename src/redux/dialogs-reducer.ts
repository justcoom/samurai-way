import {MessagePageType, MessageType} from "./state.ts";

const addMessage = 'messages/addMessage';
const updateMessageText = 'messages/updateMessageText'

const initialState = {
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
}

export const dialogReducer = (state: MessagePageType = initialState, action: DialogActionType) => {
    switch (action.type) {
        case addMessage: {
            const newMessage: MessageType = {message: state.newMessageText, id: '5'}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case updateMessageText:
            state.newMessageText = action.payload.newMessageText
            return state
        default:
            return state
    }


}

export const addMessageAC = () => {
    return {type: addMessage} as const
}
export const updateMessageTextAC = (text: string) => {
    return {type: updateMessageText, payload: {newMessageText: text}} as const
}


export type UpdateMessageActionType = ReturnType<typeof addMessageAC>
export type AddMessageActionType = ReturnType<typeof updateMessageTextAC>

export type DialogActionType = UpdateMessageActionType | AddMessageActionType