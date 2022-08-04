import imageDog from "../img/dog.jpg"
import imageChiken from "../img/chiken.jpg"
import imageMonkey from "../img/monkey.jpg"
import imageYasher from "../img/yasher.jpg"


export type StateType = {
    profilePage: ProfilePageType
    dialogPage:DialogPageType
    sidebar:SidebarType
}
export type SidebarType ={

}
export type ProfilePageType ={
    posts: PostsType[]
}
export type DialogPageType ={
    dialogsData: DialogsDataType[]
    messageData:MessageDataType[]
}
export type MessageDataType = {
    id: number
    message: string

}
export type DialogsDataType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}


export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, How are you', likesCount: 15},
            {id: 2, message: 'My First Post', likesCount: 4},
            {id: 3, message: 'How is your it-kamasutra?', likesCount: 5},
            {id: 4, message: 'Yo-hi', likesCount: 6},
            {id: 5, message: '!', likesCount: 15},
            {id: 6, message: '?', likesCount: 15}
        ]
    },
    dialogPage: {
        dialogsData: [
            {id: 1, name: 'Ilya'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ],
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'How is your it-kamasutra?'},
            {id: 4, message: 'Yo-hi'},
            {id: 5, message: '!'},
            {id: 6, message: '?'}
        ]
    },
    sidebar:{}
}

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
