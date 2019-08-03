import React from 'react';
import {withRouter} from 'react-router-dom';

function Tab({tab, activeIndex, index, history}) {
  return (
    <li
      className={`${activeIndex - 1 === index ? 'above-wrapper' : ''}${
        activeIndex + 1 === index ? 'below-wrapper' : ''
      }`}
      onClick={() => history.push(tab.link)}
    >
      <div
        className={`sidebar-tab${activeIndex === index ? ' active-tab' : ''}${
          activeIndex - 1 === index ? ' above-active' : ''
        }${activeIndex + 1 === index ? ' below-active' : ''}`}
      >
        <div>{tab.name}</div>
        <i className={tab.icon} />
      </div>
    </li>
  );
}
export default withRouter(Tab);
