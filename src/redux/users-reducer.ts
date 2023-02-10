import {followUnFollowAPI, UserAPI, UserType} from '../API/API';
import {ActionType, DispatchType} from './redux-store';
import {AxiosResponse} from 'axios';


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
    followingInProgress: number[]
}


let initialState: InitialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_FOLLOWING_IN_PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
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
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: "TOGGLE_FOLLOWING_IN_PROGRESS",
    isFetching,
    userId
}) as const

// вспомогательная функция
const followUnfollowFlow = async (dispatch: DispatchType, userId: number, ActionCreator: Function, APIMethod:(id:number)=>Promise<AxiosResponse<any,any>>) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let response = await APIMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(ActionCreator(userId))
        dispatch(toggleFollowingInProgress(false, userId))
    }
}

export const requestUsers = (page: number, pageSize: number) => async (dispatch: DispatchType) => {
    dispatch(ToggleIsFetching(true))
    let response = await UserAPI.getUser(page, pageSize)
    dispatch(ToggleIsFetching(false))
    console.log(response.items)
    dispatch(SetUsers(response.items))
    dispatch(setTotalCount(response.totalCount))
}
export const onPageChanget = (pageNumber: number, currentPage: number, pageSize: number) => async (dispatch: DispatchType) => {
    dispatch(SelectPage(pageNumber))
    dispatch(ToggleIsFetching(true))
    let response = await UserAPI.getUser(currentPage, pageSize)
    dispatch(ToggleIsFetching(false))
    dispatch(SetUsers(response.items))
}
export const follow = (userId: number) => async (dispatch: DispatchType) => {
    followUnfollowFlow(dispatch, userId, FollowSuccess, followUnFollowAPI.follow.bind(followUnFollowAPI))
}

export const unFollow = (userId: number) => async (dispatch: DispatchType) => {
    followUnfollowFlow(dispatch, userId, UnFollowSuccess, followUnFollowAPI.unFollow.bind(followUnFollowAPI))

}