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
import ChangePassword from './page/ChangePassword';
import MyAccountDelete from './page/MyAccountDelete';
import Coupons from './page/Coupons';
import Dashboard from './page/Admin/Dashboard';
import Orders from './page/Admin/Order/Orders';
import Categories from './page/Admin/Product/Categories';
import Products from './page/Admin/Product/Products';
import ProductReview from './page/Admin/Product/ProductReview';
import Faq from './page/Admin/Product/Faq';
import ProductVariants from './page/Admin/Product/ProductVariants';
import Customers from './page/Admin/Users/Customers';
import Vendors from './page/Admin/Users/Vendors';
import DeliveryPartners from './page/Admin/Users/DeliveryPartners';
import AdminChangePassword from './page/Admin/AdminChangePassword'
import Admins from './page/Admin/Users/Admins'
import VendorDashboard from './page/Vendor/VendorDashboard'
import VendorOrders from './page/Vendor/Order/VendorOrders'
import VendorProducts from './page/Vendor/Product/VendorProducts'
import OrderItems from './page/Admin/Order/OrderItems'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/best_seller" element={<BestSeller/>} />
        <Route path="/my/profile" element={<MyProfile/>} />
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
        <Route path="/admin/change_password" element={<AdminChangePassword/>} />
        <Route path="/admin/dashboard/orders" element={<Orders/>} />
        <Route path="/admin/dashboard/order_items" element={<OrderItems/>} />
        <Route path="/admin/dashboard/categories" element={<Categories/>} />
        <Route path="/admin/dashboard/products" element={<Products/>} />
        <Route path="/admin/dashboard/products" element={<Products/>} />
        <Route path="/admin/dashboard/customers" element={<Customers/>} />
        <Route path="/admin/dashboard/vendors" element={<Vendors/>} />
        <Route path="/admin/dashboard/admins" element={<Admins/>} />
        <Route path="/admin/dashboard/delivery_partners" element={<DeliveryPartners/>} />
        <Route path="/admin/dashboard/product_review" element={<ProductReview/>} />
        <Route path="/admin/dashboard/product_variants" element={<ProductVariants/>} />
        <Route path="/admin/dashboard/product_faq" element={<Faq/>} />
        
        <Route path="/vendor/dashboard" element={<VendorDashboard/>} />
        <Route path="/vendor/dashboard/orders" element={<VendorOrders/>} />
        <Route path="/vendor/dashboard/products" element={<VendorProducts/>} />

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