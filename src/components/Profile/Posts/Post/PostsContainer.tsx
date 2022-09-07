import React from 'react';
import Posts from '../Posts';
import {
    AddPostActionCreator,
    ChangePostTextActionCreator,
    InitialStateProfileType, PostType
} from '../../../../redux/Profile-reducer';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchPropsType = {
    AddPost: () => void
    updatePostText: (text: string) => void
}
const mapStateToProps = (state: InitialStateProfileType): MapStatePropsType => {
    return {
        posts: state.posts,
        newPostText: state.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        AddPost: () => dispatch(AddPostActionCreator()),
        updatePostText: (text) => dispatch(ChangePostTextActionCreator(text))
    }
}
export type PostsPropsType = MapStatePropsType & MapDispatchPropsType

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);