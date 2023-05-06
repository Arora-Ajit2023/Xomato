// @ts-nocheck
/* eslint-disable no-unused-vars */

import React from 'react';
import Styles from './Tablist.module.css';
import TablistData from '../../Data/TabList.json';
const Tablist = () => {
  return (
    <section className={Styles.tab_section}>
      {TablistData.map((data) => {
        return (
          <div key={data.id} className={Styles.tab_elemets}>
            <div className={Styles.tab_imageContainer}>
              <img src={data.image1} alt='image 1' className={Styles.image} />
            </div>
            <p className={Styles.tag_heading}>{data.heading}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Tablist;
