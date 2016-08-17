import React, { Component } from 'react';
import Styles from './app-styles';

const TimeFrameDropdown = ({trigger, timeFrame, updateTimeFrame}) =>{

  let dd = "";

  if(trigger.localeCompare("Due Date") == 0){
    dd = <ul className="dropdown-menu">
      <li id="4"><a onClick={(e)=> updateTimeFrame(e, "Before")} href="#">Before</a></li>
      <li id="5"><a onClick={(e)=> updateTimeFrame(e, "On")} href="#">On</a></li>
      <li id="6"><a onClick={(e)=> updateTimeFrame(e, "After")} href="#">After</a></li>
    </ul>
  }
  if(trigger.localeCompare("User Assignment") == 0 || trigger.indexOf("Result") !== -1){
    dd = <ul className="dropdown-menu">
      <li id="5"><a onClick={(e)=> updateTimeFrame(e, "On")} href="#">On</a></li>
      <li id="6"><a onClick={(e)=> updateTimeFrame(e, "After")} href="#">After</a></li>
    </ul>
  }
  return (


<div style={Styles.condition}>
<div className="btn-group">
  <button className="btn" id="trigger-btn">
    {timeFrame}
  </button>
  <button className="btn dropdown-toggle" data-toggle="dropdown">
    <span className="caret"></span>
  </button>
  {dd}
</div>
   <div style={Styles.condition}>{trigger}</div>
</div>

  );
};

export default TimeFrameDropdown;
