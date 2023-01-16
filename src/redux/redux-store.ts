import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';

const rootReduсer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReduсer>
let store = createStore(rootReduсer);
export default store

// @ts-ignore
window.store = store
