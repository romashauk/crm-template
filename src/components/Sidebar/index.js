import React from 'react';
import './style.scss';
import Tab from './Tab';
import tabs from './tabs';
import {withRouter} from 'react-router-dom';

function Sidebar({location, history}) {
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
      <h1>Shauk</h1>
      <ul className="sidebar-container">
        {tabs.map((tab, i) => (
          <Tab
            activeIndex={findIndexOfActive(tabs, location.pathname)}
            index={i}
            key={i}
            tab={tab}
          />
        ))}
      </ul>
    </div>
  );
}

export default withRouter(Sidebar);
