import imageDog from '../img/dog.jpg'
import imageChiken from '../img/chiken.jpg'
import imageMonkey from '../img/monkey.jpg'
import imageYasher from '../img/yasher.jpg'
import {v1} from 'uuid';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}
export type SidebarType = {}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogPageType = {
    dialogsData: DialogsDataType[]
    messageData: MessageDataType[]
    newMessageText: string
}
export type MessageDataType = {
    id: string
    message: string

}
export type DialogsDataType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}


export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    _updateNewPostText: (newText: string) => void
    _addPost: () => void
    _addMessage: () => void
    _updateNewMessageText: (newText: string) => void
    dispatch: (action: ActionType) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdatePostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type ActionType =
    AddPostActionType
    | UpdatePostTextActionType
    | AddMessageActionType
    | UpdateMessageTextActionType


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, How are you', likesCount: 15},
                {id: v1(), message: 'My First Post', likesCount: 4},
                {id: v1(), message: 'How is your it-kamasutra?', likesCount: 5},
                {id: v1(), message: 'Yo-hi', likesCount: 6},
                {id: v1(), message: '!', likesCount: 15},
                {id: v1(), message: '?', likesCount: 15}
            ],
            newPostText: ''
        },
        dialogPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('Hello')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _addPost() {
        const newPost: PostType = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.unshift(newPost)
        this._updateNewPostText('')
        this._callSubscriber()
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    _addMessage() {
        const newMessage: MessageDataType = {
            id: v1(),
            message: this._state.dialogPage.newMessageText,

        };
        this._state.dialogPage.messageData.unshift(newMessage)
        this._updateNewMessageText('')
        this._callSubscriber()
    },
    _updateNewMessageText(newText: string) {
        this._state.dialogPage.newMessageText = newText
        this._callSubscriber()
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost()
                break
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newPostText)
                break
            case ADD_MESSAGE: this._addMessage()
                break
            case UPDATE_NEW_MESSAGE_TEXT: this._updateNewMessageText(action.newMessageText)
                break
        }
    }
}

export const AddPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}
export const ChangePostTextActionCreator = (newPostText: string): UpdatePostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
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







