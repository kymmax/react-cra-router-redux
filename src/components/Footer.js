const Footer = () => {
    return (
        <footer className='bg-dark'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between flex-column-reverse flex-lg-row text-light py-4'>
            <p className='mb-0 mt-3 mt-lg-0'>{`© ${new Date().getFullYear()} LOGO All Rights Reserved.`}</p>
            <ul className='d-flex list-unstyled mb-0 h4'>
              <li>
                <a href='#' className='text-light mx-3'>
                  <i className='bi bi-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#' className='text-light mx-3'>
                  <i className='bi bi-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#' className='text-light ms-3'>
                  <i className='bi bi-line'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
}

export default Footer;