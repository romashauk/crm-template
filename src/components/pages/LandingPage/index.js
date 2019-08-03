import React, {useState} from 'react';
import './style.scss';
import Input from './Input';
import Dropdowns from './Dropdowns';
import Table from './Table/index';

const LandingPage = () => {
  const [searchValue, handleSearch] = useState('');
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-header">
          <Input searchValue={searchValue} handleSearch={handleSearch} />
          <Dropdowns />
        </div>
        <Table searchValue={searchValue} />
      </div>
    </div>
  );
};

export default LandingPage;
