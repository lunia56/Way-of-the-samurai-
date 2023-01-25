import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"
import image from "../../../img/picture.jpg"
import {profileType} from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import login from '../../Login/Login';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({editMode: true})
    }
    deactiveEditMode = () => {
        this.setState({editMode: false})
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status!==this.state.status){
            this.setState({status:this.props.status})
        }
    }

    render() {

        return (

            <div>{!this.state.editMode
                ? <span onDoubleClick={this.activeEditMode}>
                {this.props.status}
            </span>
                : <div>
                    <input onChange={(e) => this.onStatusChange(e)} type="text"
                           value={this.state.status}
                           onBlur={this.deactiveEditMode} autoFocus={true}/>
                </div>}
            </div>);


    }
}

export default ProfileStatus;