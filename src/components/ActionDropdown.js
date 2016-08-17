import React, { Component } from 'react';
import Styles from './app-styles.js';
const ActionDropdown = ({action, updateAction}) =>{
  return (
    <div style={Styles.condition}>
    <div className="btn-group">
      <button className="btn" id="trigger-btn">
        {action}
      </button>
      <button className="btn dropdown-toggle" data-toggle="dropdown">
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        <li id="6"><a onClick={(e)=> updateAction(e, "Email")} href="#">Email</a></li>
        <li id="7"><a onClick={(e)=> updateAction(e, "SMS")} href="#">SMS</a></li>
      </ul>
    </div>
    </div>
      );
    };

    export default ActionDropdown;
