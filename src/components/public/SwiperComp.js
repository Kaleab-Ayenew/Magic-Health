import React from "react"


import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { Pagination, Navigation } from "swiper";

import "./swiper-comp.css"



export default () => {
    return (
        <>
            <h1>What Users Are Saying</h1>
            <p>Connect with other healthcare professionals engaging in your field.</p>
            <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            navigation={{nextEl:".next-btn", prevEl:".prev-btn"}}
            loop={true}
            className="mySwiper"
            >

                <SwiperSlide>
                    <div className="my-sw-container">
                        <div class="prev-btn"><i class="fa-solid fa-circle-chevron-left"></i></div>

                        <div className="sw-content">
                            <div className="image">
                                <img src="https://beakerhealth.com/images/home/testimonials/quinta-caylor.jpg"/>
                            </div>
                            <div className="text">
                            “Allowing any member to upload presentations for CE credit is incredible. This would save so much time on the administration side - I love this approach!”
                            <br></br>
                            <br></br>
                            Quinta Caylor (RN and Former Director of Nursing)
                            <br></br>
                            Stonegate
                            </div>
                        </div>

                        <div class="next-btn"><i class="fa-solid fa-circle-chevron-right"></i></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="my-sw-container">
                        <div class="prev-btn"><i class="fa-solid fa-circle-chevron-left"></i></div>

                        <div className="sw-content">
                            <div className="image">
                                <img src="https://beakerhealth.com/images/home/testimonials/flowers-richard.jpg"/>
                            </div>
                            <div className="text">
                            “It's just simple, it works, and it's engaging.”
                            <br></br>
                            <br></br>
                            Richie Flowers, DNP, CRNA, CHSE (Educational Innovator)
                            <br></br>
                            Wake Forest University
                            </div>
                        </div>

                        <div class="next-btn"><i class="fa-solid fa-circle-chevron-right"></i></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="my-sw-container">
                        <div class="prev-btn"><i class="fa-solid fa-circle-chevron-left"></i></div>

                        <div className="sw-content">
                            <div className="image">
                                <img src="https://beakerhealth.com/images/home/testimonials/matt-troup.jpg"/>
                            </div>
                            <div className="text">
                            “In an era where information is changing rapidly, Beaker Health represents the future of relevant, credible, and current education. Beaker Health makes learning from experts more accessible than ever before.”
                            <br></br>
                            <br></br>
                            Matt Troup (Physician Assistant-Certified)
                            <br></br>
                            Amita Health
                            </div>
                        </div>

                        <div class="next-btn"><i class="fa-solid fa-circle-chevron-right"></i></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="my-sw-container">
                        <div class="prev-btn"><i class="fa-solid fa-circle-chevron-left"></i></div>

                        <div className="sw-content">
                            <div className="image">
                                <img src="https://beakerhealth.com/images/home/testimonials/denise-tola-duke-university-school-of-nursing.png"/>
                            </div>
                            <div className="text">
                            “I love the ability to earn relevant and interesting CEs, as well as how simple it is to upload new ones.”
                            <br></br>
                            <br></br>
                            Denise Tola, DNP, CRNA, CHSE (Assistant Clinical Professor)
                            <br></br>
                            Duke University School of Nursing
                            </div>
                        </div>

                        <div class="next-btn"><i class="fa-solid fa-circle-chevron-right"></i></div>
                    </div>
                </SwiperSlide>
                

                
            </Swiper>
      </>
    );
  };