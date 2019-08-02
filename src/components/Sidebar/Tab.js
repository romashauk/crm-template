import React from 'react';
import {withRouter} from 'react-router-dom';

function Tab(props) {
  const {tab, active, activeIndex, index} = props;
  return (
    <li
      className={`${activeIndex - 1 === index ? 'above-wrapper' : ''}${
        activeIndex + 1 === index ? 'below-wrapper' : ''
      }`}
      onClick={() => props.history.push(tab.link)}
    >
      <div
        className={`sidebar-tab${active === tab.link ? ' active-tab' : ''}${
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
