import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './index.css';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';


function App() {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route /*exact*/ path="/dialogs" render={() =>
                    <DialogsContainer/>}/>
                <Route path="/profile" render={() =>
                    <Profile/>}/>
                <Route path="/users" render={() =>
                    <UsersContainer/>}/>
                <Route path="/news" render={News}/>
                <Route path="/music" render={Music}/>
                <Route path="/settings/settings" render={Settings}/>
                <Route path={"/friends"} render={() => <Friends/>}/>
            </div>
        </div>

    );
}

export default App;
