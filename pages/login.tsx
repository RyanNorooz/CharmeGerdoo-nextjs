import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'

Login.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function Login() {
  return (
    <>
      {/* <!--Section Start--> */}
      <div
        className="sigma_subheader style-7 bg-cover bg-center dark-overlay"
        style={{ background: "url('/img/subheader.jpg')" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <h1>Login</h1>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Login
            </li>
          </ol>
        </div>
      </div>
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      <div className="container-fluid p-0">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-6">
            <div className="section">
              <div className="sigma_form style-3">
                <div className="section-title">
                  <h3 className="title">
                    Sign <span className="primary-color">in</span>
                  </h3>
                  <p>
                    Leather is a durable and flexible material created by
                    tanning animal.
                  </p>
                </div>
                <form method="post">
                  <div className="form-group">
                    <p className="mb-0">
                      Need a New Account?
                      <Link href="/signup">
                        <a>Create an account</a>
                      </Link>
                    </p>
                  </div>
                  <label>Username</label>
                  <div className="form-group">
                    <input type="text" name="fname" />
                  </div>
                  <label>Password</label>
                  <div className="form-group">
                    <i className="fal fa-eye password-toggle show-password"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn-block">
                      Log in
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="d-flex align-items-center justify-content-center">
                      <input type="checkbox" id="checkbox" name="checkbox" />
                      <label className="mb-0" htmlFor="checkbox">
                        Keep me Logged in
                      </label>
                    </div>
                  </div>
                  <div className="sigma_form-info">
                    <a href="#">Forgot Username?</a>
                    <a href="#">Forgot Password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="sigma_form-image">
              <img src="/img/login/1920.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
      {/* <!--Section End--> */}
    </>
  )
}
