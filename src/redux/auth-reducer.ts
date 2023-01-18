import {v1} from 'uuid';


export type InitialStateAuthType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: InitialStateAuthType = initialState, action: AuthActionType): InitialStateAuthType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state

    }
}

type AuthActionType = ReturnType<typeof SetAuthUserData>
export const SetAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: 'SET_USER_DATA', data: {id, login, email}
    } as const
}

