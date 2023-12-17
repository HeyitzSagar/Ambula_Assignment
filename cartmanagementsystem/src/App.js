import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './Component/Header'
import HomePage from './Component/HomePage';
import CartPage from './Component/CartPage';
import PageNotFound from './Component/PageNotFound';

const App = () => {
  return (
    <div>
       <Router>
        <Header />
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
