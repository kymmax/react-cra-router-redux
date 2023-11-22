import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { Collapse } from "bootstrap";

function Navbar({cartData}) {

    const collapseRef = useRef(null);

    useEffect(() => {
        collapseRef.current = new Collapse(document.getElementById('navbarNav'), {toggle: false});       

        const handleOutsideClick = (event) => {
            // 檢查點擊事件是否發生在 #navbarNav 以外的區域
            if (
                collapseRef.current?._element &&
                !collapseRef.current._element.contains(event.target)
            ) {
                // 隱藏 #navbarNav
                collapseRef.current.hide();
            }
        };

        // 在全局範圍註冊點擊事件監聽器
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // 在組件卸載時，移除點擊事件監聽器
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const toggleCollapse = () => {
        collapseRef.current.toggle();
    }

    const hideCollapse = () => {
        collapseRef.current.hide();
    }

    return (
        <div className='navbar-frame sticky-top'>
            <div className='container'>
                <nav className='navbar navbar-expand-lg px-0'>

                    <NavLink
                        className='navbar-brand'
                        to="/"
                        style={{
                            top: '0.5rem',
                            left: '0',
                        }}
                        data-cursor="HOME"
                    >
                        LOGO
                    </NavLink>

                    <div className="d-flex justify-content-end justify-content-lg-start align-items-center flex-lg-row-reverse flex-wrap flex-grow-1">
                        <div className='ps-5'>
                            <NavLink to='/cart' className='nav-link position-relative' data-cursor="CART">
                                <i className="bi bi-bag-fill"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartData?.carts?.length}
                                </span>
                            </NavLink>
                        </div>

                        <button
                            className='navbar-toggler ms-4'
                            type='button'
                            // data-bs-toggle='collapse'
                            // data-bs-target='#navbarNav'
                            // data-bs-backdrop='true'
                            // aria-controls='navbarNav'
                            // aria-expanded='false'
                            // aria-label='Toggle navigation'
                            onClick={()=> toggleCollapse()}
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div
                            className='collapse navbar-collapse custom-header-md-open flex-grow-0'
                            id='navbarNav'
                        >
                            <ul className='navbar-nav text-end'>
                                <li className='nav-item active'>
                                    <NavLink className='nav-link py-4 py-lg-2' data-cursor="LIST" to='/products' onClick={() => hideCollapse()}>
                                        產品列表
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Navbar;