import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import MyAccountCompo from '../../components/MyAccountCompo'
import MyAccountCompo2 from '../../components/MyAccountCompo2'

let links = [
    {link: "Default purchase setting", to: ""},
    {link: "Ecommerce pay balance", to: ""},
    {link: "Your Coupons", to: "/my/coupons"},
]

let sublinks =[
    {link: "Subscriptions & membership", to: ""},
]
let managelinks = [
    {link: "Your Orders", to: "/my/orders"},
    {link: "Change Password", to: "/change_password"},
    {link: "Close Your Ecommerce Account", to: "/my/account/delete"},
    {link: "Privacy Policy", to: ""}
]

const MyAccount = () => {
    return (
        <>
            <Header />
            <div className='py-4 md:px-28 px-6'>
                <h1 className='text-3xl mb-8'>Your Account</h1>
                <div className='mt-5 w-full flex-wrap flex justify-between mb-5'>
                    <MyAccountCompo img="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png" title="Your Orders" description="Track, return, or buy things again" to="/my/orders" />
                    <MyAccountCompo img="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png" title="Login & security" description="Edit login, name, and mobile number" to="/change_password" />
                    <MyAccountCompo img="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png" title="Prime" description="view benefits and payment settings" onClick={()=>alert('We will provide this service in some days')}/>
                    <MyAccountCompo img="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png" title="Your Address" description="Edit address for orders or gifts" to="address" />
                    <MyAccountCompo img="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png" title="Payment Options" description="Edit or Add payment method" onClick={()=>{alert('There are all types of payment methods acceptable.')}} />
                    <MyAccountCompo img="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png" title="Ecommerce pay balance" description="Add money to your balance" onClick={()=>{alert('we will serve this feature as soon as possible')}} />
                    <MyAccountCompo img="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png" title="Contact Us" description="You can send message here" to="/contact"/>
                </div>
                <hr className='text-gray-200 mb-10 '/>  
                <div className='mt-5 w-full flex-wrap flex justify-between mb-5'>
                <MyAccountCompo2 heading="More ways to pay" links={links} />
                <MyAccountCompo2 heading="Subscriptions" links={sublinks} />
                <MyAccountCompo2 heading="Manage your data" links={managelinks} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyAccount