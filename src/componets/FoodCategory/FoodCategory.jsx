// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './FoodCategory.module.css';
import food from '../../Data/Food.json';
const FoodCategory = () => {
  return (
    <section className={Styles.foodCate}>
      <div className={Styles.foodContainer}>
        {food.map((foodItem) => {
          return (
            <div key={foodItem.id} className={Styles.image_container}>
              <img src={foodItem.image} alt='food' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FoodCategory;
