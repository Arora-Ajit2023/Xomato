// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './FoodBrand.module.css';
import Foodbrand from '../../Data/FoodBarnd.json';
import FoodBrandCard from '../FoodBrandCard/FoodBrandCard';

const FoodBrand = () => {
  return (
    <section style={{ padding: '2rem 0' }}>
      <div className={Styles.foodBarndContainer}>
        <p className={Styles.brandHedaing}>Top brands for you</p>

        <div className={Styles.foodBrandcards}>
          <div className={Styles.backword}>
            <span className='material-symbols-outlined'>chevron_left</span>
          </div>
          <div className={Styles.forword}>
            <span className='material-symbols-outlined'>chevron_right</span>
          </div>
          {Foodbrand.map((foodItem) => {
            return (
              <div key={foodItem.id} className={Styles.conatiner}>
                <FoodBrandCard
                  image={foodItem.image}
                  name={foodItem.name}
                  time={foodItem.time}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodBrand;
