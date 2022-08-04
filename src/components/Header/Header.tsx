import React from 'react';
import classes from "./Header.module.css"
import image from "../../img/logo.png"



function Header() {
    return (
        <header className={classes.header}>
            <img src={image} alt={'картинка'} />
        </header>);
}

export default Header;