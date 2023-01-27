import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {inicializeApp} from './redux/app-reducer';
import {AppStateType, DispatchType} from './redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.inicializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route /*exact*/ path="/dialogs" render={() =>
                            <DialogsContainer/>}/>
                        {/* Ниже описано как передавать опциональный параметр в путь для того что бы затем его использовать для WithROUT*/}
                        <Route path="/profile/:userId?" render={() =>
                            <ProfileContainer/>}/>
                        <Route path="/users" render={() =>
                            <UsersContainer/>}/>
                        <Route path="/news" render={News}/>
                        <Route path="/music" render={Music}/>
                        <Route path="/settings/settings" render={Settings}/>
                        <Route path={"/friends"} render={() => <Friends/>}/>
                        <Route path="/login" render={() =>
                            <Login/>}/>
                    </div>
                </div>

            );
        }

    }
}

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    inicializeApp: () => void
}
const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    inicializeApp: () => dispatch(inicializeApp())
})
type AppPropsType = mapStateToPropsType & mapDispatchToPropsType
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);
