import React from 'react';
import {connect} from 'react-redux';
import {AppStateType, DispatchType} from '../../redux/redux-store';
import {
    follow,
    onPageChanget,
    requestUsers,
    SelectPage,
    setTotalCount,
    SetUsers,
    unFollow,
} from '../../redux/users-reducer';
import UserFunction from "./Users";
import Preloader from '../common/Preloader/Preloader';
import {UserType} from '../../API/API';
import WithAuthRedirect from '../../HOC/withAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from '../../redux/selectors/userSelectors';


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    selectPage: (currentPage: number) => void
    setTotalUsers: (totalCount: number) => void
    getUser: (currentPage: number, pageSize: number) => void
    onPageChanget: (pageNumber: number, currentPage: number, pageSize: number) => void
}

class UsersAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.users.length == 0) {
            this.props.getUser(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = (pageNumber: number) => {
        // const {pageSize} = this.props
        // this.props.getUser(pageNumber, pageSize)
        this.props.onPageChanget(pageNumber, this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <>
            <UserFunction users={this.props.users} totalUserCount={this.props.totalUserCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                          follow={this.props.follow} unFollow={this.props.unFollow}
                          followingInProgress={this.props.followingInProgress}
                          isFetching={this.props.isFetching }/>

        </>
    }
};


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
const mapDispatchToProps = (dispatch: DispatchType): MapDispatchPropsType => {
    return {
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsers(users))
        },
        selectPage: (currentPage: number) => {
            dispatch(SelectPage(currentPage))
        },
        setTotalUsers: (totalCount: number) => {
            dispatch(setTotalCount(totalCount))
        },
        follow: (userId: number) => {
            dispatch(follow(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollow(userId))
        },
        getUser: (currentPage: number, pageSize: number) => {
            dispatch(requestUsers(currentPage, pageSize))
        },
        onPageChanget: (pageNumber: number, currentPage: number, pageSize: number) => {
            dispatch(onPageChanget(pageNumber, currentPage, pageSize))
        }
    }
}
export type UsersPropsType = MapStatePropsType
    & MapDispatchPropsType

// HOC для оборачивания компоненты проверкой на авторизацию
// let AuthRedirectComponent = withAuthRedirect(UsersAPI)
// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// функция compose позволяет создать цепочку вызовов функций, результат выполнений первой функции помещая е следующую в конвейере
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(UsersAPI)

