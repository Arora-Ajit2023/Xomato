// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './Restaurants.module.css';
import restaurantsData from '../../Data/RestaurantsData.json';
import RestaurantsCard from '../RestaurantsCard/RestaurantsCard';

const Restaurants = () => {
  return (
    <section>
      <p className={Styles.restoCard_Heading}>Delivery Restaurants in Mumbai</p>
      <div className={Styles.restroCard_container}>
        {restaurantsData.map((restroData) => {
          return (
            <div key={restroData.id} className={Styles.card_CardContainer}>
              <RestaurantsCard
                image={restroData.image}
                name={restroData.name}
                offer={restroData.offer}
                rating={restroData.rating}
                isExta={restroData.isExta}
                isPromoted={restroData.isPromoted}
                orderDelivered={restroData.orderDelivered}
                variety={restroData.variety}
                time={restroData.time}
                price={restroData.price}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Restaurants;
