import React, { Component } from 'react';
import Header from "../static/header";
import Clock from "./clock";

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {

    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <Clock/>
            </div>
        );
    }
}

export default Lifecycle;