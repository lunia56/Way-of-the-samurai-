import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';

type mapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    isAuth: state.auth.isAuth
})

// Типизация HOC !
function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            // на 6 версии router-dom
            // return <Navigate to={'/login'}/>
            return <Redirect to={'/login'}/>
        }
        return <Component{...restProps as T}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}

export default WithAuthRedirect;