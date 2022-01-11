import DefaultLayout from '@/components/DefaultLayout'

SignUp.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function SignUp() {
  return (
    <>
      {/* <!--Section Start--> */}
      <div
        className="sigma_subheader style-7 bg-cover bg-center dark-overlay"
        style={{ background: "url('/img/subheader.jpg')" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <h1>Signup</h1>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Signup
            </li>
          </ol>
        </div>
      </div>
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      <div className="section">
        <div className="container">
          <div className="section-title centered">
            <h3 className="title">
              Sign <span className="primary-color">Up</span>
            </h3>
            <p>
              Leather is a durable and flexible material created by tanning
              animal rawhide and skins. The most common raw material is cattle
              hide.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="sigma_form style-2">
                <form method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="fname"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button type="button">US</button>
                          </div>
                          <input type="number" name="phone" placeholder="+1" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="fal fa-eye password-toggle show-password"></i>
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="fal fa-eye password-toggle show-password"></i>
                        <input
                          type="password"
                          name="cpassword"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-center justify-content-center">
                        <input
                          type="checkbox"
                          id="checkbox"
                          name="checkbox"
                          value="Remember Me"
                        />
                        <label className="mb-0" htmlFor="checkbox">
                          By Selecting This You Agree to the
                          <a href="#">Privacy Policy</a>
                          and
                          <a href="#">Cookie Policy</a>
                        </label>
                      </div>
                      <div className="text-center mt-3">
                        <button type="button">Signup</button>
                      </div>
                      <div className="sigma_form-seperator">
                        <span>Or</span>
                      </div>
                      <div className="sigma_buttons text-center">
                        <button type="button" className="facebook">
                          <i className="fab fa-facebook-f ml-0 mr-2"></i>
                          Facebook
                        </button>
                        <button type="button" className="google">
                          <i className="fab fa-google ml-0 mr-2"></i>
                          Google
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Section End--> */}
    </>
  )
}
