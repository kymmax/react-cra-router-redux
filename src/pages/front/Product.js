import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import Pagination from "../../components/Pagination";

import { useDispatch } from "react-redux";
import { setLoadingState } from "../../slice/loadingSlice";

import { MotionScroll, FadeIn } from "../../components/MotionScroll";


function Products() {
    const [products, setProducts] = useState(Array(10).fill({}));
    const [pagination, setPagination] = useState({});
    const location = useLocation();
    const [searchParams] = useSearchParams(1);
    // const imgLoad = useImageAllLoad(products);
    

    const dispatch = useDispatch();

    const getProducts = async (page = 1) => {

        dispatch(setLoadingState(true));

        const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}&category=`);
        console.log("Front 取得產品列表", productRes);
        setProducts(productRes.data.products);
        setPagination(productRes.data.pagination);

        dispatch(setLoadingState(false));
    }

    useEffect(() => {
        getProducts(searchParams?.get('page')*1);
    },[location, searchParams])


    return (<>
      <div className="container mt-md-5 mt-3 mb-7">
        <MotionScroll className="row" variants={FadeIn} delay={0.5}>
          {products.map((product,index) => {
            return (
              <div className="col-sm-6 col-md-4 col-xl-3" key={product.id || index}>
                  <Link to={`/product/${product.id}`} className="text-decoration-none">
                    <div className="card border-0 mb-4 position-relative position-relative">
                      <img src={product.imageUrl} className="card-img-top rounded-0 object-cover img-loading" alt="..." height={300} />
                      <div className="card-body bg-dark p-3">
                          <h4 className="text-primary mb-0">{product.title}</h4>
                          <p className="text-muted mt-1 mb-0">NT$ {product?.price?.toLocaleString()}</p>
                      </div>
                    </div>
                  </Link>
              </div>
          )
          })}
        </MotionScroll>
        <nav className="d-flex justify-content-center mt-3 mt-lg-5">
            <Pagination pagination={pagination} changePage={getProducts} />
        </nav>
      </div>
    </>)
  }
  
  export default Products;