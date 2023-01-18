import {v1} from 'uuid';
import {AddPostActionType, UpdatePostTextActionType} from './profile-reducer';
import {AddMessageActionType} from './dialog-reducer';
import {followUnFollowAPI, UserAPI, UserType} from '../API/API';
import {Dispatch} from 'redux';
import {ActionType, DispatchType} from './redux-store';


export type FollowUserAT = ReturnType<typeof FollowSuccess>
export type UnFollowUserAT = ReturnType<typeof UnFollowSuccess>
export type SetUsersAT = ReturnType<typeof SetUsers>
export type SelectPageAT = ReturnType<typeof SelectPage>
export type setTotalCountAT = ReturnType<typeof setTotalCount>
export type ToggleFetchingAT = ReturnType<typeof ToggleIsFetching>



export type InitialStateUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:number[]
}


let initialState: InitialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress:[]
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
        case 'TOGGLE_FOLLOWING_IN_PROGRESS':
            return {...state,followingInProgress:action.isFetching
                    ? [...state.followingInProgress,action.userId]
                    :state.followingInProgress.filter(id=>id!==action.userId)}
        default:
            return state

    }
}

export const FollowSuccess = (UserId: number) => ({type: "FOLLOW", UserId}) as const
export const UnFollowSuccess = (UserId: number) => ({type: "UNFOLLOW", UserId}) as const
export const SetUsers = (Users: Array<UserType>) => ({type: "SET_USERS", Users}) as const
export const SelectPage = (CurrentPage: number) => ({type: "SET_CURRENT_PAGE", CurrentPage}) as const
export const setTotalCount = (totalUsers: number) => ({type: "SET_TOTAL_COUNT", totalUsers}) as const
export const ToggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching}) as const
export const toggleFollowingInProgress = (isFetching: boolean,userId:number) => ({type: "TOGGLE_FOLLOWING_IN_PROGRESS", isFetching,userId}) as const


export const getUsers = (currentPage:number,pageSize:number)=>(dispatch:DispatchType)=>{
    dispatch(ToggleIsFetching(true))
        UserAPI.getUser(currentPage, pageSize)
            .then(res => {
                dispatch(ToggleIsFetching(false))
                console.log(res.items)
                dispatch(SetUsers(res.items))
                dispatch(setTotalCount(res.totalCount))
            })
}
export const onPageChanget = (pageNumber:number,currentPage:number,pageSize:number) => (dispatch:DispatchType) =>{
    dispatch(SelectPage(pageNumber))
    dispatch(ToggleIsFetching(true))
    UserAPI.getUser(currentPage, pageSize)
        .then(res => {
            dispatch(ToggleIsFetching(false))
            dispatch(SetUsers(res.items))
        })
}
export const follow = (userId:number)=>(dispatch:DispatchType)=>{
    dispatch(toggleFollowingInProgress(true, userId))
    followUnFollowAPI.follow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(FollowSuccess(userId))
                dispatch(toggleFollowingInProgress(false, userId))
            }
        })
}

export const unFollow = (userId:number)=>(dispatch:DispatchType)=>{
    dispatch(toggleFollowingInProgress(true, userId))
    followUnFollowAPI.unFollow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(UnFollowSuccess(userId))
                dispatch(toggleFollowingInProgress(false, userId))
            }
        })
}