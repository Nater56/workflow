import React from 'react';
import MockAPI from './MockAPI.js';
import TriggersDropdown from './TriggersDropdown.js';

class Routine extends React.Component {

    constructor(){
        super();
        this.updateTrigger = this.updateTrigger.bind(this);
    }

    componentWillMount(){
            this.setState({activityTriggers : MockAPI.getActivityTriggers()});
            this.setState({activityActions : MockAPI.getActivityActions()});
            this.setState({trigger : "Assignment"});
    }

    updateTrigger(evt, newText){
      console.log(evt.target);
      this.setState({trigger: newText})
    }

    render() {

    let dd = "";

if(true){
  dd =   <TriggersDropdown updateTrigger={this.updateTrigger} trigger={this.state.trigger}/>
}

        return (
<div className="container">
  <div className="row">
    <div id='menu' className="col-md-12">
        <div className="menu-item selected">
            <i className="fa fa-university" aria-hidden="true"></i>
            <div><u>Activity</u></div>
        </div>

        <div className="menu-item">
            <i className="fa fa-calendar" aria-hidden="true"></i>
              <div>Event</div>
        </div>

        <div className="menu-item">
            <i className="fa fa-list-alt" aria-hidden="true"></i>
            <div>Track</div>
        </div>

        <div className="menu-item">
            <i className="fa fa-building" aria-hidden="true"></i>
            <div>Org</div>
        </div>
    </div>
</div>
{dd}
</div>

        );
    }
}

export default Routine;
