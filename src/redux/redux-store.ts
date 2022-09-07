import {combineReducers, createStore} from 'redux';
import {profileReducer} from './Profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';

export type AppStateType = ReturnType<typeof rootReduсer>

let rootReduсer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer
})
let store = createStore(rootReduсer);
export default store