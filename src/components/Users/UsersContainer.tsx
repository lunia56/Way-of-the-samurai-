import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {FollowAC, SelectPageAC, setTotalCountAC, SetUsersAC, UnFollowAC, UserType} from '../../redux/users-reducer';
import axios from "axios";
import UserFunction from "./Users";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    selectPage: (currentPage: number) => void
    setTotalUsers: (totalCount: number) => void
}

class UsersAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.users.length == 0) {

            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => {
                    this.props.setUsers(res.data.items)
                    this.props.setTotalUsers(res.data.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.selectPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <UserFunction users={this.props.users} totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} follow={this.props.follow} unFollow={this.props.unFollow}/>

    }
};


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsersAC(users))
        },
        selectPage: (currentPage: number) => {
            dispatch(SelectPageAC(currentPage))
        },
        setTotalUsers: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export  default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

