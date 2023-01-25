import React from 'react';
// import {
//     AddMessageActionType,
//
// } from './dialog-reducer';
// import {
//     FollowUserAT,
//     SelectPageAT,
//     setTotalCountAT,
//     SetUsersAT,
//     ToggleFetchingAT,
//     toggleFollowingInProgress,
//     UnFollowUserAT,
// } from './users-reducer';
//



// export type StateType = {
//     profilePage: ProfilePageType
//     dialogPage: DialogPageType
//     sidebar: SidebarType
// }

// export type ProfilePageType = {
//     posts: PostType[]
//     newPostText: string
// }
// export type DialogPageType = {
//     dialogsData: DialogsDataType[]
//     messageData: MessageDataType[]
//     newMessageText: string
// }
//
//
// export type StoreType = {
//     _state: StateType
//     _callSubscriber: () => void
//     dispatch: (action: ActionType) => void
//     subscribe: (observer: () => void) => void
//     getState: () => StateType
// }


// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'Hi, How are you', likesCount: 15},
//                 {id: v1(), message: 'My First Post', likesCount: 4},
//                 {id: v1(), message: 'How is your it-kamasutra?', likesCount: 5},
//                 {id: v1(), message: 'Yo-hi', likesCount: 6},
//                 {id: v1(), message: '!', likesCount: 15},
//                 {id: v1(), message: '?', likesCount: 15}
//             ],
//             newPostText: ''
//         },
//         dialogPage: {
//             dialogsData: [
//                 {id: v1(), name: 'Ilya'},
//                 {id: v1(), name: 'Andrew'},
//                 {id: v1(), name: 'Sveta'},
//                 {id: v1(), name: 'Sasha'},
//                 {id: v1(), name: 'Victor'},
//                 {id: v1(), name: 'Valera'}
//             ],
//             messageData: [
//                 {id: v1(), message: 'Hi'},
//                 {id: v1(), message: 'Yo'},
//                 {id: v1(), message: 'How is your it-kamasutra?'},
//                 {id: v1(), message: 'Yo-hi'},
//                 {id: v1(), message: '!'},
//                 {id: v1(), message: '?'}
//             ],
//             newMessageText: ''
//         },
//         sidebar: {a:"a"} // внутри пустышка
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//         console.log('Hello')
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._state.sidebar = usersReducer(this._state.sidebar, action)
//         this._callSubscriber()
//     }
// }
//
//
//






