import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {profileType, SetUserProfileAC} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {logDOM} from '@testing-library/react';
import {RouteComponentProps, withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)

            .then(res => {
                console.log(res.data)

                this.props.setUsersProfile(res.data)
            })
    }

    render() {
        return (

            <div>
                <Profile profile={this.props.profile}/>
            </div>);
    }
}


//types
type PathParamsType = {
    userId: string,
}
type mapStateToPropsType = {
    profile: null | profileType
}
type mapDispatchToPropsType = {
    setUsersProfile: (profile: profileType) => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
    setUsersProfile: (profile: profileType) => dispatch(SetUserProfileAC(profile))
})
//так выглядит типизация withRouter
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

let WithURLDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent);