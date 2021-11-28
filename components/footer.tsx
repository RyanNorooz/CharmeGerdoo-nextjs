import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className="sigma_footer style-6 sigma_footer-dark"
      style={{ backgroundImage: "url('assets/img/footer.jpg')" }}
    >
      <div className="sigma_footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sigma_footer-widget">
                <div className="sigma_footer-logo mb-4">
                  <Image src="assets/img/logo-light.png" alt="logo" />
                </div>

                <div className="row">
                  <div className="col-sm-9">
                    <p className="mb-0">
                      Leather is a durable and flexible material created by
                      tanning animal rawhide and skins.
                    </p>
                  </div>
                </div>

                <div className="sigma-call mt-5">
                  <i className="flaticon-telephone is_flaticon" />

                  <div>
                    <h5>212 386 5575</h5>
                    <p>Free Call</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3">
              <div className="sigma_footer-widget">
                <h5 className="widget-title">Solutions</h5>
                <ul className="sigma_footer-links">
                  <li>
                    <a href="login.html">Account</a>
                  </li>

                  <li>
                    <a href="signup.html">Register</a>
                  </li>

                  <li>
                    <a href="shop.html">Ecommerce</a>
                  </li>

                  <li>
                    <a href="contact-us.html">Help</a>
                  </li>

                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-3">
              <div className="sigma_footer-widget">
                <h5 className="widget-title">Company</h5>
                <ul className="sigma_footer-links">
                  <li>
                    <a href="index.html">Home</a>
                  </li>

                  <li>
                    <a href="about-us.html">About</a>
                  </li>

                  <li>
                    <a href="blog.html">Blog</a>
                  </li>

                  <li>
                    <a href="contact-us.html">Contacts</a>
                  </li>

                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="sigma_footer-widget">
                <h5 className="widget-title">Our Address</h5>
                <ul className="sigma_footer-contact">
                  <li>
                    <i className="fal fa-map-marker-alt"></i>
                    <p>60 Grant Ave. Central new Road</p>
                  </li>

                  <li>
                    <i className="fal fa-phone"></i>
                    <p>+880 1723 456</p>
                  </li>

                  <li>
                    <i className="fal fa-envelope"></i>
                    <p>example@email.com</p>
                  </li>
                </ul>

                <ul className="sigma_social-icons mt-4 justify-content-start">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
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
                  © Hardi -<a href="#">2021</a>
                </p>
              </div>
            </div>

            <div className="col-sm-8">
              <ul className="sigma_footer-links justify-content-sm-end">
                <li>
                  <a href="about-us.html">About Us</a>
                </li>

                <li>
                  <a href="signup.html">Signup</a>
                </li>

                <li>
                  <a href="login.html">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
