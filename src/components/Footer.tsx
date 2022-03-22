import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMap,
  FaPhoneAlt,
  FaPaperPlane
} from "react-icons/fa";
import RecentPost from "./RecentPost";

const Footer = () => {
    const img1 = require('../img/img1.webp');
    const img2 = require('../img/img2.webp');
    const img3 = require('../img/img4.webp');
  return (
    <footer className="py-5 my-4 container-fluid container-md">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <h5 className="fw-bold pb-5">AXOLE.</h5>
          <p className="pb-3">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="social-icons ">
            <span className="rounded me-2 ">
              <FaTwitter fontSize={20} color="white" />
            </span>
            <span className="rounded me-2">
              <FaFacebookF fontSize={20} color="white" />
            </span>
            <span className="rounded me-2">
              <FaInstagram fontSize={20} color="white" />
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <h6 className="text-uppercase fw-bold pt-5 pt-md-0 ps-0 ps-md-5 pb-4">explore</h6>
          <ul className="explore-list list-unstyled text-secondary ">
            <li className="pb-3">About</li>
            <li className="pb-3">Blog</li>
            <li className="pb-3">Contact us</li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
        <h6 className="text-uppercase fw-bold pb-4">recent posts</h6>
          <RecentPost image={img1} alt="first"/>
          <RecentPost image={img2} alt="first"/>
          <RecentPost image={img3} alt="first"/>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <h6 className="text-uppercase fw-bold pb-4">have a questions?</h6>

          <ul className="list-unstyled ">
            <li className="d-flex"><span className="pe-4"><FaMap /></span> 203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li className="pt-3"><span className="pe-4"><FaPhoneAlt /></span> +2 392 3929 210</li>
            <li className="pt-4"><span className="pe-4"><FaPaperPlane /></span> info@yourdomain.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
