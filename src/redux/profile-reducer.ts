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
    postMessage: string
}
export type SetUserProfileAT = ReturnType<typeof SetUserProfileAC>
export type SetUserStatusAT = ReturnType<typeof SetUserStatusAC>
export type savePhotoSuccessType = ReturnType<typeof savePhotoSuccess>
export type InitialStateProfileType = {
    posts: Array<PostType>
    profile: null | profileType
    status: string
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
    profile: null,
    status: ""
}
export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: action.postMessage,
                likesCount: 0
            };
            return {...state, posts: [newPost, ...state.posts]};
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'SET_USER_STATUS':
            return {...state, status: action.status}
        case 'SAVE_PHOTO_SUCCESS': {
            //@ts-ignore
            return {...state, profile:{...state.profile, photos:action.photos}}
        }
        default:
            return state

    }
}

export const AddPostActionCreator = (postMessage: string): AddPostActionType => ({type: ADD_POST, postMessage})
export const SetUserProfileAC = (profile: profileType) => ({type: 'SET_USER_PROFILE', profile} as const)
export const SetUserStatusAC = (status: string) => ({type: 'SET_USER_STATUS', status} as const)
export const savePhotoSuccess = (photos:any) => {
    return {
        type: 'SAVE_PHOTO_SUCCESS',
        photos
    } as const
}

export const getUserProfile = (userId: string) => async (dispatch: DispatchType) => {
    let response = await ProfileAPI.getProfilePage(userId)
    dispatch(SetUserProfileAC(response.data))
}
export const getUserStatus = (userId: string) => async (dispatch: DispatchType) => {
    let response = await ProfileAPI.getProfileStatus(userId)
    dispatch(SetUserStatusAC(response.data))
}
export const updateUserStatus = (status: string) => async (dispatch: DispatchType) => {
    let response = await ProfileAPI.updateProfileStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(SetUserStatusAC(status))
    }
}
export const savePhoto = (file: any) => async (dispatch: DispatchType) => {
    let response = await ProfileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}