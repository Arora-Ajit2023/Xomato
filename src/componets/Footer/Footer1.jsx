/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useState } from 'react';
import Styles from './Footer1.module.css';

const Footer1 = () => {
  const [isSlected, SetIsSelceted] = useState(false);
  const handalClick = () => {
    SetIsSelceted(!isSlected);
  };
  return (
    <div className={Styles.footer1} onClick={handalClick}>
      <h1 className={Styles.footer1_heading}>Explore options near me </h1>
      <div className={Styles.footer1_container}>
        <div className={Styles.footer1_options}>
          <section className={Styles.optionHading}>
            <p>Popular cuisines near me</p>
          </section>
          <span className='material-symbols-outlined'>expand_more</span>
        </div>
        {isSlected && (
          <section className={Styles.details}>
            <div>
              <a href='#' className={Styles.new_links}>
                Bakery food near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Beverages food near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Biryani food near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Burger food near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Chinese food near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Desserts food near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Ice Cream food near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Italian food near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Kebab food near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Maharashtrian food near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Mughlai food near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                North Indian food near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Pizza food near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Rolls food near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Sandwich food near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Seafood food near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Sichuan food near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                South Indian food near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Street food near me
              </a>
            </div>
          </section>
        )}
      </div>
      <div className={Styles.footer1_container}>
        <div className={Styles.footer1_options}>
          <section className={Styles.optionHading}>
            <p>Popular restaurant types near me</p>
          </section>
          {isSlected ? (
            <span className='material-symbols-outlined'>expand_less</span>
          ) : (
            <span className='material-symbols-outlined'>expand_more</span>
          )}
        </div>
        {isSlected && (
          <section className={Styles.details}>
            <div>
              <a href='#' className={Styles.links}>
                Bakeries near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Bars near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Beverage Shops near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Bhojanalya near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Cafés near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Casual Dining near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Clubs near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Cocktail Bars near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Confectioneries near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Dessert Parlors near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Dhabas near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Fine Dining near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Food Courts near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Food Trucks near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Irani Cafes near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Kiosks near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Lounges near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Microbreweries near me
              </a>
              <span className={Styles.dot}></span>
              <a href='#' className={Styles.links}>
                Paan Shop near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Pubs near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Quick Bites near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Shacks near me
              </a>
              <span className={Styles.dot}></span>{' '}
              <a href='#' className={Styles.links}>
                Sweet Shops near me
              </a>
            </div>
          </section>
        )}
      </div>
      <div className={Styles.footer1_container}>
        <div className={Styles.footer1_options}>
          <section className={Styles.optionHading}>
            <p>Top Restaurant Chains</p>
          </section>
          {isSlected ? (
            <span className='material-symbols-outlined'>expand_less</span>
          ) : (
            <span className='material-symbols-outlined'>expand_more</span>
          )}
        </div>
        {isSlected && (
          <section className={Styles.details}>
            <div className={Styles.restro_name}>
              <a href='#' className={Styles.new_links}>
                Bikanervala
              </a>
              <a href='#' className={Styles.new_links}>
                Biryani Blues
              </a>
              <a href='#' className={Styles.new_links}>
                Burger King
              </a>
              <a href='#' className={Styles.new_links}>
                Domino's
              </a>
              <a href='#' className={Styles.new_links}>
                Dunkin' Donuts
              </a>
              <a href='#' className={Styles.new_links}>
                KFC
              </a>
              <a href='#' className={Styles.new_links}>
                Krispy Kreme
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                McDonald's
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Pizza Hut
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                WOW! Momo
              </a>
            </div>
          </section>
        )}
      </div>
      <div className={Styles.footer1_container}>
        <div className={Styles.footer1_options}>
          <section className={Styles.optionHading}>
            <p>Cities We Deliver To</p>
          </section>
          {isSlected ? (
            <span className='material-symbols-outlined'>expand_less</span>
          ) : (
            <span className='material-symbols-outlined'>expand_more</span>
          )}
        </div>
        {isSlected && (
          <section className={Styles.details}>
            <div className={Styles.restro_name}>
              <a href='#' className={Styles.new_links}>
                Delhi NCR
              </a>
              <a href='#' className={Styles.new_links}>
                Kolkata
              </a>
              <a href='#' className={Styles.new_links}>
                Mumbai
              </a>
              <a href='#' className={Styles.new_links}>
                Bengaluru
              </a>
              <a href='#' className={Styles.new_links}>
                Pune
              </a>
              <a href='#' className={Styles.new_links}>
                Hyderabad
              </a>
              <a href='#' className={Styles.new_links}>
                Chennai
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Lucknow
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Kochi
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Jaipur
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Ahmedabad
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Chandigarh
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Goa
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Indore
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Gangtok
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Nashik
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Ooty
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Shimla
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Ludhiana
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Guwahati
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Amritsar
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Kanpur
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Allahabad
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Aurangabad
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Bhopal
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Ranchi
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Visakhapatnam
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Coimbatore
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Bhubaneswar
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Mangalore
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Vadodara
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Agra
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Nagpur
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Dehradun
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Mysore
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Puducherry
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Surat
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Varanasi
              </a>{' '}
              <a href='#' className={Styles.new_links}>
                Patna
              </a>
              <a href='#' className={Styles.new_links}>
                Udaipur
              </a>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Footer1;
