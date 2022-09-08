import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Users} from './Users';
import {AppStateType} from '../../redux/redux-store';
import {FollowAC, SetUsersAC, UnFollowAC, UserType} from '../../redux/users-reducer';


type MapStatePropsType = {
    users:Array<UserType>
}
type MapDispatchPropsType = {
    follow:(userId: string)=>void
    unFollow:(userId: string)=>void
    setUsers:(users:Array<UserType>)=>void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.userPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users:Array<UserType>)=> {
            dispatch(SetUsersAC(users))
        }
    }
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);