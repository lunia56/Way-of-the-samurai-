import React from 'react';
import Posts from '../Posts';
import {StoreType} from '../../../../redux/store';
import {AddPostActionCreator, ChangePostTextActionCreator} from '../../../../redux/Profile-reducer';
import StoreContext from '../../../../StoreContext';


type PostsContainerPropsType = {}

function PostsContainer(props: PostsContainerPropsType) {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const AddPost = () => {
                    store ? store.dispatch(AddPostActionCreator()) : store
                }
                const updatePostText = (text: string) => {
                    store ? store.dispatch(ChangePostTextActionCreator(text)) : store
                }
                return (store
                        ? <Posts posts={store.getState().profilePage.posts}
                                 newPostText={store.getState().profilePage.newPostText} updatePostText={updatePostText}
                                 AddPost={AddPost}/>
                        : store
                )
            }}

        </StoreContext.Consumer>
    );
}

export default PostsContainer;