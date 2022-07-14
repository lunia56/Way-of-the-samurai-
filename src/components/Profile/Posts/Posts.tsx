import React from 'react';
import Post from "./Post/Post"

function Posts() {
    return (
        <>
            <div> my Posts
                <div> new post </div>
                <div>
                    <textarea name="newPost"></textarea>
                    <button>Добавить пост</button>
                </div>
                <Post message="Hello React" likes={15} />
                <Post message="My First Post" likes={20} />
            </div>
        </>
    );
}

export default Posts;