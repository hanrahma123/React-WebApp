import React, { Component } from 'react'
import '../Style/App.css';
import '../Style/login.css';
import Navbar from '../components/navbar';
import NavbarLeft from '../components/navbar_left';
import LoginBackground from '../components/loginBackground';
import DTable from '../components/dbTable';



//aws stuff
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';


export class login extends Component {
    state= {
        username: 'Hello User',

        creds:{
            username: 'Hello User',
            password: '',
        },
        
        data: ['{"name":"Mark"}'],
    }
    componentDidMount (){
        
        Auth.currentAuthenticatedUser()   //show current logged in user
        .then( (data) => {
            // userMe = data.username;
            this.setState({username: "Hello "  +data.username});
            // console.log(data.username);
        });
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:9090/fetchAll')
        xhr.onreadystatechange = () => {
            try{
            this.setState({data:  JSON.parse(xhr.response)});  //will ONLY work with X-origin-scripting
        //    console.log(JSON.parse(xhr.response)[0]);
            }
            catch(e){
                console.log("ERR:Could not parse data")
            }
        }
        xhr.send();
        
    }
    click(key){                             //click is attatched to every 'Button'
        window.location.href='/about';      //PLACEHOLDER
    }
    onSubmit(e){
        e.preventDefault();
        

    //     const login = {                           //extracted form field values to JSON object
    //         username: e.target.username.value,  
    //         password: e.target.password.value
    //     }
    //    //add aws cognito call here

    }
    
    render() {
        return (
            <div>
                <div className="flexbox0">  
                    <NavbarLeft/>
                    <div className='flexbox1'>
                        <Navbar/>
                        <div className='flexbox2'>
                            <span>
                                {this.state.username}
                                
                            </span>
                            <DTable
                                data = {this.state.data}
                                username = {this.state.username}
                            />
                            <div className="signoutButton">
                                <AmplifySignOut/>
                            </div>
                        </div>
                    </div>
                </div> 

            {/* <Navbar></Navbar>
            <LoginBackground 
                //props
                buttons={this.state.buttons} 
                click = {this.click}  
                onSubmit={this.onSubmit} 
            /> */}
            
            
        </div>
        )
    }
}

export default withAuthenticator(login);

