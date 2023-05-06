// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './Header.module.css';
const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerLeft}>
        <h1>Xomato</h1>
        <div className={Styles.search}>
          <span className={`material-symbols-outlined Styles.location`}>
            location_on
          </span>
          <select name='Location' id='Location'>
            <option value='Mumbai'>Mumbai</option>
            <option value='Pune'>Saab</option>
            <option value='Bangalore'>Bangalore</option>
            <option value='Morena'>Morena</option>
          </select>
          <div className={Styles.input}>
            <span className={'material-symbols-outlined'}>search</span>
            <input
              type='text'
              placeholder='Search for restaurant,cuisine or a dish'
            />
          </div>
        </div>
      </div>
      <div className={Styles.HeaderRight}>
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
