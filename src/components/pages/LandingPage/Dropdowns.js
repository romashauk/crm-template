import React from 'react';
import DropdownItem from './DropdownItem';

const dropdowns = [
  'Filter Priority',
  'Filter Contact Type',
  'Phase',
  'Filter Tags'
];
const Dropdowns = () => {
  return (
    <div className="landing-dropdowns_container">
      {dropdowns.map((name, i) => (
        <DropdownItem key={i} name={name} />
      ))}
    </div>
  );
};

export default Dropdowns;
