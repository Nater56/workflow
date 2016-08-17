import React, { Component } from 'react';

const TriggersDropdown = ({updateTrigger, trigger}) =>{

  return (
    <div className="row">
      <div className="md-col-12" id="main">
        Choose an Event to add a behavior.
        <div id="trigger">
          <div className="btn-group">
            <button className="btn" id="trigger-btn">
              {trigger}
            </button>
            <button className="btn dropdown-toggle" data-toggle="dropdown">
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li id="1"><a onClick={(e)=> updateTrigger(e, "User Assignment")} href="#">User Assignment</a></li>
              <li id="2"><a onClick={(e)=> updateTrigger(e, "Due Date")} href="#">Due Date</a></li>
              <li id="3"><a onClick={(e)=> updateTrigger(e, "Result Complete")} href="#">Result Complete</a></li>
              <li id="3"><a onClick={(e)=> updateTrigger(e, "Result Started")} href="#">Result Started</a></li>
              <li id="3"><a onClick={(e)=> updateTrigger(e, "Result Incomplete")} href="#">Result Incomplete</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TriggersDropdown;
