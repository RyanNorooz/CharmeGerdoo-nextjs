import Link from 'next/link'

import DefaultLayout from '@/components/DefaultLayout'
Blog.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function Blog() {
  return (
    <>
      {/* <!--Section Start--> */}
      <div
        className="sigma_subheader style-7 bg-cover bg-center dark-overlay"
        style={{ background: "url('/img/subheader.jpg')" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <h1>Blog</h1>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
        </div>
      </div>
      {/* <!--Section End--> */}

      {/* <!--Section Start--> */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* <!-- style 8 --> */}
              <article className="sigma_post style-8">
                <div className="sigma_post-thumb">
                  <Link href="/blog-details">
                    <a>
                      <img src="/img/blog/350x250.jpg" alt="img" />
                    </a>
                  </Link>
                  <div className="sigma_post-categories">
                    <a href="#" className="sigma_post-category">
                      Leather
                    </a>
                  </div>
                </div>
                <div className="sigma_post-body">
                  <div className="sigma_post-content">
                    <h5>
                      <Link href="/blog-details">
                        <a>Leather Fashion Style</a>
                      </Link>
                    </h5>
                    <p>
                      Leather is a durable and flexible material created by
                      tanning animal rawhide and skins. The most common raw
                      material is cattle hide.
                    </p>
                    <div className="sigma_post-meta">
                      <ul>
                        <li>
                          <span>TA</span>
                          <div>
                            <Link href="#">
                              <a className="author-name">Tim Abell</a>
                            </Link>
                            <Link href="/blog-details">
                              <a>June 4, 2021</a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="fal fa-comment-dots"></i>
                          <Link href="#">
                            <a>572</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="sigma_post post-format-gallery style-8">
                <div className="sigma_post-thumb">
                  <img src="/img/blog/350x250-0.jpg" alt="img" />
                  <img src="/img/blog/350x250-1.jpg" alt="img" />
                  <img src="/img/blog/350x250-2.jpg" alt="img" />
                  <img src="/img/blog/350x250-3.jpg" alt="img" />
                </div>
                <div className="sigma_post-categories">
                  <Link href="#">
                    <a className="sigma_post-category">Leather</a>
                  </Link>
                </div>
                <div className="sigma_post-body">
                  <div className="sigma_post-content">
                    <h5>
                      <Link href="/blog-details">
                        <a>Dealing In Leather Shoes And Bags</a>
                      </Link>
                    </h5>
                    <p>
                      Leather is a durable and flexible material created by
                      tanning animal rawhide and skins. The most common raw
                      material is cattle hide.
                    </p>
                    <div className="sigma_post-meta">
                      <ul>
                        <li>
                          <span>JH</span>
                          <div>
                            <a href="#" className="author-name">
                              Joseph Hardy
                            </a>
                            <Link href="/blog-details">
                              <a>April 12, 2021</a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="fal fa-comment-dots"></i>
                          <Link href="#">
                            <a>452</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="sigma_post post-format-link">
                <div className="sigma_post-body">
                  <div className="sigma_post-content">
                    <h5>Infinitely Creative Solutions.</h5>
                    <div className="sigma_post-meta">
                      <Link href="#">
                        <a>
                          <i className="fal fa-link"></i>
                          www.yourlink.com
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="sigma_post style-8">
                <div className="sigma_post-body">
                  <div className="sigma_post-content">
                    <h5>
                      <Link href="/blog-details">
                        <a>Leather Fashion Offer Of The Month</a>
                      </Link>
                    </h5>
                    <p>
                      The leather manufacturing process is divided into three
                      fundamental subprocesses: preparatory stages, tanning, and
                      crusting. A further subprocess, finishing, can be added
                      into the leather process sequence, but not all leathers
                      receive finishing.
                    </p>
                    <div className="sigma_post-meta">
                      <ul>
                        <li>
                          <span>SH</span>
                          <div>
                            <Link href="#">
                              <a className="author-name">Sarah Henry</a>
                            </Link>
                            <Link href="/blog-details">
                              <a>August 7, 2021</a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="fal fa-comment-dots"></i>
                          <Link href="#">
                            <a>820</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="sigma_post post-format-quote">
                <blockquote>
                  <h5 className="text-white">
                    CREATE A MODERN LOOKING WEBSITE FOR ANY LEATHER ACCESSORIES
                    CENTER
                  </h5>
                  <cite>
                    <span>TA</span>
                    Tim Abel
                  </cite>
                </blockquote>
              </article>
              <article className="sigma_post style-8">
                <div className="sigma_post-thumb">
                  <Link href="/blog-details">
                    <a>
                      <img src="/img/blog/350x250-4.jpg" alt="img" />
                    </a>
                  </Link>
                  <div className="sigma_post-categories">
                    <Link href="#">
                      <a className="sigma_post-category">Leather</a>
                    </Link>
                  </div>
                </div>
                <div className="sigma_post-body">
                  <div className="sigma_post-content">
                    <h5>
                      <Link href="/blog-details">
                        <a>Man Love Leather Collection</a>
                      </Link>
                    </h5>
                    <p>
                      Leather is a durable and flexible material created by
                      tanning animal rawhide and skins. The most common raw
                      material is cattle hide.
                    </p>
                    <div className="sigma_post-meta">
                      <ul>
                        <li>
                          <span>AS</span>
                          <div>
                            <Link href="#">
                              <a className="author-name">Andrew Simon</a>
                            </Link>
                            <Link href="/blog-details">
                              <a>Novemvber 6, 2021</a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="fal fa-comment-dots"></i>
                          <Link href="#">
                            <a>572</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="sigma_post post-format-video style-8">
                <div className="sigma_post-thumb">
                  <Link href="/blog-details">
                    <a>
                      <img src="/img/blog/730x415.jpg" alt="img" />
                    </a>
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=EEJFMdfraVY"
                    className="sigma_video-btn popup-video"
                  >
                    <i className="far fa-play"></i>
                  </a>
                  <div className="sigma_post-categories">
                    <Link href="#">
                      <a className="sigma_post-category">Leather</a>
                    </Link>
                  </div>
                </div>
                <div className="sigma_post-body">
                  <div className="sigma_post-content">
                    <h5>
                      <Link href="/blog-details">
                        <a>Video Post</a>
                      </Link>
                    </h5>
                    <p>
                      Leather is a durable and flexible material created by
                      tanning animal rawhide and skins. The most common raw
                      material is cattle hide.
                    </p>
                    <div className="sigma_post-meta">
                      <ul>
                        <li>
                          <span>TA</span>
                          <div>
                            <Link href="#">
                              <a className="author-name">Tim Abell</a>
                            </Link>
                            <Link href="/blog-details">
                              <a>June 4, 2021</a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="fal fa-comment-dots"></i>
                          <Link href="#">
                            <a>572</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="sigma_post post-format-audio style-8">
                <div className="sigma_post-thumb">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/41395010&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"
                    ></iframe>
                  </div>
                </div>
                <div className="sigma_post-body">
                  <div className="sigma_post-content">
                    <h5>
                      <Link href="#">
                        <a>Audio Post</a>
                      </Link>
                    </h5>
                    <p>
                      Leather is a durable and flexible material created by
                      tanning animal rawhide and skins. The most common raw
                      material is cattle hide.
                    </p>
                    <div className="sigma_post-meta">
                      <ul>
                        <li>
                          <span>TO</span>
                          <div>
                            <Link href="#">
                              <a className="author-name">Thomas Otto</a>
                            </Link>
                            <Link href="#">
                              <a>December 16, 2021</a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="fal fa-comment-dots"></i>
                          <Link href="#">
                            <a>660</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="sigma_post post-format-quote">
                <blockquote>
                  <h5 className="text-white">
                    BEST SOLUTION FOR OPENCART ALL LEATHER PRODUCT 30% OFF THIS
                    IS A TRUE EXPRESSION IN ADVANCE
                  </h5>
                  <cite>
                    <span>TA</span>
                    Tim Abel
                  </cite>
                </blockquote>
              </article>
            </div>
          </div>
          {/* <!-- Pagination Start --> */}
          <ul className="pagination">
            <li className="page-item">
              <Link href="#">
                <a className="page-link">
                  <i className="fal fa-chevron-double-left"></i>
                </a>
              </Link>
            </li>
            <li className="page-item">
              <Link href="#">
                <a className="page-link">1</a>
              </Link>
            </li>
            <li className="page-item active">
              <Link href="#">
                <a className="page-link">
                  2 <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="page-item">
              <Link href="#">
                <a className="page-link">3</a>
              </Link>
            </li>
            <li className="page-item">
              <Link href="#">
                <a className="page-link">
                  <i className="fal fa-chevron-double-right"></i>
                </a>
              </Link>
            </li>
          </ul>
          {/* <!-- Pagination End --> */}
        </div>
      </div>
      {/* <!--Section End--></div> */}
    </>
  )
}
