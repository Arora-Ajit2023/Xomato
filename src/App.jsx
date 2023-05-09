/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './componets/Header/Header';
import Tablist from './componets/Tablist/Tablist';
import Filter from './componets/Filter/Filter';
import './App.css';
import FoodCategory from './componets/FoodCategory/FoodCategory';
import FoodBrand from './componets/FoodBrand/FoodBrand';
function App() {
  return (
    <div>
      <Header />
      <Tablist />
      <Filter />
      <FoodCategory />
      <FoodBrand />
    </div>
  );
}

export default App;
