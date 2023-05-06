// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './Filter.module.css';

const Filter = () => {
  return (
    <section className={Styles.filter_section}>
      <div className={Styles.filter}>
        <div className={Styles.selector}>
          <span className='material-symbols-outlined'>page_info</span>
          <p className={Styles.Filter_heading}>Filters</p>
        </div>

        <div>
          <p className={Styles.Filter_heading}>Rating: 4.0+</p>
        </div>
        <div>
          <p className={Styles.Filter_heading}>Pure Veg</p>
        </div>
        <div className={Styles.selector}>
          <p className={Styles.Filter_heading}>Pure Veg</p>
          <span className='material-symbols-outlined'>expand_more</span>
        </div>
        <div className={Styles.selector}>
          <p className={Styles.Filter_heading}>More Filters</p>
          <span className='material-symbols-outlined'>expand_more</span>
        </div>
      </div>
    </section>
  );
};

export default Filter;
