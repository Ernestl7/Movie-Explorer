import React, { Component } from 'react';

class Gallery extends Component {
    render () {
        let alternate = 'http://www.missingveterans.com/wp-content/uploads/2015/01/Help-icon.png';
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {Title, Poster, imdbID} = item;
                        return (
                            <a
                                key={index}
                                className="Movie"
                                href={`http://www.imdb.com/title/${imdbID}`}
                                target="_blank"
                            >
                                <img
                                    src={Poster !== undefined ? Poster : alternate}
                                    alt="Movie"
                                    className="Movie-img"
                                />
                                <div className="Movie-text">
                                    {Title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery