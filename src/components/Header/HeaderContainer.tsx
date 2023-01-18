import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {getAuthUserData} from '../../redux/auth-reducer';
import {AppStateType, DispatchType} from '../../redux/redux-store';


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

type mapStateToPropsType = {
    login: string | null,
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getAuthUserData: () => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = (dispatch: DispatchType):mapDispatchToPropsType => ({
    getAuthUserData: () => dispatch(getAuthUserData())
})
export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);