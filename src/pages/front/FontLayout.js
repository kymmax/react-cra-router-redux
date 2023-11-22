import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import MessageToast from "../../components/MessageToast";

import { useDispatch, useSelector } from "react-redux";
import { asyncGetCart } from "../../slice/cartSlice";


function FrontLayout() {

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData.data);    

  useEffect(() => {
    dispatch(asyncGetCart());
  },[dispatch])


  return (
    <>
      <Navbar cartData={cartData} />
      <MessageToast />

      <Outlet context={{ cartData }} />
      
      <Footer />
    </>
  );
}

export default FrontLayout;