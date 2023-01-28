import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, profileType, updateUserStatus} from '../../redux/profile-reducer';
import {AppStateType, DispatchType} from '../../redux/redux-store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import WithAuthRedirect from '../../HOC/withAuthRedirect';
import Dialogs from '../Dialogs/Dialogs';
import {compose} from 'redux';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId ) {
            userId = String(this.props.autoryzedUserId)

            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }


    render() {
        return (

            <div>
                <Profile profile={this.props.profile} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>
            </div>);
    }
}


//types
type PathParamsType = {
    userId: string,
}
type mapStateToPropsType = {
    profile: null | profileType
    status: string
    autoryzedUserId: null | number
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfile: (id: string) => void
    getUserStatus: (id: string) => void
    updateUserStatus: (status: string) => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autoryzedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
let mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => ({
    getUserProfile: (id: string) => dispatch(getUserProfile(id)),
    getUserStatus: (id: string) => dispatch(getUserStatus(id)),
    updateUserStatus: (status: string) => dispatch(updateUserStatus(status)),
})
//так выглядит типизация withRouter
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


// до рефакторинга
// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
// HOC withRouter для снабжения ProfileContainer дополнит пропсами для того что бы брать id юзера (let userId = this.props.match.params.userId)
// let WithURLDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent);


// после рефакторинга
// функция compose позволяет создать цепочку вызовов функций, результат выполнений первой функции помещая е следующую в конвейере
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withRouter, WithAuthRedirect)(ProfileContainer)