import React from 'react';

class CourseList extends React.Component {

    createCourseRow(course){
       return(
            <div onClick={this.props.deleteCourse.bind(this.props.trainingPage, course.Id)}>
                <h4 key={course.Id}>{course.Name}</h4>
                {course.Description} <br /> <br />
                {course.Location}
                <br />
            </div>
       );
    }

    render(){
        return (
            <div>
                {this.props.courses.map(this.createCourseRow, this)}
            </div>
        );
    }
}

export default CourseList;