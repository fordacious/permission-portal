import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavContainer'>
      <a href='#home'>Organization Name</a>
      <div class='dropdown'>
        <button class='dropbtn'>
          Dropdown
          <i class='fa fa-caret-down'></i>
        </button>
        <div class='dropdown-content'>
          <a href='#'>Link 1</a>
          <a href='#'>Link 2</a>
          <a href='#'>Link 3</a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
