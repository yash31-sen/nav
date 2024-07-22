import React from 'react';
import './Hero.css';
import BgVid from '../../assets/ggits.mp4';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Hero() {
    return (
        <div className="hero">
            <div className="video-container">
                <video src={BgVid} autoPlay muted loop />
            </div>
            <div className="slider-container">
                <Swiper
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slide-content">
                            <h2 className='h2-slide1'>Think Placements Think Gyan Ganga</h2>
                            <h3 className='h3-slide2'>Take Addmission For Session 2024</h3>
                            <button className='applynow-slide1'>Apply Now
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <div className="contentSlideMain">
                                <div className="h1slide2">
                                    <h2 className='h2-slides'>Placement Highlights 2023-24</h2>
                                </div>
                                <div className="tablesSlide2">
                                    <div className="resp">
                                        <div className="td1">Companies Visited <br />100+</div>
                                        <div className="td1">Total Offeres <br /> 800+</div>
                                    </div>
                                    <div className="resp">
                                        <div className="td1">Highest CTC <br />24LPA</div>
                                        <div className="td1">High Paying Offers <br /> 230+</div>
                                    </div>
                                    <div className="resp1">
                                        <div className="td1">Average CTC <br />4LPA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <div className="contentSlideMain">
                                <div className="h1slide2">
                                    <h2 className='h2-slides'>Placement Highlights 2023-24</h2>
                                </div>
                                <div className="tablesSlide2">
                                    <div className="resp">
                                        <div className="td1">Companies Visited <br />100+</div>
                                        <div className="td1">Total Offeres <br /> 800+</div>
                                    </div>
                                    <div className="resp">
                                        <div className="td1">Highest CTC <br />24LPA</div>
                                        <div className="td1">High Paying Offers <br /> 230+</div>
                                    </div>
                                    <div className="resp1">
                                        <div className="td1">Average CTC <br />4LPA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <div className="contentSlideMain">
                                <h2 className='h2-slides'>Our Highlights</h2>
                                <div className="tablesSlide3">
                                    <div className="td2">
                                        <div className="td1">900+ <br /> Trained Faculties</div>
                                        <div className="td1">40+ <br /> Patenets*</div>
                                        <div className="td1">12+ <br /> Startups*   </div>
                                        <div className="td1">900+ <br />Placements</div>
                                        <div className="td1">8+ <br /> Academies</div>
                                    </div>
                                    <div className="td3">
                                        <div className="td1">10 <br />Acers of Campus</div>
                                        <div className="td1">15+ <br /> Chancelor Awards</div>
                                        <div className="td1">10+ <br />State Champions</div>
                                        <div className="td1">15+ <br />Study Programs</div>
                                        <div className="td1">8+ <br /> Academies</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <div className="contentSlideMain">
                                <h2 className='h2-slides'>Our Highlights</h2>
                                <div className="tablesSlide3">
                                    <div className="td2">
                                        <div className="td1">900+ <br /> Trained Faculties</div>
                                        <div className="td1">40+ <br /> Patenets*</div>
                                        <div className="td1">12+ <br /> Startups*   </div>
                                        <div className="td1">900+ <br />Placements</div>
                                        <div className="td1">8+ <br /> Academies</div>
                                    </div>
                                    <div className="td3">

                                        <div className="td1">10 <br />Acers of Campus</div>
                                        <div className="td1">15+ <br /> Chancelor Awards</div>
                                        <div className="td1">10+ <br />State Champions</div>
                                        <div className="td1">15+ <br />Study Programs</div>
                                        <div className="td1">8+ <br /> Academies</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <div className="swiper-button-next">Next</div>
        <div className="swiper-button-prev">Prev</div> */}
            </div>
        </div>
    );
}
