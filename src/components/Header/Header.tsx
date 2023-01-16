import React from 'react';
import classes from "./Header.module.css"
import image from "../../img/logo.png"
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';



function Header(props:HeaderContainerPropsType) {
    return (
        <header className={classes.header}>
            <img src={image} alt={'картинка'} />
            {
                props.isAuth? <span>{props.login}</span>: <div className={classes.navlink}><NavLink to={'/login'}>Login</NavLink></div>
            }

        </header>);
}

export default Header;