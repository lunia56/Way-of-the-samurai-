import React from 'react';
import classes from "./Header.module.css"



function Header() {
    return (
        <header className={classes.header}>
            <img src="https://cdn.pixabay.com/photo/2017/06/30/10/14/social-media-2457842_960_720.png" alt="картинка" />
        </header>);
}

export default Header;