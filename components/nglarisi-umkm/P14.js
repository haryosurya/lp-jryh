import React from 'react';
import Link from 'next/link';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.min.css'

const P14 = () => {
    const params = {
        slidesPerView : 1,
        loop: true,
        speed: 1000,
        // spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        // Responsive breakpoints
        breakpoints: {
            1499:{
                slidesPerView : 2
            },

            991:{
                slidesPerView : 2
            },

            767:{
                slidesPerView : 2

            },

            575:{
                slidesPerView : 1
            }
        }
        }
    return (

        <section className="" id="blog">
            <img src="/images/shapes/blog-shape-1-1.png" alt="" className="blog-one__shape-1"/>
                <div className="container">
                    <div className="block-title text-center">
                        <span className="block-title__bubbles"></span>
                        <h2>Siapa yang akan kita bantu?</h2>
                    </div>
                    <div className="col">
                        <Swiper {...params}>
                           
                            <div className="box">
                                <div className="wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="blog-one__single">
                                        <div className="blog-one__image">
                                            <img src="/images/blog/blog-1-1.jpg" alt=""/>
                                        </div>

                                        <div className="blog-one__content">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                                <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Pre and post launch mobile app marketing
                                                        pitfalls to avoid
                                                    </a>
                                                </Link>
                                            </h3>
                                            <Link href="/blog-details">
                                            <a className="blog-one__link"><i
                                                className="zimed-icon-right-arrow"></i></a>
                                            </Link>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="box">
                                <div className="wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="blog-one__single">
                                        <div className="blog-one__image">
                                            <img src="/images/blog/blog-1-1.jpg" alt=""/>
                                        </div>

                                        <div className="blog-one__content">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                                <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Pre and post launch mobile app marketing
                                                        pitfalls to avoid
                                                    </a>
                                                </Link>
                                            </h3>
                                            <Link href="/blog-details">
                                            <a className="blog-one__link"><i
                                                className="zimed-icon-right-arrow"></i></a>
                                            </Link>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="box">
                                <div className="wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="blog-one__single">
                                        <div className="blog-one__image">
                                            <img src="/images/blog/blog-1-1.jpg" alt=""/>
                                        </div>

                                        <div className="blog-one__content">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                                <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Pre and post launch mobile app marketing
                                                        pitfalls to avoid
                                                    </a>
                                                </Link>
                                            </h3>
                                            <Link href="/blog-details">
                                            <a className="blog-one__link"><i
                                                className="zimed-icon-right-arrow"></i></a>
                                            </Link>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="box">
                                <div className="wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="blog-one__single">
                                        <div className="blog-one__image">
                                            <img src="/images/blog/blog-1-1.jpg" alt=""/>
                                        </div>

                                        <div className="blog-one__content">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li><a href="#"><i className="far fa-clock"></i> 20 Feb</a></li>
                                                <li><a href="#"><i className="far fa-comments"></i> 2 Comments</a></li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Pre and post launch mobile app marketing
                                                        pitfalls to avoid
                                                    </a>
                                                </Link>
                                            </h3>
                                            <Link href="/blog-details">
                                            <a className="blog-one__link"><i
                                                className="zimed-icon-right-arrow"></i></a>
                                            </Link>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            
                            
                        
                        </Swiper>
                        

                        
                    </div>
                </div>
        </section>
    )
}
export default P14;