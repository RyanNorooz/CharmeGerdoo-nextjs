import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'

About.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function About() {
  return (
    <>
      {/* <!--Section Start--> */}
      <div
        className="sigma_subheader style-7 bg-cover bg-center dark-overlay"
        style={{ background: "url('/img/subheader.jpg')" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <h1>About Us</h1>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </div>
      </div>
      {/* <!--Section End--> */}

      {/* <!--Section Start--> */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="sigma_about style-7 w-100 h-100">
                <div className="sigma_about-image-1">
                  <img src="/img/about-us/570x420.jpg" alt="img" />
                </div>
                <div className="sigma_about-image-2">
                  <img src="/img/about-us/275x200.jpg" alt="img" />
                </div>
                <div className="sigma_media">
                  <span>
                    <b className="counter" data-from="0" data-to="25">
                      25
                    </b>
                    Years of <br /> Experience
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sigma_about style-7 pl-lg-4">
                <div className="section-title">
                  <span className="subtitle">About us</span>
                  <h3 className="title">
                    Better Leather,
                    <span className="primary-color">Easy Life</span>
                  </h3>
                  <h5>If You Get Better Leather, You Can Enjoy a Easy Age</h5>
                </div>
                <div className="sigma_about-content">
                  <p>
                    Leather is a durable and flexible material created by
                    tanning animal rawhide and skins.
                  </p>
                  <Link href="/contact">
                    <a className="sigma_btn">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      <div className="section pt-0">
        <div className="container">
          <div className="section-title flex-title">
            <div className="section-title-heading">
              <span className="subtitle">Meet Our Team</span>
              <h3 className="title mb-0">Our Creative Team</h3>
            </div>
            <div className="sigma_custom-arrows mt-4 mt-sm-0">
              <i className="fal fa chevron-left slick-prev"></i>
              <i className="fal fa chevron-right slick-next"></i>
            </div>
          </div>
          <div className="sigma_team-slider">
            <div className="sigma_team style-11">
              <div className="sigma_team-thumb">
                <img src="/img/about-us/253x253.jpg" alt="team" />
              </div>
              <div className="sigma_team-body">
                <h5>
                  <a href="#">Tim Abell</a>
                </h5>
                <div className="sigma_team-categories">
                  <a href="#" className="sigma_team-category">
                    Product Designer
                  </a>
                </div>
              </div>
            </div>
            <div className="sigma_team style-11">
              <div className="sigma_team-thumb">
                <img src="/img/about-us/253x253-0.jpg" alt="team" />
              </div>
              <div className="sigma_team-body">
                <h5>
                  <a href="#">Ash Aron</a>
                </h5>
                <div className="sigma_team-categories">
                  <a href="#" className="sigma_team-category">
                    Product Designer
                  </a>
                </div>
              </div>
            </div>
            <div className="sigma_team style-11">
              <div className="sigma_team-thumb">
                <img src="/img/about-us/253x253-1.jpg" alt="team" />
              </div>
              <div className="sigma_team-body">
                <h5>
                  <a href="#">Mark Otto</a>
                </h5>
                <div className="sigma_team-categories">
                  <a href="#" className="sigma_team-category">
                    Product Designer
                  </a>
                </div>
              </div>
            </div>
            <div className="sigma_team style-11">
              <div className="sigma_team-thumb">
                <img src="/img/about-us/253x253-2.jpg" alt="team" />
              </div>
              <div className="sigma_team-body">
                <h5>
                  <a href="#">Maria Henry</a>
                </h5>
                <div className="sigma_team-categories">
                  <a href="#" className="sigma_team-category">
                    Founder
                  </a>
                </div>
              </div>
            </div>
            <div className="sigma_team style-11">
              <div className="sigma_team-thumb">
                <img src="/img/about-us/253x253-3.jpg" alt="team" />
              </div>
              <div className="sigma_team-body">
                <h5>
                  <a href="#">Tim Cook</a>
                </h5>
                <div className="sigma_team-categories">
                  <a href="#" className="sigma_team-category">
                    Product Designer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      <div className="section pt-0">
        <div className="container">
          <div className="section section-padding bg-primary-1 shape-after">
            <h3 className="sigma_stroke-text center-absolute">Hardi</h3>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="sigma_counter text-center">
                  <span className="justify-content-center">
                    <b
                      className="counter text-white"
                      data-from="0"
                      data-to="25000"
                    >
                      25000
                    </b>

                    <span className="plus text-white">+</span>
                  </span>
                  <p className="text-white">Complete Delivery</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="sigma_counter text-center">
                  <span className="justify-content-center">
                    <b
                      className="counter text-white"
                      data-from="0"
                      data-to="58"
                    >
                      89
                    </b>

                    <span className="plus text-white">+</span>
                  </span>
                  <p className="text-white">Awards</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="sigma_counter text-center">
                  <span className="justify-content-center">
                    <b
                      className="counter text-white"
                      data-from="0"
                      data-to="58"
                    >
                      58
                    </b>

                    <span className="plus text-white">+</span>
                  </span>
                  <p className="text-white">Experience</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="sigma_counter text-center">
                  <span className="justify-content-center">
                    <b
                      className="counter text-white"
                      data-from="0"
                      data-to="96"
                    >
                      96
                    </b>

                    <span className="plus text-white">+</span>
                  </span>
                  <p className="text-white">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      <div className="section section-padding pt-0">
        <div className="container">
          <div className="section-title has-element centered">
            <span className="subtitle">Footwear Feeds</span>
            <h3 className="title">Our Blog</h3>
          </div>
          <div className="row pt-0 pt-lg-5 ">
            <div className="col-lg-4 col-md-6">
              <article className="sigma_post style-13">
                <Link href="/blog-details">
                  <a className="sigma_post-date">
                    <span>24</span>
                    Jun
                  </a>
                </Link>
                <div className="sigma_post-thumb">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/img/about-us/350x300.jpg" alt="img" />
                    </a>
                  </Link>
                </div>
                <div className="sigma_post-body">
                  <div className="sigma_post-meta">
                    <ul>
                      <li>
                        <a href="#">
                          By <b>Admin</b>
                        </a>
                      </li>
                      <li>
                        <a href="#">Leather </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sigma_post-content">
                    <h5>
                      <Link href="/blog-details">
                        <a>Tips For The Best Leather Product In The City</a>
                      </Link>
                    </h5>
                    <p className="m-0">
                      Leather is a durable and flexible material created by
                      tanning animal.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="sigma_post style-13">
                <Link href="/blog-details">
                  <a className="sigma_post-date">
                    <span>22</span>
                    Apr
                  </a>
                </Link>
                <div className="sigma_post-thumb">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/img/about-us/350x300-0.jpg" alt="img" />
                    </a>
                  </Link>
                </div>
                <div className="sigma_post-body">
                  <div className="sigma_post-meta">
                    <ul>
                      <li>
                        <a href="#">
                          By <b>Admin</b>
                        </a>
                      </li>
                      <li>
                        <a href="#">Achitect</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sigma_post-content">
                    <h5>
                      <Link href="/blog-details">
                        <a>Dealing In Diffrent Types Of Leather Products</a>
                      </Link>
                    </h5>
                    <p className="m-0">
                      Leather is a durable and flexible material created by
                      tanning animal.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="sigma_post style-13">
                <Link href="/blog-details">
                  <a className="sigma_post-date">
                    <span>12</span>
                    Jan
                  </a>
                </Link>
                <div className="sigma_post-thumb">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/img/about-us/350x300-1.jpg" alt="img" />
                    </a>
                  </Link>
                </div>
                <div className="sigma_post-body">
                  <div className="sigma_post-meta">
                    <ul>
                      <li>
                        <a href="#">
                          By <b>Admin</b>
                        </a>
                      </li>
                      <li>
                        <a href="#">Leather </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sigma_post-content">
                    <h5>
                      <Link href="/blog-details">
                        <a>A Beautiful Leather Sofa From Our Side</a>
                      </Link>
                    </h5>
                    <p className="m-0">
                      Leather is a durable and flexible material created by
                      tanning animal.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Section End--> */}
    </>
  )
}
