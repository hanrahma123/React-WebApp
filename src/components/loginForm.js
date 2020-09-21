import React from 'react'
import Buttons from './buttons'

export default function loginForm(props) {
    return (
        <div>
            <h2 className="loginTitle">Login</h2>
            <form
                onSubmit={props.onSubmit.bind(this)}
            
            >
                <h3 className="loginFields">Username:</h3>
                <input
                    type="text"
                    name="username"
                    className= "username"
                ></input>
                <h3 className="loginFields">Password:</h3>
                <input
                    type="password"
                    name="password"
                    className= "username"
                ></input>
                <p></p>
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex:'1'}}
                />
            </form>
            <Buttons 
                className="forgotPassword"
                buttons={props.buttons}
                click ={ props.click}
            />
        </div>
    )
}
