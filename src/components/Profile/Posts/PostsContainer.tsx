import React from 'react';
import Posts from './Posts';
import {
    AddPostActionCreator,
   PostType
} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../../redux/redux-store';


type MapStatePropsType = {
    posts: Array<PostType>
}
type MapDispatchPropsType = {
    AddPost: (postMessage:string) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        AddPost: (postMessage:string) => dispatch(AddPostActionCreator(postMessage)),
    }
}
export type PostsPropsType = MapStatePropsType & MapDispatchPropsType

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);