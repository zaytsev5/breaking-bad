import React, { Component } from 'react';
import spinner from '../img/loading.gif'
class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <img src={spinner} />
            </div>
        );
    }
}

export default Loading;