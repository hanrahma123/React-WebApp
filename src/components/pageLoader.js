import React, { Component } from 'react'

export class pageLoader extends Component {
    state = {}
    render() {
        return (
            <div className="loader-container">
                <div className="loader">
                    <img 
                        src="https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif"
                    />
                </div>
            </div>
        )
    }
}

export default pageLoader
