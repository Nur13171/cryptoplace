import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Coin from '../pages/Coin/Coin';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/coin/:coinId' element={<Coin />}/>
    </Routes>
  )
}

export default AppRoutes
