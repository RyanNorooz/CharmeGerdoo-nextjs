import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'

BlogDetails.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function BlogDetails() {
  return (
    <>
      {/* <!--Section Start--> */}
      <div
        className="sigma_subheader style-7 bg-cover bg-center dark-overlay"
        style={{ background: "url('/img/subheader.jpg')" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <h1>Blog Detail</h1>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="#">
                <a className="btn-link">Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog Detail
            </li>
          </ol>
        </div>
      </div>
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      <div className="section sigma_post-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="sigma_post-details-inner">
                <div className="entry-content">
                  <div className="sigma_post-details-categories">
                    <a href="#" className="sigma_post-category">
                      Leather
                    </a>
                  </div>
                  <h2 className="entry-title">
                    BEST SOLUTION FOR OPENCART ALL LEATHER PRODUCT 30% OFF
                  </h2>
                  <div className="sigma_post-details-meta">
                    <span>
                      <i className="far fa-eye"></i> 131 Views
                    </span>
                    <span>
                      <i className="far fa-comments"></i> 2 Comments
                    </span>
                    <span>
                      <i className="far fa-calendar"></i> March 12, 2021
                    </span>
                  </div>
                  <p>
                    Many tanning methods and materials exist. The typical
                    process sees tanners load the hides into a drum and immerse
                    them in a tank that contains the tanning &quot;liquor.&quot;
                    The hides soak while the drum slowly rotates about its axis,
                    and the tanning liquor slowly penetrates through the full
                    thickness of the hide. Once the process achieves even
                    penetration, workers slowly raise the liquor&apos;s pH in a
                    process called basification, which fixes the tanning
                    material to the leather. The more tanning material fixed,
                    the higher the leather&apos;s hydrothermal stability and
                    shrinkage temperature resistance.
                  </p>
                  <h5>Specializing in Discounted Leather</h5>
                  <p>
                    Crusting is a process that thins and lubricates leather. It
                    often includes a coloring operation. Chemicals added during
                    crusting must be fixed in place. Crusting culminates with a
                    drying and softening operation, and may include splitting,
                    shaving, dyeing, whitening or other methods.
                  </p>
                  <a
                    href="/img/blog-details/800x400.jpg"
                    className="gallery-thumb"
                  >
                    <img src="/img/blog-details/800x400.jpg" alt="post" />
                  </a>
                  <h4>Leather Love Minimum 30% Off</h4>
                  <p>
                    Tanning is especially polluting in countries where
                    environmental regulations are lax, such as in India, the
                    world&apos;s third-largest producer and exporter of leather.
                    To give an example of an efficient pollution prevention
                    system, chromium loads per produced tonne are generally
                    abated from 8 kg to 1.5 kg. VOC emissions are typically
                    reduced from 30 kg/t to 2 kg/t in a properly managed
                    facility.
                  </p>
                  <hr />
                  <h4>Stylish Leathers Bags For Man And Woman,s</h4>
                  <p>
                    Leather usage has come under criticism in the 20th and 21st
                    centuries by animal rights groups. These groups claim that
                    buying or wearing leather is unethical because producing
                    leather requires animals to be killed However, according to
                    the LCA report for the United Nations Industrial Development
                    Organziation, 99% of the raw hides and skins used in the
                    production of leather derive from animals raised for meat
                    and/or dairy production.
                  </p>
                  <h4>Stylish Leather Collection For Man Woman,s </h4>
                  <div className="sigma_general-list style-2">
                    <ul>
                      <li>
                        <i className="far fa-check"></i>
                        <span>Leather Shoe</span>
                      </li>
                      <li>
                        <i className="far fa-check"></i>
                        <span>Leather Bags</span>
                      </li>
                      <li>
                        <i className="far fa-check"></i>
                        <span>Leather Jackets</span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Tanning is a process that stabilizes the proteins,
                    particularly collagen, of the raw hide to increase the
                    thermal, chemical and microbiological stability of the hides
                    and skins, making it suitable for a wide variety of end
                    applications. The principal difference between raw and
                    tanned hides is that raw hides dry out to form a hard,
                    inflexible material that, when rewetted, will putrefy, while
                    tanned material dries to a flexible form that does not
                    become putrid when rewetted.
                  </p>
                  <blockquote>
                    <cite>By Hetmayar</cite>
                    <p>
                      Leather theme is an elegant powerful and fully responsive
                      OpenCart theme with modern design Specializing in
                      Discounted Leather.
                    </p>
                  </blockquote>
                  <div className="row align-items-center">
                    <div className="col-lg-5 mb-lg-30">
                      <img src="/img/blog-details/300.jpg" alt="details" />
                    </div>
                    <div className="col-lg-7">
                      <p>
                        Many tanning methods and materials exist. The typical
                        process sees tanners load the hides into a drum and
                        immerse them in a tank that contains the tanning
                        &quot;liquor.&quot; The hides soak while the drum slowly
                        rotates about its axis, and the tanning liquor slowly
                        penetrates through the full thickness of the hide. Once
                        the process achieves even penetration, workers slowly
                        raise the liquor&apos;s pH in a process called
                        basification, which fixes the tanning material to the
                        leather. The more tanning material fixed, the higher the
                        leather&apos;s hydrothermal stability and shrinkage
                        temperature resistance.
                      </p>
                    </div>
                  </div>
                  <p>
                    leather is used in wallets and belts. Stingray leather is
                    tough and durable. The leather is often dyed black and
                    covered with tiny round bumps in the natural pattern of the
                    back ridge of an animal. These bumps are then usually dyed
                    white to highlight the decoration. Stingray rawhide is also
                    used as grips on Chinese swords, Scottish basket hilted
                    swords, and Japanese katanas. Stingray leather is also used
                    for high abrasion areas in motorcycle racing leathers
                    especially in gloves, where its high abrasion resistance
                    helps prevent wear through in the event of an accident.
                  </p>
                </div>
                {/* <!-- Post Meta Start --> */}
                <div className="sigma_post-details-meta">
                  <div className="sigma_post-details-meta-item">
                    <h5>Tags</h5>
                    <div className="tagcloud">
                      <a href="#">shopping</a>
                      <a href="#">leatherboots</a>
                      <a href="#">handbags</a>
                    </div>
                  </div>
                  <div className="sigma_post-details-meta-item sigma_post-share">
                    <h5>Share</h5>
                    <ul className="sigma_sm">
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
                </div>
                {/* <!-- Post Meta End --> */}
                {/* <!-- Related Posts Start --> */}
                <div className="section section-padding sigma_related-posts">
                  <h3>Related Posts</h3>
                  <div className="row">
                    {/* <!-- Article Start --> */}
                    <div className="col-md-6">
                      <article className="sigma_post style-1">
                        <div className="sigma_post-thumb">
                          <Link href="/blog-details">
                            <a>
                              <img
                                src="/img/blog-details/350x300.jpg"
                                alt="img"
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="sigma_post-body">
                          <div className="sigma_post-meta">
                            <ul>
                              <li>
                                <a href="#">Mark Otto</a>
                              </li>
                              <li>
                                <a href="#">Leather </a>
                              </li>
                            </ul>
                            <Link href="/blog-details">
                              <a className="sigma_post-date">
                                24 <br />
                                Apr
                              </a>
                            </Link>
                          </div>
                          <div className="sigma_post-content">
                            <h5>
                              <Link href="/blog-details">
                                <a>
                                  Tips For The Best Leather Boots In The City
                                </a>
                              </Link>
                            </h5>
                            <p className="m-0">
                              Leather is a durable and flexible material created
                              by tanning animal rawhide and skins. The most
                              common raw material .
                            </p>
                            <Link href="/blog-details">
                              <a className="btn-link">
                                Read More
                                <i className="far fa-angle-right"></i>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* <!-- Article End --> */}
                    {/* <!-- Article Start --> */}
                    <div className="col-md-6">
                      <article className="sigma_post style-1">
                        <div className="sigma_post-thumb">
                          <Link href="/blog-details">
                            <a>
                              <img
                                src="/img/blog-details/350x300-0.jpg"
                                alt="img"
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="sigma_post-body">
                          <div className="sigma_post-meta">
                            <ul>
                              <li>
                                <a href="#">John Edward</a>
                              </li>
                              <li>
                                <a href="#">Leather </a>
                              </li>
                            </ul>
                            <Link href="/blog-details">
                              <a className="sigma_post-date">
                                12 <br />
                                Jan
                              </a>
                            </Link>
                          </div>
                          <div className="sigma_post-content">
                            <h5>
                              <Link href="/blog-details">
                                <a>
                                  Dealing In Diffrent Types Of Leather Products
                                </a>
                              </Link>
                            </h5>
                            <p className="m-0">
                              Leather is a durable and flexible material created
                              by tanning animal rawhide and skins. The most
                              common raw material .
                            </p>
                            <Link href="/blog-details">
                              <a className="btn-link">
                                Read More
                                <i className="far fa-angle-right"></i>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* <!-- Article End --> */}
                  </div>
                </div>
                {/* <!-- Related Posts End --> */}
                <div className="sigma_single-pagination">
                  <div className="sigma_single-pagination-item sigma_single-pagination-prev">
                    <a href="#">
                      <div className="sigma_single-pagination-thumb">
                        <img src="/img/blog-details/50.jpg" alt="img" />
                      </div>
                      <div className="sigma_single-pagination-content">
                        <span>Prev Post</span>
                        <h6>Tips for the Best Leather Shop</h6>
                      </div>
                      <i className="far fa-chevron-left"></i>
                    </a>
                  </div>
                  <div className="sigma_single-pagination-item sigma_single-pagination-next">
                    <a href="#">
                      <div className="sigma_single-pagination-thumb">
                        <img src="/img/blog-details/50-0.jpg" alt="img" />
                      </div>
                      <div className="sigma_single-pagination-content">
                        <span>Next Post</span>
                        <h6>Five Places to Visit today</h6>
                      </div>
                      <i className="far fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
                {/* <!-- About Author Start --> */}
                <div className="section pb-0">
                  <div className="sigma_author-about">
                    <img src="/img/blog-details/150.jpg" alt="author" />
                    <div className="sigma_author-about-content">
                      <span>Written By</span>
                      <h3>Rosalina D. William</h3>
                      <p>
                        Leather is a durable and flexible material created by
                        tanning animal rawhide and skins. The most common raw
                        material is cattle hide. It can be produced at
                        manufacturing scales ranging from artisan to modern
                        industrial scale.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- About Author End --> */}
                {/* <!-- Comments Start --> */}
                <div className="section pb-0">
                  <h3>03 Comments</h3>
                  <div className="comments-list">
                    <ul>
                      <li className="comment-item">
                        <img
                          src="/img/blog-details/150-0.jpg"
                          alt="comment author"
                        />
                        <div className="comment-body">
                          <h5>Robert John</h5>
                          <span>
                            <i className="far fa-clock"></i> January 13 2021
                          </span>
                          <p>
                            Leather is used to make a variety of articles,
                            including footwear, automobile seats, clothing,
                            bags, book bindings, fashion accessories, and
                            furniture. It is produced in a wide variety of types
                            and styles and decorated by a wide range of
                            techniques.
                          </p>
                          <a href="#" className="btn-link">
                            Reply <i className="far fa-reply"></i>
                          </a>
                        </div>
                      </li>
                      <li className="comment-item">
                        <img
                          src="/img/blog-details/150-1.jpg"
                          alt="comment author"
                        />
                        <div className="comment-body">
                          <h5>Christine Hill</h5>
                          <span>
                            <i className="far fa-clock"></i> December 27 2021
                          </span>
                          <p>
                            Leather usage has come under criticism in the 20th
                            and 21st centuries by animal rights groups. These
                            groups claim that buying or wearing leather is
                            unethical because producing leather requires animals
                            to be killed.
                          </p>
                          <a href="#" className="btn-link">
                            Reply <i className="far fa-reply"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section pb-0">
                  <h3>Leave a Comment</h3>
                  <div className="comment-form">
                    <form method="post">
                      <div className="form-group">
                        <i className="far fa-user custom-primary"></i>
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="form-control"
                          name="fname"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <i className="far fa-envelope custom-primary"></i>
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="form-control"
                          name="email"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <i className="far fa-globe custom-primary"></i>
                        <input
                          type="text"
                          placeholder="Website"
                          className="form-control"
                          name="website"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Enter your Message"
                          name="comment"
                          rows={7}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="sigma_btn-custom"
                        name="button"
                      >
                        Post Comment <i className="far fa-comments"></i>
                      </button>
                    </form>
                  </div>
                </div>
                {/* <!-- Comments End --> */}
              </div>
            </div>
            {/* <!-- Sidebar Start --> */}
            <div className="col-lg-4">
              <div className="sidebar mt-5 mt-lg-0">
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
                    <Link href="/blog-details">
                      <a className="recent-post-image">
                        <img src="/img/blog-details/80x80.jpg" alt="img" />
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
                        <img src="/img/blog-details/80x80-0.jpg" alt="img" />
                        <span>9</span>
                      </a>
                    </Link>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="/blog-details">
                          <a>
                            This is a test Fire Origional Leather Will Not Burn
                          </a>
                        </Link>
                      </h6>
                      <Link href="/blog-details">
                        <a className="date">
                          <i className="far fa-clock mr-2"></i>
                          March 19, 2021
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="sigma_recent-post">
                    <Link href="/blog-details">
                      <a className="recent-post-image">
                        <img src="/img/blog-details/80x80-1.jpg" alt="img" />
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
                          November 12, 2021
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
                {/* <!-- Recent Posts Widget --> */}
                <div className="widget widget-sigma-recent-posts style-2">
                  <h5 className="widget-title">Recommended</h5>
                  <div className="sigma_recent-post">
                    <Link href="/blog-details">
                      <a className="recent-post-image">
                        <img src="/img/blog-details/325x150.jpg" alt="img" />
                      </a>
                    </Link>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="/blog-details">
                          <a>
                            Leather theme is an elegant powerful and fully
                            responsive
                          </a>
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
                        <img src="/img/blog-details/325x150-0.jpg" alt="img" />
                      </a>
                    </Link>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="/blog-details">
                          <a>We are the champions Of The Leather Industry</a>
                        </Link>
                      </h6>
                      <Link href="/blog-details">
                        <a className="date">
                          <i className="far fa-clock mr-2"></i>
                          March 19, 2021
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- Recent Posts Widget --> */}
                <div className="widget widget-sigma-recent-posts style-3">
                  <h5 className="widget-title">Recent Post</h5>
                  <div className="sigma_recent-post">
                    <div className="sigma_post-categories">
                      <a href="#">Leather </a>
                    </div>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="/blog-details">
                          <a>
                            Every Next Level Of Machinery Leather Work We Have
                          </a>
                        </Link>
                      </h6>
                      <div className="author-info d-flex align-items-center">
                        <span>TA</span>
                        <div>
                          <Link href="#">
                            <a className="author-name">Tim Abell</a>
                          </Link>
                          <Link href="/blog-details">
                            <a className="date">June 4, 2021</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sigma_recent-post">
                    <div className="sigma_post-categories">
                      <a href="#">Leather </a>
                    </div>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="/blog-details">
                          <a>We are the champions, we do not give up, we try</a>
                        </Link>
                      </h6>
                      <div className="author-info d-flex align-items-center">
                        <span>TA</span>
                        <div>
                          <Link href="#">
                            <a className="author-name">John Henry</a>
                          </Link>
                          <Link href="/blog-details">
                            <a className="date">April 7, 2021</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sigma_recent-post">
                    <div className="sigma_post-categories">
                      <a href="#">Leather </a>
                    </div>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="/blog-details">
                          <a>
                            Just believe in yourself, you are truly worth it.
                          </a>
                        </Link>
                      </h6>
                      <div className="author-info d-flex align-items-center">
                        <span>TA</span>
                        <div>
                          <Link href="#">
                            <a className="author-name">Tim Cook</a>
                          </Link>
                          <Link href="/blog-details">
                            <a className="date">June 24, 2021</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Tags Widget --> */}
                <div className="widget tagcloud">
                  <h5 className="widget-title">Popular Tags</h5>
                  <Link href="#">
                    <a>Leather</a>
                  </Link>
                  <Link href="#">
                    <a>Duffle Bags</a>
                  </Link>
                  <Link href="#">
                    <a>Footwear</a>
                  </Link>
                  <Link href="#">
                    <a>Leather Kits</a>
                  </Link>
                  <Link href="#">
                    <a>Leather Shoes</a>
                  </Link>
                </div>
                {/* <!-- Follow Widget --> */}
                <div className="widget widget-follow">
                  <h5 className="widget-title">Follow Us</h5>
                  <div className="social-buttons">
                    <Link href="#">
                      <a className="btn-block sigma_btn">
                        <div className="follow-icon d-flex align-items-center">
                          <i className="fab fa-instagram"></i>
                          <p className="mb-0">
                            Instagram
                            <span>225.5k Followers</span>
                          </p>
                        </div>
                        <i className="fal fa-chevron-right"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="btn-block sigma_btn">
                        <div className="follow-icon d-flex align-items-center">
                          <i className="fab fa-twitter"></i>
                          <p className="mb-0">
                            Twitter
                            <span>225.5k Followers</span>
                          </p>
                        </div>
                        <i className="fal fa-chevron-right"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="btn-block sigma_btn">
                        <div className="follow-icon d-flex align-items-center">
                          <i className="fab fa-facebook-f"></i>
                          <p className="mb-0">
                            Facebook
                            <span>225.5k Followers</span>
                          </p>
                        </div>
                        <i className="fal fa-chevron-right"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="btn-block sigma_btn">
                        <div className="follow-icon d-flex align-items-center">
                          <i className="fab fa-youtube"></i>
                          <p className="mb-0">
                            Youtube
                            <span>225.5k Followers</span>
                          </p>
                        </div>
                        <i className="fal fa-chevron-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                {/* <!-- Insta Widget --> */}
                {/* <!-- Insta Widget --> */}
                <div className="widget widget-instagram">
                  <h5 className="widget-title">Instagram Feed</h5>
                  <div
                    className="sigma_instagram insta-images"
                    id="test"
                    data-username="slidesigma"
                    data-items="9"
                    data-items_per_row="3"
                  ></div>
                </div>
                {/* <!-- Recent Post Widget --> */}
                <div className="widget widget-sigma-recent-posts style-4">
                  <h5 className="widget-title">Recent Comments</h5>
                  <div className="sigma_recent-post align-items-start">
                    <Link href="#">
                      <a className="recent-post-image">
                        <i className="fal fa-comment-alt-dots"></i>
                      </a>
                    </Link>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="#">
                          <a>
                            <span>Tim Abell On</span> BEST SOLUTION FOR OPENCART
                            ALL LEATHER PRODUCT 30% OFF
                          </a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="sigma_recent-post align-items-start">
                    <Link href="#">
                      <a className="recent-post-image">
                        <i className="fal fa-comment-alt-dots"></i>
                      </a>
                    </Link>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="#">
                          <a>
                            <span>Andrew Simon On</span> LEATHER LOVE MINIMUM
                            30% OFF ON BELTS & WALLETS
                          </a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="sigma_recent-post align-items-start">
                    <Link href="#">
                      <a className="recent-post-image">
                        <i className="fal fa-comment-alt-dots"></i>
                      </a>
                    </Link>
                    <div className="recent-post-descr">
                      <h6>
                        <Link href="#">
                          <a>
                            <span>Tim Abell On</span> CREATE A MODERN LOOKING
                            WEBSITE FOR ANY LEATHER ACCESSORIES
                          </a>
                        </Link>
                      </h6>
                    </div>
                  </div>
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
