export default function header() {
  return (
    <header className="sigma_header style-1 can-sticky">
      <div className="sigma_header-top">
        <div className="container">
          <div className="sigma_header-top-inner">
            <div className="sigma_header-top-contacts">
              <ul className="sigma_header-top-nav">
                <li>
                  <a title="Call Us" href="tel:+008392037">
                    <i className="fa fa-phone" />
                  </a>
                </li>

                <li>
                  <a title="Email Us" href="mailto:example@example.com">
                    <i className="fa fa-envelope" />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="sigma_header-top-nav sigma_header-top-cta">
              <li>
                <a href="about-us.html">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sigma_header-middle">
        <div className="container">
          <div className="navbar">
            <div className="sigma_logo-wrapper">
              <a className="sigma_logo" href="index.html">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </div>

            <ul className="navbar-nav">
              <li className="menu-item menu-item-has-children">
                <a href="#">Home pages</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="index.html">Home 1</a>
                  </li>
                  <li className="menu-item">
                    <a href="home-2.html">Home 2</a>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="about-us.html">About us</a>
                  </li>
                  <li className="menu-item">
                    <a href="login.html">Login</a>
                  </li>
                  <li className="menu-item">
                    <a href="signup.html">Signup</a>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <a href="#">Shop</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="shop.html">Shop</a>
                  </li>
                  <li className="menu-item">
                    <a href="product-details.html">Product details</a>
                  </li>
                  <li className="menu-item">
                    <a href="cart.html">Cart</a>
                  </li>
                  <li className="menu-item">
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li className="menu-item">
                    <a href="checkout.html">Checkout</a>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <a href="blog.html">Blog</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="blog-details.html">Blog details</a>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <a href="contact-us.html">Contact us</a>
              </li>
            </ul>

            <div className="sigma_header-controls style-1">
              <ul className="sigma_header-controls-inner">
                <li className="search-trigger header-controls-item d-none d-sm-block">
                  <a
                    className="sigma_header-control-search"
                    title="Search"
                    href="#"
                  >
                    <i className="far fa-search" />
                  </a>
                </li>

                <li className="cart-trigger header-controls-item d-none d-sm-block">
                  <a
                    className="sigma_header-control-cart"
                    title="Your Cart"
                    href="cart.html"
                  >
                    <i className="far fa-shopping-basket" />
                    <div className="sigma_header-control-cart-inner">
                      <span>3 Items</span>
                      <p>129.99$</p>
                    </div>
                  </a>
                </li>

                <li className="aside-toggle aside-trigger">
                  <span />
                  <span />
                  <span />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
