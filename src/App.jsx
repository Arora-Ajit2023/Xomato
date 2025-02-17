// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './componets/Header/Header';
import Tablist from './componets/Tablist/Tablist';
import Filter from './componets/Filter/Filter';
import Styles from './App.module.css';
import FoodCategory from './componets/FoodCategory/FoodCategory';
import FoodBrand from './componets/FoodBrand/FoodBrand';
import Restaurants from './componets/Restaurants/Restaurants';
import Footer from './componets/Footer/Footer';
function App() {
  return (
    <>
      <div className={Styles.center}>
        <Header />
        <Tablist />
        <Filter />
        <FoodCategory />
        <FoodBrand />
        <Restaurants />
      </div>
      <Footer />
    </>
  );
}

export default App;
