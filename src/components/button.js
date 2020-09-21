import React, { Component } from 'react'

export class button extends Component {
    render(){
        const {key, button} = this.props.buttons;
        return (    
            <div>        
                <button
                    className="UserOps"
                    onClick={this.props.click.bind(this, key)}
                >{button}</button>
            </div>
        )
    }
}



export default button
