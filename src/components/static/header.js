import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
                <header className="App-header"><ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/lifecycle">LIFECYCLE</Link></li>
                    <li><Link to="/apis">APIS</Link></li>
                </ul></header>
        );
    }
}

export default Header;