import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import { setImageLoad } from "../../slice/loadingSlice";

import { MotionScroll, FadeInDown, FadeInUp, FadeIn } from "../../components/MotionScroll";

function Home() {

  const location = useLocation();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setImageLoad())
  },[location.pathname, dispatch])


  return (
    <>
      {/* BANNER */}
      <MotionScroll id="carouselExampleIndicators" className="carousel carousel-banner slide" data-bs-ride="carousel"
        variants={FadeInDown}
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1511317559916-56d5ddb62563?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
        </div>
      </MotionScroll>

      <div className='container'>

        <div className='row mt-7'>
          <MotionScroll className='col-md-6 mt-md-4' variants={FadeInUp}>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <div
                className='card-img rounded-0'
                style={{
                  backgroundImage:
                    `url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                }}
              ></div>
              <div className='card-body p-4'>
                <h4 className='mb-0'>Lorem ipsum</h4>
                <div className='d-flex justify-content-between flex-column flex-lg-row mt-3'>
                  <p className='card-text text-muted mb-0 w-lg-75'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className='btn btn-outline-light rounded-0 text-nowrap my-4 my-lg-0'>
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </MotionScroll>
          <MotionScroll className='col-md-6 mt-md-4' variants={FadeInUp}>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <div
                className='card-img rounded-0'
                style={{
                  backgroundImage:
                    `url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                }}
              ></div>
              <div className='card-body p-4'>
                <h4 className='mb-0'>Lorem ipsum</h4>
                <div className='d-flex justify-content-between flex-column flex-lg-row mt-3'>
                  <p className='card-text text-muted mb-0 w-lg-75'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className='btn btn-outline-light rounded-0 text-nowrap my-4 my-lg-0'>
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </MotionScroll>
          <MotionScroll className='col-md-6 mt-md-4' variants={FadeInUp}>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <div
                className='card-img rounded-0'
                style={{
                  backgroundImage:
                    `url(https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                }}
              ></div>
              <div className='card-body p-4'>
                <h4 className='mb-0'>Lorem ipsum</h4>
                <div className='d-flex justify-content-between flex-column flex-lg-row mt-3'>
                  <p className='card-text text-muted mb-0 w-lg-75'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className='btn btn-outline-light rounded-0 text-nowrap my-4 my-lg-0'>
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </MotionScroll>
          <MotionScroll className='col-md-6 mt-md-4' variants={FadeInUp}>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <div
                className='card-img rounded-0'
                style={{
                  backgroundImage:
                    `url(https://images.unsplash.com/photo-1542310503-ff8da9c02372?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                }}
              ></div>
              <div className='card-body p-4'>
                <h4 className='mb-0'>Lorem ipsum</h4>
                <div className='d-flex justify-content-between flex-column flex-lg-row mt-3'>
                  <p className='card-text text-muted mb-0 w-lg-75'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                  <button className='btn btn-outline-light rounded-0 text-nowrap my-4 my-lg-0'>
                    Lorem ipsum
                  </button>
                </div>
              </div>
            </div>
          </MotionScroll>
        </div>
      </div>

      <MotionScroll className='bg-black mt-7' variants={FadeIn}>
        <div className='container'>
          <div
            id='carouselExample'
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex flex-column flex-lg-row align-items-center'>
                    <img
                      src='https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
                      alt=''
                      className='rounded-circle flex-shrink-0 mb-5 mb-lg-0 me-lg-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover',
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex flex-column flex-lg-row align-items-center'>
                    <img
                      src='https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt=''
                      className='rounded-circle flex-shrink-0 mb-5 mb-lg-0 me-lg-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover',
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex flex-column flex-lg-row align-items-center'>
                    <img
                      src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt=''
                      className='rounded-circle flex-shrink-0 mb-5 mb-lg-0 me-lg-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover',
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" data-cursor="PREV">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" data-cursor="NEXT">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </MotionScroll>

      <div className='container service-block my-7'>
        <div className='row text-center'>
          <MotionScroll className='service-item col-md-4' variants={FadeInUp} delay={0.5}>
            <div className="icon">
              <i className="bi bi-credit-card-fill text-primary"></i>
            </div>
            <h4 className='mt-2'>CREDIT CARD</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </MotionScroll>
          <MotionScroll className='service-item col-md-4' variants={FadeInUp} delay={0.6}>
            <div className="icon">
              <i className="bi bi-bag-fill text-primary"></i>
            </div>
            <h4 className='mt-2'>SHOPPING BAG</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </MotionScroll>
          <MotionScroll className='service-item col-md-4' variants={FadeInUp} delay={0.7}>
            <div className="icon">
              <i className="bi bi-currency-exchange text-primary"></i>
            </div>
            <h4 className='mt-2'>EXCHANGE</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </MotionScroll>
        </div>
      </div>

      <MotionScroll className='banner-bot bg-black py-7' variants={FadeIn}
      >
        <div 
          className="banner-bot-bg"
          style={{
            backgroundImage:
              `url(https://images.unsplash.com/photo-1621295244949-580172382e4c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        ></div>
        <div className='container position-relative' style={{zIndex: 2}}>
          <div className='row justify-content-center'>
            <div className='col-md-4 text-center'>
              <p className="text-light fw-bold" style={{fontSize: '40px'}}>CONTACT US</p>
              <p className='text-muted'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
              <button className='btn btn-primary mt-4 rounded-0'>
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </MotionScroll>
    </>
  );
}

export default Home;