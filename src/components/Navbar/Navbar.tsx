import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={classes.sidebar}>
            <div className={classes.item}>
                <NavLink to="/Profile/Profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Dialogs/Dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News/News" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music/Music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Settings/Settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
            </div>

            {/*<div className={classes.item}>*/}
            {/*    <NavLink to="/test" activeClassName={classes.active}>test</NavLink>*/}
            {/*</div>*/}
        </nav>);
}

export default Navbar;