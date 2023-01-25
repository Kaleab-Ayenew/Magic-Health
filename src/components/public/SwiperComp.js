import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import "./swiper-comp.css";

export default () => {
  return (
    <>
      <h1>What Cutstomers are Saying</h1>
      <p>Here is what those we consulted say</p>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="my-sw-container">
            <div class="prev-btn">
              <i class="fa-solid fa-circle-chevron-left"></i>
            </div>

            <div className="sw-content">
              <div className="image">
                <img src="https://beakerhealth.com/images/home/testimonials/quinta-caylor.jpg" />
              </div>
              <div className="text">
                "Magic Health has completely changed my wellbeing. With the help
                of their amazing team I am living a life full of energy and
                vitality and feeling better than ever before. Highly recommend
                them for anyone looking for top-notch health and wellness
                advice."
                <br></br>
                <br></br>
                Ann J.
              </div>
            </div>

            <div class="next-btn">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="my-sw-container">
            <div class="prev-btn">
              <i class="fa-solid fa-circle-chevron-left"></i>
            </div>

            <div className="sw-content">
              <div className="image">
                <img src="https://beakerhealth.com/images/home/testimonials/flowers-richard.jpg" />
              </div>
              <div className="text">
                "Magic Health is the only health consultancy I trust when it
                comes to finding sound nutritional advice and healthy lifestyle
                guidance. They explain everything in an easy-to-understand way
                that makes creating my own personalised health plan so simple
                and straightforward. Best of all, their caring attitude towards
                their clients leaves me feeling taken care of every step of the
                way."
                <br></br>
                <br></br>
                Phil M.
              </div>
            </div>

            <div class="next-btn">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="my-sw-container">
            <div class="prev-btn">
              <i class="fa-solid fa-circle-chevron-left"></i>
            </div>

            <div className="sw-content">
              <div className="image">
                <img src="https://beakerhealth.com/images/home/testimonials/matt-troup.jpg" />
              </div>
              <div className="text">
                "I have been a client of Magic Health for nearly a year now and
                can honestly say they are the best in the business. Their wealth
                of knowledge is second to none and they truly listen to what you
                want out of your health plan – no more cookie cutter approaches
                with them! Highly recommended."
                <br></br>
                <br></br>
                Clarissa K.
              </div>
            </div>

            <div class="next-btn">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="my-sw-container">
            <div class="prev-btn">
              <i class="fa-solid fa-circle-chevron-left"></i>
            </div>

            <div className="sw-content">
              <div className="image">
                <img src="https://beakerhealth.com/images/home/testimonials/denise-tola-duke-university-school-of-nursing.png" />
              </div>
              <div className="text">
                "My experience with Magic Health has been top notch from start
                to finish! They always make themselves available when needed,
                answer all my questions politely, and most importantly get right
                to work on helping me achieve my health goals without wasting
                time or sitting on their hands - an attribute that is hard to
                come by these days!"
                <br></br>
                <br></br>
                Christopher T.
              </div>
            </div>

            <div class="next-btn">
              <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
