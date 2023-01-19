import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {InitialStateDialogsType} from '../redux/dialog-reducer';

type mapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    isAuth: state.auth.isAuth
})

function WithAuthRedirect(Component: any) {
    const RedirectComponent = (props: any) => {
        if (!props.isAuth) {
            // на 6 версии router-dom
            // return <Navigate to={'/login'}/>
            return <Redirect to={'/login'}/>
        }
        return <Component{...props}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}

export default WithAuthRedirect;