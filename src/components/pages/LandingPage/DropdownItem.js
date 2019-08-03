import React from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from 'reactstrap';

const ItemDropdown = ({name}) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle tag="div" className="nav-link" caret>
        {name}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem active>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default ItemDropdown;
