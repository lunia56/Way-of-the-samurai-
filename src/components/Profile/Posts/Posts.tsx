import React, {ChangeEvent} from 'react';
import Post from './Post/Post'
import s from './posts.module.css'
import {ActionType, AddPostActionCreator, ChangePostTextActionCreator, PostType} from '../../../redux/state';


type PostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

function Posts(props: PostsPropsType) {

    const dialogs = props.posts.map((p, i) => {
        return <Post key={i} message={p.message} likesCount={p.likesCount}/>
    })

    const AddPostHandler = () => {
        props.dispatch(AddPostActionCreator())
    }
    const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.dispatch(ChangePostTextActionCreator(e.currentTarget.value))
    }
    return (
        <>
            <div className={s.postsBlock}><h3>my Posts</h3>
                <div>
                    <div>
                        <textarea value={props.newPostText}
                                  onChange={updatePostTextHandler}/>
                    </div>
                    <div>
                        <button onClick={AddPostHandler}>Добавить пост</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {dialogs}
                </div>
            </div>
        </>
    );
}

export default Posts;