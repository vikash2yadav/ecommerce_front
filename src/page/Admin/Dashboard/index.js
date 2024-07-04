import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../../components/Admin/AdminSidebar'
import { CategoryContext } from '../../../context/CategoryContext'
import { OrdersContext } from '../../../context/OrderContext'
import { ProductsContext } from '../../../context/ProductContext'
import { ProductVariantsContext } from '../../../context/ProductVariantContext'
import { ProductFaqsContext } from '../../../context/ProductFaqContext'
import { CustomersContext } from '../../../context/CustomerContext'
import { PartnersContext } from '../../../context/PartnerContext'
import { AdminsContext } from '../../../context/AdminContext'
import { ProductReviewsContext } from '../../../context/ProductReviewContext'

const Dashboard = () => {
  const { totalOrders, setTotalOrders, totalOrderItems, setTotalOrderItems, getAllOrderItems, getAllOrders } = useContext(OrdersContext);
  const { totalProducts, setTotalProducts, getAllProducts } = useContext(ProductsContext);
  const { totalCategories, setTotalCategories, getAllCategories } = useContext(CategoryContext);
  const { totalProductVariants, setTotalProductVariants, getAllProductVariants } = useContext(ProductVariantsContext);
  const { totalfaqs, setTotalfaqs, getAllFaqs } = useContext(ProductFaqsContext);
  const { totalCustomers, setTotalCustomers, getAllCustomers } = useContext(CustomersContext);
  const { totalVendors, setTotalVendors, getAllVendors, totalDeliveryPartners,
    setTotalDeliveryPartners, getAllDeliveryPartners
  } = useContext(PartnersContext);
  const { totalAdmins, setTotalAdmins, getAllAdmins } = useContext(AdminsContext);
  const { totalProductReviews, setTotalProductReviews, getAllProductReviews } = useContext(ProductReviewsContext);

  useEffect(() => {
    getAllOrders();
  }, [setTotalOrders]);

  useEffect(() => {
    getAllOrderItems();
  }, [setTotalOrderItems]);

  useEffect(() => {
    getAllProducts();
  }, [setTotalProducts])

  useEffect(() => {
    getAllCategories();
  }, [setTotalCategories])

  useEffect(() => {
    getAllProductVariants();
  }, [setTotalProductVariants])

  useEffect(() => {
    getAllFaqs();
  }, [setTotalfaqs])

  useEffect(() => {
    getAllCustomers();
  }, [setTotalCustomers])

  useEffect(() => {
    getAllDeliveryPartners();
  }, [setTotalDeliveryPartners])

  useEffect(() => {
    getAllVendors()
  }, [setTotalVendors])

  useEffect(() => {
    getAllAdmins()
  }, [setTotalAdmins])

  useEffect(() => {
    getAllProductReviews()
  }, [setTotalProductReviews])

  return (
    <>
      <div>
        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sideb  ar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
          </svg>
        </button>
        <AdminSidebar />

        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <Link to="/admin/dashboard/categories" >
                <div className="flex items-center hover:opacity-65 justify-center flex-col h-36 rounded bg-gray-300 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+{totalCategories}</h1>
                  <p className='text-xl'>Categories</p>
                </div>
              </Link>


              <Link to="/admin/dashboard/product_review" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col rounded bg-gray-300 h-40 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+{totalProductReviews}</h1>
                  <p className="text-xl">Product Reviews</p>
                </div>
              </Link>

              <Link to="/admin/dashboard/products" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col h-36 rounded bg-gray-300 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+{totalProducts}</h1>
                  <p className='text-xl'>Products</p>
                </div>
              </Link>

            </div>
            <Link to="/admin/dashboard/product_variants" >
              <div className="flex items-center justify-center hover:opacity-65 h-64 mb-4 rounded bg-gray-300 ">
                <h1 className='text-6xl font-semibold font-serif mb-2'>+{totalProductVariants}</h1>
                <p className="text-3xl mx-2">Products Variations</p>
              </div>
            </Link>

            <div className="grid grid-cols-2 gap-4 mb-4">

              <Link to="/admin/dashboard/product_faq" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col rounded bg-gray-300 h-40 ">
                  <p className="text-3xl font-semibold font-serif mb-2">+{totalfaqs}</p>
                  <p className='text-xl'>Product F & Qs</p>
                </div>
              </Link>

              <Link to="/admin/dashboard/customers" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col rounded bg-gray-300 h-40 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+{totalCustomers}</h1>
                  <p className="text-xl">Customers</p>
                </div>
              </Link>

              <Link to="/admin/dashboard/vendors" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col rounded bg-gray-300 h-40 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+{totalVendors}</h1>
                  <p className="text-xl">Vendors</p>
                </div>
              </Link>

              <Link to="/admin/dashboard/delivery_partners" >
                <div className="flex items-center justify-center hover:opacity-65  rounded flex-col bg-gray-300 h-40 ">
                  <h1 className='text-4xl font-semibold font-serif mb-2'>+{totalDeliveryPartners}</h1>
                  <p className="text-xl mb-2">Delivery Partners</p>
                </div>
              </Link>
            </div>

            <Link to="/vendor/orders" >
              <div className="flex items-center justify-center h-48 hover:opacity-65  mb-4 rounded bg-gray-300 ">
                <h1 className='text-6xl font-semibold font-serif mb-2'>+{totalAdmins}</h1>
                <p className="text-3xl mx-2">Admins</p>

              </div>
            </Link>


            <div className="grid grid-cols-2 gap-4 mb-4">

              <Link to="/admin/dashboard/orders" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col rounded bg-gray-300 h-40 ">
                  <p className="text-4xl font-semibold font-serif mb-2">+{totalOrders}</p>
                  <p className="text-xl ">Orders</p>
                </div>
              </Link>

              <Link to="/admin/dashboard/order_items" >
                <div className="flex items-center justify-center hover:opacity-65  flex-col rounded bg-gray-300 h-40 ">
                  <p className="text-4xl font-semibold font-serif mb-2">+{totalOrderItems}</p>
                  <p className='text-xl'>Order Items</p>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard