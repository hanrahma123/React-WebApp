import React, { Component } from 'react'
// import Axios from 'axios';

export class JSONFetch extends Component {
    state = {
        text: 'Hello',
    }
    componentDidMount (){
        // Axios.get('http://127.0.0.1:8080/greeting')
        // .then(resp => this.setState({ text: resp.}));

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://127.0.0.1:8080/greeting");
        xhr.onreadystatechange = () => {
            console.log(xhr.response);
            this.setState({text: xhr.response})
        }
        xhr.send();
        
      }
    

    render() {
        return (
            <div>
                <a>{this.state.text}</a>
            </div>
        )
    }
}

export default JSONFetch
