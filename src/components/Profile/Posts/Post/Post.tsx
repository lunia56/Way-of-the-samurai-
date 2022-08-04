import React from 'react';
import s  from "./Post.module.css"
import Image from "../../../../img/logoPost.jpg";

type PostPropsType = {
    message: string
    likesCount: number
}

function Post(props: PostPropsType) {
    return (
        <>
            <div className={s.item}>
                <img className={s.style} src={Image}/>

                {props.message}</div>
            <div> Нравится {props.likesCount}</div>
        </>
    );
}

export default Post;