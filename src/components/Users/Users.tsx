import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './User.module.css'
import {v1} from 'uuid';

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://www.vokrug.tv/pic/person/f/8/2/f/f82ffa62dd3311585bb3169eb07fc61e.jpg',
                followed: false,
                fullName: 'Vasyl',
                status: 'i love to travel in the mountains',
                location: {country: 'belarus', city: 'Minsk'}
            },
            {
                id: v1(),
                photoUrl: 'https://stuki-druki.com/aforizms/Ilia-Glinnikov-01.jpg',
                followed: true,
                fullName: 'Ilya',
                status: 'I am so pretty',
                location: {country: 'Russia', city: 'Saint Petersburg'}
            },
            {
                id: v1(),
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/3f1548c2-cc0e-4651-8e40-b1960aaeee62/280x420',
                followed: true,
                fullName: 'Andrew',
                status: 'i like football!!!',
                location: {country: 'Ukraine', city: 'Kiev'}
            },
            {
                id: v1(),
                photoUrl: 'https://тайна-вашего-имени.рф/img/imena/kirill.jpg',
                followed: false,
                fullName: 'Kirill',
                status: 'i am looking for a job right now...',
                location: {country: 'Russia', city: 'Orenburg'}
            }])
    }

    return (
        <div>
            {props.users.map(el => <div key={el.id}>
                <span>
                    <div><img src={el.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>{el.followed ? <button onClick={() => {
                        props.unFollow(el.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(el.id)
                    }}> Follow </button>}
                    </div></span>
                <span>
                            <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                            </span>
                            <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                            </span>

                            </span>
            </div>)}
        </div>
    );
};

