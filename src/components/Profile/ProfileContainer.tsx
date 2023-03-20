import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, profileType, savePhoto,saveProfile, updateUserStatus} from '../../redux/profile-reducer';
import {AppStateType, DispatchType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import WithAuthRedirect from '../../HOC/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    refreshProfile() {
        let userId: string | number = this.props.match.params.userId;
        if (!userId) {
            userId = Number(this.props.autoryzedUserId)
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(String(userId))
        this.props.getUserStatus(String(userId))
    }

    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }


    render() {
        return (

            <div>
                <Profile profile={this.props.profile} isOwner={!this.props.match.params.userId}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                         savePhoto={this.props.savePhoto}
                         saveProfile={this.props.saveProfile}/>
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
    savePhoto: () => void
    updateUserStatus: (status: string) => void
    saveProfile: (formData: any,setError:any) => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autoryzedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
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
export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus,savePhoto,saveProfile}), withRouter, WithAuthRedirect)(ProfileContainer)