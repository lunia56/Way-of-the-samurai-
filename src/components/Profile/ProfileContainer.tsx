import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {profileType, SetUserProfileAC} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {logDOM} from '@testing-library/react';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)

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
type mapStateToPropsType = {
    profile: null|profileType
}
type mapDispatchToPropsType = {
    setUsersProfile:(profile:profileType)=>void
}
let mapStateToProps = (state:AppStateType):mapStateToPropsType => ({
    profile:state.profilePage.profile
})
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => ({
    setUsersProfile: (profile:profileType)=>dispatch(SetUserProfileAC(profile))
})
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);