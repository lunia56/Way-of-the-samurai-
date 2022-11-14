import {v1} from 'uuid';
import {ActionType} from './store';


export type FollowUserActionType = ReturnType<typeof FollowAC>
export type UnFollowUserActionType = ReturnType<typeof UnFollowAC>
export type SetUsersActionType = ReturnType<typeof SetUsersAC>


export type InitialStateUsersType = {
    users: Array<UserType>
}
export type UserType = {
    id: string
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: locationUserType
}
type locationUserType = { country: string, city: string }
let initialState: InitialStateUsersType = {
    users: []
}
export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.UserId ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.UserId ? {...el, followed: false} : el)}
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.Users]}
        default:
            return state

    }
}

export const FollowAC = (UserId: string)=> ({type:"FOLLOW", UserId}) as const
export const UnFollowAC = (UserId: string)=> ({type: "UNFOLLOW", UserId}) as const
export const SetUsersAC = (Users: Array<UserType>) => ({type: "SET_USERS", Users}) as const