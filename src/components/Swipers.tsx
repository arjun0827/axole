import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Swipers = () => {
  const img1 = require("../img/xperson_1.jpg.pagespeed.ic.a2MnMHMs44 (1).webp");
  const img2 = require("../img/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp");
  const img3 = require("../img/xperson_3.jpg.pagespeed.ic.Cln-jaM1jK.webp");
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          // when window width is >= 640px

          // when window width is >= 768px
          768: {
            // width: 768,

            slidesPerView: 2,
          },

          1000: {
            // width:1300,
            slidesPerView: 3,
          },
        }}
        className="mySwiper container py-5"
      >
        <SwiperSlide>
          <div className="slide_container active p-4">
            <div className="d-flex align-items-center pb-4">
              <div className="pe-3 position-relative">
                <img src={img1} alt="11" />
                <span className="d-flex justify-content-center align-items-center">
                  <FaQuoteLeft />
                </span>
              </div>
              <div className="text-uppercase pt-4">
                <h4 className="fw-bold"> roger scott</h4>
                <p className="text-warning">
                  <small>marketing manager</small>
                </p>
              </div>
            </div>
            <p className="pb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_container p-4">
            <div className="d-flex align-items-center pb-4">
              <div className="pe-3 position-relative">
                <img src={img2} alt="22" />
                <span className="d-flex justify-content-center align-items-center">
                  <FaQuoteLeft />
                </span>
              </div>
              <div className="text-uppercase pt-4">
                <h4 className="fw-bold"> roger scott</h4>
                <p className="text-warning">
                  <small>marketing manager</small>
                </p>
              </div>
            </div>
            <p className="pb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_container p-4">
            <div className="d-flex align-items-center pb-4">
              <div className="pe-3 position-relative">
                <img src={img3} alt="33" />
                <span className="d-flex justify-content-center align-items-center">
                  <FaQuoteLeft />
                </span>
              </div>
              <div className="text-uppercase pt-4">
                <h4 className="fw-bold"> roger scott</h4>
                <p className="text-warning">
                  <small>marketing manager</small>
                </p>
              </div>
            </div>
            <p className="pb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_container p-4">
            <div className="d-flex align-items-center pb-4">
              <div className="pe-3 position-relative">
                <img src={img1} alt="11" />
                <span className="d-flex justify-content-center align-items-center">
                  <FaQuoteLeft />
                </span>
              </div>
              <div className="text-uppercase pt-4">
                <h4 className="fw-bold"> roger scott</h4>
                <p className="text-warning">
                  <small>marketing manager</small>
                </p>
              </div>
            </div>
            <p className="pb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_container p-4">
            <div className="d-flex align-items-center pb-4">
              <div className="pe-3 position-relative">
                <img src={img2} alt="22" />
                <span className="d-flex justify-content-center align-items-center">
                  <FaQuoteLeft />
                </span>
              </div>
              <div className="text-uppercase pt-4">
                <h4 className="fw-bold"> roger scott</h4>
                <p className="text-warning">
                  <small>marketing manager</small>
                </p>
              </div>
            </div>
            <p className="pb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_container p-4">
            <div className="d-flex align-items-center pb-4">
              <div className="pe-3 position-relative">
                <img src={img3} alt="33" />
                <span className="d-flex justify-content-center align-items-center">
                  <FaQuoteLeft />
                </span>
              </div>
              <div className="text-uppercase pt-4">
                <h4 className="fw-bold"> roger scott</h4>
                <p className="text-warning">
                  <small>marketing manager</small>
                </p>
              </div>
            </div>
            <p className="pb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
