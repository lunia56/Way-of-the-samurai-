import {v1} from 'uuid';
import {ActionType, DialogPageType, DialogsDataType, MessageDataType} from './store';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

export type UpdateMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
let initialState = {
    dialogsData: [
        {id: v1(), name: 'Ilya'},
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Valera'}
    ],
    messageData: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'How is your it-kamasutra?'},
        {id: v1(), message: 'Yo-hi'},
        {id: v1(), message: '!'},
        {id: v1(), message: '?'}
    ],
    newMessageText: ''
}
export const dialogReducer = (state:DialogPageType=initialState, action:ActionType) => {
    switch (action.type) {

        case ADD_MESSAGE:
            const newMessage: MessageDataType = {
                id: v1(),
                message: state.newMessageText,
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        default: return state

    }

}

export const AddMessageActionCreator = ():AddMessageActionType => {
    return {
        type: ADD_MESSAGE
    }
}
export const ChangeMessageTextActionCreator = (newMessageText: string):UpdateMessageTextActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    }
}
