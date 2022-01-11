import DefaultLayout from '@/components/DefaultLayout'

WishList.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function WishList() {
  return (
    <>
      {/* <!--Section Start--> */}
      <div
        className="sigma_subheader style-7 bg-cover bg-center dark-overlay"
        style={{ background: "url('/img/subheader.jpg')" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <h1>Wishlist</h1>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Wishlist
            </li>
          </ol>
        </div>
      </div>
      {/* <!--Section End--> */}

      {/* <!--Section Start--> */}
      <div className="section">
        <div className="container">
          {/* <!-- Wishlist Table Start --> */}
          <table className="sigma_responsive-table">
            <thead>
              <tr>
                <th className="remove-item"></th>
                <th>Product</th>
                <th>Price</th>
                <th>Availability</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="remove">
                  <button
                    type="button"
                    className="sigma_close close-danger remove-from-cart"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </td>
                <td data-title="Product">
                  <div className="sigma_cart-product-wrapper">
                    <img src="/img/wishlist/70.jpg" alt="prod1" />
                    <div className="sigma_cart-product-body">
                      <h6>
                        <a href="#">Leather Shoes</a>
                      </h6>
                      <p>1 Pieces</p>
                    </div>
                  </div>
                </td>
                <td data-title="Price">
                  <strong>12.99$</strong>
                </td>
                <td data-title="Availability">
                  <span className="sigma_product-stock instock">In Stock</span>
                </td>
                <td data-title="Total">
                  <strong>12.99$</strong>
                </td>
                <td data-title="Actions">
                  <a href="#" className="sigma_btn btn-sm shadow-none">
                    Add to Cart
                  </a>
                </td>
              </tr>
              <tr>
                <td className="remove">
                  <button
                    type="button"
                    className="sigma_close close-danger remove-from-cart"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </td>
                <td data-title="Product">
                  <div className="sigma_cart-product-wrapper">
                    <img src="/img/wishlist/70-0.jpg" alt="prod1" />
                    <div className="sigma_cart-product-body">
                      <h6>
                        <a href="#">Leather Belt</a>
                      </h6>
                      <p>2 Piece</p>
                    </div>
                  </div>
                </td>
                <td data-title="Price">
                  <strong>9.99$</strong>
                </td>
                <td data-title="Availability">
                  <span className="sigma_product-stock instock">In Stock</span>
                </td>
                <td data-title="Total">
                  <strong>9.99$</strong>
                </td>
                <td data-title="Actions">
                  <a href="#" className="sigma_btn btn-sm shadow-none">
                    Add to Cart
                  </a>
                </td>
              </tr>
              <tr>
                <td className="remove">
                  <button
                    type="button"
                    className="sigma_close close-danger remove-from-cart"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </td>
                <td data-title="Product">
                  <div className="sigma_cart-product-wrapper">
                    <img src="/img/wishlist/70-1.jpg" alt="prod1" />
                    <div className="sigma_cart-product-body">
                      <h6>
                        <a href="#">Leather Bag</a>
                      </h6>
                      <p>3 Pieces</p>
                    </div>
                  </div>
                </td>
                <td data-title="Price">
                  <strong>13.99$</strong>
                </td>
                <td data-title="Availability">
                  <span className="sigma_product-stock outofstock">
                    Out of Stock
                  </span>
                </td>
                <td data-title="Total">
                  <strong>13.99$</strong>
                </td>
                <td data-title="Actions">
                  <a href="#" className="sigma_btn btn-sm shadow-none">
                    Add to Cart
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- Wishlist Table End --> */}
          {/* <!-- Share Wishlist Start --> */}
          <div className="text-center">
            <h5>Share Your Wishlist</h5>
            {/* <!-- Post Share Start --> */}
            <div className="sigma_post-share">
              <ul className="sigma_sm justify-content-center">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Post Share End --> */}
          </div>
          {/* <!-- Share Wishlist End --> */}
        </div>
      </div>
      {/* <!--Section End--> */}
    </>
  )
}
