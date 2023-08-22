/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./E-CommerceAdmin/forms/Login";
import Dashboard from "./E-CommerceAdmin/pages/Dashboard/Dashboard";
import ECategory from "./E-CommerceAdmin/pages/Category/ECategory";
import EProduct from "./E-CommerceAdmin/pages/Products/EProduct";
import EVendorList from "./E-CommerceAdmin/pages/Seller/EVendorList";
import EAdminOrders from "./E-CommerceAdmin/pages/Orders/EAdminOrders";
import EAdminDelivery from "./E-CommerceAdmin/pages/Support/EAdminDelivery";
import EAdminCustomer from "./E-CommerceAdmin/pages/Customer/EAdminCustomer";
import ESubCategory from "./E-CommerceAdmin/pages/SubCategory/ESubCategory";
import PushNotification from "./E-CommerceAdmin/pages/Notification/PushNotification";
import Banners from "./E-CommerceAdmin/pages/Banner/Banners";
import Coupon from "./E-CommerceAdmin/pages/Coupon/Coupon";
import PrivacyPolicy from "./E-CommerceAdmin/pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./E-CommerceAdmin/pages/Terms/Terms";
import ViewProduct from "./E-CommerceAdmin/pages/Products/ViewProduct";
import SellerProducts from "./E-CommerceAdmin/pages/Seller/SellerProducts";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <>
      <ReactNotifications />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Customer" element={<EAdminCustomer />} />
        <Route path="/VendorList" element={<EVendorList />} />
        <Route path="/Product" element={<EProduct />} />
        <Route path="/product/:name" element={<ViewProduct />} />
        <Route path="/Category" element={<ECategory />} />
        <Route path="/SubCategory" element={<ESubCategory />} />
        <Route path="/pushNotification" element={<PushNotification />} />
        <Route path="/banner" element={<Banners />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/Support" element={<EAdminDelivery />} />
        <Route path="/Orders" element={<EAdminOrders />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/seller/product/:name" element={<SellerProducts />} />

        {/* Selller */}
        <Route path="/seller"
      </Routes>
    </>
  );
}

export default App;
