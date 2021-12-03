import Image from 'next/image'

export default function Header() {
  return (
    <header className="sigma_header sigma_header-absolute has-dark-bg style-8 can-sticky">
      <div className="container">
        <div className="sigma_header-middle">
          <div className="navbar">
            <div className="sigma_header-top-links important-links d-none d-md-block">
              <ul className="sigma_header-top-nav">
                <li>
                  <a href="#">
                    <i className="fal fa-phone" />
                    <div className="links-inner">
                      <p>Our Address</p>
                      <p>
                        <b>Drive Chicago IL</b>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="sigma_logo-wrapper">
              <a className="sigma_logo" href="index.html">
                <Image
                  layout="fill"
                  // className="object-contain"
                  src="/images/logo-light.png"
                  alt="logo"
                  // width={150}
                  // height={50}
                />
              </a>
            </div>

            <div className="sigma_header-controls style-1 d-flex align-items-center">
              <div className="sigma_header-top-links important-links d-none d-md-block">
                <ul className="sigma_header-top-nav">
                  <li>
                    <a href="#">
                      <i className="fal fa-map-marker-alt" />
                      <div className="links-inner">
                        <p>Call Us</p>
                        <p>
                          <b>224-359-5495</b>
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <ul className="sigma_header-controls-inner ml-sm-3 ml-0">
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

      <div className="container">
        <div className="sigma_header-bottom d-none d-lg-block">
          <div className="navbar">
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

            <div className="sigma_header-controls style-2">
              <ul className="sigma_header-controls-inner">
                <li className="header-controls-item d-none d-sm-block">
                  <div className="form-group m-0">
                    <button type="submit">
                      <i className="fal fa-search" />
                    </button>

                    <input
                      type="text"
                      placeholder="search here"
                      className="form-control"
                    />
                  </div>
                </li>

                <li className="cart-trigger header-controls-item d-none d-sm-block">
                  <a
                    className="sigma_header-control-cart"
                    title="Your Cart"
                    href="cart.html"
                  >
                    <i className="fal fa-shopping-bag" />
                  </a>
                </li>

                <li className="aside-toggle aside-trigger-right desktop-toggler">
                  <span />
                  <span />
                  <span />
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
