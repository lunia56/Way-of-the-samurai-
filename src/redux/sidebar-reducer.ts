import {ActionType} from './store';


export type initialStateSidebarType = { a: string }
export type SidebarType = { a: string }
const initialStateSidebar = {
    a: 'a'
}

export const sidebarReducer = (state: initialStateSidebarType = initialStateSidebar, action: ActionType): initialStateSidebarType => {
    // switch (action.type) {
    // case "Hello sidebar":
    // default:
    //     return state
    // }
    return state={a:"b"}
}