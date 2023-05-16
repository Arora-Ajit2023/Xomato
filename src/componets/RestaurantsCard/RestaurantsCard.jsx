/* eslint-disable react/prop-types */
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
  orderDelivered,
}) => {
  return (
    <div className={Styles.main}>
      {/* <div className={Styles.mainCard}>
        <div className={Styles.restroCrad_imagecontainer}>
          <img
            src={image}
            alt='restro image'
            className={Styles.restroCrad_image}
          />
        </div>
        <div className={Styles.offers}>
          <p>{offer} OFF up to 100</p>
          <p>{time}</p>
        </div>
        <div className={Styles.brandContainer}>
          <p className={Styles.brand}>{name}</p>
          <p className={Styles.rating}>
            {rating}
            <span
              className='material-symbols-outlined'
              style={{ fontSize: '0.8rem' }}
            >
              star
            </span>
          </p>
        </div>
        <div className={Styles.varityContainer}>
          <p className={Styles.variety}>{variety}</p>
          <p>₹{price} for one </p>
        </div>
        <div>
          <p className={Styles.oderContainer}>
            <img
              src='https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png'
              alt='oderplaced'
              className={Styles.order}
            />
            {orderDelivered}+ orders placed from here recently
          </p>
        </div>
      </div> */}

      <div className={Styles.restro_card}>
        <img src={image} alt='restaurant image' />
      </div>
      {isPromoted && <p className={Styles.promoted}>Promoted</p>}
      {isExta && <p className={Styles.extra}>Pro Extra 10% OFF</p>}
      <div className={Styles.offers}>
        <p>{offer} OFF up to 100</p>
        <p>{time}</p>
      </div>
      <div className={Styles.brandContainer}>
        <p className={Styles.brand}>{name}</p>
        <p className={Styles.rating}>
          {rating}
          <span
            className='material-symbols-outlined'
            style={{ fontSize: '0.7rem' }}
          >
            star
          </span>
        </p>
      </div>
      <div className={Styles.varityContainer}>
        <p className={Styles.variety}>{variety}</p>
        <p>₹{price} for one </p>
      </div>
      <div>
        <p className={Styles.oderContainer}>
          <img
            src='https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png'
            alt='oderplaced'
            className={Styles.order}
          />
          {orderDelivered}+ orders placed from here recently
        </p>
      </div>
    </div>
  );
};

export default RestaurantsCard;
