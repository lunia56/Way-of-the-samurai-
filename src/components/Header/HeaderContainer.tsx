import React from 'react';
import classes from "./Header.module.css"
import image from "../../img/logo.png"
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Header';
import axios from 'axios';
import {InitialStateAuthType, SetAuthUserData} from '../../redux/auth-reducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {AuthIPI} from '../../API/API';



class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        AuthIPI.getAuthUserData()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id,login, email} = res.data.data
                    this.props.SetAuthUserData(id,login,email)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

type mapStateToPropsType = {
    login:string|null,
    isAuth:boolean
}
type mapDispatchToPropsType = {
    SetAuthUserData:(id:number, login:string,email:string)=>void
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    SetAuthUserData: (id:number, login:string,email:string) => dispatch(SetAuthUserData(id, login,email))
})
export type HeaderContainerPropsType = mapStateToPropsType& mapDispatchToPropsType
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);