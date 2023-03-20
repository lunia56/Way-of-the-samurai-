import {AuthIPI, loginDataType} from '../API/API';
import {DispatchType} from './redux-store';


export type InitialStateAuthType = {
    userId: null | number
    email: null | string
    login: null | string
    captchaUrl: null | string
    isAuth: boolean
}
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
export const authReducer = (state: InitialStateAuthType = initialState, action: AuthActionType): InitialStateAuthType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, ...action.payload}
        case 'SET_CAPTCHA_URL':
            return {...state, ...action.payload}
        default:
            return state

    }
}

export type AuthActionType = ReturnType<typeof SetAuthUserDataAC> | ReturnType<typeof setCaptchaUrl>
export const SetAuthUserDataAC = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA', payload: {userId, login, email, isAuth}
    } as const
}
export const setCaptchaUrl = (url: string) => ({
    type: 'SET_CAPTCHA_URL', payload: {captchaUrl:url}
} as const)

export const getAuthUserData = () => async (dispatch: DispatchType) => {
    let result = await AuthIPI.me()
    if (result.data.resultCode === 0) {
        let {id, login, email} = result.data.data
        dispatch(SetAuthUserDataAC(id, login, email, true))
    }
}

export const logIn = (loginData: loginDataType, setError: any) => async (dispatch: DispatchType) => {
    let result = await AuthIPI.logIn(loginData)

    if (result.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (result.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        setError('password', {
            type: "server",
            message: result.data.messages,
        })
    }
}

export const getCaptchaUrl = () => async (dispatch: DispatchType) => {
    const result = await AuthIPI.getCaptchaURL()
    const captchaUrl = result.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}
export const logOut = () => async (dispatch: DispatchType) => {
    let response = await AuthIPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(SetAuthUserDataAC(null, null, null, false))
    }
}

