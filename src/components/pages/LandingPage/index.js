import React, {useState} from 'react';
import './style.scss';
import Input from './Input';
import Dropdowns from './Dropdowns';
import Table from './Table/index';

const LandingPage = () => {
  const [searchValue, handleSearch] = useState('');
  return (
    <div className="landing">
      <h3>
        <i className="fas fa-caret-left" />
        Contact List
      </h3>
      <div className="landing-navigation">
        <i className="fas fa-bell" />
        <i className="fas fa-user" />
      </div>
      <div className="landing-container">
        <div className="landing-header">
          <Input searchValue={searchValue} handleSearch={handleSearch} />
          <Dropdowns />
        </div>
        <Table searchValue={searchValue} />
      </div>
      <div className="landing-addItem">
        <div>
          <i className="fas fa-plus" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
