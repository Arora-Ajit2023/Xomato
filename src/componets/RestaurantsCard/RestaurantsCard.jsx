// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './RestaurantsCard.module.css';
import RestaurantsData from '../../Data/RestaurantsData.json';

const RestaurantsCard = ({
  name,
  image,
  time,
  variety,
  rating,
  price,
  offer,
  isPromoted,
  isExta,
  oderDelivered,
}) => {
  return (
    <div>
      <div className={Styles.restro_image}>
        <img src={image} alt='restro image' />
        <p className={Styles.offer}>{offer} off up to 100</p>
      </div>
      <div></div>
    </div>
  );
};

export default RestaurantsCard;
