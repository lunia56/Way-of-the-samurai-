import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={classes.sidebar}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink>
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