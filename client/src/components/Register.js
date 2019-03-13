import React from 'react'

class Register extends React.Component {

    state = {
        emailValue: '',
        passValue: '',
        passAgainValue: '',
        name: ''
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.setState({ emailValue: e.target.value })} value={this.state.emailValue} placeholder="Your email..." />
                <input onChange={(e) => this.setState({ passValue: e.target.value })} value={this.state.passValue} placeholder="Your password..." type="password" />
                <input onChange={(e) => this.setState({ passAgainValue: e.target.value })} value={this.state.passAgainValue} placeholder="Your password again..." type="password" />
                <br />
                <input type='button' value='Register' />
            </div>
        )
    }
}

export default Register