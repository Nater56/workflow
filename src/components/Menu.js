import React from 'react';

const Menu = () =>{

return (
  <div id="menu" className="col-md-12">
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
);
};

export default Menu;
