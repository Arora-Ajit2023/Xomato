// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './FoodBrandCard.module.css';

const FoodBrandCard = ({ image, name, time }) => {
  return (
    <>
      <div className={Styles.image_container}>
        <img src={image} alt='image' />
      </div>
      <p className={Styles.foodHeading}>{name}</p>
      <p className={Styles.time}>{time}</p>
    </>
  );
};

export default FoodBrandCard;
