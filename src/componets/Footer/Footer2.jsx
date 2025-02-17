// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './Footer2.module.css';

const Footer2 = () => {
  return (
    <section className={Styles.footer2}>
      <div className={Styles.footer2_main}>


        <div className={Styles.footer2_container}>
          <div className={Styles.footer2_logo}>
            <h1>Xomato</h1>
            <div className={Styles.footer_logo__left}>
              <div className={Styles.country}>
                <img
                  src='https://vikas-tiwari93.github.io/tomato-page-live/svgs/india.svg'
                  alt='india img'
                />
                <p>India</p>
                <span className='material-symbols-outlined'>expand_more</span>
              </div>
              <div className={Styles.country}>
                <img
                  src='https://vikas-tiwari93.github.io/tomato-page-live/svgs/language%20globe.svg'
                  alt=' img'
                />
                <p>English</p>
                <span className='material-symbols-outlined'>expand_more</span>
              </div>
            </div>
          </div>
          <div className={Styles.footer2_info}>
            <div className={Styles.footer2_info_container}>
              <div className={Styles.info_hedaing}>
                <h6>ABOUT ZOMATO</h6>
                <nav className={Styles.footer2_nav}>
                  <a href='#' className={Styles.footer2_link}>
                    <p className={Styles.footer2_nav_heading}>Who We Are</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Blog</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Work With Us</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Investor Relations</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Report Fraud</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Contact Us</p>
                  </a>
                </nav>
              </div>
            </div>
            <div className={Styles.footer2_info_container}>
              <div className={Styles.info_hedaing}>
                <h6>ABOUT ZOMATO</h6>
                <nav className={Styles.footer2_nav}>
                  <a href='#' className={Styles.footer2_link}>
                    <p className={Styles.footer2_nav_heading}>Zomato</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Blinkit</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Feeding India</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Hyperpure</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Zomaland</p>
                  </a>
                </nav>
              </div>
            </div>
            <div className={Styles.footer2_info_container1}>
              <div className={Styles.info_hedaing}>
                <div>
                  <div className={Styles.subpart}>
                    <h6>FOR RESTAURANTS</h6>
                    <nav className={Styles.footer2_nav}>
                      <a href='#' className={Styles.footer2_link}>
                        <p className={Styles.footer2_nav_heading}>
                          Partner With Us
                        </p>
                      </a>
                      <a href='#' className={Styles.footer2_link}>
                        <p>Apps For You</p>
                      </a>
                    </nav>
                  </div>
                  <div>
                    <h6>For Enterprises</h6>
                    <nav className={Styles.footer2_nav}>
                      <a href='#' className={Styles.footer2_link}>
                        <p className={Styles.footer2_nav_heading}>
                          Zomato For Enterprise
                        </p>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.footer2_info_container}>
              <div className={Styles.info_hedaing}>
                <h6>Learn More</h6>
                <nav className={Styles.footer2_nav}>
                  <a href='#' className={Styles.footer2_link}>
                    <p className={Styles.footer2_nav_heading}>Privacy</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Security</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Feeding India</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Terms</p>
                  </a>
                  <a href='#' className={Styles.footer2_link}>
                    <p>Sitemap</p>
                  </a>
                </nav>
              </div>
            </div>
            <div className={Styles.footer2_info_container}>
              <div className={Styles.info_hedaing}>
                <h6>SOCIAL LINKS</h6>
                <div className={Styles.social_links}>
                  <img
                    src='https://vikas-tiwari93.github.io/tomato-page-live/svgs/twitter.svg'
                    alt='twitter'
                  />
                  <img
                    src='https://vikas-tiwari93.github.io/tomato-page-live/svgs/instagram.svg'
                    alt='instagram'
                  />
                  <img
                    src='https://vikas-tiwari93.github.io/tomato-page-live/svgs/facebook.svg'
                    alt='facebook'
                  />
                  <img
                    src='https://vikas-tiwari93.github.io/tomato-page-live/svgs/linkdin.svg'
                    alt='linkdin'
                  />
                  <img
                    src='https://vikas-tiwari93.github.io/tomato-page-live/svgs/youtube.svg'
                    alt='youtube'
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className={Styles.border} />
          <p className={Styles.copyrights}>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks are
            properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer2;
