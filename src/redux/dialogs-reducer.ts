import {ActionAT, MessagesPageType} from "./store";

export type AddMessageAT = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}
export type UpdateNewMessageTextAT = {
    type: 'UPD-NEW-MESSAGE-TEXT'
    newMessage: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrei"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Masha"},
        {id: 6, name: "Valera"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ],
    newMessageText: ''
}


const dialogsReducer = (state: MessagesPageType = initialState, action: ActionAT) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage = {
                id: 7,
                message: action.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = ''
            return state
        case 'UPD-NEW-MESSAGE-TEXT' :
            state.newMessageText = action.newMessage;
            return state
        default:
            return state
    }
}

export const sendMessageAC = (newMessageText: string): AddMessageAT => ({
    type: "SEND-MESSAGE",
    newMessageText: newMessageText
})
export const updateNewMessageTextAC = (newMessage: string): UpdateNewMessageTextAT => ({
    type: 'UPD-NEW-MESSAGE-TEXT',
    newMessage: newMessage
})



export default dialogsReducer;