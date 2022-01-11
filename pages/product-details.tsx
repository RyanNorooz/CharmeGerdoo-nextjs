import Link from 'next/link'

import DefaultLayout from '@/components/DefaultLayout'
ProductDetails.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function ProductDetails() {
  return (
    <>
      {/* <!--Section Start--> */}
      <div
        className="sigma_subheader style-7 bg-cover bg-center dark-overlay"
        style={{ background: "url('/img/subheader.jpg')" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <h1>Product Detail</h1>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="#">
                <a className="btn-link">Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product Detail
            </li>
          </ol>
        </div>
      </div>
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      {/* <!-- Product Content Start --> */}
      <div className="section sigma_product-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="sigma_product-single-thumb mb-lg-30">
                <div className="slider">
                  <img src="/img/product-details/440x540.jpg" alt="product" />
                  <img src="/img/product-details/440x540-0.jpg" alt="product" />
                  <img src="/img/product-details/440x540-1.jpg" alt="product" />
                  <img src="/img/product-details/440x540-2.jpg" alt="product" />
                </div>
                <div className="slider-nav">
                  <img src="/img/product-details/250.jpg" alt="product" />
                  <img src="/img/product-details/250-0.jpg" alt="product" />
                  <img src="/img/product-details/250-1.jpg" alt="product" />
                  <img src="/img/product-details/250-2.jpg" alt="product" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="sigma_product-single-content">
                <div className="sigma_product-price">
                  <span>352$</span>
                  <span>245$</span>
                </div>
                <div className="sigma_rating-wrapper">
                  <div className="sigma_rating">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span>255 Reviews</span>
                </div>
                <hr />
                <p className="sigma_product-excerpt">
                  Leather is a durable and flexible material created by tanning
                  animal rawhide and skins. The most common raw material is
                  cattle hide. It can be produced at manufacturing scales
                  ranging from artisan to modern industrial scale.
                </p>
                <div className="sigma_product-meta">
                  <p>
                    <strong>
                      Product Name: <span>Leather Belt</span>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Availablity: <span>In Stock</span>
                    </strong>
                  </p>
                  <p>
                    <strong>Tags: </strong>
                    <Link href="#">
                      <a>Fashion</a>
                    </Link>
                    ,
                    <Link href="#">
                      <a>Leather</a>
                    </Link>
                  </p>
                </div>
                <hr />
                <form className="sigma_product-atc-form">
                  <div className="sigma_product-buttons">
                    <Link href="/product-details">
                      <a className="ml-0 sigma_btn">
                        Buy Now <i className="far fa-shopping-basket"></i>
                      </a>
                    </Link>
                    <Link href="/product-details">
                      <a
                        data-toggle="tooltip"
                        title="Wishlist"
                        className="ml-2 sigma_btn light"
                      >
                        <i className="m-0 far fa-heart"></i>
                      </a>
                    </Link>
                    <Link href="/product-details">
                      <a
                        data-toggle="tooltip"
                        title="Compare"
                        className="ml-2 sigma_btn light"
                      >
                        <i className="m-0 far fa-compress"></i>
                      </a>
                    </Link>
                  </div>
                </form>
                {/* <!-- Post Meta Start --> */}
                <div className="sigma_post-single-meta">
                  <div className="sigma_post-single-meta-item sigma_post-share">
                    <h5>Share</h5>
                    <ul className="sigma_sm">
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fab fa-youtube"></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Post Meta End --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Product Content End --> */}
      {/* <!-- Additional Information Start --> */}
      <div className="section light-bg">
        <div className="container">
          <div className="sigma_product-additional-info">
            <ul className="nav" id="bordered-tab" role="tablist">
              <li className="nav-item">
                <Link href="#tab-product-desc">
                  <a
                    className="nav-link active"
                    id="tab-product-desc-tab"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="tab-product-desc"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#tab-product-info">
                  <a
                    className="nav-link"
                    id="tab-product-info-tab"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="tab-product-info"
                    aria-selected="false"
                  >
                    Additional Information
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#tab-product-reviews">
                  <a
                    className="nav-link"
                    id="tab-product-reviews-tab"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="tab-product-reviews"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </Link>
              </li>
            </ul>
            <div className="tab-content" id="bordered-tabContent">
              <div
                className="tab-pane fade show active"
                id="tab-product-desc"
                role="tabpanel"
                aria-labelledby="tab-product-desc-tab"
              >
                <h4>Description</h4>
                <p>
                  Leather usage has come under criticism in the 20th and 21st
                  centuries by animal rights groups. These groups claim that
                  buying or wearing leather is unethical because producing
                  leather requires animals to be killed However, according to
                  the LCA report for the United Nations Industrial Development
                  Organziation, 99% of the raw hides and skins used in the
                  production of leather derive from animals raised for meat
                  production.
                </p>
                <p>
                  Tanning is a process that stabilizes the proteins,
                  particularly collagen, of the raw hide to increase the
                  thermal, chemical and microbiological stability of the hides
                  and skins, making it suitable for a wide variety of end
                  applications. The principal difference between raw and tanned
                  hides is that raw hides dry out to form a hard, inflexible
                  material that, when rewetted, will putrefy, while tanned
                  material dries.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="tab-product-info"
                role="tabpanel"
                aria-labelledby="tab-product-info-tab"
              >
                <h4>Additional Information</h4>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Attributes</th>
                      <th scope="col">Values</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Color</strong>
                      </td>
                      <td>blue, red, yellow, green</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Material</strong>
                      </td>
                      <td>wood, plastic, stainless steel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="tab-product-reviews"
                role="tabpanel"
                aria-labelledby="tab-product-reviews-tab"
              >
                <h4>Leave a Review</h4>
                <div className="sigma_rating-wrapper">
                  <div className="sigma_rating m-0">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span>Your Review</span>
                </div>
                {/* <!-- Review Form start --> */}
                <div className="comment-form">
                  <form method="post">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          name="fname"
                          value=""
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                          value=""
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          placeholder="Type your comment..."
                          name="comment"
                          rows={7}
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="sigma_btn-custom"
                      name="button"
                    >
                      Post Review
                    </button>
                  </form>
                </div>
                {/* <!-- Review Form End --> */}
                {/* <!-- Reviews Start --> */}
                <div className="comments-list">
                  <ul>
                    <li className="comment-item">
                      <img
                        src="/img/product-details/150.jpg"
                        alt="comment author"
                      />
                      <div className="comment-body">
                        <h5>Robert John</h5>
                        <div className="sigma_rating">
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <span>
                          <i className="far fa-clock"></i> January 13 2021
                        </span>
                        <p>
                          Leverage agile frameworks to provide a robust synopsis
                          for high level overviews. Iterative approaches to
                          corporate strategy foster collaborative thinking to
                          further the overall value proposition.
                        </p>
                        <Link href="#">
                          <a className="btn-link">
                            Reply <i className="far fa-reply"></i>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className="comment-item">
                      <img
                        src="/img/product-details/150-0.jpg"
                        alt="comment author"
                      />
                      <div className="comment-body">
                        <h5>Christine Hill</h5>
                        <div className="sigma_rating">
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <span>
                          <i className="far fa-clock"></i> December 27 2021
                        </span>
                        <p>
                          Leverage agile frameworks to provide a robust synopsis
                          for high level overviews. Iterative approaches
                        </p>
                        <Link href="#">
                          <a className="btn-link">
                            Reply <i className="far fa-reply"></i>
                          </a>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- Reviews End --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Additional Information End --> */}
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      <div
        className="modal fade sigma_quick-view-modal"
        id="quickViewModal"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="sigma_close" data-dismiss="modal">
                <span></span>
                <span></span>
              </div>
              <div className="row sigma_product-single">
                <div className="col-md-6">
                  <div className="sigma_product-single-thumb">
                    <img src="/img/product-details/600.jpg" alt="product" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sigma_product-single-content">
                    <div className="sigma_product-price">
                      <span>352$</span>
                      <span>245$</span>
                    </div>
                    <div className="sigma_rating-wrapper">
                      <div className="sigma_rating">
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star active"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span>255 Reviews</span>
                    </div>
                    <hr />
                    <p className="sigma_product-excerpt">
                      Donec sollicitudin molestie malesuada. Nulla porttitor
                      accumsan tincidunt. Vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia Curae;
                      Donec velit neque,
                    </p>
                    <div className="sigma_product-meta">
                      <p>
                        <strong>
                          Product SKU: <span>#3382dk</span>
                        </strong>
                      </p>
                      <p>
                        <strong>
                          Availablity: <span>In Stock</span>
                        </strong>
                      </p>
                      <p>
                        <strong>Tags: </strong>
                        <Link href="#">
                          <a>Fashion</a>
                        </Link>
                        ,
                        <Link href="#">
                          <a>Classic</a>
                        </Link>
                      </p>
                    </div>
                    <hr />
                    <form className="sigma_product-atc-form">
                      <div className="sigma_product-buttons d-block">
                        <Link href="/product-details">
                          <a className="ml-0 btn-block sigma_btn">
                            Buy Now <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a className="ml-0 btn-block sigma_btn light">
                            Wishlist <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a className="ml-0 btn-block sigma_btn light">
                            Compare <i className="far fa-compress"></i>
                          </a>
                        </Link>
                      </div>
                    </form>
                    {/* <!-- Post Meta Start --> */}
                    <div className="sigma_post-single-meta">
                      <div className="sigma_post-single-meta-item sigma_post-share">
                        <h5>Share</h5>
                        <ul className="sigma_sm">
                          <li>
                            <Link href="#">
                              <a>
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a>
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a>
                                <i className="fab fa-twitter"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a>
                                <i className="fab fa-youtube"></i>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- Post Meta End --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Section End--></div> */}
    </>
  )
}
