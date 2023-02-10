import {v1} from 'uuid';
import {AuthIPI, loginDataType} from '../API/API';
import {DispatchType} from './redux-store';
import {UseFormSetError} from 'react-hook-form/dist/types/form';
import {getAuthUserData} from './auth-reducer';


export type InitialStateAppType = {
    initialized: boolean

}
let initialState = {
    initialized: false

}
export const appReducer = (state: InitialStateAppType = initialState, action: InitializedActionType): InitialStateAppType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {...state, initialized: true}
        default:
            return state

    }
}

export type InitializedActionType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({type: 'INITIALIZED_SUCCESS'} as const)
export const inicializeApp = () => async (dispatch: DispatchType) => {

    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())


}


