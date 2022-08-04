import React from 'react';
import Post from './Post/Post'
import s from './posts.module.css'
import {PostsType} from '../../../redux/state';


type PostsPropsType ={
    posts:PostsType[]
}

function Posts(props:PostsPropsType) {

    const dialogs = props.posts.map((p,i)=> {
            return <Post key={i} message={p.message} likesCount={p.likesCount}/>
        })

    return (
        <>
            <div className={s.postsBlock}><h3>my Posts</h3>
                <div>
                    <div>
                        <textarea name="newPost"></textarea>
                    </div>
                    <div>
                        <button>Добавить пост</button>
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