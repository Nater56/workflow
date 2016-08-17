import React from 'react';
import Styles from './app-styles.js'

const BehaviorDefinition = ({days, weeks, timeFrame, trigger, action, subject, template}) =>{

  let myDays = "";

  if(days.length > 0){
    myDays = days + " day(s) ";
  }

  let myWeeks = "";

  if(weeks.length > 0){
    myWeeks = weeks + " week(s) ";
  }


  return (


<div style={Styles.root}>
  Your behavior: {myDays}  {myWeeks} {timeFrame} {trigger} {action} {subject} {template}
</div>
);
};

export default BehaviorDefinition;
