import React from 'react';
import classes from "./Post.module.css"

type PostPropsType = {
    message: string
    likes: number
}

function Post(props: PostPropsType) {
    return (
        <>
            <div className={classes.item}>
                <img className={classes.style} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtKnm8n12pXCSJhru8ltv5fKe2BcpXWoxGA&usqp=CAU"/>

                {props.message}</div>
            <div> Нравится {props.likes}</div>
        </>
    );
}

export default Post;