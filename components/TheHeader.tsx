import Link from 'next/link'

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
                <Link href="/about">
                  <a>درباره ما</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sigma_header-middle">
        <div className="container">
          <div className="navbar">
            <div className="sigma_logo-wrapper">
              <Link href="/">
                <a className="sigma_logo">
                  <img src="/img/logo.png" alt="logo" />
                </a>
              </Link>
            </div>

            <ul className="navbar-nav">
              <li className="menu-item menu-item-has-children">
                <Link href="#">
                  <a>صفحه اصلی</a>
                </Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link href="/">
                      <a>Home 1</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="home-2">
                      <a>Home 2</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <Link href="#">
                  <a>صفحه ها</a>
                </Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link href="about">
                      <a>درباره ما</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/login">
                      <a>ورود حساب کاربری</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/signup">
                      <a>ساخت حساب کاربری</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <a href="#">فروشگاه</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link href="/shop">
                      <a>خرید</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/product-details">
                      <a>جزئیات محصول</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/cart">
                      <a>سبد خرید</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/wishlist">
                      <a>کالا های مورد علاقه</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/checkout">
                      <a>نهایی کردن خرید</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <Link href="blog">
                  <a>وبلاگ</a>
                </Link>

                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link href="blog-details">
                      <a>جزئیات وبلاگ</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <Link href="contact">
                  <a>تماس با ما</a>
                </Link>
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
                  <Link href="/cart">
                    <a className="sigma_header-control-cart" title="Your Cart">
                      <i className="far fa-shopping-basket" />
                      <div className="sigma_header-control-cart-inner">
                        <span>3 کالا</span>
                        <p id="total-price">129.99$</p>
                      </div>
                    </a>
                  </Link>
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
