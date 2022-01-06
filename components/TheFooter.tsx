import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="sigma_footer style-6 sigma_footer-dark"
      style={{ backgroundImage: `url("/img/footer.jpg")` }}
    >
      <div className="sigma_footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sigma_footer-widget">
                <div className="sigma_footer-logo mb-4">
                  <img src="/img/logo-light.png" alt="logo" />
                </div>

                <div className="row">
                  <div className="col-sm-9">
                    <p className="mb-0">
                      چرم گردو با استفاده از بهترین متریال کالای دلخواه شما را
                      تولید و با ارسال رایگان به تمامی نقاط اهواز ارسال میکند
                    </p>
                  </div>
                </div>

                <div className="sigma-call mt-5">
                  <i className="flaticon-telephone is_flaticon" />

                  <div>
                    <h5 dir="ltr">+98 938 702 2102</h5>
                    <p>واتس‌اپ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3">
              <div className="sigma_footer-widget">
                <h5 className="widget-title">Solutions</h5>

                <ul className="sigma_footer-links">
                  <li>
                    <Link href="/login">
                      <a>Account</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/signup">
                      <a>Register</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/shop">
                      <a>Ecommerce</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact">
                      <a>Help</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/checkout">
                      <a>Checkout</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-3">
              <div className="sigma_footer-widget">
                <h5 className="widget-title">Company</h5>
                <ul className="sigma_footer-links">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact">
                      <a>Contacts</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/shop">
                      <a>Shop</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="sigma_footer-widget">
                <h5 className="widget-title">ارتباط با ما</h5>
                <ul className="sigma_footer-contact">
                  {/* <li>
                    <i className="fal fa-map-marker-alt"/>
                    <p>60 Grant Ave. Central new Road</p>
                  </li> */}

                  <li>
                    <i className="fal fa-phone" />
                    <p dir="ltr">+98 938 702 2102</p>
                  </li>

                  <li>
                    <i className="fal fa-envelope" />
                    <p>example@email.com</p>
                  </li>
                </ul>

                <ul className="sigma_social-icons mt-4 justify-content-start">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sigma_footer-bottom mt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="sigma_footer-copyright text-sm-left mt-0 mb-3 mb-sm-0">
                <p className="mb-0">
                  © CharmeGerdoo - <a href="#">2021</a>
                </p>
              </div>
            </div>

            <div className="col-sm-8">
              <ul className="sigma_footer-links justify-content-sm-end">
                <li>
                  <Link href="/about">
                    <a>About Us</a>
                  </Link>
                </li>

                <li>
                  <Link href="/signup">
                    <a>Signup</a>
                  </Link>
                </li>

                <li>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
