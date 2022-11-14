import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';

const rootReduсer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer
})

export type AppStateType = ReturnType<typeof rootReduсer>
let store = createStore(rootReduсer);
export default store