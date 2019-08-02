import React from 'react';
import './style.scss';
import Tab from './Tab';
import tabs from './tabs';
import {withRouter} from 'react-router-dom';

function Sidebar(props) {
  const findIndexOfActive = (array, value) => {
    let index;
    array.forEach((item, i) => {
      if (item.link === value) {
        index = i;
      }
    });
    return index;
  };
  return (
    <div className="sidebar">
      <h1>unicorn</h1>
      <ul className="sidebar-container">
        {tabs.map((tab, i) => (
          <Tab
            activeIndex={findIndexOfActive(tabs, props.location.pathname)}
            index={i}
            active={props.location.pathname}
            key={i}
            tab={tab}
          />
        ))}
      </ul>
      <div
        onClick={() => props.history.push('/support')}
        className="sidebar-footer"
      >
        <i class="fas fa-question-circle" />
      </div>
    </div>
  );
}

export default withRouter(Sidebar);
