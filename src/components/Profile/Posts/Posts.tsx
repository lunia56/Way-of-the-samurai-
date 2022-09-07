import React, {ChangeEvent} from 'react';
import Post from './Post/Post'
import s from './posts.module.css'
import {PostsPropsType} from './Post/PostsContainer';



function Posts(props: PostsPropsType) {

    const dialogs = props.posts.map((p, i) => {
        return <Post key={i} message={p.message} likesCount={p.likesCount}/>
    })

    const AddPostHandler = () => {
        props.AddPost();
    }
    const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updatePostText(text)
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