import React, { Component } from 'react'
import '../Style/App.css';
import '../Style/login.css';
import Navbar from '../components/navbar';
import LoginBackground from '../components/loginBackground'
import Background from '../components/background'



export class login extends Component {
    state= {
        login:[
            {username:'aa'},
            {password:''}
        ],
        buttons:[
            {
            key:1,
            button: 'Forgot Password'
            }
        ],
    }
    click(key){                             //click is attatched to every 'Button'
        window.location.href='/about';      //PLACEHOLDER
    }
    onSubmit(e){
        e.preventDefault();
        

        const login = {                           //extracted form field values to JSON object
            username: e.target.username.value,  
            password: e.target.password.value
        }
       //add aws cognito call here

    }
    
    render() {
        return (
            <div>
            <Navbar></Navbar>
            <LoginBackground 
                //props
                buttons={this.state.buttons} 
                click = {this.click}  
                onSubmit={this.onSubmit} 
            />
            
        </div>
        )
    }
}

export default login

