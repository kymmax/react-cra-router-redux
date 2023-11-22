
import { Link, useOutletContext } from "react-router-dom";

import { useDispatch } from "react-redux";
import { asyncRemoveCartItem, asyncUpdateCartItem } from "../../slice/cartSlice";

function Cart() {
  const { cartData, getCart } = useOutletContext();

  const dispatch = useDispatch();

  const removeCartItem = (id) => {

    dispatch(asyncRemoveCartItem(id));
  }

  const updateCartItem = async(item, quantity) => {
    const data = {
        "data": {
            "product_id": item.product_id,
            "qty": quantity
        }
    }
    

    dispatch(asyncUpdateCartItem({data: data, id: item.id}))

  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div
          className='col-md-6 py-5'
          style={{minHeight: 'calc(100vh - 56px - 76px)'}}
        >
          <div className='d-flex justify-content-between'>
            <h2 className='mt-2'>您的餐點</h2>
          </div>
          { cartData?.carts?.map((item) => {
            return (
              <div className='d-flex mt-4 bg-light' key={item.id}>
                <img
                  src={item.product.imageUrl}
                  alt=''
                  className='object-cover'
                  style={{
                    width: '120px',
                  }}
                />
                <div className='w-100 p-3 position-relative'>
                  <button
                    type="button"
                    className='position-absolute btn'
                    style={{ top: '10px', right: '10px' }}
                    onClick={() => removeCartItem(item.id)}
                    data-cursor="DELETE"
                  >
                    <i className='bi bi-x-lg'></i>
                  </button>
                  <p className='mb-0 fw-bold'>{item.product.title}</p>
                  <p className='mb-1 text-muted' style={{ fontSize: '14px' }}>
                    {item.product.content}
                  </p>
                  <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='input-group w-50 align-items-center'>
                      <select name="" className="form-select bg-white" id=""
                        value={item.qty}
                        // disabled={loadingItems.includes(item.id)}
                        onChange={
                            (e) => {
                                updateCartItem(item, e.target.value * 1);
                            }
                        }
                      >
                        {
                            [...(new Array(20))].map((i, num) => {
                                return (
                                    <option value={num + 1} key={num}>{num + 1}</option>
                                )
                            })
                        }
                      </select>
                    </div>
                    <p className='mb-0 ms-auto'>NT${item?.final_total?.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className='d-flex justify-content-between mt-4'>
            <p className='mb-0 h4 fw-bold'>總金額</p>
            <p className='mb-0 h4 fw-bold'>NT${cartData?.final_total?.toLocaleString()}</p>
          </div>
          <Link
            to='/checkout'
            className='btn btn-primary w-100 mt-4 rounded-0 py-3'
            data-cursor="CONFIRM"
          >
            確認餐點正確
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;