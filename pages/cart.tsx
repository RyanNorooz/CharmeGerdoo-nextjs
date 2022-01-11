import DefaultLayout from '@/components/DefaultLayout'

Cart.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function Cart() {
  return (
    <>
      {/* <!--Section Start--> */}
      <div
        className="sigma_subheader style-7 bg-cover bg-center dark-overlay"
        style={{ background: "url('/img/subheader.jpg')" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <h1>Cart</h1>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cart
            </li>
          </ol>
        </div>
      </div>
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      <div className="section">
        <div className="container">
          {/* <!-- Cart Table Start --> */}
          <table className="sigma_responsive-table">
            <thead>
              <tr>
                <th className="remove-item"></th>
                <th>Product</th>
                <th>Price</th>
                <th>Qunantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="remove">
                  <button
                    type="button"
                    className="sigma_close remove-from-cart"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </td>
                <td data-title="Product">
                  <div className="sigma_cart-product-wrapper">
                    <img src="/img/cart/70.jpg" alt="prod1" />
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
                <td className="quantity" data-title="Quantity">
                  <input type="number" className="qty form-control" value="1" />
                </td>
                <td data-title="Total">
                  <strong>12.99$</strong>
                </td>
              </tr>
              <tr>
                <td className="remove">
                  <button
                    type="button"
                    className="sigma_close remove-from-cart"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </td>
                <td data-title="Product">
                  <div className="sigma_cart-product-wrapper">
                    <img src="/img/cart/70-0.jpg" alt="prod1" />
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
                <td className="quantity" data-title="Quantity">
                  <input type="number" className="qty form-control" value="1" />
                </td>
                <td data-title="Total">
                  <strong>9.99$</strong>
                </td>
              </tr>
              <tr>
                <td className="remove">
                  <button
                    type="button"
                    className="sigma_close remove-from-cart"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </td>
                <td data-title="Product">
                  <div className="sigma_cart-product-wrapper">
                    <img src="/img/cart/70-1.jpg" alt="prod1" />
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
                <td className="quantity" data-title="Quantity">
                  <input type="number" className="qty form-control" value="1" />
                </td>
                <td data-title="Total">
                  <strong>13.99$</strong>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- Cart Table End --> */}
          {/* <!-- Coupon Code Start --> */}
          <div className="row">
            <div className="col-lg-5">
              <div className="form-group mb-0">
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Coupon Code"
                    aria-label="Coupon Code"
                  />
                  <div className="input-group-append">
                    <button
                      className="sigma_btn-custom shadow-none"
                      type="button"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Coupon Code End --> */}
        </div>
      </div>
      {/* <!--Section End--> */}
    </>
  )
}
