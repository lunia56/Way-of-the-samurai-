import React from 'react';
import {
    AddMessageActionCreator,
    InitialStateDialogsType
} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import { Dispatch } from 'redux';



type mapStatePropsType ={
    dialogsPage:InitialStateDialogsType
}
type mapDispatchPropsType ={
    addMessage:(newText: string)=>void
}

let mapStateToProps = (state: AppStateType):mapStatePropsType => {
    return {
        dialogsPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchPropsType => {
    return {
        addMessage: (newText: string)=>{
            // dispatch(ChangeMessageTextActionCreator(newText))
            dispatch(AddMessageActionCreator(newText))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
