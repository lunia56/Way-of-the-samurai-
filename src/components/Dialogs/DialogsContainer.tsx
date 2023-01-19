import React from 'react';
import {
    AddMessageActionCreator,
    InitialStateDialogsType
} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import WithAuthRedirect from '../../HOC/withAuthRedirect';



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

export type DialogsPropsType = mapStatePropsType&mapDispatchPropsType

// функция compose позволяет создать цепочку вызовов функций, результат выполнений первой функции помещая е следующую в конвейере
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),WithAuthRedirect)(Dialogs)

