import {applyMiddleware, combineReducers, createStore} from 'redux';
import {
    AddPostActionType,
    profileReducer,
    SetUserProfileAT,
    SetUserStatusAT,
    UpdatePostTextActionType
} from './profile-reducer';
import {AddMessageActionType, dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {
    FollowUserAT,
    SelectPageAT,
    setTotalCountAT,
    SetUsersAT,
    ToggleFetchingAT, toggleFollowingInProgress,
    UnFollowUserAT,
    usersReducer
} from './users-reducer';
import {AuthActionType, authReducer} from './auth-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk';

const rootReduсer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReduсer>
export type DispatchType = ThunkDispatch<AppStateType, unknown, ActionType>
let store = createStore(rootReduсer, applyMiddleware(thunk));
export default store


export type ActionType =
    AddPostActionType
    | SetUserProfileAT
    | UpdatePostTextActionType
    | AddMessageActionType
    | FollowUserAT
    | UnFollowUserAT
    | SetUsersAT
    | SelectPageAT
    | setTotalCountAT
    | ToggleFetchingAT
    | ReturnType<typeof toggleFollowingInProgress>
    | AuthActionType
    | SetUserStatusAT
// @ts-ignore
window.store = store
