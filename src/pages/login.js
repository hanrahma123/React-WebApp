import React, { Component } from 'react'
import '../Style/App.css';
import '../Style/login.css';
import Navbar from '../components/navbar';
import LoginBackground from '../components/loginBackground'
import Background from '../components/background'



export class login extends Component {
    state= {
        items:[],
        buttons:[
            {
            key:1,
            button: 'Forgot Password'
            }
        ],
    }
    click(key){
        window.location.href='/about';
    }
    render() {
        return (
            <div>
            <Navbar></Navbar>
            <LoginBackground 
                //props
                buttons={this.state.buttons} 
                click = {this.click}   
            />
            {/* <Background></Background> */}
        </div>
        )
    }
}

export default login

