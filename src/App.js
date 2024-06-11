import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home'
import Register from './page/Auth/Register';
import './App.css'
import Login from './page/Auth/Login';
import ForgotPassword from './page/Auth/ForgotPassword';
import ResetPassword from './page/Auth/ResetPassword';
import BestSeller from './page/BestSeller';
import NewRelease from './page/NewRelease';
import OurChoice from './page/OurChoice';
import BestSellerByCategoryPage from './page/BestSellerByCategoryPage';
import ProductDetailPage from './page/productDetailPage';
import About from './page/About';
import Contact from './page/Contact';
import MyProfile from './page/MyProfile';
import MyCart from './page/MyCart';
import MyAccount from './page/MyAccount';
import MyAddress from './page/MyAddress'
import MyOrders from './page/MyOrders'
import MyAddressAddNew from './page/MyAddressAddNew';
import Vendordash from './page/Vendor/Dashboard';
import ChangePassword from './page/ChangePassword';
import MyAccountDelete from './page/MyAccountDelete';
import Coupons from './page/Coupons';
import Dashboard from './page/Admin/Dashboard';
import DashboardOrders from './page/DashboardOrders';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/best_seller" element={<BestSeller/>} />
        <Route path="/my/profile" element={<MyProfile/>} />
        <Route path="/vendor/dashboard" element={<Vendordash/>} />
        <Route path="/my/account" element={<MyAccount/>} />
        <Route path="/my/account/address" element={<MyAddress/>} />
        <Route path="/my/account/address/add_new" element={<MyAddressAddNew/>} />
        <Route path="/my/orders" element={<MyOrders/>} />
        <Route path="/my/profile" element={<MyProfile/>} />
        <Route path="/my/not_shipped" element={<MyOrders/>} />
        <Route path="/my/cancelled" element={<MyOrders/>} />
        <Route path="/my/wishlist" element={<BestSeller/>} />
        <Route path="/my/cart" element={<MyCart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/change_password" element={<ChangePassword/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/best_seller/products/:cat' element={<BestSellerByCategoryPage/>} />
        <Route path="/our_choice" element={<OurChoice/>} />
        <Route path="/my/coupons" element={<Coupons/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/dashboard/orders" element={<DashboardOrders/>} />
        <Route path="/my/account/delete" element={<MyAccountDelete/>} />
        <Route path="/product" element={<ProductDetailPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot_password" element={<ForgotPassword/>} />
        <Route path="/reset_password" element={<ResetPassword/>} />
      </Routes>
    </>
  )
}

export default App