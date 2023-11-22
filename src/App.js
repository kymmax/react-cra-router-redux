import { useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCoupons from "./pages/admin/AdminCoupons";
import AdminOrders from "./pages/admin/AdminOrders";

import FrontLayout from "./pages/front/FontLayout";
import Home from "./pages/front/Home";
import Products from "./pages/front/Product";
import ProductDetail from "./pages/front/ProductDetail";
import Cart from "./pages/front/Cart";
import Checkout from "./pages/front/Checkout";
import Success from "./pages/front/Success";

import Loading from "./components/Loading";

import setMouseStyle from "./utils/setMouseStyle";


function App() { 

  const isLoading = useSelector((state) => state.loading.isLoading);
  const location = useLocation();
  // const dispatch = useDispatch();

  console.log('isLoading:', isLoading);

  useEffect(() => {    
    const mouse = setMouseStyle();

    return mouse;
  },[location.pathname])  

  return (
    <div className="App">
      
      <Loading isLoading={isLoading} />

      <Routes>

        <Route path="/" element={<FrontLayout/>}>
          <Route path='' element={<Home/>}></Route>
          <Route path='products' element={<Products/>}></Route>
          <Route path='product/:id' element={<ProductDetail/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='checkout' element={<Checkout/>}></Route>
          <Route path='success/:orderId' element={<Success/>}></Route>
        </Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin" element={<Dashboard/>}>
          <Route path='products' element={<AdminProducts/>}></Route>
          <Route path='coupons' element={<AdminCoupons/>}></Route>
          <Route path='orders' element={<AdminOrders/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
