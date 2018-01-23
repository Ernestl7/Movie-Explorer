import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    FormattedDate() {
        return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                {this.FormattedDate()}
            </div>
        );
    }
}

export default Clock;