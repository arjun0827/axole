import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoogleMapAPI } from "./GoogleMapAPI";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-hero d-flex flex-column align-items-center">
        <ul className="contact-list list-unstyled d-flex text-uppercase gap-3 pt-4">
          <li className="active">
            home <HiOutlineArrowNarrowRight />
          </li>
          <li>
            contact
            <HiOutlineArrowNarrowRight />
          </li>
        </ul>
        <h1 className="display-1 fw-bold pb-4">Contact.</h1>
      </div>
      <main className="py-5 container">
        <div className="row py-5 ">
          <div className="col-12 col-md-6  bg-white p-0">
            <div className="form p-5 bg-white">
              <h2 className="fw-normal">Contact us</h2>
              <p className="pb-3">
                We're open for any suggestion or just to have a chat
              </p>

              <div className="row">
                <div className="col-4">
                  <p className="text-uppercase fw-bold text-black mb-1">
                    address:
                  </p>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="col-4">
                  <p className="text-uppercase fw-bold text-black mb-1">
                    email:
                  </p>
                  <p className="text-dark">info@yoursite.com</p>
                </div>
                <div className="col-4">
                  <p className="text-uppercase fw-bold text-black mb-1">
                    phone:
                  </p>
                  <p className="text-black">+ 1235 2355 98</p>
                </div>
              </div>
              <div className="mb-3 d-flex gap-3">
                <div className="d-flex flex-column w-50">
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Name"
                  />
                </div>
                <div className="d-flex flex-column w-50">
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="pb-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Subject"
                />
              </div>

              <div className="pb-3">
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Create a message here"
                ></textarea>
              </div>
              <div className="pb-5">
                <button className="btn bg-warning fw-bold text-uppercase ">
                  <small>send message</small>
                </button>
              </div>
              <h4 className="fw-normal">Follow us here</h4>

              <ul className="contact-list list-unstyled text-uppercase d-flex gap-3 py-3">
                <li>facebook</li>
                <li>twitter</li>
                <li>instagram</li>
                <li>dribble</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 p-0 map-section">
            <GoogleMapAPI
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
