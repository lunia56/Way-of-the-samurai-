import React, {ChangeEvent, LegacyRef, useRef} from 'react';
import Post from './Post/Post'
import s from './posts.module.css'
import {PostType} from '../../../redux/state';


type PostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function Posts(props: PostsPropsType) {

    const dialogs = props.posts.map((p, i) => {
        return <Post key={i} message={p.message} likesCount={p.likesCount}/>
    })

    const onClickHandler = () => {
        props.addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <>
            <div className={s.postsBlock}><h3>my Posts</h3>
                <div>
                    <div>
                        <textarea value={props.newPostText}
                                  onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <button onClick={onClickHandler}>Добавить пост</button>
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