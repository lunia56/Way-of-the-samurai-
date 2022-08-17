import imageDog from '../img/dog.jpg'
import imageChiken from '../img/chiken.jpg'
import imageMonkey from '../img/monkey.jpg'
import imageYasher from '../img/yasher.jpg'
import {v1} from 'uuid';


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











export type StoreType ={
    _state:StateType
    updateNewPostText:(newText: string)=>void
    addPost:()=>void
    _callsubscriber:()=>void
    subscribe:(observer:()=>void)=>void
    getState:()=> StateType
}
export let store:StoreType = {
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
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callsubscriber() {
        console.log('Hello')
    },
    subscribe(observer ) {
        this._callsubscriber = observer;
    },
    addPost () {
        const newPost: PostType = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this.updateNewPostText('')
        this._callsubscriber()
    },
    updateNewPostText(newText: string) {
        console.log(newText)
        this._state.profilePage.newPostText = newText
        this._callsubscriber()
    }

}

// export let state: StateType = {
//     profilePage: {
//         posts: [
//             {id: v1(), message: 'Hi, How are you', likesCount: 15},
//             {id: v1(), message: 'My First Post', likesCount: 4},
//             {id: v1(), message: 'How is your it-kamasutra?', likesCount: 5},
//             {id: v1(), message: 'Yo-hi', likesCount: 6},
//             {id: v1(), message: '!', likesCount: 15},
//             {id: v1(), message: '?', likesCount: 15}
//         ],
//         newPostText: ''
//     },
//     dialogPage: {
//         dialogsData: [
//             {id: v1(), name: 'Ilya'},
//             {id: v1(), name: 'Andrew'},
//             {id: v1(), name: 'Sveta'},
//             {id: v1(), name: 'Sasha'},
//             {id: v1(), name: 'Victor'},
//             {id: v1(), name: 'Valera'}
//         ],
//         messageData: [
//             {id: v1(), message: 'Hi'},
//             {id: v1(), message: 'Yo'},
//             {id: v1(), message: 'How is your it-kamasutra?'},
//             {id: v1(), message: 'Yo-hi'},
//             {id: v1(), message: '!'},
//             {id: v1(), message: '?'}
//         ]
//     },
//     sidebar: {}
// }
// export const addPost = () => {
//     const newPost: PostType = {
//         id: v1(),
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     };
//     state.profilePage.posts.push(newPost)
//     updateNewPostText('')
//     rerenderEntireTree()
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree()
// }
//
// let rerenderEntireTree = () => {
//     console.log('Hello')
// }
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer;
// }








// message: messageData,
// dialogs: dialogsData,
// posts: posts

// let
//     let
// let
// export let state:stateType = {
//     message: messageData,
//     dialogs: dialogsData,
//     posts: posts
// }
