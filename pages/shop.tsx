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
              <a className="btn-link" href="#">
                Home
              </a>
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
                <a href="#" className="custom-secondary fw-600">
                  Filter <i className="custom-primary far fa-filter ml-2"></i>{' '}
                </a>
              </div>
              {/* <!-- Product Count & Orderby End --> */}
              <div className="row masonry">
                {/* <!-- Product Start --> */}
                <div className="col-md-4 col-sm-6 masonry-item">
                  <div className="sigma_product style-2">
                    <div className="sigma_product-thumb">
                      <a href="product-details.html">
                        <img src="/img/shop/500.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Leather Belt</a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-0.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Leather Wallet</a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-1.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Leather Gloves</a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-2.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Premium Belt</a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-3.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">
                          Leather Headphone
                        </a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-4.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Leather Bag</a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-5.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Premium Shoes</a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-6.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Leather Jacket</a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-7.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Leather Shoes</a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-8.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Leather Shoes</a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-9.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Hand Bag</a>{' '}
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
                      <a href="product-details.html">
                        <img src="/img/shop/500-10.jpg" alt="product" />
                      </a>
                      <div className="sigma_product-controls">
                        <a href="#" data-toggle="tooltip" title="Wishlist">
                          {' '}
                          <i className="far fa-heart"></i>
                        </a>
                        <a
                          href="product-details.html"
                          data-toggle="tooltip"
                          title="Add To Cart"
                        >
                          {' '}
                          <i className="far fa-shopping-basket"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Quick View">
                          {' '}
                          <i
                            data-toggle="modal"
                            data-target="#quickViewModal"
                            className="far fa-eye"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="sigma_product-body">
                      <h5 className="sigma_product-title">
                        {' '}
                        <a href="product-details.html">Leather Bag</a>{' '}
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
                  <a className="page-link" href="#">
                    <i className="fal fa-chevron-double-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fal fa-chevron-double-right"></i>
                  </a>
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
                      <a href="#">
                        Bags
                        <span>12</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Duffle Bags
                        <span>9</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Footwear
                        <span>7</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Leather Kits
                        <span>5</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Wallets
                        <span>3</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Recent Posts Widget --> */}
                <div className="widget widget-sigma-recent-posts">
                  <h5 className="widget-title">Most Commented</h5>
                  <div className="sigma_recent-post">
                    <a href="blog-details.html" className="recent-post-image">
                      <img src="/img/shop/80x80.jpg" alt="img" />
                      <span>12</span>
                    </a>
                    <div className="recent-post-descr">
                      <h6>
                        <a href="blog-details.html">
                          Every Next Level Of Leather Products We Have
                        </a>
                      </h6>
                      <a href="blog-details.html" className="date">
                        <i className="far fa-clock mr-2"></i>
                        June 4, 2021
                      </a>
                    </div>
                  </div>
                  <div className="sigma_recent-post">
                    <a href="blog-details.html" className="recent-post-image">
                      <img src="/img/shop/80x80-0.jpg" alt="img" />
                      <span>6</span>
                    </a>
                    <div className="recent-post-descr">
                      <h6>
                        <a href="blog-details.html">
                          Specializing in Discounted Leather
                        </a>
                      </h6>
                      <a href="blog-details.html" className="date">
                        <i className="far fa-clock mr-2"></i>
                        June 4, 2021
                      </a>
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
