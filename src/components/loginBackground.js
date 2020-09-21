import React, { Component } from 'react'
import LoginForm from '../components/loginForm'

export class loginBackground extends Component {
    render() {
        return (
            <div className= "loginBackground">
            <LoginForm
                buttons={this.props.buttons}
                click={this.props.click}
                onSubmit={this.props.onSubmit}
            ></LoginForm>
            </div>
        )
    }
}

export default loginBackground
