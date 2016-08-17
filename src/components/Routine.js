import React from 'react';
import MockAPI from './MockAPI.js';
import TriggersDropdown from './TriggersDropdown.js';
import Menu from './Menu';
import TimeFrameDropdown from './TimeFrameDropdown.js';
import Styles from './app-styles.js';
import ActionDropdown from './ActionDropdown.js';
import TimePicker from './TimePicker.js';
import BehaviorDefinition from './BehaviorDefinition.js';
import ActionSubject from './ActionSubject.js';
import TemplatePicker from './TemplatePicker.js';

class Routine extends React.Component {

    constructor(){
        super();
        this.updateTrigger = this.updateTrigger.bind(this);
        this.updateTimeFrame = this.updateTimeFrame.bind(this);
        this.updateAction = this.updateAction.bind(this);
        this.updateDays = this.updateDays.bind(this);
        this.updateWeeks = this.updateWeeks.bind(this);
        this.updateSubject = this.updateSubject.bind(this);
        this.updateTemplate = this.updateTemplate.bind(this);
    }

    componentWillMount(){
            this.setState({activityTriggers : MockAPI.getActivityTriggers()});
            this.setState({activityActions : MockAPI.getActivityActions()});
            this.setState({trigger : "User Assignment"});
            this.setState({conditionExpression : ""});
            this.setState({showConditionBuilder: true});
            this.setState({timeFrame:"On"});
            this.setState({weeks:""});
            this.setState({days: ""});
            this.setState({action: "Email"});
            this.setState({subject: "User"});
            this.setState({template: "Default"});
    }

    updateTemplate(evt, newText){
      this.setState({template: newText});
    }
    updateSubject(evt, newText){
      this.setState({subject: newText});
    }
    updateTrigger(evt, newText){
      console.log(evt.target);
      if(newText.indexOf("Result") !== -1 || newText.indexOf("Assignment") !== -1){
        this.setState({timeFrame: "On"});
      }
      this.setState({trigger: newText});
    }
    updateTimeFrame(evt, newText){
      console.log(evt.target);
      if(newText.localeCompare("On") === 0 ){
        this.setState({days: ""});
        this.setState({weeks: ""});
      }
      this.setState({timeFrame: newText});
    }
    updateAction(evt, newText){
      console.log(evt.target);
      this.setState({action: newText});
    }

    updateDays(evt){
      console.log(evt);
      this.setState({days: evt.target.value});
    }
    updateWeeks(evt){
      this.setState({weeks: evt.target.value});
    }

    render() {
    let conditionBuilder = "";
    if(this.state.showConditionBuilder){
      conditionBuilder =
      <div style={Styles.condition}>
      <TimePicker updateDays={this.updateDays} updateWeeks={this.updateWeeks} weeks={this.state.weeks} days={this.state.days} timeFrame={this.state.timeFrame}/>
      <TimeFrameDropdown trigger={this.state.trigger} timeFrame={this.state.timeFrame} updateTimeFrame={this.updateTimeFrame} />
      <ActionDropdown updateDays={this.updateDays} updateWeeks={this.updateWeeks} action={this.state.action} updateAction={this.updateAction}/>
      <TemplatePicker template={this.state.template} updateTemplate={this.updateTemplate}/>
      <ActionSubject subject={this.state.subject} updateSubject={this.updateSubject}/>
      </div>
    }

        return (
<div className="container">
  <div className="row" style={Styles.root}>
  <Menu />

<TriggersDropdown updateTrigger={this.updateTrigger} trigger={this.state.trigger}/>
<div style={Styles.root}>
{conditionBuilder}
</div>
<BehaviorDefinition days={this.state.days} weeks={this.state.weeks} timeFrame={this.state.timeFrame} trigger={this.state.trigger} action={this.state.action} subject={this.state.subject} template={this.state.template}/>
</div>
</div>

        );
    }
}

export default Routine;
