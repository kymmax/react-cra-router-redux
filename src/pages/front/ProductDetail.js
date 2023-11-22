import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";

import { useDispatch } from "react-redux";
import { createAsyncMessage } from "../../slice/messageSlice"; 
import { asyncAddToCart } from "../../slice/cartSlice";
import { setLoadingState } from "../../slice/loadingSlice";



function ProductDetail() {
  const [product, setProduct] = useState({});
  const [cartQuantity, setCartQuantity] = useState(1);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
//   const { getCart } = useOutletContext();

  const dispatch = useDispatch();

  const getProduct = async (id) => {

    dispatch(setLoadingState(true));

    const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/product/${id}`);
    console.log("Front 取得單一產品資訊", productRes);
    setProduct(productRes.data.product);

    dispatch(setLoadingState(false));
  }

  const originAddToCart = () => {

    setIsLoading(true);

    const data = {
        "data": {
            "product_id": product.id,
            "qty": cartQuantity
        }
    }
    

    dispatch(asyncAddToCart(data));

    
    // try {
    //     await dispatch(asyncAddToCart(data));
    //     console.log('in');
        
    //     // const res = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/cart`, data)
    //     // console.log('Front 加入購物車', res);
    //     // dispatch(createAsyncMessage(res.data));
    //     // getCart();
    //     // setIsLoading(false);
    // } catch (error) {
    //     console.log('out');
    //     console.log(error);
    //     dispatch(createAsyncMessage(error.response.data));
    //     setIsLoading(false);
        
    // }
  }

  useEffect(() => {
    getProduct(id);
  },[id])
  

  return (
    <>
      <div
        style={{
          minHeight: '400px',
          backgroundImage:
            `url(${product.imageUrl})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      ></div>
      <div className='container'>
        <div className='row justify-content-between mt-4 mb-7'>
          <div className='col-md-7 text-light'>
            <h2 className='mb-0'>{product.title}</h2>
            <p className='fw-bold'>NT$ {product?.price?.toLocaleString()}</p>
            <p>
              {product.content}
            </p>
            <div className='my-4'>
              <img
                src={product.imageUrl}
                alt=''
                className='img-fluid mt-4'
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='input-group mb-3 border bg-light mt-3'>
              <div className='input-group-prepend'>
                <button
                  className='btn btn-outline-dark rounded-0 border-0 py-3'
                  type='button'
                  id='button-addon1'
                  onClick={() => setCartQuantity((pre) => pre === 1 ? pre : pre - 1)}
                  data-cursor="-"
                >
                  <i className="bi bi-dash"></i>
                </button>
              </div>
              <input
                type='number'
                className='form-control border-0 bg-light text-center my-auto shadow-none'
                placeholder=''
                aria-label='Example text with button addon'
                aria-describedby='button-addon1'
                readOnly
                value={cartQuantity}
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-outline-dark rounded-0 border-0 py-3'
                  type='button'
                  id='button-addon2'
                  onClick={() => setCartQuantity((pre) => pre + 1)}
                  data-cursor="+"
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>
            <button
              type="button"
              className='btn btn-primary w-100 rounded-0 py-3'
              onClick={() => originAddToCart()}
              // disabled={isLoading}
              data-cursor="ADD"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;