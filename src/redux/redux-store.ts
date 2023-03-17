import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {
    AddPostActionType,
    profileReducer, savePhotoSuccess, savePhotoSuccessType,
    SetUserProfileAT,
    SetUserStatusAT,
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
import {appReducer, InitializedActionType} from './app-reducer';

const rootReduсer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReduсer>
export type DispatchType = ThunkDispatch<AppStateType, unknown, ActionType>
// let store = createStore(rootReduсer, applyMiddleware(thunk));
const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__||compose;
const store = createStore(rootReduсer, composeEnhancers(applyMiddleware(thunk)))
export default store


export type ActionType =
    AddPostActionType
    | SetUserProfileAT
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
    | InitializedActionType
    | savePhotoSuccessType
// @ts-ignore
window.store = store
