import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import './index.css';
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
import {Route, withRouter} from 'react-router-dom';

export const PATH = {
    Dialogs:'/dialogs',
    Profile: '/profile',
    Users:'/users',
    News:'/news',
    Music:'/music',
    Settings:'/settings/settings',
    Friends:'/friends',
    Login:'/login'

}
class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.inicializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
            return (

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route /*exact*/ path={PATH.Dialogs} render={() =>
                            <DialogsContainer/>}/>
                        {/* Ниже описано как передавать опциональный параметр в путь для того что бы затем его использовать для WithROUT*/}
                        <Route path={`${PATH.Profile}/:userId?`} render={() =>
                            <ProfileContainer/>}/>
                        <Route path={PATH.Users} render={() =>
                            <UsersContainer/>}/>
                        <Route path={PATH.News} render={News}/>
                        <Route path={PATH.Music} render={Music}/>
                        <Route path={PATH.Settings} render={Settings}/>
                        <Route path={PATH.Friends} render={() => <Friends/>}/>
                        <Route path={PATH.Login} render={() =>
                            <Login/>}/>
                    </div>
                </div>

            );
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
export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);
