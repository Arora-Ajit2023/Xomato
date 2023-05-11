// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './Restaurants.module.css';
import restaurantsData from '../../Data/RestaurantsData.json';
import RestaurantsCard from '../RestaurantsCard/RestaurantsCard';

const Restaurants = () => {
  return (
    <section>
      <div className={Styles.restoMain_container}>
        <p className={Styles.restoCard_Heading}>
          Delivery Restaurants in Mumbai
        </p>
        {restaurantsData.map((restroData) => {
          return (
            <>
              <RestaurantsCard
                key={restroData.id}
                image={restroData.image}
                name={restroData.name}
                offer={restroData.offer}
                rating={restroData.offer}
                isExta={restroData.isExta}
                isPromoted={restroData.isPromoted}
                oderDelivered={restroData.oderDelivered}
                variety={restroData.variety}
                time={restroData.time}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Restaurants;
