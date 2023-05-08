// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './FoodCard.module.css';

const FoodCard = ({ image, name }) => {
  return (
    <>
      <img src={image} alt='image' />
      <p className={Styles.foodHeading}>{name}</p>
    </>
  );
};

export default FoodCard;
