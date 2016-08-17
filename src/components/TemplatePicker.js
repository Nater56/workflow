import React, { Component } from 'react';
import Styles from './app-styles';

const TemplatePicker = ({template, updateTemplate}) =>{
return (
  <div style={Styles.condition}>
  <div className="btn-group">
    <button className="btn" id="trigger-btn">
      {template}
    </button>
    <button className="btn dropdown-toggle" data-toggle="dropdown">
      <span className="caret"></span>
    </button>
    <ul className="dropdown-menu">
      <li id="12"><a onClick={(e)=> updateTemplate(e, "Default")} href="#">Default</a></li>
      <li id="13"><a onClick={(e)=> updateTemplate(e, "Safety Training")} href="#">Saftey Training</a></li>
      <li id="14"><a onClick={(e) => updateTemplate(e, "Cybersecurity 2016")} href="#">Cybersecurity 2016</a></li>
    </ul>
  </div>

  </div>
);
};

export default TemplatePicker;
