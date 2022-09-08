import {v1} from 'uuid';
import {ActionType} from './store';

const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


export type MessageDataType = {
    id: string
    message: string

}
export type DialogsDataType = {
    id: string
    name: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE',
    newText:string
}

// export type UpdateMessageTextActionType = {
//     type: 'UPDATE-NEW-MESSAGE-TEXT'
//     newMessageText: string
// }
// export type InitialStateDialogsType = {
//     dialogsData: Array<DialogsDataType>
//     messageData: Array<MessageDataType>
//     newMessageText: string
// }
export type InitialStateDialogsType = typeof initialState
let initialState = {
    dialogsData: [
        {id: v1(), name: 'Ilya'},
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Valera'}
    ] as Array<DialogsDataType>,
    messageData: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'How is your it-kamasutra?'},
        {id: v1(), message: 'Yo-hi'},
        {id: v1(), message: '!'},
        {id: v1(), message: '?'}
    ] as Array<MessageDataType>,
    newMessageText: ''
}
export const dialogReducer = (state: InitialStateDialogsType = initialState, action: ActionType): InitialStateDialogsType => {
    switch (action.type) {

        case ADD_MESSAGE:
            const newMessage: MessageDataType = {
                id: v1(),
                message: action.newText,
            }
            return {...state, messageData: [...state.messageData, newMessage], newMessageText: ''}
        // case UPDATE_NEW_MESSAGE_TEXT:
        //     return {...state, newMessageText: action.newMessageText}
        default:
            return state

    }

}

export const AddMessageActionCreator = (newText:string): AddMessageActionType => {
    return {
        type: ADD_MESSAGE,
        newText
    } as const
}
// export const ChangeMessageTextActionCreator = (newMessageText: string): UpdateMessageTextActionType => {
//     return {
//         type: UPDATE_NEW_MESSAGE_TEXT,
//         newMessageText: newMessageText
//     }
// }
