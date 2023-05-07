/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './componets/Header/Header';
import Tablist from './componets/Tablist/Tablist';
import Filter from './componets/Filter/Filter';
import './App.css';
import FoodCategory from './componets/FoodCategory/FoodCategory';
function App() {
  return (
    <div>
      <Header />
      <Tablist />
      <Filter />
      <FoodCategory />
    </div>
  );
}

export default App;
