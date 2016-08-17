import React, { Component } from 'react';
import Styles from './app-styles';

const ActionSubject = ({subject, updateSubject}) =>{
return (
  <div style={Styles.condition}>
  <div className="btn-group">
    <button className="btn" id="trigger-btn">
      {subject}
    </button>
    <button className="btn dropdown-toggle" data-toggle="dropdown">
      <span className="caret"></span>
    </button>
    <ul className="dropdown-menu">
      <li id="9"><a onClick={(e)=> updateSubject(e, "User")} href="#">User</a></li>
      <li id="10"><a onClick={(e)=> updateSubject(e, "Users Manager")} href="#">Users Manager</a></li>
      <li id="11"><a onClick={(e) => updateSubject(e, "User and Manager")} href="#">User and Manager</a></li>
    </ul>
  </div>

  </div>
);
};

export default ActionSubject;
