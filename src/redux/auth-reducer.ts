import {v1} from 'uuid';
import {AuthIPI, loginDataType} from '../API/API';
import {DispatchType} from './redux-store';


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
            return {...state, ...action.payload}
        default:
            return state

    }
}

export type AuthActionType = ReturnType<typeof SetAuthUserDataAC>
export const SetAuthUserDataAC = (id: number|null, login: string|null, email: string|null,isAuth:boolean) => {
    return {
        type: 'SET_USER_DATA', payload: {id, login, email,isAuth}
    } as const
}
export const getAuthUserData = ()=>(dispatch:DispatchType)=>{
    AuthIPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id,login, email} = res.data.data
                dispatch(SetAuthUserDataAC(id,login,email,true))
            }
        })
}
export const logIn = (loginData:loginDataType)=>(dispatch:DispatchType)=>{
    AuthIPI.logIn(loginData)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}
export const logOut = ()=>(dispatch:DispatchType)=>{
    AuthIPI.logOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(SetAuthUserDataAC(null,null,null,false))
            }
        })
}

