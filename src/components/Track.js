import React from 'react';

class Track extends React.Component {

    render(){
        return(
            <div>
                <h1>Track Name: {this.props.track.Name}</h1>
                <p>{this.props.track.Description}</p>
            </div>
        );
    }
}

export default Track;