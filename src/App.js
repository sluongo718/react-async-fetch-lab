// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

    state = {
        people: ''
    }

    render(){
        return null
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(astros => this.setState({people: astros}))
    }
}


// componentDidMount() {
//     fetch("http://api.open-notify.org/astros.json")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           peopleInSpace: data.people,
//         });
//       });
//   }

