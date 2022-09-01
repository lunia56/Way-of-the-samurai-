import {combineReducers, createStore} from 'redux';
import {profileReducer} from './Profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';


let reduсers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer
})
let store = createStore(reduсers);
export default store