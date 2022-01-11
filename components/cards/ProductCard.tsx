import Link from 'next/link'
import type { Product } from '@/lib/product'

interface Props {
  product: Product
}

const dummyProduct: Product = {
  id: '1',
  thumbnail: '/img/home-2/500-4.jpg',
  title: 'عنوان کالا',
  price: 50000,
  likes: 1200,
  description: 'توضیحات بیشتر درباره کیفیت محصول، متریال و ...',
}

export default function ProductCard(props: Props) {
  props.product ?? (props = { ...props, product: dummyProduct })

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="sigma_product style-5">
        <div className="sigma_product-thumb">
          <img src={props.product.thumbnail} alt={props.product.title} />

          <a href="#" data-toggle="modal" data-target="#quickViewModal">
            Quick View
          </a>
        </div>

        <div className="sigma_product-body">
          <h5 className="sigma_product-title">
            <Link href="/product-details">
              <a>{props.product.title}</a>
            </Link>
          </h5>

          <div className="sigma_product-price">
            <span id="product-price">{props.product.price} تومان</span>
            {/* <span id="product-price-before-discount">49$</span> */}
          </div>

          <div className="sigma_rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>

          <p>{props.product.description}</p>
        </div>

        <div className="sigma_product-footer">
          <a
            href="#"
            className="sigma_btn btn-sm light"
            data-toggle="tooltip"
            title="Wishlist"
          >
            <i className="m-0 far fa-heart" />
          </a>

          <a href="#" className="sigma_btn btn-sm">
            Add to Cart
          </a>

          <a
            href="#"
            className="sigma_btn btn-sm light"
            data-toggle="tooltip"
            title="Compare"
          >
            <i className="m-0 far fa-signal-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
