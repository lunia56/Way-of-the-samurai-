import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './User.module.css'
import {v1} from 'uuid';
import  Axios from "axios"

class UsersC extends React.Component<UsersPropsType> {
    getUsers = () => {
        if (this.props.users.length == 0) {

            Axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {this.props.setUsers(res.data.items)
            })
        }
    }

    render() {

        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {this.props.users.map(el => <div key={el.id}>
                <span>
                    <div><img src={el.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>{el.followed ? <button onClick={() => {
                        this.props.unFollow(el.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        this.props.follow(el.id)
                    }}> Follow </button>}
                    </div></span>
                    <span>
                            <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                            </span>
                            <span>
                            <div>{el.location?.country}</div>
                            <div>{el.location?.city}</div>
                            </span>

                            </span>
                </div>)}
            </div>
        );
    }
};

export default UsersC