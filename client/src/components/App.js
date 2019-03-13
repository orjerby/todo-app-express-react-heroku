import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import TodoCreate from './todos/TodoCreate'
import TodoDelete from './todos/TodoDelete'
import TodoEdit from './todos/TodoEdit'
import TodoList from './todos/TodoList'
import TodoShow from './todos/TodoShow'
import Header from './Header'
import AuthError from './AuthError'
import Login from './Login'
import Register from './Register';
import Welcome from './Welcome';

class App extends React.Component {

    isLoggedIn = () => this.props.auth.isSignedIn

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact render={() => this.isLoggedIn() ? <Redirect to="/todos" /> : <Welcome />} />
                        <Route path="/login" exact render={() => this.isLoggedIn() ? <Redirect to="/todos" /> : <Login />} />
                        <Route path="/register" exact render={() => this.isLoggedIn() ? <Redirect to="/todos" /> : <Register />} />
                        <Route path="/todos" exact render={() => this.isLoggedIn() ? <TodoList /> : <AuthError />} />
                        <Route path="/todos/new" exact render={() => this.isLoggedIn() ? <TodoCreate /> : <AuthError />} />
                        <Route path="/todos/delete" exact render={() => this.isLoggedIn() ? <TodoDelete /> : <AuthError />} />
                        <Route path="/todos/edit" exact render={() => this.isLoggedIn() ? <TodoEdit /> : <AuthError />} />
                        <Route path="/todos/show" exact render={() => this.isLoggedIn() ? <TodoShow /> : <AuthError />} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(App)