import React from "react";
import s from "./ProfileInfo.module.css"
import image from "../../../img/picture.jpg"
import {profileType} from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {editMode: false}

    activeEditMode = () => {
        this.setState({editMode: true})
    }
    deactiveEditMode = () => {
        this.setState({editMode: false})
    }

    render() {

        return (

            <div>{!this.state.editMode
                ? <span onDoubleClick={this.activeEditMode}>
                {this.props.status}
            </span>
                : <div>
                    <input type="text" value={this.props.status} onBlur={this.deactiveEditMode} autoFocus={true}/>
                </div>}
            </div>);


    }
}

export default ProfileStatus;