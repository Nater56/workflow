import React from 'react';
import Track from './Track.js';
import CourseList from './CourseList.js';
import MockAPI from './MockAPI.js';

class TrainingPage extends React.Component {
    
    constructor(){
        super();
        const tp = this;
    }

    componentWillMount(){
            this.setState({track : MockAPI.getTrack()});
            this.setState({courses : MockAPI.getCoursesByTrackName()});
    }

    deleteCourse(id){
        event.preventDefault();
        MockAPI.deleteCourseById(id);
        console.log(this);
        
        return  this.setState({courses:MockAPI.getCoursesByTrackName()});
    }

    render() {
        return (
            <div>
            <Track track={this.state.track} />
            <CourseList courses={this.state.courses} deleteCourse={this.deleteCourse} trainingPage={this} />
            </div>
        );
    }
}

export default TrainingPage; 