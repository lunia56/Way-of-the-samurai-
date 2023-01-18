import {v1} from 'uuid';
import {ActionType, DispatchType} from './redux-store';
import {ProfileAPI} from '../API/API';


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type profileType = {
    aboutMe: string | null
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: { small: string | null, large: string | null }
}
export type contactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdatePostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
export type SetUserProfileAT = ReturnType<typeof SetUserProfileAC>
export type InitialStateProfileType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | profileType
}
let initialState: InitialStateProfileType = {
    posts: [
        {id: v1(), message: 'Hi, How are you', likesCount: 15},
        {id: v1(), message: 'My First Post', likesCount: 4},
        {id: v1(), message: 'How is your it-kamasutra?', likesCount: 5},
        {id: v1(), message: 'Yo-hi', likesCount: 6},
        {id: v1(), message: '!', likesCount: 15},
        {id: v1(), message: '?', likesCount: 15}
    ],
    newPostText: '',
    profile: null
}
export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [newPost, ...state.posts], newPostText: ""};

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        default:
            return state

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
export const SetUserProfileAC = (profile: profileType) => ({type: 'SET_USER_PROFILE', profile} as const)


export const getUserProfile = (userId: string) => (dispatch: DispatchType) => {
    ProfileAPI.getProfilePage(userId)
        .then(res => {
            dispatch(SetUserProfileAC(res.data))
        })
}