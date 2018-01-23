import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Header from "../static/header";
import Gallery from "./gallery";

class Apis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }
    search() {
        const BASE_URL = 'http://www.omdbapi.com/?apikey=';
        const BASE_KEY = 'xxxxxxxxx';
        fetch(`${BASE_URL}${BASE_KEY}&s=${this.state.query}`, { method: 'GET'})
            .then(response => response.json())
            .then(json => {
                let items = json['Search'];
                this.setState({items});
                console.log(this.state.items);
            });
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a movie"
                            onChange={event => this.setState({query: event.target.value})}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>

                <Gallery items={this.state.items}/>

            </div>
        );
    }
}

export default Apis;