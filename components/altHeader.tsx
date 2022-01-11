import Link from 'next/link'
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
                  <Link href="#">
                    <a>
                      <i className="fal fa-phone" />
                      <div className="links-inner">
                        <p>Our Address</p>
                        <p>
                          <b>Drive Chicago IL</b>
                        </p>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sigma_logo-wrapper">
              <Link href="/">
                <a className="sigma_logo">
                  <Image
                    layout="fill"
                    // className="object-contain"
                    src="/img/logo-light.png"
                    alt="logo"
                    // width={150}
                    // height={50}
                  />
                </a>
              </Link>
            </div>

            <div className="sigma_header-controls style-1 d-flex align-items-center">
              <div className="sigma_header-top-links important-links d-none d-md-block">
                <ul className="sigma_header-top-nav">
                  <li>
                    <Link href="#">
                      <a>
                        <i className="fal fa-map-marker-alt" />
                        <div className="links-inner">
                          <p>Call Us</p>
                          <p>
                            <b>224-359-5495</b>
                          </p>
                        </div>
                      </a>
                    </Link>
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
                <Link href="#">
                  <a>Home pages</a>
                </Link>

                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link href="/">
                      <a>Home 1</a>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link href="/home-2">
                      <a>Home 2</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <Link href="#">
                  <a>Pages</a>
                </Link>

                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link href="/about">
                      <a>About us</a>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link href="/login">
                      <a>Login</a>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link href="/signup">
                      <a>Signup</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <Link href="#">
                  <a>Shop</a>
                </Link>

                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link href="/shop">
                      <a>Shop</a>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link href="/product-details">
                      <a>Product details</a>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link href="/cart">
                      <a>Cart</a>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link href="/wishlist">
                      <a>Wishlist</a>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link href="/checkout">
                      <a>Checkout</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <Link href="/blog">
                  <a>Blog</a>
                </Link>

                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link href="/blog-details">
                      <a>Blog details</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <Link href="/contact">
                  <a>Contact us</a>
                </Link>
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
                  <Link href="/cart">
                    <a className="sigma_header-control-cart" title="Your Cart">
                      <i className="fal fa-shopping-bag" />
                    </a>
                  </Link>
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
