// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './FoodCategory.module.css';
import food from '../../Data/Food.json';
import FoodCard from '../FoodCard/FoodCard';
const FoodCategory = () => {
  return (
    <section className={Styles.foodCate}>
      <div className={Styles.foodContainer}>
        <p className={Styles.foodHeading}>Inspiration for your first order</p>

        <div className={Styles.foodcards}>
          <div className={Styles.backword}>
            <span className='material-symbols-outlined'>chevron_left</span>
          </div>
          <div className={Styles.forword}>
            <span className='material-symbols-outlined'>chevron_right</span>
          </div>
          {food.map((foodItem) => {
            return (
              <div key={foodItem.id} className={Styles.conatiner}>
                <FoodCard image={foodItem.image} name={foodItem.name} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
