import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, Location } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Page1 from './components/Page1';
import Details from './components/Details';
import CheckOut from './components/CheckOut';
import Page2 from './components/Page2';
import MyAccount from './components/MyAccount';
import EditCurrentUser from './components/EditCurrentUser';
import Bill from './components/Bill';

const EcomRoutes = () => {
  const location = useLocation()
  return (
    <div className="outlet">
      <Routes Location>
        <Route path="header" element={<Header />} />
        <Route path="nav-bar" element={<Navbar />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="productCard" element={<ProductCard />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="details" element={<Details />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="edit/:obj" element={<EditCurrentUser />} />
        <Route path="/bill/:obj" element={<Bill />} />
      </Routes>
    </div>
  );
};
export default EcomRoutes;
