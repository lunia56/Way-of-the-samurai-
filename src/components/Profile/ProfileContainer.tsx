import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, profileType} from '../../redux/profile-reducer';
import {AppStateType, DispatchType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
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
    getUserProfile: (id:string) => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})
let mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => ({
    getUserProfile: (id:string) => dispatch(getUserProfile(id))
})
//так выглядит типизация withRouter
export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

let WithURLDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent);