import React from 'react';
import Styles from './app-styles.js';

const TimePicker = ({updateDays, updateWeeks, weeks, days, timeFrame}) =>{
let content = "";
if (timeFrame.localeCompare("On") != 0){
  content = <div style={Styles.condition}>
Weeks: <input onChange={(evt) => updateWeeks(evt)} type="text" value={weeks}></input>
Days: <input onChange={(evt) => updateDays(evt)} type="text" value={days}></input>
</div>
}

  return (
    <div>
    {content}
    </div>
  );
};

export default TimePicker;
