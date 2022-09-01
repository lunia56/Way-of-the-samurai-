import {v1} from 'uuid';
import {ActionType, PostType, ProfilePageType, StateType} from './store';

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdatePostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts: [
        {id: v1(), message: 'Hi, How are you', likesCount: 15},
        {id: v1(), message: 'My First Post', likesCount: 4},
        {id: v1(), message: 'How is your it-kamasutra?', likesCount: 5},
        {id: v1(), message: 'Yo-hi', likesCount: 6},
        {id: v1(), message: '!', likesCount: 15},
        {id: v1(), message: '?', likesCount: 15}
    ],
        newPostText: ''
}
export const profileReducer = (state:ProfilePageType=initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state
        default: return state

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