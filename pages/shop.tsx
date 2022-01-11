import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'

Shop.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function Shop() {
  return (
    <>
      {/* <!--Section Start--> */}
      <div
        className="sigma_subheader style-7 bg-cover bg-center dark-overlay"
        style={{ background: "url('/img/subheader.jpg')" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <h1>Shop</h1>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="#">
                <a className="btn-link">Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </div>
      </div>
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <!-- Product Count & Orderby Start --> */}
              <div className="sigma_shop-global">
                <p>
                  Showing <b>20</b> of <b>320</b> products
                </p>
                <Link href="#">
                  <a className="custom-secondary fw-600">
                    Filter <i className="custom-primary far fa-filter ml-2"></i>
                  </a>
                </Link>
              </div>
              {/* <!-- Product Count & Orderby End --> */}
              <div className="row masonry">
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Leather Belt</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>29$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-0.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Leather Wallet</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>59$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-1.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Leather Gloves</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>29$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-2.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Premium Belt</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>79$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-3.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Leather Headphone</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>89$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-4.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Leather Bag</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>59$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-5.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Premium Shoes</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>109$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-6.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Leather Jacket</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>129$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-7.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Leather Shoes</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>29$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-8.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Leather Shoes</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>39$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-9.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Hand Bag</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>89$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <Link href="/product-details">
                        <a>
                          <img src="/img/shop/500-10.jpg" alt="product" />
                        </a>
                      </Link>
                      <div className="sigma_product-controls">
                        <Link href="#">
                          <a data-toggle="tooltip" title="Wishlist">
                            <i className="far fa-heart"></i>
                          </a>
                        </Link>
                        <Link href="/product-details">
                          <a data-toggle="tooltip" title="Add To Cart">
                            <i className="far fa-shopping-basket"></i>
                          </a>
                        </Link>
                        <Link href="#">
                          <a data-toggle="tooltip" title="Quick View">
                            <i
                              data-toggle="modal"
                              data-target="#quickViewModal"
                              className="far fa-eye"
                            ></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        <Link href="/product-details">
                          <a>Leather Bag</a>
                        </Link>
                      </h5>
                      <div className="sigma_product-price">
                        <span>29$</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product End --> */}
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
            {/* <!-- Sidebar Start --> */}
            <div className="col-lg-4">
              <div className="sidebar">
                {/* <!-- Search Widget --> */}
                <div className="widget widget-search">
                  <h5 className="widget-title">Search</h5>
                  <div className="input-group">
                    <input type="text" name="search" placeholder="Search" />
                    <div className="input-group-append">
                      <button type="button">
                        <i className="fal fa-search mr-0"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Filter: Price Start --> */}
                <div className="widget">
                  <h5 className="widget-title"> Price </h5>
                  <input
                    type="text"
                    className="js-range-slider"
                    name="freshness_range"
                    value=""
                    data-type="double"
                    data-min="0"
                    data-max="500"
                    data-from="10"
                    data-to="100"
                    data-grid="true"
                    data-postfix=" $"
                  />
                </div>
                {/* <!-- Filter: Price End --> */}
                {/* <!-- Leather Widget --> */}
                <div className="widget widget-categories">
                  <h5 className="widget-title">Categories</h5>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>
                          Bags
                          <span>12</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          Duffle Bags
                          <span>9</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          Footwear
                          <span>7</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          Leather Kits
                          <span>5</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          Wallets
                          <span>3</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- Recent Posts Widget --> */}
                <div className="widget widget-sigma-recent-posts">
                  <h5 className="widget-title">Most Commented</h5>
                  <div className="sigma_recent-post">
                    <Link href="/blog-details">
                      <a className="recent-post-image">
                        <img src="/img/shop/80x80.jpg" alt="img" />
                        <span>12</span>
                      </a>
                    </Link>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="/blog-details">
                          <a>Every Next Level Of Leather Products We Have</a>
                        </Link>
                      </h6>
                      <Link href="/blog-details">
                        <a className="date">
                          <i className="far fa-clock mr-2"></i>
                          June 4, 2021
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="sigma_recent-post">
                    <Link href="/blog-details">
                      <a className="recent-post-image">
                        <img src="/img/shop/80x80-0.jpg" alt="img" />
                        <span>6</span>
                      </a>
                    </Link>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="/blog-details">
                          <a>Specializing in Discounted Leather</a>
                        </Link>
                      </h6>
                      <Link href="/blog-details">
                        <a className="date">
                          <i className="far fa-clock mr-2"></i>
                          June 4, 2021
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- Subscribe Widget --> */}
                <div className="widget widget-newsletter">
                  <h5 className="widget-title">Join Footwearletter</h5>
                  <form method="post">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="button" className="btn-block mt-4">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Sidebar End --> */}
          </div>
        </div>
      </div>
      {/* <!--Section End--> */}
    </>
  )
}
