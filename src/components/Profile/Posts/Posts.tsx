import React from 'react';
import Post from './Post/Post'
import s from './posts.module.css'
import {PostsPropsType} from './PostsContainer';
import {AddPostForm} from './AddPostForm';


function Posts(props: PostsPropsType) {
    const dialogs = props.posts.map((p, i) => {
        return <Post key={i} message={p.message} likesCount={p.likesCount}/>
    })

    const AddPostHandler = (postMessage: string) => {
        props.AddPost(postMessage);
    }
    return (
        <>
            <div className={s.postsBlock}><h3>my Posts</h3>
                <div>
                    <AddPostForm addPost={AddPostHandler}/>
                </div>
                <div className={s.posts}>
                    {dialogs}
                </div>
            </div>
        </>
    );
}

export default Posts;