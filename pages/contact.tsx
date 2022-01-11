import DefaultLayout from '@/components/DefaultLayout'

Contact.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function Contact() {
  return (
    <>
      {/* <!--Section Start--> */}
      <div
        className="sigma_subheader style-7 bg-cover bg-center dark-overlay"
        style={{ background: "url('/img/subheader.jpg')" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <h1>Contact Us</h1>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </div>
      </div>
      {/* <!--Section End--> */}
      {/* <!--Section Start--> */}
      <div
        className="section sigma_contact extra-padding bg-cover bg-center dark-overlay"
        style={{ background: "url('assets/img/contact-us/contact-bg.jpg')" }}
      >
        <div className="container">
          <div className="section-title centered">
            <h3 className="title text-white">
              Contact <span className="primary-color">Us</span>
            </h3>
            <p className="text-white">
              Leather is a durable and flexible material created by tanning
              animal rawhide and skins. The most common raw material is cattle
              hide.
            </p>
          </div>
        </div>
      </div>
      <div className="sigma_contact-map is-absolute">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.292292615201654!3d48.85837360866272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1571115084828!5m2!1sen!2sin"
                height="400"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sigma_form style-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <form
                  className="mf_form_validate ajax_submit"
                  action="sendmail.php"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Phone no.</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button type="button">US</button>
                          </div>
                          <input type="number" name="phone" placeholder="+1" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Leave Your Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit">Send Message</button>
                      <div className="server_response w-100"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Section End--> */}
    </>
  )
}
