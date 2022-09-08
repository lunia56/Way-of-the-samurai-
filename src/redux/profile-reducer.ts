import {v1} from 'uuid';
import {ActionType} from './store';


export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdatePostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export type InitialStateProfileType = {
    posts:Array<PostType>
    newPostText:string
}
let initialState:InitialStateProfileType =  {
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
export const profileReducer = (state:InitialStateProfileType=initialState, action: ActionType):InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
        return {...state,posts:[newPost,...state.posts],newPostText:""};

        case UPDATE_NEW_POST_TEXT:
            return {...state,newPostText:action.newPostText}
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