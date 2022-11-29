import {v1} from 'uuid';
import {AddPostActionType, UpdatePostTextActionType} from './profile-reducer';
import {AddMessageActionType} from './dialog-reducer';
import {ActionType} from './store';


export type FollowUserAT = ReturnType<typeof FollowAC>
export type UnFollowUserAT = ReturnType<typeof UnFollowAC>
export type SetUsersAT = ReturnType<typeof SetUsersAC>
export type SelectPageAT = ReturnType<typeof SelectPageAC>
export type setTotalCountAT = ReturnType<typeof setTotalCountAC>
export type ToggleFetchingAT = ReturnType<typeof ToggleIsFetchingAC>



export type InitialStateUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}


export type UserType = {
    id: number
    photos: { small: string | null, large: string | null }
    followed: boolean
    name: string | null
    uniqueUrlName: string | null
    status: string | null
    location: locationUserType
}
type locationUserType = { country: string, city: string }


let initialState: InitialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}
export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.UserId ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.UserId ? {...el, followed: false} : el)}
        case "SET_USERS":
            return {...state, users: action.Users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.CurrentPage}
        case "SET_TOTAL_COUNT":
            return {...state, totalUserCount: action.totalUsers}
        case "TOGGLE_IS_FETCHING":
            return {...state,isFetching:action.isFetching}
        default:
            return state

    }
}

export const FollowAC = (UserId: number) => ({type: "FOLLOW", UserId}) as const
export const UnFollowAC = (UserId: number) => ({type: "UNFOLLOW", UserId}) as const
export const SetUsersAC = (Users: Array<UserType>) => ({type: "SET_USERS", Users}) as const
export const SelectPageAC = (CurrentPage: number) => ({type: "SET_CURRENT_PAGE", CurrentPage}) as const
export const setTotalCountAC = (totalUsers: number) => ({type: "SET_TOTAL_COUNT", totalUsers}) as const
export const ToggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching}) as const
