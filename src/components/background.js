import React, { Component } from 'react'
import But from './button'



export class background extends Component {
    state = {

        buttons: [
            {
                key: 1,
                button: "login",
                option:1
            }, 
            {
                key:2,
                button:"Home",
                option:1
            },
            // {
            //     key:3,
            //     button: "Fogot Password",
            //     option:2

            // }
        ]
    }
    click(key){
        if(key === 1) window.location.href='/login';  //redirect user
        if(key ===2) window.location.href='/';
    }
   

    render() {
        return (
            
            this.state.buttons.map( (buttons) => (
                   
                        <But
                            //props
                            buttons={buttons}
                            click= {this.click}
                        />
                    
                    ))
                    
                )
            
    }
}


export default background
